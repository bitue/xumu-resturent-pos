CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    order_number      VARCHAR(30) NOT NULL UNIQUE,
    type              VARCHAR(20) NOT NULL,                -- DINE_IN, TAKEAWAY, DELIVERY
    status            VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    subtotal          NUMERIC(10,2) NOT NULL DEFAULT 0,
    tax               NUMERIC(10,2) NOT NULL DEFAULT 0,
    discount          NUMERIC(10,2) NOT NULL DEFAULT 0,
    total             NUMERIC(10,2) NOT NULL DEFAULT 0,
    customer_note     VARCHAR(500),
    table_id          BIGINT,                              -- FK added in phase 5
    assigned_waiter_id BIGINT REFERENCES users(id),
    customer_id       BIGINT REFERENCES users(id),
    idempotency_key   VARCHAR(80) UNIQUE,
    deleted_at        TIMESTAMPTZ,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by VARCHAR(120), updated_by VARCHAR(120),
    version BIGINT NOT NULL DEFAULT 0
);
CREATE INDEX idx_orders_status ON orders(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_orders_created ON orders(created_at DESC) WHERE deleted_at IS NULL;

CREATE TABLE order_items (
    id BIGSERIAL PRIMARY KEY,
    order_id      BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    menu_item_id  BIGINT NOT NULL REFERENCES menu_items(id),
    quantity      INT NOT NULL CHECK (quantity > 0),
    unit_price    NUMERIC(10,2) NOT NULL CHECK (unit_price >= 0),
    special_request VARCHAR(200),
    status        VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_order_items_order ON order_items(order_id);
