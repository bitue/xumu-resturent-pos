package com.xuma.pos.table.controller;

import com.xuma.pos.common.api.ApiResponse;
import com.xuma.pos.table.dto.CreateTableRequest;
import com.xuma.pos.table.dto.TableResponse;
import com.xuma.pos.table.entity.TableStatus;
import com.xuma.pos.table.service.TableService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tables")
@RequiredArgsConstructor
public class TableController {
    private final TableService tableService;

    @PostMapping
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<TableResponse>> createTable(@Valid @RequestBody CreateTableRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(tableService.createTable(request)));
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('WAITER', 'CASHIER', 'MANAGER', 'ADMIN')")
    public ResponseEntity<ApiResponse<List<TableResponse>>> getAllTables() {
        return ResponseEntity.ok(ApiResponse.ok(tableService.getAllTables()));
    }

    @PatchMapping("/{tableId}/status")
    @PreAuthorize("hasAnyRole('WAITER', 'MANAGER', 'ADMIN')")
    public ResponseEntity<ApiResponse<TableResponse>> updateTableStatus(
            @PathVariable Long tableId,
            @RequestParam TableStatus status) {
        return ResponseEntity.ok(ApiResponse.ok(tableService.updateTableStatus(tableId, status)));
    }
}
