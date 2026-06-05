package com.xuma.pos.report.dto;

import com.xuma.pos.order.entity.OrderType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderTypeAnalyticsResponse {
    private OrderType orderType;
    private Long orderCount;
    private BigDecimal revenue;
}
