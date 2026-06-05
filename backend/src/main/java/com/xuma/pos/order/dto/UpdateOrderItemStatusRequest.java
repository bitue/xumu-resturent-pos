package com.xuma.pos.order.dto;

import com.xuma.pos.order.entity.OrderItemStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateOrderItemStatusRequest {
    @NotNull
    private OrderItemStatus status;
}
