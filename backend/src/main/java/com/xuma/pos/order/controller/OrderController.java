package com.xuma.pos.order.controller;

import com.xuma.pos.auth.security.CurrentUser;
import com.xuma.pos.auth.security.UserPrincipal;
import com.xuma.pos.common.api.ApiResponse;
import com.xuma.pos.order.dto.CreateOrderRequest;
import com.xuma.pos.order.dto.OrderResponse;
import com.xuma.pos.order.dto.UpdateOrderStatusRequest;
import com.xuma.pos.order.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    
    private final OrderService orderService;

    @PostMapping
    @PreAuthorize("hasAuthority('order:create')")
    public ApiResponse<OrderResponse> createOrder(@Valid @RequestBody CreateOrderRequest request, 
                                                  @CurrentUser UserPrincipal currentUser) {
        OrderResponse response = orderService.createOrder(request, currentUser.getId());
        return ApiResponse.ok(response);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('order:read')")
    public ApiResponse<OrderResponse> getOrder(@PathVariable Long id) {
        return ApiResponse.ok(orderService.getOrder(id));
    }

    @PatchMapping("/{id}/status")
    @PreAuthorize("hasAuthority('order:update')")
    public ApiResponse<OrderResponse> updateOrderStatus(@PathVariable Long id, 
                                                        @Valid @RequestBody UpdateOrderStatusRequest request) {
        return ApiResponse.ok(orderService.updateOrderStatus(id, request.getStatus()));
    }
}
