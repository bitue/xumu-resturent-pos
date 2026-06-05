package com.xuma.pos.report.service;

import com.xuma.pos.order.repository.OrderItemRepository;
import com.xuma.pos.order.repository.OrderRepository;
import com.xuma.pos.report.dto.DailySalesResponse;
import com.xuma.pos.report.dto.TopItemResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportService {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;

    @Transactional(readOnly = true)
    public List<DailySalesResponse> getDailySales(LocalDateTime startDate, LocalDateTime endDate) {
        return orderRepository.getDailySales(startDate, endDate);
    }

    @Transactional(readOnly = true)
    public List<TopItemResponse> getTopSellingItems(int limit) {
        return orderItemRepository.getTopSellingItems(PageRequest.of(0, limit));
    }
}
