package com.xuma.pos.payment.entity;

import com.xuma.pos.common.entity.AuditableEntity;
import com.xuma.pos.order.entity.Order;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "payments")
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Payment extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private PaymentMethod paymentMethod;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    @Builder.Default
    private PaymentStatus status = PaymentStatus.PENDING;

    @Column(length = 255)
    private String transactionId;

    public static Payment create(Order order, BigDecimal amount, PaymentMethod method) {
        return Payment.builder()
                .order(order)
                .amount(amount)
                .paymentMethod(method)
                .status(PaymentStatus.COMPLETED) // Assuming synchronous simple payments for now
                .build();
    }
}
