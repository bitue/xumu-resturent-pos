package com.xuma.pos.table.dto;

import com.xuma.pos.table.entity.TableStatus;
import lombok.Data;

@Data
public class TableResponse {
    private Long id;
    private String tableNumber;
    private Integer capacity;
    private TableStatus status;
}
