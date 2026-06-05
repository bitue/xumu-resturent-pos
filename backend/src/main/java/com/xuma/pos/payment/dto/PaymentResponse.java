package com.xuma.pos.payment.dto;

import com.xuma.pos.payment.entity.PaymentMethod;
import com.xuma.pos.payment.entity.PaymentStatus;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
public class PaymentResponse {
    private Long id;
    private Long orderId;
    private BigDecimal amount;
    private PaymentMethod paymentMethod;
    private PaymentStatus status;
    private String transactionId;
    private Instant createdAt;
}
