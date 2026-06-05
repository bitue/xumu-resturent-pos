package com.xuma.pos.payment.service;

import com.xuma.pos.common.exception.ConflictException;
import com.xuma.pos.common.exception.NotFoundException;
import com.xuma.pos.common.exception.ValidationException;
import com.xuma.pos.order.entity.Order;
import com.xuma.pos.order.entity.OrderStatus;
import com.xuma.pos.order.repository.OrderRepository;
import com.xuma.pos.payment.dto.PaymentRequest;
import com.xuma.pos.payment.dto.PaymentResponse;
import com.xuma.pos.payment.entity.Payment;
import com.xuma.pos.payment.mapper.PaymentMapper;
import com.xuma.pos.payment.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentService {
    private final PaymentRepository paymentRepository;
    private final OrderRepository orderRepository;
    private final PaymentMapper paymentMapper;

    @Transactional
    public PaymentResponse processPayment(Long orderId, PaymentRequest request) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new NotFoundException("Order not found: " + orderId));

        if (order.getStatus() == OrderStatus.PAID) {
            throw new ConflictException("Order is already paid");
        }
        if (order.getStatus() == OrderStatus.CANCELLED) {
            throw new ConflictException("Cannot pay for a cancelled order");
        }

        // Get total amount already paid
        List<Payment> existingPayments = paymentRepository.findByOrderId(orderId);
        BigDecimal totalPaid = existingPayments.stream()
                .map(Payment::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal remainingBalance = order.getTotal().subtract(totalPaid);

        if (request.getAmount().compareTo(remainingBalance) > 0) {
            throw new ValidationException("Payment amount exceeds remaining balance of " + remainingBalance);
        }

        Payment payment = Payment.create(order, request.getAmount(), request.getMethod());
        payment = paymentRepository.save(payment);

        // Transition order if fully paid
        if (request.getAmount().compareTo(remainingBalance) == 0) {
            order.transitionTo(OrderStatus.PAID);
            orderRepository.save(order);
        }

        return paymentMapper.toResponse(payment);
    }

    @Transactional(readOnly = true)
    public List<PaymentResponse> getPaymentsForOrder(Long orderId) {
        return paymentRepository.findByOrderId(orderId).stream()
                .map(paymentMapper::toResponse)
                .toList();
    }
}
