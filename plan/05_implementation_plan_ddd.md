# 🚀 Xuma Restaurant POS — 10-Phase Implementation Plan

**Role:** Software Architect / Principal Engineer
**Document:** 5 of 5 — Master Implementation Plan

> **Focus:** This document outlines the 10-phase execution plan. We follow a **Frontend-First, Contract-Driven** approach. The overly complex DDD Hexagonal layers have been simplified into a **Lite-DDD Package-by-Feature** architecture to ensure clean, readable, and highly maintainable code.

---

## 0. Contract-Driven, Frontend-First Execution

1. **Contract First:** Phase 1 defines the OpenAPI 3.1 contract.
2. **Mock Server:** Frontend (Phases 1-5) is built against a Mock Service Worker (MSW) using this contract.
3. **Backend Swap:** Backend (Phases 6-10) implements the API exactly as contracted. The frontend requires zero rework.

---

## 1. Lite-DDD Foundation (Simplified)

Instead of complex multi-module Hexagonal layers, we use **Rich Domain Models** within a standard **Package-by-Feature** Spring Boot application. 

- **Bounded Contexts** become standard Java packages (`menu`, `order`, `table`).
- **Aggregates (Entities)** encapsulate business rules (e.g., `Order` calculates its own total and guards state transitions).
- **Domain Events** are used purely for cross-package decoupled communication (e.g., `OrderPaidEvent` triggers WebSocket updates).

### Ubiquitous Language
- **Order:** Central aggregate for customer requests.
- **Ticket:** Kitchen's view of an Order.
- **Settle:** To pay and close an order.
- **86'd:** Item is unavailable.

---

## 🎨 FRONTEND PHASES (1–5) - Built against Mock API

### PHASE 1 — Foundation, Contract & Design System
- Define **OpenAPI Contract** as the single source of truth.
- Scaffold Next.js 14+ with Tailwind CSS.
- Setup MSW (Mock Service Worker) to return mock data based on the OpenAPI contract.
- Build basic Design System (colors, fonts, UI primitives).

### PHASE 2 — Authentication & Public Site
- Login, Register, OAuth pages.
- Handle JWT tokens via HttpOnly cookies and Next.js middleware routing guards.
- Public facing pages: Home, Menu (with search/filter), Reserve Table, Self-Order.

### PHASE 3 — POS Terminal (Cashier / Waiter)
- Two-panel POS UI: Menu Grid + Cart/Order Builder.
- Table selection, split bill, hold order.
- Mock Stripe elements for testing payments.
- Optimistic UI updates.

### PHASE 4 — Kitchen Display System (KDS) & Real-Time
- Build KDS screen with live ticket queues (color-coded by wait time).
- Mock WebSocket setup for real-time ticket updates.
- Real-time status propagation to POS and public tracking.

### PHASE 5 — Admin Dashboard & Reports
- Admin UI for Menu CRUD, User Role assignment.
- Dashboards with KPI cards and charts (revenue, top items).
- Final Polish: Skeletons, Error Boundaries, Accessibility (WCAG).
- **Frontend Done. Ready for Real API.**

---

## ☕ BACKEND PHASES (6–10) - Implementing the Contract

### PHASE 6 — Core Infrastructure & Identity Context
- Spring Boot scaffold (Java 21, Web, Security, JPA, PostgreSQL, Flyway).
- Setup shared utilities (Global Exception Handler, ApiResponse, JWT Filters).
- **Identity:** Implement `auth` and `user` packages. Login, Register, JWT generation.
- *Verify:* Frontend auth swaps to real API flawlessly.

### PHASE 7 — Catalog (Menu) Context
- Implement `menu` package (Entities, Repo, Service, Controller).
- Implement Redis caching for menu reads, evicting on writes.
- Enforce method-level security (`@PreAuthorize("hasAuthority('menu:write')")`).
- *Verify:* Frontend menu loads from real API.

### PHASE 8 — Ordering Context (Core Domain) + Real-Time
- Implement `order` package. This is a rich aggregate: `Order` and `OrderItem`.
- State Machine logic for Order Status transitions.
- WebSocket STOMP setup (`/topic/orders/new`). `OrderEventPublisher` broadcasts updates.
- *Verify:* POS and KDS swap to real API and real WebSockets.

### PHASE 9 — Floor & Billing Contexts
- Implement `table` package for seating and reservations.
- Implement `payment` package for Stripe Integration and Receipt generation.
- Strategy pattern for payment methods.
- *Verify:* Stripe test mode successfully completes orders.

### PHASE 10 — Reporting Context & Hardening
- Implement `report` package (aggregate analytics queries).
- **Hardening:** Rate Limiting, Actuator, CORS validation.
- End-to-End integration testing and security review.
- Dockerize both Frontend and Backend, create `docker-compose.prod.yml`.
- **System Ready for Production.**
