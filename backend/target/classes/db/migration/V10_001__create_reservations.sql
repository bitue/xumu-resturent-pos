CREATE TABLE reservations (
    id BIGSERIAL PRIMARY KEY,
    customer_name VARCHAR(120) NOT NULL,
    customer_phone VARCHAR(30) NOT NULL,
    table_id BIGINT REFERENCES restaurant_tables(id),
    reservation_time TIMESTAMP NOT NULL,
    party_size INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    special_requests TEXT,
    created_by VARCHAR(50),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(50),
    updated_at TIMESTAMP,
    version BIGINT DEFAULT 0
);
