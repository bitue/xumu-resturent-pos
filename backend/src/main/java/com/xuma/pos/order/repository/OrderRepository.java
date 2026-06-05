package com.xuma.pos.order.repository;

import com.xuma.pos.order.entity.Order;
import com.xuma.pos.report.dto.DailySalesResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findByOrderNumber(String orderNumber);
    Optional<Order> findByIdempotencyKey(String idempotencyKey);

    @Query("SELECT new com.xuma.pos.report.dto.DailySalesResponse(" +
           "CAST(o.createdAt AS localdate), COUNT(o), SUM(o.total), SUM(o.tax), SUM(o.discount)) " +
           "FROM Order o " +
           "WHERE o.createdAt >= :startDate AND o.createdAt <= :endDate " +
           "AND o.status = 'PAID' " +
           "GROUP BY CAST(o.createdAt AS localdate) " +
           "ORDER BY CAST(o.createdAt AS localdate) DESC")
    List<DailySalesResponse> getDailySales(LocalDateTime startDate, LocalDateTime endDate);
}
