package com.xuma.pos.order.dto;

import com.xuma.pos.order.entity.OrderItemStatus;
import lombok.Data;

import java.time.Instant;

@Data
public class KdsItemResponse {
    private Long id;
    private Long orderId;
    private String orderNumber;
    private String menuItemName;
    private Integer quantity;
    private String specialRequest;
    private OrderItemStatus status;
    private Instant orderedAt;
}
