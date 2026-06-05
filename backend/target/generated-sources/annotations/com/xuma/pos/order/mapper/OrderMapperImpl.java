package com.xuma.pos.order.mapper;

import com.xuma.pos.menu.entity.MenuItem;
import com.xuma.pos.order.dto.OrderItemResponse;
import com.xuma.pos.order.dto.OrderResponse;
import com.xuma.pos.order.entity.Order;
import com.xuma.pos.order.entity.OrderItem;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-05T16:46:05+0600",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.6 (Oracle Corporation)"
)
@Component
public class OrderMapperImpl implements OrderMapper {

    @Override
    public OrderResponse toResponse(Order order) {
        if ( order == null ) {
            return null;
        }

        OrderResponse orderResponse = new OrderResponse();

        orderResponse.setId( order.getId() );
        orderResponse.setOrderNumber( order.getOrderNumber() );
        orderResponse.setType( order.getType() );
        orderResponse.setStatus( order.getStatus() );
        orderResponse.setSubtotal( order.getSubtotal() );
        orderResponse.setTax( order.getTax() );
        orderResponse.setDiscount( order.getDiscount() );
        orderResponse.setTotal( order.getTotal() );
        orderResponse.setCustomerNote( order.getCustomerNote() );
        orderResponse.setTableId( order.getTableId() );
        orderResponse.setItems( orderItemListToOrderItemResponseList( order.getItems() ) );

        return orderResponse;
    }

    @Override
    public OrderItemResponse toResponse(OrderItem item) {
        if ( item == null ) {
            return null;
        }

        OrderItemResponse orderItemResponse = new OrderItemResponse();

        orderItemResponse.setMenuItemId( itemMenuItemId( item ) );
        orderItemResponse.setMenuItemName( itemMenuItemName( item ) );
        orderItemResponse.setId( item.getId() );
        orderItemResponse.setQuantity( item.getQuantity() );
        orderItemResponse.setUnitPrice( item.getUnitPrice() );
        orderItemResponse.setSpecialRequest( item.getSpecialRequest() );
        orderItemResponse.setStatus( item.getStatus() );

        return orderItemResponse;
    }

    protected List<OrderItemResponse> orderItemListToOrderItemResponseList(List<OrderItem> list) {
        if ( list == null ) {
            return null;
        }

        List<OrderItemResponse> list1 = new ArrayList<OrderItemResponse>( list.size() );
        for ( OrderItem orderItem : list ) {
            list1.add( toResponse( orderItem ) );
        }

        return list1;
    }

    private Long itemMenuItemId(OrderItem orderItem) {
        if ( orderItem == null ) {
            return null;
        }
        MenuItem menuItem = orderItem.getMenuItem();
        if ( menuItem == null ) {
            return null;
        }
        Long id = menuItem.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String itemMenuItemName(OrderItem orderItem) {
        if ( orderItem == null ) {
            return null;
        }
        MenuItem menuItem = orderItem.getMenuItem();
        if ( menuItem == null ) {
            return null;
        }
        String name = menuItem.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }
}
