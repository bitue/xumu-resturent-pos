package com.xuma.pos.order.mapper;

import com.xuma.pos.order.dto.OrderItemResponse;
import com.xuma.pos.order.dto.OrderResponse;
import com.xuma.pos.order.entity.Order;
import com.xuma.pos.order.entity.OrderItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    OrderResponse toResponse(Order order);

    @Mapping(target = "menuItemId", source = "menuItem.id")
    @Mapping(target = "menuItemName", source = "menuItem.name")
    OrderItemResponse toResponse(OrderItem item);
}
