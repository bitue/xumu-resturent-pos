package com.xuma.pos.order.exception;

import com.xuma.pos.common.exception.BusinessException;

public class InvalidOrderStateException extends BusinessException {
    public InvalidOrderStateException(String message) {
        super(message, 400);
    }
}
