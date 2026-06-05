package com.xuma.pos.common.exception;

public class ConflictException extends BusinessException {
    public ConflictException(String message) {
        super(message, 409);
    }
}
