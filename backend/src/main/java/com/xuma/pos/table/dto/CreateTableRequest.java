package com.xuma.pos.table.dto;

import com.xuma.pos.table.entity.TableStatus;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateTableRequest {
    @NotBlank
    private String tableNumber;
    
    @Min(1)
    private Integer capacity;
}
