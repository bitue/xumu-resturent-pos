package com.xuma.pos.customer.service;

import com.xuma.pos.common.exception.ConflictException;
import com.xuma.pos.common.exception.NotFoundException;
import com.xuma.pos.customer.dto.CustomerRequest;
import com.xuma.pos.customer.dto.CustomerResponse;
import com.xuma.pos.customer.entity.Customer;
import com.xuma.pos.customer.mapper.CustomerMapper;
import com.xuma.pos.customer.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;

    @Transactional
    public CustomerResponse createOrGetCustomer(CustomerRequest request) {
        return customerRepository.findByPhoneNumber(request.getPhoneNumber())
                .map(customerMapper::toResponse)
                .orElseGet(() -> {
                    Customer newCustomer = Customer.builder()
                            .name(request.getName())
                            .phoneNumber(request.getPhoneNumber())
                            .build();
                    return customerMapper.toResponse(customerRepository.save(newCustomer));
                });
    }

    @Transactional(readOnly = true)
    public List<CustomerResponse> getAllCustomers() {
        return customerRepository.findAll().stream()
                .map(customerMapper::toResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public CustomerResponse getCustomer(Long id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Customer not found"));
        return customerMapper.toResponse(customer);
    }
}
