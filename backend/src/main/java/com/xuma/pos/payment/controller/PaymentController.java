package com.xuma.pos.payment.controller;

import com.xuma.pos.common.api.ApiResponse;
import com.xuma.pos.payment.dto.PaymentRequest;
import com.xuma.pos.payment.dto.PaymentResponse;
import com.xuma.pos.payment.service.PaymentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders/{orderId}/payments")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping
    @PreAuthorize("hasRole('CASHIER') or hasRole('MANAGER') or hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<PaymentResponse>> processPayment(
            @PathVariable Long orderId,
            @Valid @RequestBody PaymentRequest request) {
        PaymentResponse response = paymentService.processPayment(orderId, request);
        return ResponseEntity.ok(ApiResponse.ok(response));
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('WAITER', 'CASHIER', 'MANAGER', 'ADMIN')")
    public ResponseEntity<ApiResponse<List<PaymentResponse>>> getPayments(@PathVariable Long orderId) {
        return ResponseEntity.ok(ApiResponse.ok(paymentService.getPaymentsForOrder(orderId)));
    }
}
