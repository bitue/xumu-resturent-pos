package com.xuma.pos.order.dto;

import com.xuma.pos.order.entity.OrderItemStatus;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class OrderItemResponse {
    private Long id;
    private Long menuItemId;
    private String menuItemName;
    private int quantity;
    private BigDecimal unitPrice;
    private String specialRequest;
    private OrderItemStatus status;
}
