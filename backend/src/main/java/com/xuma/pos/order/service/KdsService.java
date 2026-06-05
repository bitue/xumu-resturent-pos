package com.xuma.pos.order.service;

import com.xuma.pos.common.exception.NotFoundException;
import com.xuma.pos.order.dto.KdsItemResponse;
import com.xuma.pos.order.entity.OrderItem;
import com.xuma.pos.order.entity.OrderItemStatus;
import com.xuma.pos.order.repository.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KdsService {
    private final OrderItemRepository orderItemRepository;
    private final SimpMessagingTemplate messagingTemplate;

    @Transactional(readOnly = true)
    public List<KdsItemResponse> getActiveItems() {
        return orderItemRepository.findByStatusIn(List.of(OrderItemStatus.PENDING, OrderItemStatus.PREPARING))
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Transactional
    public KdsItemResponse updateItemStatus(Long orderItemId, OrderItemStatus newStatus) {
        OrderItem item = orderItemRepository.findById(orderItemId)
                .orElseThrow(() -> new NotFoundException("OrderItem not found"));
        
        item.transitionTo(newStatus);
        item = orderItemRepository.save(item);
        
        KdsItemResponse response = mapToResponse(item);
        messagingTemplate.convertAndSend("/topic/kds", response);
        return response;
    }

    private KdsItemResponse mapToResponse(OrderItem item) {
        KdsItemResponse response = new KdsItemResponse();
        response.setId(item.getId());
        response.setOrderId(item.getOrder().getId());
        response.setOrderNumber(item.getOrder().getOrderNumber());
        response.setMenuItemName(item.getMenuItem().getName());
        response.setQuantity(item.getQuantity());
        response.setSpecialRequest(item.getSpecialRequest());
        response.setStatus(item.getStatus());
        response.setOrderedAt(item.getCreatedAt());
        return response;
    }
}
