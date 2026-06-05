# 🏗️ Xuma Restaurant POS — Code Architecture

**Role:** Software Architect / Principal Engineer
**Document:** 2 of 5 — Code Architecture (Backend + Frontend)
**Principles:** KISS · DRY · YAGNI · Boring Technology

> **For the build agent:** This document defines *how code is structured and named*. It is the contract every file in the repo must follow. If something is not in this document, follow the existing convention in the codebase. If it's still ambiguous, choose the simpler option.

---

## 1. Core Philosophy

> The best code is code another engineer can read at 2 AM during an outage and understand in 90 seconds.

| Principle | What it looks like in this codebase |
|---|---|
| **Clarity over cleverness** | A 10-line straightforward method beats a 3-line "elegant" stream chain nobody can debug |
| **One responsibility per class** | A class name should be a noun. If you can't name it without "and", split it |
| **Compose, don't inherit** | No deep class hierarchies. Final classes by default. Interfaces only for true polymorphism (Strategy, Repository) |
| **Boring beats novel** | Pick the framework's default. Spring's "magic" is acceptable when documented; custom magic is not |
| **Fail loud, fail early** | Throw specific exceptions at the boundary. Never silently swallow |
| **Tell, don't ask** | Rich entities behave; services orchestrate. Don't pull all data out of an entity and act on it externally |

---

## 2. Backend Architecture (Spring Boot)

### 2.1 Package Structure — Package-by-Feature (Lite-DDD)

```
com.xuma.pos
├── XumaPosApplication.java
│
├── config/                              # Cross-cutting configuration
│   ├── SecurityConfig.java
│   ├── WebSocketConfig.java
│   ├── RedisConfig.java
│   ├── JpaConfig.java                   # auditing, naming strategy
│   ├── OpenApiConfig.java
│   ├── CorsConfig.java
│   └── RateLimitConfig.java
│
├── common/                              # Shared building blocks (no feature logic)
│   ├── api/
│   │   ├── ApiResponse.java             # uniform envelope
│   │   ├── ErrorResponse.java
│   │   └── PageResponse.java
│   ├── exception/
│   │   ├── BusinessException.java       # base
│   │   ├── NotFoundException.java
│   │   ├── ConflictException.java
│   │   ├── ForbiddenException.java
│   │   ├── ValidationException.java
│   │   └── GlobalExceptionHandler.java  # @RestControllerAdvice
│   ├── domain/
│   │   ├── AuditableEntity.java         # @MappedSuperclass: createdAt, updatedAt
│   │   └── SoftDeletableEntity.java     # adds deletedAt
│   ├── util/
│   │   ├── IdGenerator.java             # human-readable order numbers
│   │   └── MoneyUtil.java               # BigDecimal helpers, scale=2
│   └── validation/
│       └── (custom validators)
│
├── auth/                                # Phase 2 — authentication only
│   ├── api/
│   │   ├── AuthController.java
│   │   └── dto/
│   │       ├── LoginRequest.java
│   │       ├── RegisterRequest.java
│   │       ├── RefreshRequest.java
│   │       ├── OAuthCallbackRequest.java
│   │       └── TokenResponse.java
│   ├── service/
│   │   ├── AuthService.java             # interface
│   │   ├── AuthServiceImpl.java
│   │   ├── JwtService.java              # encode/decode/validate
│   │   ├── RefreshTokenService.java
│   │   └── GoogleOAuthService.java
│   ├── domain/
│   │   ├── RefreshToken.java
│   │   └── AuthProvider.java
│   ├── repository/
│   │   └── RefreshTokenRepository.java
│   └── security/
│       ├── JwtAuthFilter.java
│       ├── JwtAuthEntryPoint.java
│       ├── UserPrincipal.java           # implements UserDetails
│       └── PermissionEvaluator.java
│
├── user/                                # Phase 2 — User/Role/Permission
│   ├── api/
│   │   ├── UserController.java
│   │   └── dto/...
│   ├── service/
│   │   ├── UserService.java
│   │   └── UserServiceImpl.java
│   ├── domain/
│   │   ├── User.java
│   │   ├── Role.java
│   │   └── Permission.java
│   ├── repository/
│   │   ├── UserRepository.java
│   │   ├── RoleRepository.java
│   │   └── PermissionRepository.java
│   └── mapper/
│       └── UserMapper.java              # MapStruct
│
├── profile/                             # Staff & Customer profiles
│   ├── api/...
│   ├── service/...
│   ├── domain/
│   │   ├── Staff.java
│   │   └── Customer.java
│   └── repository/...
│
├── menu/                                # Phase 3 — Catalog
│   ├── api/
│   │   ├── MenuController.java          # public reads
│   │   ├── MenuAdminController.java     # admin writes
│   │   └── dto/...
│   ├── service/
│   │   ├── MenuService.java
│   │   ├── MenuServiceImpl.java
│   │   └── MenuCacheService.java        # Redis ops isolated here
│   ├── domain/
│   │   ├── Category.java
│   │   ├── MenuItem.java
│   │   └── Allergen.java
│   ├── repository/...
│   └── mapper/...
│
├── order/                               # Phase 4 — Core domain
│   ├── api/
│   │   ├── OrderController.java
│   │   └── dto/...
│   ├── service/
│   │   ├── OrderService.java
│   │   ├── OrderServiceImpl.java
│   │   ├── OrderNumberGenerator.java
│   │   └── OrderEventPublisher.java     # publishes to WS topics
│   ├── domain/
│   │   ├── Order.java                   # rich aggregate root
│   │   ├── OrderItem.java
│   │   ├── OrderStatus.java
│   │   ├── OrderItemStatus.java
│   │   ├── OrderType.java
│   │   └── OrderStateMachine.java       # pure transition rules
│   ├── repository/...
│   ├── mapper/...
│   └── ws/
│       └── OrderEventBroadcaster.java   # listens to events, sends STOMP
│
├── table/                               # Phase 5 — Floor
│   ├── api/...
│   ├── service/...
│   ├── domain/
│   │   ├── RestaurantTable.java
│   │   ├── Reservation.java
│   │   ├── TableStatus.java
│   │   ├── TableSection.java
│   │   └── ReservationStatus.java
│   └── repository/...
│
├── payment/                             # Phase 5 — Billing
│   ├── api/...
│   ├── service/
│   │   ├── PaymentService.java
│   │   ├── PaymentServiceImpl.java
│   │   ├── StripeService.java
│   │   ├── ReceiptService.java
│   │   └── strategy/                    # Strategy pattern for methods
│   │       ├── PaymentStrategy.java
│   │       ├── CashPaymentStrategy.java
│   │       ├── CardPaymentStrategy.java
│   │       └── SplitPaymentStrategy.java
│   ├── domain/
│   │   ├── Payment.java
│   │   ├── Receipt.java
│   │   ├── PaymentMethod.java
│   │   └── PaymentStatus.java
│   └── webhook/
│       └── StripeWebhookController.java
│
├── report/                              # Phase 5 — Analytics
│   ├── api/...
│   ├── service/...
│   └── dto/...                          # projection records, no entities
│
└── websocket/                           # WS infrastructure (config only; events live in feature packages)
    ├── StompPrincipalHandshakeHandler.java
    └── WebSocketAuthInterceptor.java
```

### 2.2 The Layer Contract (Per Feature)

```
┌──────────────────────────────────────────────────────────────────┐
│ Controller     →  validates input, calls service, returns DTO    │
│                   no try/catch (global handler), no business     │
├──────────────────────────────────────────────────────────────────┤
│ Service        →  orchestrates use cases, @Transactional         │
│                   talks to repositories, emits domain events     │
├──────────────────────────────────────────────────────────────────┤
│ Domain (Entity) → guards its own invariants (rich model)         │
│                   no Spring/JPA logic leaks out                  │
├──────────────────────────────────────────────────────────────────┤
│ Repository     →  Spring Data JPA interface, derived queries     │
│                   + @Query for complex reads, no business        │
├──────────────────────────────────────────────────────────────────┤
│ Mapper         →  MapStruct, pure data conversion                │
└──────────────────────────────────────────────────────────────────┘
```

**Forbidden crossings:**
- ❌ Controller → Repository (must go through service)
- ❌ Entity → Service (entities are passive about infra; they have behavior)
- ❌ Returning entities from controllers (always map to DTO)
- ❌ Catching exceptions just to rethrow them as `RuntimeException`
- ❌ Static state, mutable singletons, field injection

### 2.3 Naming Conventions

| Element | Pattern | Example |
|---|---|---|
| Entity | Singular noun | `Order`, `MenuItem` |
| Repository | `<Entity>Repository` | `OrderRepository` |
| Service interface | `<Entity>Service` | `OrderService` |
| Service impl | `<Entity>ServiceImpl` | `OrderServiceImpl` |
| Controller | `<Entity>Controller` | `OrderController` |
| Admin controller | `<Entity>AdminController` | `MenuAdminController` |
| Request DTO | `<Verb><Entity>Request` | `CreateOrderRequest`, `UpdateMenuItemRequest` |
| Response DTO | `<Entity>Response` | `OrderResponse` |
| Summary DTO | `<Entity>Summary` | `OrderSummary` (lightweight list view) |
| Mapper | `<Entity>Mapper` | `OrderMapper` |
| Exception | `<Domain><Problem>Exception` | `OrderNotFoundException`, `InvalidOrderStateException` |
| Event | `<Entity><PastTenseVerb>Event` | `OrderPaidEvent`, `OrderCancelledEvent` |
| Config | `<Concern>Config` | `SecurityConfig`, `RedisConfig` |
| Enum | Singular noun | `OrderStatus` |
| Test | `<ClassUnderTest>Test` (unit) or `<Feature>IT` (integration) | `OrderServiceTest`, `OrderApiIT` |

### 2.4 Method Naming (Service Layer)

Methods read like English. Verbs are domain verbs, not CRUD verbs.

| ❌ Avoid | ✅ Prefer |
|---|---|
| `process(orderId)` | `markOrderAsPaid(orderId)` |
| `update(order, status)` | `transitionTo(order, status)` |
| `doStuff(req)` | `placeOrder(req)` |
| `handle(payment)` | `settlePayment(payment)` |
| `get(id)` | `findById(id)` (returns `Optional`) or `getById(id)` (throws if missing) |
| `save(x)` | `register(x)`, `create(x)`, `update(x)` — be specific |

### 2.5 Design Patterns Used (Where & Why)

| Pattern | Where | Reason |
|---|---|---|
| **Builder** | DTOs, entity construction in tests | Readable construction, Lombok `@Builder` |
| **Repository** | All data access | Spring Data default, no manual JDBC |
| **Service Layer** | All feature packages | Transaction boundary, orchestration |
| **State Machine** | `OrderStateMachine` | Enforce legal transitions in one place |
| **Strategy** | Payment methods | Cash / Card / Split / Voucher swap cleanly |
| **Observer (Pub/Sub)** | `OrderEventPublisher` → WS broadcaster | Decouple WS from order service |
| **Specification** | Complex queries (orders by filter) | Composable query predicates |
| **Façade** | `MenuCacheService` wraps Redis | Hide caching from service code |
| **DTO + Mapper** | All API boundaries | Entities never leak |
| **Template Method** | `AuditableEntity` base | Common audit fields, JPA listener |
| **Factory** | `OrderNumberGenerator` | Centralized format `ORD-yyyyMMdd-####` |

### 2.6 Exception Strategy

A single global handler turns exceptions into `ApiResponse.error(...)`.

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleNotFound(NotFoundException e) {
        return ResponseEntity.status(404).body(ApiResponse.error(e.getMessage()));
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Map<String,String>>> handleValidation(MethodArgumentNotValidException e) {
        Map<String,String> fieldErrors = e.getBindingResult().getFieldErrors().stream()
            .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage, (a,b)->a));
        return ResponseEntity.badRequest().body(ApiResponse.error("Validation failed", fieldErrors));
    }
    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ApiResponse<Void>> handleBusiness(BusinessException e) {
        return ResponseEntity.status(e.getStatus()).body(ApiResponse.error(e.getMessage()));
    }
    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiResponse<Void>> handleForbidden(AccessDeniedException e) {
        return ResponseEntity.status(403).body(ApiResponse.error("Access denied"));
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handleAny(Exception e) {
        log.error("Unexpected", e);
        return ResponseEntity.status(500).body(ApiResponse.error("Internal error"));
    }
}
```

**Rule:** Controllers and services never `try/catch` for control flow. Throw a specific exception; let the handler render the response.

### 2.7 ApiResponse Envelope (Uniform)

```java
public record ApiResponse<T>(
    boolean success,
    T data,
    String message,
    Object errors,
    Instant timestamp
) {
    public static <T> ApiResponse<T> ok(T data) {
        return new ApiResponse<>(true, data, null, null, Instant.now());
    }
    public static <T> ApiResponse<T> ok(T data, String message) {
        return new ApiResponse<>(true, data, message, null, Instant.now());
    }
    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>(false, null, message, null, Instant.now());
    }
    public static <T> ApiResponse<T> error(String message, Object errors) {
        return new ApiResponse<>(false, null, message, errors, Instant.now());
    }
}
```

### 2.8 Rich Domain Models (Lite-DDD)

Entities own their invariants. Services should not reach in and mutate fields directly.

```java
@Entity
@Table(name = "orders")
public class Order extends AuditableEntity {
    @Id @GeneratedValue Long id;
    String orderNumber;
    @Enumerated(EnumType.STRING) OrderStatus status;
    BigDecimal subtotal, tax, discount, total;
    @OneToMany(mappedBy="order", cascade=CascadeType.ALL, orphanRemoval=true)
    List<OrderItem> items = new ArrayList<>();
    // ...

    // Behavior — invariants live here
    public void addItem(MenuItem menuItem, int quantity, String note) {
        if (status != OrderStatus.PENDING) {
            throw new InvalidOrderStateException("Cannot modify a " + status + " order");
        }
        items.add(new OrderItem(this, menuItem, quantity, note));
        recalculateTotals();
    }

    public void transitionTo(OrderStatus next) {
        OrderStateMachine.validate(this.status, next);
        this.status = next;
    }

    public void recalculateTotals() {
        this.subtotal = items.stream()
            .map(OrderItem::lineTotal)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        this.tax = MoneyUtil.calculateTax(subtotal);
        this.total = subtotal.add(tax).subtract(discount == null ? BigDecimal.ZERO : discount);
    }
}
```

The service then reads like: `order.addItem(item, qty, note); orderRepo.save(order);` — never `order.setStatus(PAID)` directly.

### 2.9 Money & Time Rules

- Money: `BigDecimal`, always `setScale(2, RoundingMode.HALF_UP)`. Stored as `NUMERIC(10,2)`.
- Time: `Instant` for timestamps, `LocalDate` for calendar dates, `LocalTime` for time-of-day, `LocalDateTime` only for naive wall-clock times. **Never** `java.util.Date`.
- Timezone: UTC in DB and API. Frontend converts to user locale at display.

### 2.10 Validation Strategy

| Layer | Mechanism | Example |
|---|---|---|
| HTTP boundary | `@Valid` + Bean Validation annotations on DTOs | `@NotBlank`, `@Email`, `@Positive` |
| Domain | Throw `BusinessException` from entity/service | `if (qty <= 0) throw ...` |
| Database | Constraints, NOT NULL, FK, unique | Belt-and-braces |

DTO example:

```java
public record CreateOrderRequest(
    @NotNull OrderType type,
    Long tableId,
    Long customerId,
    @NotEmpty @Size(max=50) List<@Valid OrderItemRequest> items,
    @Size(max=500) String customerNote
) {}

public record OrderItemRequest(
    @NotNull Long menuItemId,
    @Min(1) @Max(99) int quantity,
    @Size(max=200) String specialRequest
) {}
```

### 2.11 Testing Architecture

| Test type | Tool | Where |
|---|---|---|
| Unit | JUnit 5, AssertJ, Mockito | `src/test/java/.../service/*Test.java` |
| Slice (web) | `@WebMvcTest` | Controller behavior |
| Slice (data) | `@DataJpaTest` | Repository queries |
| Integration | Testcontainers (real PG + Redis) | `src/test/java/.../*IT.java` |
| State machine | Pure unit, table-driven | `OrderStateMachineTest` |
| Security | `@WithMockUser`, custom annotations | Authorization rules |

**No mocking of repositories in integration tests.** Use Testcontainers. If a test passes in CI but fails in prod due to SQL dialect, that's a self-inflicted wound.

---

## 3. Frontend Architecture (Next.js 14+ App Router)

### 3.1 Folder Structure

```
apps/web/
├── app/                                 # App Router pages
│   ├── (public)/                        # Route group: no auth required
│   │   ├── page.tsx                     # Home
│   │   ├── menu/page.tsx
│   │   ├── reserve/page.tsx
│   │   ├── order/page.tsx               # self-order (QR)
│   │   └── layout.tsx
│   ├── (auth)/                          # Route group: login/register
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── oauth/callback/page.tsx
│   │   └── layout.tsx
│   ├── (staff)/                         # Route group: needs staff role
│   │   ├── pos/page.tsx
│   │   ├── kds/page.tsx
│   │   ├── tables/page.tsx
│   │   └── layout.tsx
│   ├── (admin)/                         # Route group: ADMIN/SUPER_ADMIN
│   │   ├── dashboard/page.tsx
│   │   ├── menu/page.tsx
│   │   ├── staff/page.tsx
│   │   ├── reports/page.tsx
│   │   └── layout.tsx
│   ├── api/                             # BFF proxy routes (token refresh, OAuth)
│   ├── layout.tsx                       # Root layout — fonts, providers
│   ├── globals.css                      # CSS vars from design system
│   ├── not-found.tsx
│   └── error.tsx
│
├── middleware.ts                        # Edge route guard
│
├── components/
│   ├── ui/                              # Generic primitives (shadcn-derived, restyled)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── toast.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   ├── dropdown.tsx
│   │   ├── skeleton.tsx
│   │   └── empty-state.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── nav-link.tsx
│   │   └── language-toggle.tsx
│   ├── menu/
│   │   ├── menu-card.tsx
│   │   ├── menu-row.tsx                 # with dotted leader line
│   │   ├── category-tabs.tsx
│   │   └── allergen-chip.tsx
│   ├── order/
│   │   ├── order-cart.tsx
│   │   ├── order-line.tsx
│   │   ├── order-status-badge.tsx
│   │   └── order-totals.tsx
│   ├── kds/
│   │   ├── ticket-card.tsx
│   │   ├── ticket-timer.tsx
│   │   └── ticket-column.tsx
│   ├── pos/
│   │   ├── menu-grid.tsx
│   │   ├── table-picker.tsx
│   │   └── payment-dialog.tsx
│   └── reservation/
│       └── reservation-form.tsx
│
├── lib/
│   ├── api/
│   │   ├── client.ts                    # fetch wrapper, auto-refresh, error norm
│   │   ├── endpoints.ts                 # typed endpoint constants
│   │   └── types.ts                     # types generated from OpenAPI
│   ├── auth/
│   │   ├── session.ts                   # server-side token reading
│   │   ├── role-check.ts                # hasRole, hasPermission helpers
│   │   └── oauth.ts
│   ├── ws/
│   │   ├── stomp-client.ts              # reconnect, subscribe, publish
│   │   └── use-stomp.ts                 # React hook
│   ├── i18n/
│   │   ├── dictionaries/{nl,en}.ts
│   │   └── use-translation.ts
│   ├── format/
│   │   ├── currency.ts                  # Intl.NumberFormat, EUR
│   │   ├── date.ts                      # date-fns + locale
│   │   └── duration.ts
│   ├── motion/
│   │   └── presets.ts                   # easings, transitions
│   └── utils/
│       └── cn.ts                        # className merger
│
├── hooks/
│   ├── use-menu.ts                      # TanStack Query wrappers
│   ├── use-orders.ts
│   ├── use-tables.ts
│   ├── use-current-user.ts
│   ├── use-permissions.ts
│   └── use-toast.ts
│
├── store/                               # Zustand stores
│   ├── cart-store.ts                    # POS cart state (durable)
│   ├── kds-store.ts                     # KDS filter/sort state
│   └── ui-store.ts                      # sheets, drawers, modals
│
├── styles/
│   └── tokens.css                       # CSS variables from 07_color_system.md
│
├── public/
│   ├── textures/linen-grain.png
│   ├── motifs/delft-tile.svg
│   └── locales/{nl,en}/...
│
├── tests/
│   ├── unit/...                         # Vitest
│   └── e2e/...                          # Playwright
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

### 3.2 Component Layering

```
┌──────────────────────────────────────────────────────────────────┐
│ Page (app/.../page.tsx)                                          │
│   - Data fetching (server component) or hooks (client component) │
│   - Layout composition                                           │
├──────────────────────────────────────────────────────────────────┤
│ Feature components (components/<feature>/...)                    │
│   - Bound to a domain (menu, order, kds, pos)                    │
│   - Compose UI primitives                                        │
├──────────────────────────────────────────────────────────────────┤
│ UI primitives (components/ui/...)                                │
│   - Generic, reusable, no domain logic                           │
│   - Style via design tokens                                      │
└──────────────────────────────────────────────────────────────────┘
```

Rule: a feature component may import UI primitives. A UI primitive must never import a feature component. UI primitives are the bottom of the stack.

### 3.3 Server vs Client Components

**Default: Server Component.** Add `'use client'` only when you truly need:

| Need | Why client |
|---|---|
| `useState`, `useEffect`, `useRef` | Hooks |
| Event handlers (`onClick`, `onChange`) | Interactivity |
| Browser APIs (`localStorage`, `IntersectionObserver`) | DOM |
| Real-time (WebSocket) | Persistent connection |
| TanStack Query, Zustand | Client-only state |

Server components handle: initial data fetch with cookies, SEO-critical content, layout shells.

### 3.4 State Management Hierarchy

```
┌──────────────────────────────────────────────────────────────┐
│ URL state         →  Filters, tabs, pagination               │
│                      Read with useSearchParams, write with   │
│                      router.replace — shareable, back/forward│
├──────────────────────────────────────────────────────────────┤
│ Server state      →  TanStack Query                          │
│                      Menu, orders, tables, users — anything  │
│                      that came from the API                  │
├──────────────────────────────────────────────────────────────┤
│ Form state        →  React Hook Form                         │
│                      Local to the form, validated with Zod   │
├──────────────────────────────────────────────────────────────┤
│ Global UI state   →  Zustand                                 │
│                      POS cart (persist), open dialogs, theme │
├──────────────────────────────────────────────────────────────┤
│ Local component   →  useState                                │
└──────────────────────────────────────────────────────────────┘
```

**Do not put server data in Zustand.** TanStack Query already caches it.

### 3.5 API Client Pattern

One typed wrapper around `fetch`, used by all hooks. Auto-refreshes JWT on 401.

```ts
// lib/api/client.ts
type FetchOpts = RequestInit & { auth?: boolean };

export async function apiFetch<T>(path: string, opts: FetchOpts = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...opts,
    headers: { 'Content-Type': 'application/json', ...opts.headers },
    credentials: 'include',
  });
  if (res.status === 401 && opts.auth !== false) {
    await refreshSession();
    return apiFetch<T>(path, { ...opts, auth: false }); // retry once
  }
  const body = await res.json();
  if (!body.success) throw new ApiError(body.message, body.errors);
  return body.data as T;
}
```

### 3.6 Naming Conventions

| Element | Pattern | Example |
|---|---|---|
| Component file | `kebab-case.tsx` | `menu-card.tsx` |
| Component name | `PascalCase` | `MenuCard` |
| Hook file | `use-<thing>.ts` | `use-orders.ts` |
| Hook name | `useThing` | `useOrders` |
| Store file | `<thing>-store.ts` | `cart-store.ts` |
| Type | `PascalCase` | `OrderResponse`, `CartLine` |
| Constant | `SCREAMING_SNAKE` | `MAX_ORDER_ITEMS` |
| CSS var | `--kebab-case` | `--primary`, `--accent` |
| Route | lowercase folders | `/pos/order/[id]` |

### 3.7 Component Anatomy Template

```tsx
'use client';
import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

type MenuCardProps = {
  name: string;
  description?: string;
  priceEur: number;
  imageUrl?: string;
  allergens?: string[];
  featured?: boolean;
  onAdd?: () => void;
  className?: string;
};

export function MenuCard({
  name, description, priceEur, imageUrl, allergens = [], featured, onAdd, className,
}: MenuCardProps) {
  return (
    <article className={cn(
      'group relative overflow-hidden rounded-lg border border-sand bg-surface shadow-soft',
      'transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lift',
      className
    )}>
      {/* ... */}
    </article>
  );
}
```

**Rules:**
- One default-shape prop type per file, named `<Component>Props`.
- Optional props get defaults in destructuring, not inside JSX.
- `cn(...)` for conditional classes (combine `clsx` + `tailwind-merge`).
- All interactive elements get focus-visible styles via global CSS, not per-component.

### 3.8 Design Token Wiring

All colors come from `globals.css` (defined in `07_color_system.md` §6). Tailwind reads them via the config (§7). Components reference *semantic* tokens, not raw palettes:

```tsx
// ✅ Good
<button className="bg-primary text-primary-fg hover:bg-[color:var(--primary-hover)]">

// ❌ Bad — couples component to a specific shade
<button className="bg-cacao-600 hover:bg-cacao-500">
```

Exception: when intentionally picking a palette step for a decorative purpose (e.g., `bg-rose-50` for a tinted callout).

### 3.9 Motion Defaults

Defined once, reused everywhere.

```ts
// lib/motion/presets.ts
export const easeOutSoft = [0.22, 1, 0.36, 1] as const;
export const fadeRise = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOutSoft },
};
export const cardHover = { whileHover: { y: -2 }, transition: { duration: 0.4, ease: easeOutSoft } };
```

Respect `prefers-reduced-motion` globally — Framer Motion handles this via the `MotionConfig` provider at the root.

### 3.10 Accessibility Rules (Enforced)

- Every `<img>` has `alt` (empty string only for purely decorative).
- Every interactive element is a `<button>` or `<a>`, never a `<div onClick>`.
- All forms use `<label>` linked via `htmlFor`/`id` — RHF + shadcn `Label` handles this.
- Tab order matches visual order. No `tabIndex > 0`.
- Focus rings always visible — never `outline: none` without replacement.
- Color is never the only signal — status uses color + icon + text.
- Min tap target 44×44px on POS/KDS (critical: touchscreen).

### 3.11 Testing Architecture (Frontend)

| Layer | Tool | What |
|---|---|---|
| Unit | Vitest + Testing Library | Pure helpers, hooks, reducers |
| Component | Vitest + Testing Library | UI behavior, accessibility |
| E2E | Playwright | Full user journeys against real backend |
| Visual | Optional: Chromatic / Percy | Snapshot regression on key pages |

E2E covers the must-work journeys:
1. Customer reserves a table.
2. Waiter takes an order on POS, kitchen sees it.
3. Cashier settles in cash; receipt downloads.
4. Admin disables a menu item; it disappears from public menu.
5. Login → role-based redirect to correct dashboard.

---

## 4. Shared Conventions (BE ↔ FE)

| Concern | Convention |
|---|---|
| Date format on wire | ISO 8601 UTC: `2026-06-05T14:23:00Z` |
| Money on wire | String (`"12.50"`) — avoids floating-point in JSON |
| IDs | Numeric `Long` (no UUIDs unless externally referenced) |
| Order number | Human-readable string `ORD-20260605-0042` |
| Pagination | `{ content, page, size, totalElements, totalPages }` (Spring `Page`) |
| Error shape | `{ success: false, message: string, errors?: object }` |
| Auth | `Authorization: Bearer <jwt>` header *and* `xuma_at` HttpOnly cookie |
| Languages | `Accept-Language: nl, en;q=0.9` — backend responds with localized error messages where appropriate |
| Timezone | All times UTC. Display in `Europe/Amsterdam` |

---

## 5. Code Review Checklist (Use Before Every PR)

```
□ Each new class has one clear responsibility
□ No entity returned from a controller
□ No business logic in a controller
□ No SQL string concatenation; only JPA/JPQL/named params
□ All public methods of services have @Transactional or are read-only
□ All endpoints either @PreAuthorize or public-by-design
□ No System.out / console.log left behind
□ No commented-out code blocks
□ No "TODO" without a ticket id
□ All new env vars in README and docker-compose
□ Flyway migration filename: V<phase>_<number>__<snake_case_description>.sql
□ Tests added; coverage didn't drop
□ No prop drilling more than 2 levels (lift to context or store)
□ No new dependency added without a reason in PR description
```

---

## 6. The Twelve Commandments (Pin These to the Wall)

1. **A class that does two things is two classes.**
2. **A method that needs a comment to explain *what* it does needs a better name.**
3. **A method that needs a comment to explain *why* — write that comment.**
4. **If you can't test it without mocking five things, redesign it.**
5. **Errors are not exceptions to your control flow. Exceptions are exceptions.**
6. **The database knows about money. JSON knows about strings. JavaScript knows nothing.**
7. **A boolean parameter is a code smell. A method that takes three booleans is a refactor.**
8. **`null` is the billion-dollar mistake. Use `Optional` or throw.**
9. **Premature optimization is sin. Premature pessimization (`String +=` in a loop) is too.**
10. **If the test is hard to write, the code is hard to use.**
11. **The simplest design that works is the right design. Ship it. Refactor when reality demands.**
12. **Leave the codebase better than you found it.**

---

*End of Document 2 — Code Architecture. Continue with `backend.md`.*
