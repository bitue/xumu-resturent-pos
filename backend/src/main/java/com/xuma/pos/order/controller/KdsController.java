package com.xuma.pos.order.controller;

import com.xuma.pos.common.api.ApiResponse;
import com.xuma.pos.order.dto.KdsItemResponse;
import com.xuma.pos.order.dto.UpdateOrderItemStatusRequest;
import com.xuma.pos.order.service.KdsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/kds")
@RequiredArgsConstructor
public class KdsController {
    private final KdsService kdsService;

    @GetMapping("/active")
    @PreAuthorize("hasAnyRole('KITCHEN', 'MANAGER', 'ADMIN')")
    public ResponseEntity<ApiResponse<List<KdsItemResponse>>> getActiveItems() {
        return ResponseEntity.ok(ApiResponse.ok(kdsService.getActiveItems()));
    }

    @PatchMapping("/items/{itemId}/status")
    @PreAuthorize("hasAnyRole('KITCHEN', 'MANAGER', 'ADMIN')")
    public ResponseEntity<ApiResponse<KdsItemResponse>> updateItemStatus(
            @PathVariable Long itemId,
            @Valid @RequestBody UpdateOrderItemStatusRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(kdsService.updateItemStatus(itemId, request.getStatus())));
    }
}
