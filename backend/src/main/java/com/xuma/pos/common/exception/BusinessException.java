package com.xuma.pos.common.exception;

public abstract class BusinessException extends RuntimeException {
    private final int status;

    protected BusinessException(String msg, int status) {
        super(msg);
        this.status = status;
    }

    public int getStatus() {
        return status;
    }
}
