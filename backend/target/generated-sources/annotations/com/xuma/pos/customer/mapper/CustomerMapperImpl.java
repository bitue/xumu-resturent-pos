package com.xuma.pos.customer.mapper;

import com.xuma.pos.customer.dto.CustomerResponse;
import com.xuma.pos.customer.entity.Customer;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-05T21:05:24+0600",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.6 (Oracle Corporation)"
)
@Component
public class CustomerMapperImpl implements CustomerMapper {

    @Override
    public CustomerResponse toResponse(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerResponse customerResponse = new CustomerResponse();

        customerResponse.setId( customer.getId() );
        customerResponse.setName( customer.getName() );
        customerResponse.setPhoneNumber( customer.getPhoneNumber() );

        return customerResponse;
    }
}
