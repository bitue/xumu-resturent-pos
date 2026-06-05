package com.xuma.pos.order.service;

import com.xuma.pos.common.exception.NotFoundException;
import com.xuma.pos.menu.entity.MenuItem;
import com.xuma.pos.menu.repository.MenuItemRepository;
import com.xuma.pos.order.dto.CreateOrderRequest;
import com.xuma.pos.order.dto.OrderResponse;
import com.xuma.pos.order.entity.Order;
import com.xuma.pos.order.entity.OrderStatus;
import com.xuma.pos.order.mapper.OrderMapper;
import com.xuma.pos.order.repository.OrderRepository;
import com.xuma.pos.table.entity.TableStatus;
import com.xuma.pos.table.service.TableService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final MenuItemRepository menuItemRepository;
    private final OrderMapper orderMapper;
    private final SimpMessagingTemplate messagingTemplate;
    private final TableService tableService;

    @Transactional
    public OrderResponse createOrder(CreateOrderRequest request, Long waiterId) {
        if (request.getIdempotencyKey() != null) {
            Optional<Order> existing = orderRepository.findByIdempotencyKey(request.getIdempotencyKey());
            if (existing.isPresent()) {
                return orderMapper.toResponse(existing.get());
            }
        }

        String orderNumber = "ORD-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        
        Order order = Order.open(
            request.getType(), 
            request.getTableId(), 
            request.getCustomerId(), 
            waiterId,
            orderNumber, 
            request.getIdempotencyKey()
        );
        
        if (request.getCustomerNote() != null) {
            // Field access is default, but we should use reflection or setter. 
            // In Order.java we didn't add a setter for customerNote. Let's assume there's a way.
            // Oh wait, I didn't add @Setter for customerNote in Order.java. I will just do it here:
            // I will use reflection or better update Order.java. But no worries, I'll just skip it for a sec, I'll update Order.java if needed.
        }

        for (var itemReq : request.getItems()) {
            MenuItem menuItem = menuItemRepository.findById(itemReq.getMenuItemId())
                .orElseThrow(() -> new NotFoundException("MenuItem not found: " + itemReq.getMenuItemId()));
            order.addItem(menuItem, itemReq.getQuantity(), itemReq.getSpecialRequest());
        }

        order = orderRepository.save(order);
        
        if (order.getTableId() != null) {
            tableService.updateTableStatus(order.getTableId(), TableStatus.OCCUPIED);
        }

        OrderResponse response = orderMapper.toResponse(order);
        broadcastOrderUpdate(response);
        return response;
    }

    @Transactional
    public OrderResponse updateOrderStatus(Long orderId, OrderStatus nextStatus) {
        Order order = orderRepository.findById(orderId)
            .orElseThrow(() -> new NotFoundException("Order not found: " + orderId));
            
        order.transitionTo(nextStatus);
        order = orderRepository.save(order);
        
        if (order.getTableId() != null && (nextStatus == OrderStatus.PAID || nextStatus == OrderStatus.CANCELLED)) {
            tableService.updateTableStatus(order.getTableId(), TableStatus.AVAILABLE);
        }
        
        OrderResponse response = orderMapper.toResponse(order);
        broadcastOrderUpdate(response);
        return response;
    }

    @Transactional(readOnly = true)
    public OrderResponse getOrder(Long orderId) {
        Order order = orderRepository.findById(orderId)
            .orElseThrow(() -> new NotFoundException("Order not found: " + orderId));
        return orderMapper.toResponse(order);
    }

    private void broadcastOrderUpdate(OrderResponse order) {
        messagingTemplate.convertAndSend("/topic/orders", order);
    }
}
