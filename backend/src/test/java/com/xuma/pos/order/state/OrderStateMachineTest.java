package com.xuma.pos.order.state;

import com.xuma.pos.order.entity.OrderStatus;
import com.xuma.pos.order.exception.InvalidOrderStateException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

class OrderStateMachineTest {

    @ParameterizedTest
    @CsvSource({
            "PENDING, PREPARING",
            "PENDING, CANCELLED",
            "PREPARING, READY",
            "PREPARING, CANCELLED",
            "READY, SERVED",
            "SERVED, PAID"
    })
    void testValidTransitions(OrderStatus from, OrderStatus to) {
        assertTrue(OrderStateMachine.canTransition(from, to));
        assertDoesNotThrow(() -> OrderStateMachine.validate(from, to));
    }

    @ParameterizedTest
    @CsvSource({
            "PENDING, READY",
            "PENDING, SERVED",
            "PENDING, PAID",
            "PREPARING, PAID",
            "READY, PAID",
            "READY, CANCELLED",
            "SERVED, CANCELLED",
            "PAID, CANCELLED",
            "CANCELLED, PENDING"
    })
    void testInvalidTransitions(OrderStatus from, OrderStatus to) {
        assertFalse(OrderStateMachine.canTransition(from, to));
        InvalidOrderStateException ex = assertThrows(InvalidOrderStateException.class, 
            () -> OrderStateMachine.validate(from, to));
        assertTrue(ex.getMessage().contains("Illegal transition"));
    }
}
