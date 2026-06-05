package com.xuma.pos.order.dto;

import com.xuma.pos.order.entity.OrderStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateOrderStatusRequest {
    @NotNull private OrderStatus status;
}
