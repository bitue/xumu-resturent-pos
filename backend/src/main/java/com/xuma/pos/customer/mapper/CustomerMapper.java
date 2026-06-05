package com.xuma.pos.customer.mapper;

import com.xuma.pos.customer.dto.CustomerResponse;
import com.xuma.pos.customer.entity.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CustomerMapper {
    CustomerResponse toResponse(Customer customer);
}
