# 🏗️ Xuma Restaurant POS — Code Architecture Plan

**Role:** Software Architect / Principal Engineer
**Document:** 4 of 4 — Code Architecture Plan
**Stack:** Spring Boot 3.2+ (Java 21) · Next.js 14+ (TypeScript) · PostgreSQL · Redis

> **Focus:** Clean, readable, and maintainable code. We favor simplicity and standard industry practices over overly complex abstractions. 

---

## 1. Backend Technology Choices

| Concern | Library / Version |
|---|---|
| Language | Java 21 (Records, Pattern Matching) |
| Framework | Spring Boot 3.2+ (Virtual Threads enabled) |
| Web | Spring Web (REST) |
| Security | Spring Security 6 + JWT |
| Persistence | Spring Data JPA + Hibernate 6 |
| Migrations | Flyway |
| Mapping | MapStruct |
| Real-time | Spring WebSocket + STOMP |
| Cache | Spring Data Redis |

---

## 2. Simplified Package Structure (Package-by-Feature)

Instead of complex Hexagonal Architecture folders (`domain`, `application`, `infrastructure` for every feature), we use a highly readable **Package-by-Feature** approach. Each feature owns its layers.

```
com.xuma.pos
├── XumaPosApplication.java
├── config/              # Global configurations (Security, WS, Redis)
├── common/              # Shared exceptions, generic DTOs, utils
├── auth/                # JWT logic, AuthController, AuthService
├── user/                # User entity, repo, permissions
├── menu/                # Menu, Category, Allergen (Controller, Service, Entity, Repo)
├── order/               # Order, OrderItem, OrderStateMachine
├── table/               # RestaurantTable, Reservation
├── payment/             # Payment processing (Stripe)
└── report/              # Analytics and dashboards
```

---

## 3. Clean Code & Layered Responsibility Rules

```
Controller  → Validates input, calls service, maps response to DTO. NO business logic.
Service     → Orchestrates use cases, @Transactional boundaries, business logic.
Repository  → Spring Data JPA interfaces.
Entity      → Domain model. Contains validation invariants (Lite-DDD).
DTO         → Data transfer using Java Records (immutable).
```

**Golden Rules for Readability:**
- **No Entities in Controllers:** Always map Entities to DTOs before returning.
- **Rich Domain Models:** Entities should guard their own invariants (e.g., `order.calculateTotal()`), avoiding anemic models, but without complex ports/adapters.
- **Descriptive Naming:** Methods should read like English (`placeOrder`, `cancelReservation`, not `process()`).
- **Immutability:** Use Java Records for DTOs.

---

## 4. Practical Design Patterns

| Pattern | Where it is used | Why |
|---|---|---|
| **Repository** | Data access layer | Standard Spring abstraction. |
| **Service Layer** | Transaction boundaries | Orchestrates domain entities. |
| **State Machine** | Order lifecycle | Prevents invalid state transitions (e.g., PENDING -> SERVED). |
| **Strategy** | Payments | Handle Cash vs. Card vs. Split easily. |
| **Observer (Pub/Sub)**| WebSockets | Broadcast order updates without tight coupling. |
| **Builder** | Entity/DTO creation | Readable instantiation of complex objects. |

---

## 5. Security (Role & Permission Based)

We use standard Spring Security with JWT and method-level security (`@PreAuthorize`).
Permissions are granular, allowing easy scaling.

```java
@PostMapping("/items")
@PreAuthorize("hasAuthority('menu:write')") 
public ApiResponse<MenuItemResponse> createMenuItem(@Valid @RequestBody CreateMenuItemRequest req) {
    return ApiResponse.ok(menuService.create(req));
}
```

---

## 6. Standardized API Responses

Keep API responses uniform across the application to simplify frontend parsing.

```java
public record ApiResponse<T>(boolean success, T data, String message, Instant timestamp) {
    public static <T> ApiResponse<T> ok(T data) {
        return new ApiResponse<>(true, data, null, Instant.now());
    }
    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>(false, null, message, Instant.now());
    }
}
```

Global exceptions (`@RestControllerAdvice`) catch errors and format them into this structure automatically.

---

## 7. Frontend Architecture (Next.js App Router)

- **UI Components:** Reusable, stateless functional components.
- **State Management:** Zustand for global state (e.g., POS Cart), React Hook Form for forms.
- **Data Fetching:** Custom wrapper around `fetch` interacting with standard hooks.
- **Role Guards:** Route-level middleware and Component-level wrappers to restrict access based on JWT roles.

---
