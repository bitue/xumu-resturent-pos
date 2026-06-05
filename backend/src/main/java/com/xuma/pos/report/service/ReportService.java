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
        return orderRepository.getDailySales(
            startDate.atZone(java.time.ZoneId.systemDefault()).toInstant(),
            endDate.atZone(java.time.ZoneId.systemDefault()).toInstant()
        );
    }

    @Transactional(readOnly = true)
    public List<TopItemResponse> getTopSellingItems(int limit) {
        return orderItemRepository.getTopSellingItems(PageRequest.of(0, limit));
    }

    @Transactional(readOnly = true)
    public List<com.xuma.pos.report.dto.OrderTypeAnalyticsResponse> getOrderTypeAnalytics(LocalDateTime startDate, LocalDateTime endDate) {
        return orderRepository.getOrderTypeAnalytics(
            startDate.atZone(java.time.ZoneId.systemDefault()).toInstant(),
            endDate.atZone(java.time.ZoneId.systemDefault()).toInstant()
        );
    }

    @Transactional(readOnly = true)
    public List<com.xuma.pos.report.dto.RevenueAnalyticsResponse> getHourlyRevenue(LocalDateTime startDate, LocalDateTime endDate) {
        List<Object[]> results = orderRepository.getHourlyRevenueNative(
            startDate.atZone(java.time.ZoneId.systemDefault()).toInstant(),
            endDate.atZone(java.time.ZoneId.systemDefault()).toInstant()
        );
        return results.stream().map(obj -> new com.xuma.pos.report.dto.RevenueAnalyticsResponse(
                String.valueOf(obj[0]), // timePeriod (hour)
                ((Number) obj[1]).longValue(), // orderCount
                (java.math.BigDecimal) obj[2] // revenue
        )).toList();
    }

    @Transactional(readOnly = true)
    public List<com.xuma.pos.report.dto.CustomerLtvResponse> getTopCustomersLtv(int limit) {
        List<Object[]> results = orderRepository.getTopCustomersLtvNative(limit);
        return results.stream().map(obj -> new com.xuma.pos.report.dto.CustomerLtvResponse(
                ((Number) obj[0]).longValue(), // customerId
                (String) obj[1], // customerName
                (String) obj[2], // phoneNumber
                ((Number) obj[3]).longValue(), // totalOrders
                (java.math.BigDecimal) obj[4] // lifetimeValue
        )).toList();
    }

    @Transactional(readOnly = true)
    public com.xuma.pos.report.dto.NewVsReturningResponse getNewVsReturningCustomers(LocalDateTime startDate, LocalDateTime endDate) {
        List<Object[]> results = orderRepository.getNewVsReturningCustomersNative(
            startDate.atZone(java.time.ZoneId.systemDefault()).toInstant(),
            endDate.atZone(java.time.ZoneId.systemDefault()).toInstant()
        );
        if (results.isEmpty() || results.get(0)[0] == null) {
            return new com.xuma.pos.report.dto.NewVsReturningResponse(0L, 0L);
        }
        Object[] obj = results.get(0);
        return new com.xuma.pos.report.dto.NewVsReturningResponse(
                ((Number) obj[0]).longValue(), // newCustomersCount
                ((Number) obj[1]).longValue() // returningCustomersCount
        );
    }
}
