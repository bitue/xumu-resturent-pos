# Mock Credentials & Roles

This document outlines the mock credentials temporarily configured in the frontend to bypass the backend login sequence during active UI development.

These credentials use the Next.js API route (`src/app/api/auth/login/route.ts`) to mint a real JWT so that the Next.js Middleware route guards can be accurately tested.

| Role / Interface | Email / Username | Password | Redirects To | Granted Permissions |
| :--- | :--- | :--- | :--- | :--- |
| **Admin / Manager** | `[EMAIL_ADDRESS]` | `admin` | `/admin/dashboard` | `SYSTEM_CONFIG` |
| **Cashier / Waiter** | `[EMAIL_ADDRESS]` | `pos` | `/pos` | `ORDER_CREATE` |
| **Kitchen Staff** | `[EMAIL_ADDRESS]` | `kds` | `/kds` | `ORDER_UPDATE_STATUS` |

> [!NOTE]
> When the Spring Boot backend is fully initialized and attached, the temporary `apiFetch` redirect in `src/lib/api/client.ts` will be reverted, and these mock credentials will be replaced by the actual seeded users in the database.
