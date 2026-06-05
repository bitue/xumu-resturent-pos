package com.xuma.pos.auth.service;

import com.xuma.pos.auth.dto.LoginRequest;
import com.xuma.pos.auth.dto.RegisterRequest;
import com.xuma.pos.auth.dto.TokenResponse;
import com.xuma.pos.auth.entity.RefreshToken;
import com.xuma.pos.auth.entity.Role;
import com.xuma.pos.auth.entity.User;
import com.xuma.pos.auth.repository.RefreshTokenRepository;
import com.xuma.pos.auth.repository.RoleRepository;
import com.xuma.pos.auth.repository.UserRepository;
import com.xuma.pos.auth.security.JwtService;
import com.xuma.pos.common.exception.BusinessException;
import com.xuma.pos.common.exception.ConflictException;
import com.xuma.pos.common.exception.NotFoundException;
import com.xuma.pos.common.exception.UnauthorizedException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Transactional
    public TokenResponse register(RegisterRequest request) {
        if (userRepository.existsByEmailIgnoreCase(request.getEmail())) {
            throw new ConflictException("Email already in use");
        }

        Role customerRole = roleRepository.findByName("CUSTOMER")
                .orElseThrow(() -> new NotFoundException("Default role not found"));

        User user = User.builder()
                .email(request.getEmail().toLowerCase())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .fullName(request.getFullName())
                .phone(request.getPhone())
                .roles(Set.of(customerRole))
                .build();

        user = userRepository.save(user);

        return issueTokens(user, UUID.randomUUID(), "unknown", "unknown");
    }

    @Transactional
    public TokenResponse login(LoginRequest request, String userAgent, String ip) {
        User user = userRepository.findByEmailIgnoreCase(request.getEmail())
                .orElseThrow(() -> new UnauthorizedException("Invalid credentials"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            throw new UnauthorizedException("Invalid credentials");
        }

        if (!user.isEnabled()) {
            throw new UnauthorizedException("Account is disabled");
        }

        return issueTokens(user, UUID.randomUUID(), userAgent, ip);
    }

    @Transactional
    public TokenResponse refresh(String presentedToken, String userAgent, String ip) {
        String hash = sha256(presentedToken);
        RefreshToken existing = refreshTokenRepository.findByTokenHash(hash)
                .orElseThrow(() -> new UnauthorizedException("Invalid refresh token"));

        if (existing.isRevoked()) {
            refreshTokenRepository.revokeFamily(existing.getFamilyId());
            throw new UnauthorizedException("Refresh token reuse detected. Please log in again.");
        }

        if (existing.getExpiresAt().isBefore(Instant.now())) {
            throw new UnauthorizedException("Refresh token expired");
        }

        existing.setRevoked(true);
        refreshTokenRepository.save(existing);

        User user = existing.getUser();
        if (!user.isEnabled()) {
            throw new UnauthorizedException("Account is disabled");
        }

        return issueTokens(user, existing.getFamilyId(), userAgent, ip);
    }

    private TokenResponse issueTokens(User user, UUID familyId, String userAgent, String ip) {
        String accessToken = jwtService.generateAccessToken(user.getId(), user.getEmail(), user.permissionNames());
        
        String rawRefreshToken = UUID.randomUUID().toString() + "-" + UUID.randomUUID().toString();
        String hash = sha256(rawRefreshToken);

        RefreshToken refreshToken = RefreshToken.builder()
                .tokenHash(hash)
                .user(user)
                .familyId(familyId)
                .expiresAt(Instant.now().plus(7, ChronoUnit.DAYS))
                .userAgent(userAgent)
                .ip(ip)
                .build();

        refreshTokenRepository.save(refreshToken);

        return new TokenResponse(accessToken, rawRefreshToken);
    }

    private String sha256(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(input.getBytes(StandardCharsets.UTF_8));
            return Base64.getEncoder().encodeToString(hash);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
}
