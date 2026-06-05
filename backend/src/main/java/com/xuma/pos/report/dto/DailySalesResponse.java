package com.xuma.pos.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DailySalesResponse {
    private LocalDate date;
    private Long totalOrders;
    private BigDecimal totalRevenue;
    private BigDecimal totalTax;
    private BigDecimal totalDiscount;
}
