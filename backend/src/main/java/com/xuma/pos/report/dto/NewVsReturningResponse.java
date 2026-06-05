package com.xuma.pos.report.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewVsReturningResponse {
    private Long newCustomersCount;
    private Long returningCustomersCount;
}
