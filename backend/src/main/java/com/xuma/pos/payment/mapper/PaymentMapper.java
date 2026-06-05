package com.xuma.pos.payment.mapper;

import com.xuma.pos.payment.dto.PaymentResponse;
import com.xuma.pos.payment.entity.Payment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PaymentMapper {
    @Mapping(target = "orderId", source = "order.id")
    PaymentResponse toResponse(Payment payment);
}
