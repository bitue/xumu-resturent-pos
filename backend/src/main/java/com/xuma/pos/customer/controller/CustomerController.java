package com.xuma.pos.customer.controller;

import com.xuma.pos.common.api.ApiResponse;
import com.xuma.pos.customer.dto.CustomerRequest;
import com.xuma.pos.customer.dto.CustomerResponse;
import com.xuma.pos.customer.service.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @PostMapping
    @PreAuthorize("hasAnyRole('WAITER', 'CASHIER', 'MANAGER', 'ADMIN')")
    public ResponseEntity<ApiResponse<CustomerResponse>> createOrGetCustomer(@Valid @RequestBody CustomerRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(customerService.createOrGetCustomer(request)));
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('WAITER', 'CASHIER', 'MANAGER', 'ADMIN')")
    public ResponseEntity<ApiResponse<List<CustomerResponse>>> getAllCustomers() {
        return ResponseEntity.ok(ApiResponse.ok(customerService.getAllCustomers()));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('WAITER', 'CASHIER', 'MANAGER', 'ADMIN')")
    public ResponseEntity<ApiResponse<CustomerResponse>> getCustomer(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(customerService.getCustomer(id)));
    }
}
