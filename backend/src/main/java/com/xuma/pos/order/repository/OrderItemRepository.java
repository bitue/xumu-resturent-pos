package com.xuma.pos.order.repository;

import com.xuma.pos.order.entity.OrderItem;
import com.xuma.pos.order.entity.OrderItemStatus;
import com.xuma.pos.report.dto.TopItemResponse;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    List<OrderItem> findByStatusIn(List<OrderItemStatus> statuses);

    @Query("SELECT new com.xuma.pos.report.dto.TopItemResponse(" +
           "i.menuItem.name, SUM(i.quantity), SUM(i.unitPrice * i.quantity)) " +
           "FROM OrderItem i " +
           "JOIN i.order o " +
           "WHERE o.status = 'PAID' " +
           "GROUP BY i.menuItem.name " +
           "ORDER BY SUM(i.quantity) DESC")
    List<TopItemResponse> getTopSellingItems(Pageable pageable);
}
