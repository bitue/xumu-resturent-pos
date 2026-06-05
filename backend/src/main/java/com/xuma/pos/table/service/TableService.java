package com.xuma.pos.table.service;

import com.xuma.pos.common.exception.ConflictException;
import com.xuma.pos.common.exception.NotFoundException;
import com.xuma.pos.table.dto.CreateTableRequest;
import com.xuma.pos.table.dto.TableResponse;
import com.xuma.pos.table.entity.RestaurantTable;
import com.xuma.pos.table.entity.TableStatus;
import com.xuma.pos.table.mapper.TableMapper;
import com.xuma.pos.table.repository.RestaurantTableRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TableService {
    private final RestaurantTableRepository tableRepository;
    private final TableMapper tableMapper;

    @Transactional
    public TableResponse createTable(CreateTableRequest request) {
        if (tableRepository.findByTableNumber(request.getTableNumber()).isPresent()) {
            throw new ConflictException("Table number already exists");
        }

        RestaurantTable table = RestaurantTable.builder()
                .tableNumber(request.getTableNumber())
                .capacity(request.getCapacity())
                .status(TableStatus.AVAILABLE)
                .build();

        return tableMapper.toResponse(tableRepository.save(table));
    }

    @Transactional(readOnly = true)
    public List<TableResponse> getAllTables() {
        return tableRepository.findAll().stream()
                .map(tableMapper::toResponse)
                .toList();
    }

    @Transactional
    public TableResponse updateTableStatus(Long tableId, TableStatus status) {
        RestaurantTable table = tableRepository.findById(tableId)
                .orElseThrow(() -> new NotFoundException("Table not found: " + tableId));
        table.setStatus(status);
        return tableMapper.toResponse(tableRepository.save(table));
    }
}
