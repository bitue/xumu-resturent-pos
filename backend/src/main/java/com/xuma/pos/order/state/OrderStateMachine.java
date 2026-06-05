package com.xuma.pos.order.state;

import com.xuma.pos.order.entity.OrderStatus;
import com.xuma.pos.order.exception.InvalidOrderStateException;

import java.util.Map;
import java.util.Set;

public final class OrderStateMachine {
    private static final Map<OrderStatus, Set<OrderStatus>> ALLOWED = Map.of(
        OrderStatus.PENDING,    Set.of(OrderStatus.PREPARING, OrderStatus.PAID, OrderStatus.CANCELLED),
        OrderStatus.PREPARING,  Set.of(OrderStatus.READY, OrderStatus.PAID, OrderStatus.CANCELLED),
        OrderStatus.READY,      Set.of(OrderStatus.SERVED, OrderStatus.PAID),
        OrderStatus.SERVED,     Set.of(OrderStatus.PAID),
        OrderStatus.PAID,       Set.of(),
        OrderStatus.CANCELLED,  Set.of()
    );

    private OrderStateMachine() {}

    public static boolean canTransition(OrderStatus from, OrderStatus to) {
        return ALLOWED.getOrDefault(from, Set.of()).contains(to);
    }

    public static void validate(OrderStatus from, OrderStatus to) {
        if (!canTransition(from, to)) {
            throw new InvalidOrderStateException(
                "Illegal transition: %s -> %s".formatted(from, to));
        }
    }
}
