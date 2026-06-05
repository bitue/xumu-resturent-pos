package com.xuma.pos.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerLtvResponse {
    private Long customerId;
    private String customerName;
    private String phoneNumber;
    private Long totalOrders;
    private BigDecimal lifetimeValue;
}
