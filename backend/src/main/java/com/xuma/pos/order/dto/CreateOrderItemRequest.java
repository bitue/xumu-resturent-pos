package com.xuma.pos.order.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateOrderItemRequest {
    @NotNull private Long menuItemId;
    @Min(1) private int quantity;
    private String specialRequest;
}
