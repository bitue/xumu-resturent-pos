CREATE TABLE users (
    id              BIGSERIAL PRIMARY KEY,
    email           CITEXT NOT NULL UNIQUE,
    password_hash   VARCHAR(255),
    full_name       VARCHAR(120) NOT NULL,
    phone           VARCHAR(30),
    enabled         BOOLEAN NOT NULL DEFAULT TRUE,
    provider        VARCHAR(20) NOT NULL DEFAULT 'LOCAL',
    provider_id     VARCHAR(255),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by      VARCHAR(120),
    updated_by      VARCHAR(120),
    version         BIGINT NOT NULL DEFAULT 0,
    UNIQUE (provider, provider_id)
);
CREATE INDEX idx_users_email ON users (email);
