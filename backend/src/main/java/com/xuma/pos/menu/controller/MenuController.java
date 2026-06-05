package com.xuma.pos.menu.controller;

import com.xuma.pos.common.api.ApiResponse;
import com.xuma.pos.menu.dto.CreateMenuItemRequest;
import com.xuma.pos.menu.dto.MenuItemResponse;
import com.xuma.pos.menu.dto.UpdateMenuItemRequest;
import com.xuma.pos.menu.service.MenuService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MenuController {
    
    private final MenuService menuService;

    // --- Public Endpoints ---
    
    @GetMapping("/api/menu")
    public ApiResponse<List<MenuItemResponse>> getFullMenu() {
        return ApiResponse.ok(menuService.getFullAvailableMenu());
    }

    @GetMapping("/api/menu/featured")
    public ApiResponse<List<MenuItemResponse>> getFeaturedMenu() {
        return ApiResponse.ok(menuService.getFeaturedMenu());
    }

    // --- Admin Endpoints ---

    @GetMapping("/api/admin/menu/items")
    @PreAuthorize("hasAuthority('menu:write')")
    public ApiResponse<List<MenuItemResponse>> getAllMenuItemsAdmin() {
        return ApiResponse.ok(menuService.getAllMenuItemsAdmin());
    }

    @PostMapping("/api/admin/menu/items")
    @PreAuthorize("hasAuthority('menu:write')")
    public ApiResponse<MenuItemResponse> createMenuItem(@Valid @RequestBody CreateMenuItemRequest request) {
        return ApiResponse.ok(menuService.createMenuItem(request));
    }

    @PutMapping("/api/admin/menu/items/{id}")
    @PreAuthorize("hasAuthority('menu:write')")
    public ApiResponse<MenuItemResponse> updateMenuItem(@PathVariable Long id, @Valid @RequestBody UpdateMenuItemRequest request) {
        return ApiResponse.ok(menuService.updateMenuItem(id, request));
    }

    @PatchMapping("/api/admin/menu/items/{id}/availability")
    @PreAuthorize("hasAuthority('menu:write')")
    public ApiResponse<Void> toggleAvailability(@PathVariable Long id) {
        menuService.toggleAvailability(id);
        return ApiResponse.ok(null, "Availability updated");
    }

    @DeleteMapping("/api/admin/menu/items/{id}")
    @PreAuthorize("hasAuthority('menu:write')")
    public ApiResponse<Void> deleteMenuItem(@PathVariable Long id) {
        menuService.deleteMenuItem(id);
        return ApiResponse.ok(null, "Menu item soft deleted");
    }
}
