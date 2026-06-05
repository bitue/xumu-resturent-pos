package com.xuma.pos.auth.service;

import com.xuma.pos.auth.dto.UpdateUserRolesRequest;
import com.xuma.pos.auth.dto.UpdateUserStatusRequest;
import com.xuma.pos.auth.dto.UserResponse;
import com.xuma.pos.auth.entity.Role;
import com.xuma.pos.auth.entity.User;
import com.xuma.pos.auth.repository.RoleRepository;
import com.xuma.pos.auth.repository.UserRepository;
import com.xuma.pos.common.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Transactional(readOnly = true)
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream()
                .map(UserResponse::from)
                .collect(Collectors.toList());
    }

    @Transactional
    public UserResponse updateUserRoles(Long id, UpdateUserRolesRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User not found"));

        Set<Role> roles = request.getRoles().stream()
                .map(roleName -> roleRepository.findByName(roleName)
                        .orElseThrow(() -> new NotFoundException("Role not found: " + roleName)))
                .collect(Collectors.toSet());

        user.setRoles(roles);
        return UserResponse.from(userRepository.save(user));
    }

    @Transactional
    public UserResponse updateUserStatus(Long id, UpdateUserStatusRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User not found"));

        user.setEnabled(request.getEnabled());
        return UserResponse.from(userRepository.save(user));
    }
}
