package com.xuma.pos.order.repository;

import com.xuma.pos.order.entity.Order;
import com.xuma.pos.report.dto.DailySalesResponse;
import com.xuma.pos.report.dto.OrderTypeAnalyticsResponse;
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

    @Query("SELECT new com.xuma.pos.report.dto.OrderTypeAnalyticsResponse(" +
           "o.type, COUNT(o), SUM(o.total)) " +
           "FROM Order o " +
           "WHERE o.createdAt >= :startDate AND o.createdAt <= :endDate " +
           "AND o.status = 'PAID' " +
           "GROUP BY o.type")
    List<OrderTypeAnalyticsResponse> getOrderTypeAnalytics(LocalDateTime startDate, LocalDateTime endDate);
    
    @Query(value = "SELECT EXTRACT(HOUR FROM created_at) AS timePeriod, COUNT(*) as orderCount, SUM(total) as revenue " +
                   "FROM orders " +
                   "WHERE created_at >= :startDate AND created_at <= :endDate " +
                   "AND status = 'PAID' " +
                   "GROUP BY EXTRACT(HOUR FROM created_at) " +
                   "ORDER BY timePeriod", nativeQuery = true)
    List<Object[]> getHourlyRevenueNative(LocalDateTime startDate, LocalDateTime endDate);

    @Query(value = "SELECT c.id as customerId, c.name as customerName, c.phone_number as phoneNumber, " +
                   "COUNT(o.id) as totalOrders, SUM(o.total) as lifetimeValue " +
                   "FROM customers c " +
                   "JOIN orders o ON c.id = o.customer_id " +
                   "WHERE o.status = 'PAID' " +
                   "GROUP BY c.id, c.name, c.phone_number " +
                   "ORDER BY SUM(o.total) DESC " +
                   "LIMIT :limit", nativeQuery = true)
    List<Object[]> getTopCustomersLtvNative(int limit);

    @Query(value = "WITH customer_orders AS (" +
                   "  SELECT customer_id, MIN(created_at) as first_order_date " +
                   "  FROM orders " +
                   "  WHERE status = 'PAID' AND customer_id IS NOT NULL " +
                   "  GROUP BY customer_id " +
                   ") " +
                   "SELECT " +
                   "  SUM(CASE WHEN co.first_order_date >= :startDate AND co.first_order_date <= :endDate THEN 1 ELSE 0 END) as new_customers, " +
                   "  SUM(CASE WHEN co.first_order_date < :startDate THEN 1 ELSE 0 END) as returning_customers " +
                   "FROM customer_orders co " +
                   "JOIN orders o ON o.customer_id = co.customer_id " +
                   "WHERE o.status = 'PAID' AND o.created_at >= :startDate AND o.created_at <= :endDate", nativeQuery = true)
    List<Object[]> getNewVsReturningCustomersNative(LocalDateTime startDate, LocalDateTime endDate);
}
