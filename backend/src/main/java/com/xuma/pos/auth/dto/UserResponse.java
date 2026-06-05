package com.xuma.pos.auth.dto;

import com.xuma.pos.auth.entity.User;
import lombok.Builder;
import lombok.Data;

import java.util.Set;
import java.util.stream.Collectors;

@Data
@Builder
public class UserResponse {
    private Long id;
    private String email;
    private String fullName;
    private Set<String> roles;
    private Set<String> permissions;

    public static UserResponse from(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .fullName(user.getFullName())
                .roles(user.getRoles().stream().map(r -> r.getName()).collect(Collectors.toSet()))
                .permissions(user.permissionNames())
                .build();
    }
}
