package com.xuma.pos.auth.controller;

import com.xuma.pos.auth.dto.*;
import com.xuma.pos.auth.entity.User;
import com.xuma.pos.auth.repository.UserRepository;
import com.xuma.pos.auth.security.CurrentUser;
import com.xuma.pos.auth.security.UserPrincipal;
import com.xuma.pos.auth.service.AuthService;
import com.xuma.pos.common.api.ApiResponse;
import com.xuma.pos.common.exception.NotFoundException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final UserRepository userRepository;

    @PostMapping("/register")
    public ApiResponse<TokenResponse> register(@Valid @RequestBody RegisterRequest request, HttpServletResponse response, HttpServletRequest req) {
        TokenResponse tokens = authService.register(request);
        setCookie(response, tokens.getAccessToken());
        return ApiResponse.ok(tokens);
    }

    @PostMapping("/login")
    public ApiResponse<TokenResponse> login(@Valid @RequestBody LoginRequest request, HttpServletResponse response, HttpServletRequest req) {
        TokenResponse tokens = authService.login(request, req.getHeader("User-Agent"), req.getRemoteAddr());
        setCookie(response, tokens.getAccessToken());
        return ApiResponse.ok(tokens);
    }

    @PostMapping("/refresh")
    public ApiResponse<TokenResponse> refresh(@RequestBody RefreshRequest request, HttpServletResponse response, HttpServletRequest req) {
        TokenResponse tokens = authService.refresh(request.getRefreshToken(), req.getHeader("User-Agent"), req.getRemoteAddr());
        setCookie(response, tokens.getAccessToken());
        return ApiResponse.ok(tokens);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("xuma_at", null);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/me")
    public ApiResponse<UserResponse> getCurrentUser(@CurrentUser UserPrincipal principal) {
        User user = userRepository.findById(principal.getId())
                .orElseThrow(() -> new NotFoundException("User not found"));
        return ApiResponse.ok(UserResponse.from(user));
    }

    private void setCookie(HttpServletResponse response, String token) {
        Cookie cookie = new Cookie("xuma_at", token);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(15 * 60); // 15 mins
        response.addCookie(cookie);
    }
}
