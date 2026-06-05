package com.xuma.pos.order.dto;

import com.xuma.pos.order.entity.OrderType;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import java.util.List;

@Data
public class CreateOrderRequest {
    @NotNull private OrderType type;
    private Long tableId;
    private Long customerId;
    private String idempotencyKey;
    private List<CreateOrderItemRequest> items;
    private String customerNote;
}
