package com.xuma.pos.table.controller;

import com.xuma.pos.common.api.ApiResponse;
import com.xuma.pos.table.dto.ReservationRequest;
import com.xuma.pos.table.dto.ReservationResponse;
import com.xuma.pos.table.entity.ReservationStatus;
import com.xuma.pos.table.service.ReservationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@RequiredArgsConstructor
public class ReservationController {
    private final ReservationService reservationService;

    @GetMapping
    @PreAuthorize("hasAnyRole('MANAGER', 'ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<ApiResponse<List<ReservationResponse>>> getReservations(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        if (date == null) date = LocalDate.now();
        return ResponseEntity.ok(ApiResponse.ok(reservationService.getReservationsForDate(date)));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('MANAGER', 'ADMIN', 'SUPER_ADMIN', 'WAITER')")
    public ResponseEntity<ApiResponse<ReservationResponse>> createReservation(@Valid @RequestBody ReservationRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(reservationService.createReservation(request)));
    }

    @PatchMapping("/{id}/status")
    @PreAuthorize("hasAnyRole('MANAGER', 'ADMIN', 'SUPER_ADMIN', 'WAITER')")
    public ResponseEntity<ApiResponse<ReservationResponse>> updateStatus(
            @PathVariable Long id,
            @RequestParam ReservationStatus status) {
        return ResponseEntity.ok(ApiResponse.ok(reservationService.updateStatus(id, status)));
    }

    @PatchMapping("/{id}/assign-table")
    @PreAuthorize("hasAnyRole('MANAGER', 'ADMIN', 'SUPER_ADMIN', 'WAITER')")
    public ResponseEntity<ApiResponse<ReservationResponse>> assignTable(
            @PathVariable Long id,
            @RequestParam Long tableId) {
        return ResponseEntity.ok(ApiResponse.ok(reservationService.assignTable(id, tableId)));
    }
}
