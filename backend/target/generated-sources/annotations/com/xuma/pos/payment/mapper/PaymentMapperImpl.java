package com.xuma.pos.payment.mapper;

import com.xuma.pos.order.entity.Order;
import com.xuma.pos.payment.dto.PaymentResponse;
import com.xuma.pos.payment.entity.Payment;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-05T21:05:24+0600",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.6 (Oracle Corporation)"
)
@Component
public class PaymentMapperImpl implements PaymentMapper {

    @Override
    public PaymentResponse toResponse(Payment payment) {
        if ( payment == null ) {
            return null;
        }

        PaymentResponse paymentResponse = new PaymentResponse();

        paymentResponse.setOrderId( paymentOrderId( payment ) );
        paymentResponse.setId( payment.getId() );
        paymentResponse.setAmount( payment.getAmount() );
        paymentResponse.setPaymentMethod( payment.getPaymentMethod() );
        paymentResponse.setStatus( payment.getStatus() );
        paymentResponse.setTransactionId( payment.getTransactionId() );
        paymentResponse.setCreatedAt( payment.getCreatedAt() );

        return paymentResponse;
    }

    private Long paymentOrderId(Payment payment) {
        if ( payment == null ) {
            return null;
        }
        Order order = payment.getOrder();
        if ( order == null ) {
            return null;
        }
        Long id = order.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
