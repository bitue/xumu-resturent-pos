package com.xuma.pos.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RevenueAnalyticsResponse {
    private String timePeriod; // Could be "14:00" for hourly, "2023-10-01" for daily
    private Long orderCount;
    private BigDecimal revenue;
}
