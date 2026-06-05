package com.xuma.pos.auth.controller;

import com.xuma.pos.common.api.ApiResponse;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminPingController {

    @GetMapping("/ping")
    @PreAuthorize("hasAuthority('system:config')")
    public ApiResponse<String> ping() {
        return ApiResponse.ok("pong from admin");
    }
}
