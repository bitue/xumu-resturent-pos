# 🧩 Xuma Restaurant POS — Class Diagram & Relationships

**Role:** Software Architect / Principal Engineer
**Document:** 2 of 4 — Class Diagram & Relationships
**Layer Convention:** Domain (Entity) → Repository → Service → Controller → DTO

> **For the build agent:** This document shows the object model and how classes relate. Entity field details and DDL are in Document 3. Use these class names *exactly* in code.

---

## 1. Domain Model — Full Class Diagram

```mermaid
classDiagram
    %% ===== AUTH / IDENTITY =====
    class User {
        +Long id
        +String email
        +String passwordHash
        +String fullName
        +String phone
        +boolean enabled
        +AuthProvider provider
        +String providerId
        +LocalDateTime createdAt
        +Set~Role~ roles
    }

    class Role {
        +Long id
        +String name
        +String description
        +Set~Permission~ permissions
    }

    class Permission {
        +Long id
        +String name
        +String description
    }

    class RefreshToken {
        +Long id
        +String tokenHash
        +Long userId
        +LocalDateTime expiresAt
        +boolean revoked
    }

    %% ===== PROFILES =====
    class Staff {
        +Long id
        +User user
        +String employeeCode
        +LocalDate hireDate
        +boolean active
    }

    class Customer {
        +Long id
        +User user
        +int loyaltyPoints
        +LocalDateTime lastVisit
    }

    %% ===== MENU =====
    class Category {
        +Long id
        +String name
        +String icon
        +int sortOrder
        +boolean active
        +List~MenuItem~ items
    }

    class MenuItem {
        +Long id
        +String name
        +String description
        +BigDecimal price
        +String imageUrl
        +boolean available
        +boolean featured
        +int prepTimeMinutes
        +Integer calories
        +Category category
        +Set~Allergen~ allergens
    }

    class Allergen {
        +Long id
        +String name
    }

    %% ===== ORDERS =====
    class Order {
        +Long id
        +String orderNumber
        +OrderType type
        +OrderStatus status
        +BigDecimal subtotal
        +BigDecimal tax
        +BigDecimal discount
        +BigDecimal total
        +String customerNote
        +LocalDateTime createdAt
        +RestaurantTable table
        +Staff assignedWaiter
        +Customer customer
        +List~OrderItem~ items
        +Payment payment
    }

    class OrderItem {
        +Long id
        +int quantity
        +BigDecimal unitPrice
        +String specialRequest
        +OrderItemStatus status
        +Order order
        +MenuItem menuItem
    }

    %% ===== TABLES & RESERVATIONS =====
    class RestaurantTable {
        +Long id
        +String tableNumber
        +int capacity
        +TableSection section
        +TableStatus status
        +Order currentOrder
    }

    class Reservation {
        +Long id
        +LocalDateTime reservationTime
        +int partySize
        +ReservationStatus status
        +Customer customer
        +RestaurantTable table
    }

    %% ===== PAYMENT =====
    class Payment {
        +Long id
        +PaymentMethod method
        +PaymentStatus status
        +BigDecimal amount
        +String stripePaymentIntentId
        +LocalDateTime paidAt
        +Order order
    }

    class Receipt {
        +Long id
        +String receiptNumber
        +String pdfUrl
        +LocalDateTime issuedAt
        +Payment payment
    }

    %% ===== RELATIONSHIPS =====
    User "1" --> "*" Role : has
    Role "*" --> "*" Permission : grants
    User "1" --> "*" RefreshToken : owns
    Staff "1" --> "1" User : profile of
    Customer "1" --> "1" User : profile of

    Category "1" --> "*" MenuItem : contains
    MenuItem "*" --> "*" Allergen : contains

    Order "1" --> "*" OrderItem : composed of
    OrderItem "*" --> "1" MenuItem : references
    Order "*" --> "1" RestaurantTable : seated at
    Order "*" --> "1" Staff : served by
    Order "*" --> "1" Customer : placed by
    Order "1" --> "1" Payment : settled by
    Payment "1" --> "1" Receipt : produces

    Reservation "*" --> "1" Customer : booked by
    Reservation "*" --> "1" RestaurantTable : reserves
    RestaurantTable "1" --> "0..1" Order : current
```

---

## 2. Relationship Cardinality Reference

| From | To | Type | Notes |
|---|---|---|---|
| User → Role | Many-to-Many | Join table `user_roles` |
| Role → Permission | Many-to-Many | Join table `role_permissions` |
| User → RefreshToken | One-to-Many | Cascade delete |
| Staff → User | One-to-One | Staff profile links identity |
| Customer → User | One-to-One | Customer profile links identity |
| Category → MenuItem | One-to-Many | `category_id` FK on menu_item |
| MenuItem → Allergen | Many-to-Many | Join table `menu_item_allergens` |
| Order → OrderItem | One-to-Many | Composition (cascade ALL, orphan removal) |
| OrderItem → MenuItem | Many-to-One | `menu_item_id` FK |
| Order → RestaurantTable | Many-to-One | Nullable (takeaway/delivery) |
| Order → Staff | Many-to-One | `assigned_waiter_id` FK, nullable |
| Order → Customer | Many-to-One | Nullable (walk-in) |
| Order → Payment | One-to-One | `order_id` FK on payment |
| Payment → Receipt | One-to-One | Generated after payment |
| Reservation → Customer | Many-to-One | |
| Reservation → RestaurantTable | Many-to-One | |

---

## 3. Layered Class Structure (Per Domain)

Each domain follows the same vertical slice. Example shown for **Order**:

```mermaid
classDiagram
    class OrderController {
        +createOrder(CreateOrderRequest) OrderResponse
        +getOrder(Long) OrderResponse
        +updateStatus(Long, StatusRequest) OrderResponse
        +listActiveOrders() List~OrderResponse~
        +cancelOrder(Long) void
    }

    class OrderService {
        <<interface>>
        +create(CreateOrderRequest) Order
        +updateStatus(Long, OrderStatus) Order
        +findById(Long) Order
        +findActive() List~Order~
        +cancel(Long) void
    }

    class OrderServiceImpl {
        -OrderRepository orderRepo
        -MenuItemRepository menuRepo
        -OrderStateMachine stateMachine
        -OrderEventPublisher publisher
        +create(CreateOrderRequest) Order
        +updateStatus(Long, OrderStatus) Order
    }

    class OrderRepository {
        <<interface>>
        +findByStatusIn(List~OrderStatus~) List~Order~
        +findByOrderNumber(String) Optional~Order~
    }

    class OrderMapper {
        +toEntity(CreateOrderRequest) Order
        +toResponse(Order) OrderResponse
    }

    class OrderStateMachine {
        +canTransition(OrderStatus, OrderStatus) boolean
        +validate(Order, OrderStatus) void
    }

    OrderController --> OrderService : calls
    OrderController --> OrderMapper : maps
    OrderService <|.. OrderServiceImpl : implements
    OrderServiceImpl --> OrderRepository : uses
    OrderServiceImpl --> OrderStateMachine : enforces
    OrderServiceImpl --> OrderEventPublisher : publishes WS events
```

> **Replicate this slice** for Menu, Table, Payment, Staff, Report, Auth domains.

---

## 4. Enums (Value Types)

```mermaid
classDiagram
    class OrderType {
        <<enumeration>>
        DINE_IN
        TAKEAWAY
        DELIVERY
    }
    class OrderStatus {
        <<enumeration>>
        PENDING
        PREPARING
        READY
        SERVED
        PAID
        CANCELLED
    }
    class OrderItemStatus {
        <<enumeration>>
        PENDING
        PREPARING
        READY
    }
    class TableStatus {
        <<enumeration>>
        AVAILABLE
        OCCUPIED
        RESERVED
        CLEANING
    }
    class TableSection {
        <<enumeration>>
        INDOOR
        OUTDOOR
        BAR
        PRIVATE
    }
    class PaymentMethod {
        <<enumeration>>
        CASH
        CARD
        SPLIT
        VOUCHER
    }
    class PaymentStatus {
        <<enumeration>>
        PENDING
        COMPLETED
        FAILED
        REFUNDED
    }
    class ReservationStatus {
        <<enumeration>>
        PENDING
        CONFIRMED
        SEATED
        CANCELLED
        NO_SHOW
    }
    class AuthProvider {
        <<enumeration>>
        LOCAL
        GOOGLE
    }
```

---

## 5. Order State Machine (Allowed Transitions)

```mermaid
stateDiagram-v2
    [*] --> PENDING
    PENDING --> PREPARING
    PENDING --> CANCELLED
    PREPARING --> READY
    PREPARING --> CANCELLED
    READY --> SERVED
    SERVED --> PAID
    PAID --> [*]
    CANCELLED --> [*]
```

**Enforcement:** `OrderStateMachine.canTransition()` rejects any transition not in this diagram (e.g., `PAID → PREPARING` throws `IllegalStateTransitionException`).

---

## 6. DTO ↔ Entity Mapping Rule

- **Controllers** never expose entities. They accept `*Request` DTOs and return `*Response` DTOs.
- **Mappers** (MapStruct recommended) convert between layers.
- **Services** work with entities internally.

```
HTTP Request → Request DTO → [Mapper] → Entity → [Service/Repo] → Entity → [Mapper] → Response DTO → HTTP Response
```

---

*End of Document 2 — Class Diagram & Relationships. Continue to Document 3: Entity Management.*
