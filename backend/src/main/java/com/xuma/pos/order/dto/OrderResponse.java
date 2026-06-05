package com.xuma.pos.order.dto;

import com.xuma.pos.order.entity.OrderStatus;
import com.xuma.pos.order.entity.OrderType;
import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class OrderResponse {
    private Long id;
    private String orderNumber;
    private OrderType type;
    private OrderStatus status;
    private BigDecimal subtotal;
    private BigDecimal tax;
    private BigDecimal discount;
    private BigDecimal total;
    private String customerNote;
    private Long tableId;
    private List<OrderItemResponse> items;
}
