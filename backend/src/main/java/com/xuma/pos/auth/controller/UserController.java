package com.xuma.pos.auth.controller;

import com.xuma.pos.auth.dto.UpdateUserRolesRequest;
import com.xuma.pos.auth.dto.UpdateUserStatusRequest;
import com.xuma.pos.auth.dto.UserResponse;
import com.xuma.pos.auth.service.UserService;
import com.xuma.pos.common.api.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    @PreAuthorize("hasAuthority('system:config')")
    public ApiResponse<List<UserResponse>> getAllUsers() {
        return ApiResponse.ok(userService.getAllUsers());
    }

    @PatchMapping("/{id}/roles")
    @PreAuthorize("hasAuthority('system:config')")
    public ApiResponse<UserResponse> updateUserRoles(@PathVariable Long id, @Valid @RequestBody UpdateUserRolesRequest request) {
        return ApiResponse.ok(userService.updateUserRoles(id, request));
    }

    @PatchMapping("/{id}/status")
    @PreAuthorize("hasAuthority('system:config')")
    public ApiResponse<UserResponse> updateUserStatus(@PathVariable Long id, @Valid @RequestBody UpdateUserStatusRequest request) {
        return ApiResponse.ok(userService.updateUserStatus(id, request));
    }
}
