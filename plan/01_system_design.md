# 🏛️ Xuma Restaurant POS — System Design Document

**Role:** Software Architect / Principal Engineer
**Document:** 1 of 4 — System Design
**Status:** Production-Grade Specification
**Auth Decision:** Manual Spring Security 6 + JWT (No Keycloak)

> **For the build agent:** This document defines the *what* and the *why* of the system. Read documents 2 (Class Diagram), 3 (Entity Management), and 4 (Code Architecture) together with this one. All entity names, package names, and role names are consistent across all four files.

---

## 1. Architecture Decision Record (ADR)

### ADR-001: Authentication — Manual RBAC over Keycloak
**Decision:** Use Spring Security 6 + JWT with a self-managed `users` / `roles` / `permissions` schema.
**Rationale:** Single-application system. Keycloak adds an extra server + database to operate, which is unjustified complexity for one POS app. Spring Security gives us full RBAC, method-level authorization, and OAuth2 social login natively.
**Consequence:** We own the security code; we must follow security best practices (BCrypt, short-lived access tokens, rotating refresh tokens).

### ADR-002: Frontend — Next.js App Router with SSR
**Decision:** Next.js 14+ App Router, TypeScript, Tailwind CSS.
**Rationale:** Sub-1s loads via SSR/streaming, native SEO, route-level middleware for role guards.

### ADR-003: Database — PostgreSQL
**Decision:** PostgreSQL 16. Relational data (orders, items, payments) needs ACID guarantees.

### ADR-004: Real-Time — WebSocket (STOMP)
**Decision:** Spring WebSocket + STOMP for live kitchen/order/table updates. SSE considered but WebSocket chosen for bidirectional needs.

### ADR-005: Caching — Redis
**Decision:** Redis for menu caching, session/refresh-token blacklist, and rate limiting.

---

## 2. High-Level System Architecture (C4 — Container View)

```mermaid
graph TB
    subgraph Client["🖥️ Client Layer"]
        Browser["Customer Browser<br/>(Public Site)"]
        POSTerminal["POS Terminal<br/>(Cashier/Waiter)"]
        KDS["Kitchen Display<br/>(KDS)"]
        AdminUI["Admin Dashboard"]
    end

    subgraph Frontend["⚡ Next.js Frontend (SSR)"]
        Pages["App Router Pages"]
        Middleware["Auth Middleware<br/>(Route Guards)"]
        APIClient["API Client + WS Client"]
    end

    subgraph Backend["☕ Spring Boot Backend"]
        SecurityFilter["JWT Security Filter Chain"]
        Controllers["REST Controllers"]
        WSHandler["WebSocket / STOMP Handler"]
        Services["Service Layer"]
        Repos["JPA Repositories"]
    end

    subgraph Data["💾 Data Layer"]
        PG[("PostgreSQL 16")]
        Redis[("Redis 7<br/>Cache + Tokens")]
    end

    subgraph External["🌐 External"]
        Stripe["Stripe API"]
        Google["Google OAuth2"]
        GA4["Google Analytics 4"]
    end

    Browser --> Pages
    POSTerminal --> Pages
    KDS --> Pages
    AdminUI --> Pages
    Pages --> Middleware
    Middleware --> APIClient
    APIClient -->|REST /api| SecurityFilter
    APIClient -->|WS /ws| WSHandler
    SecurityFilter --> Controllers
    Controllers --> Services
    WSHandler --> Services
    Services --> Repos
    Repos --> PG
    Services --> Redis
    Services --> Stripe
    Middleware --> Google
    Pages --> GA4
```

---

## 3. Logical Component Breakdown

### 3.1 Frontend Components (Next.js)
| Component | Responsibility |
|---|---|
| Public Site | Homepage, Menu, Reservation, Customer Order |
| Auth Module | Login, Register, OAuth callback, token storage (httpOnly cookie) |
| POS Terminal | Order building, table selection, payment, receipt |
| Kitchen Display (KDS) | Live order queue, status updates |
| Admin Dashboard | Menu CRUD, staff, reports, analytics |
| Middleware | Edge route guard — checks JWT + role before page loads |

### 3.2 Backend Components (Spring Boot)
| Component | Responsibility |
|---|---|
| Security Layer | JWT validation, role extraction, method-level `@PreAuthorize` |
| Auth Service | Login, register, refresh, OAuth2 social login |
| Menu Service | Menu/category CRUD, availability, caching |
| Order Service | Order lifecycle + state machine + WS broadcast |
| Payment Service | Stripe integration, receipt generation |
| Table Service | Table status, reservations |
| Report Service | Aggregated analytics queries |
| Staff Service | Staff management, performance metrics |
| WebSocket Layer | STOMP broker for `/topic/*` channels |

---

## 4. Role-Based Access Control (RBAC) Model

### 4.1 Role Hierarchy
```mermaid
graph TD
    SA["SUPER_ADMIN<br/>(everything)"]
    A["ADMIN<br/>(menu, orders, reports, staff)"]
    M["MANAGER<br/>(orders, reports, tables)"]
    C["CASHIER<br/>(POS, payments)"]
    W["WAITER<br/>(take orders, tables)"]
    K["KITCHEN_STAFF<br/>(order status only)"]
    CU["CUSTOMER<br/>(browse, order, history)"]

    SA --> A
    A --> M
    M --> C
    M --> W
    M --> K
```

### 4.2 Permission Matrix
| Permission | SUPER_ADMIN | ADMIN | MANAGER | CASHIER | WAITER | KITCHEN | CUSTOMER |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `menu:read` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `menu:write` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `order:create` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `order:update_status` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `order:cancel` | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `payment:process` | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `table:manage` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `staff:manage` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `report:view` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `system:config` | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

> **Design principle:** Authorize on **permissions**, not roles, in the code (`@PreAuthorize("hasAuthority('menu:write')")`). Roles are just bundles of permissions. This lets you add roles later without touching controller code.

---

## 5. Authentication Flows

### 5.1 Email/Password Login
```mermaid
sequenceDiagram
    participant U as User
    participant FE as Next.js
    participant BE as Spring Boot
    participant DB as PostgreSQL
    participant R as Redis

    U->>FE: Submit email + password
    FE->>BE: POST /api/auth/login
    BE->>DB: Find user by email
    DB-->>BE: User + roles + permissions
    BE->>BE: BCrypt.matches(password, hash)
    BE->>BE: Generate Access JWT (15 min)
    BE->>BE: Generate Refresh Token (7 days)
    BE->>R: Store refresh token (rotation tracking)
    BE-->>FE: { accessToken, refreshToken }
    FE->>FE: Store in httpOnly cookies
    FE-->>U: Redirect to role-based dashboard
```

### 5.2 Token Refresh (Rotation)
```mermaid
sequenceDiagram
    participant FE as Next.js
    participant BE as Spring Boot
    participant R as Redis

    FE->>BE: POST /api/auth/refresh (refreshToken)
    BE->>R: Validate token exists & not revoked
    R-->>BE: Valid
    BE->>R: Revoke old token (rotation)
    BE->>BE: Issue new access + refresh token
    BE->>R: Store new refresh token
    BE-->>FE: { accessToken, refreshToken }
```

### 5.3 Google Social Login (No Keycloak)
```mermaid
sequenceDiagram
    participant U as Customer
    participant FE as Next.js
    participant G as Google
    participant BE as Spring Boot

    U->>FE: Click "Sign in with Google"
    FE->>G: Redirect to Google OAuth consent
    G-->>FE: Authorization code (callback)
    FE->>BE: POST /api/auth/oauth/google (code)
    BE->>G: Exchange code for Google profile
    G-->>BE: email, name, sub (Google ID)
    BE->>BE: Find or create CUSTOMER user
    BE->>BE: Issue Xuma JWT (same as normal login)
    BE-->>FE: { accessToken, refreshToken }
```

---

## 6. Order Lifecycle Flow (Real-Time)

```mermaid
sequenceDiagram
    participant W as Waiter (POS)
    participant BE as Backend
    participant WS as WebSocket Broker
    participant K as Kitchen (KDS)
    participant C as Cashier

    W->>BE: POST /api/orders (items, table)
    BE->>BE: Create Order (status=PENDING)
    BE->>WS: Broadcast /topic/orders/new
    WS-->>K: New order appears in queue
    K->>BE: PATCH /api/orders/{id}/status (PREPARING)
    BE->>WS: Broadcast /topic/orders/{id}/status
    WS-->>W: Waiter sees "Preparing"
    K->>BE: PATCH status (READY)
    BE->>WS: Broadcast READY
    WS-->>W: Waiter notified to serve
    W->>BE: PATCH status (SERVED)
    C->>BE: POST /api/payments (orderId, method)
    BE->>BE: Order status = PAID, table = AVAILABLE
    BE->>WS: Broadcast /topic/tables/status
```

---

## 7. Data Flow & Caching Strategy

```mermaid
graph LR
    Req["GET /api/menu"] --> Check{In Redis?}
    Check -->|Hit| Return["Return cached JSON"]
    Check -->|Miss| DB[("PostgreSQL")]
    DB --> Cache["Write to Redis<br/>TTL 10 min"]
    Cache --> Return
    Write["Menu update<br/>(admin)"] --> Evict["Evict Redis menu key"]
```

**Cache keys:**
- `menu:full` — entire menu (TTL 10 min, evicted on any menu write)
- `menu:featured` — featured items (TTL 10 min)
- `refresh:{userId}:{tokenId}` — refresh token store
- `ratelimit:{ip}` — login rate limiting

---

## 8. Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Performance** | Page load < 1s, API p95 < 200ms, WS latency < 100ms |
| **Scalability** | Stateless backend (horizontal scaling), 500+ concurrent users |
| **Security** | BCrypt (cost 12), JWT 15min access / 7day refresh, HTTPS only, CORS locked, SQL injection safe (JPA), rate limiting on auth endpoints, httpOnly+Secure+SameSite cookies |
| **Availability** | 99.9% uptime, health checks, graceful shutdown |
| **Observability** | Spring Actuator, structured logging (Logback JSON), distributed tracing (Micrometer) |
| **Data** | Daily automated PG backups, soft-delete for orders/menu (audit trail) |
| **Accessibility** | WCAG 2.1 AA on all customer-facing pages |

---

## 9. Deployment Topology

```mermaid
graph TB
    subgraph Internet
        Users["Users"]
    end
    subgraph Edge
        CDN["CDN / Vercel Edge"]
        LB["Load Balancer"]
    end
    subgraph Cloud["Cloud (AWS/GCP/Render)"]
        FE1["Next.js Instance"]
        BE1["Spring Boot Instance 1"]
        BE2["Spring Boot Instance 2"]
        PG[("PostgreSQL<br/>Primary + Replica")]
        RD[("Redis")]
    end
    Users --> CDN --> FE1
    FE1 --> LB
    LB --> BE1
    LB --> BE2
    BE1 --> PG
    BE2 --> PG
    BE1 --> RD
    BE2 --> RD
```

**Backend is stateless** → scale horizontally behind the load balancer. Sessions live in JWT + Redis, not in app memory.

---

## 10. Security Hardening Checklist

- [ ] Passwords hashed with BCrypt (strength 12)
- [ ] Access tokens expire in 15 minutes
- [ ] Refresh tokens rotate on every use, stored hashed in Redis
- [ ] All endpoints HTTPS-only in production
- [ ] CORS restricted to known frontend origin
- [ ] Rate limiting on `/api/auth/**` (5 attempts / 15 min per IP)
- [ ] JWT secret from environment, min 256-bit, rotated periodically
- [ ] Cookies: `httpOnly`, `Secure`, `SameSite=Strict`
- [ ] Input validation via `@Valid` + Bean Validation on all DTOs
- [ ] No sensitive data in logs (mask emails, never log tokens)
- [ ] Method-level `@PreAuthorize` on every protected service method
- [ ] CSRF protection enabled for cookie-based auth
- [ ] Stripe webhooks signature-verified

---

*End of Document 1 — System Design. Continue to Document 2: Class Diagram & Relationships.*
