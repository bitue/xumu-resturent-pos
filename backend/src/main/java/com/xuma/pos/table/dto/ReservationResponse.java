package com.xuma.pos.table.dto;

import com.xuma.pos.table.entity.ReservationStatus;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ReservationResponse {
    private Long id;
    private String customerName;
    private String customerPhone;
    private Long tableId;
    private String tableNumber;
    private LocalDateTime reservationTime;
    private Integer partySize;
    private ReservationStatus status;
    private String specialRequests;
    private LocalDateTime createdAt;
}
