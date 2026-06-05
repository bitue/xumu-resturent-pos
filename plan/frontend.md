# ⚡ Xuma Restaurant POS — Frontend Implementation Plan

**Role:** Software Architect / Principal Engineer
**Document:** 4 of 5 — Frontend (Phases 6–10)
**Stack:** Next.js 14+ (App Router) · TypeScript (strict) · Tailwind CSS · TanStack Query · Zustand · React Hook Form · Framer Motion · STOMP.js

> **For the build agent:** Frontend starts only when backend Phase 5 is green. The OpenAPI spec from the backend is the source of truth — generate TypeScript types from it, never hand-write them. Design tokens come from `06_design_system.md` + `07_color_system.md`. Architecture rules in `code_architecture.md §3`.

---

## 0. Frontend Build Principles

| Principle | What it means in practice |
|---|---|
| **Real APIs only** | No MSW, no fixtures. Backend is up; frontend integrates with it. |
| **Server-first** | Pages are Server Components by default. Add `'use client'` only when truly needed. |
| **Component library first** | Build the UI primitives in Phase 6 before any feature screen. |
| **Design tokens, not raw hex** | Reference `var(--primary)` and Tailwind semantic classes, never `#6B4A33`. |
| **Mobile-first responsive** | Every screen works at 360px first, scales up. |
| **One way to do each thing** | One form library (RHF), one query lib (TanStack), one toast system, one icon set (Lucide). No duplicates. |
| **Accessible by construction** | Semantic HTML, focus rings, labels — all from primitive components, not bolted on. |
| **Motion as polish, not theater** | Subtle and unhurried. Honor `prefers-reduced-motion`. |

---

## PHASE 6 — Frontend Foundation & UI Kit

**Goal:** A Next.js project with the full design system wired up, the UI primitive library built, fonts loaded with zero layout shift, the API client + auth-aware fetch wrapper working against the real backend, and types auto-generated from the OpenAPI spec.

### 6.1 Project Scaffold

```bash
npx create-next-app@latest apps/web \
  --typescript --tailwind --app --src-dir false --import-alias "@/*" --eslint
```

Then add the *exact* dependencies (no extras until justified):

```jsonc
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "@tanstack/react-query": "^5",
    "@tanstack/react-query-devtools": "^5",
    "zustand": "^4",
    "react-hook-form": "^7",
    "@hookform/resolvers": "^3",
    "zod": "^3",
    "@stomp/stompjs": "^7",
    "sockjs-client": "^1.6",
    "framer-motion": "^11",
    "lucide-react": "^0.400",
    "clsx": "^2",
    "tailwind-merge": "^2",
    "date-fns": "^3",
    "@radix-ui/react-dialog": "...",
    "@radix-ui/react-dropdown-menu": "...",
    "@radix-ui/react-tabs": "...",
    "@radix-ui/react-toast": "...",
    "@radix-ui/react-popover": "..."
  },
  "devDependencies": {
    "openapi-typescript": "^7",
    "vitest": "^1",
    "@testing-library/react": "^15",
    "@playwright/test": "^1",
    "@axe-core/playwright": "^4"
  }
}
```

`strict: true` and `noUncheckedIndexedAccess: true` in `tsconfig.json`. No `any`. No `@ts-ignore` without a comment explaining why.

### 6.2 Folder Structure

Build exactly the structure from `code_architecture.md §3.1`. Empty folders are fine.

### 6.3 Design Tokens (`globals.css`)

Copy the full `:root { ... }` block from `07_color_system.md §6` verbatim. Add the dark theme override block. Then layer on:

```css
@import url('https://fonts.googleapis.com/...'); /* fallback — actual loading via next/font */

@layer base {
  html { background: var(--bg); color: var(--text); }
  body {
    font-family: var(--font-body), system-ui, sans-serif;
    font-feature-settings: "ss01", "cv11";
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  h1,h2,h3,h4,h5 {
    font-family: var(--font-display), Georgia, serif;
    color: var(--ink, var(--text));
    line-height: 1.1;
    letter-spacing: -0.01em;
  }
  ::selection { background: var(--accent); color: var(--accent-fg); }
  :focus-visible {
    outline: 2px solid var(--focus-ring);
    outline-offset: 2px;
    border-radius: 4px;
  }
  /* Numerics aligned in menus */
  .tnum { font-variant-numeric: tabular-nums; }
}

@layer utilities {
  .dotted-leader::after {
    content: "";
    flex: 1;
    border-bottom: 1px dotted var(--sand-line);
    margin: 0 8px 6px;
  }
  .text-balance { text-wrap: balance; }
  .text-pretty  { text-wrap: pretty; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

### 6.4 Tailwind Config

Copy the full config from `07_color_system.md §7` and add:

```ts
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
],
screens: {
  // mobile-first
  sm: '480px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px',
  // POS-specific landscape tablet
  tablet: { raw: '(min-width: 1024px) and (orientation: landscape)' },
},
```

### 6.5 Fonts (next/font, Zero CLS)

```ts
// app/fonts.ts
import { Fraunces, Hanken_Grotesk } from 'next/font/google';

export const fontDisplay = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['opsz'],
  display: 'swap',
});

export const fontBody = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// app/layout.tsx
import { fontDisplay, fontBody } from './fonts';
export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### 6.6 Providers

Single `Providers` client component at the root with all global providers:

```tsx
// app/providers.tsx
'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastProvider } from '@/components/ui/toast';
import { MotionConfig } from 'framer-motion';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [qc] = useState(() => new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60_000, gcTime: 5 * 60_000, refetchOnWindowFocus: false, retry: 1 },
      mutations: { retry: 0 },
    },
  }));
  return (
    <QueryClientProvider client={qc}>
      <MotionConfig reducedMotion="user">
        <ToastProvider>{children}</ToastProvider>
      </MotionConfig>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
```

### 6.7 API Client + Generated Types

Generate types from the live OpenAPI spec:

```jsonc
"scripts": {
  "api:types": "openapi-typescript http://localhost:8080/v3/api-docs -o lib/api/openapi.d.ts"
}
```

Run on every backend change (CI step too). Then build a typed wrapper:

```ts
// lib/api/types.ts
import type { paths, components } from './openapi';
export type User       = components['schemas']['UserResponse'];
export type Order      = components['schemas']['OrderResponse'];
export type MenuItem   = components['schemas']['MenuItemResponse'];
// ...

// lib/api/client.ts
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:8080';

export class ApiError extends Error {
  constructor(public message: string, public status: number, public errors?: unknown) { super(message); }
}

let refreshPromise: Promise<void> | null = null;

async function refresh(): Promise<void> {
  if (refreshPromise) return refreshPromise;
  refreshPromise = fetch(`${API_BASE}/api/auth/refresh`, { method: 'POST', credentials: 'include' })
    .then(r => { if (!r.ok) throw new ApiError('Session expired', 401); })
    .finally(() => { refreshPromise = null; });
  return refreshPromise;
}

export async function apiFetch<T>(path: string, init: RequestInit & { retried?: boolean } = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...init.headers },
  });
  if (res.status === 401 && !init.retried) {
    await refresh();
    return apiFetch<T>(path, { ...init, retried: true });
  }
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body?.success === false) {
    throw new ApiError(body?.message ?? `HTTP ${res.status}`, res.status, body?.errors);
  }
  return body.data as T;
}
```

### 6.8 UI Primitive Library

Build these *before* any feature screen. Each one in `components/ui/`. Each one tested with Testing Library for keyboard and screen-reader behavior.

| Primitive | Notes |
|---|---|
| **Button** | Variants: `primary`, `secondary`, `accent` (reserve CTA), `ghost`, `destructive`. Sizes: `sm`, `md`, `lg`. Loading state with spinner replacing label. |
| **Input** | Cream background, sand border, rose focus ring. Includes `Field` wrapper handling label, hint, error. |
| **Textarea** | Same styling. |
| **Select** | Radix `Select` restyled. |
| **Checkbox / Radio / Switch** | Radix primitives, brand-colored. |
| **Card** | `<Card>`, `<CardHeader>`, `<CardBody>`, `<CardFooter>`. Cream-deep surface, sand border, soft shadow. |
| **Dialog** | Radix Dialog, cream surface, soft entrance animation. |
| **Drawer / Sheet** | Side panel for mobile (filters, cart). |
| **Toast** | Radix Toast, four variants (success, error, warning, info). |
| **Tabs** | Editorial style: underlined active state, no boxes. |
| **Badge** | Status colors mapped to semantic tokens. |
| **Tooltip** | Radix Tooltip, ink background, cream text. |
| **DropdownMenu** | Radix DropdownMenu, restyled. |
| **Popover** | Radix Popover. |
| **Skeleton** | Cream-deep with shimmer, used for all loading. |
| **EmptyState** | Icon + heading + body + optional CTA. Used everywhere instead of bare "no data". |
| **Spinner** | Brand-rose stroke, 24px default. |
| **Avatar** | Initials fallback in cacao-100 / cacao-700. |
| **Separator** | Sand hairline. |
| **Pagination** | Numbered + prev/next, accessible. |

**Button reference implementation:**

```tsx
// components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const button = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
  {
    variants: {
      variant: {
        primary:    'bg-[color:var(--primary)] text-[color:var(--primary-fg)] hover:bg-[color:var(--primary-hover)] shadow-soft hover:shadow-lift',
        secondary:  'bg-transparent border border-cacao-600 text-cacao-700 hover:bg-cacao-50',
        accent:     'bg-[color:var(--accent)] text-[color:var(--accent-fg)] hover:bg-rose-500 shadow-soft',
        ghost:      'bg-transparent text-cacao-700 hover:bg-cacao-50',
        destructive:'bg-[#A8443F] text-cream hover:bg-[#923935]',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button> & {
  loading?: boolean;
};
export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, size, loading, className, children, disabled, ...rest }, ref) => (
    <button
      ref={ref}
      className={cn(button({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  )
);
Button.displayName = 'Button';
```

(Use Tailwind arbitrary values for CSS vars where needed: `bg-[color:var(--primary)]`. Verify with Tailwind's JIT.)

### 6.9 Layout Shell

```tsx
// app/layout.tsx — root
import './globals.css';
import { fontDisplay, fontBody } from './fonts';
import { Providers } from './providers';

export const metadata = { title: 'Xuma — Restaurant', description: 'Een culinaire ontdekkingsreis.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${fontDisplay.variable} ${fontBody.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### 6.10 Tests (Phase 6)

- `Button.test.tsx` — variants render, loading disables, focus-visible style applied
- `apiClient.test.ts` — 401 triggers refresh and one retry, no infinite loop
- E2E smoke: home page loads, no console errors

### 6.11 Phase 6 — Definition of Done

- [ ] `pnpm dev` boots; home shows brand-styled placeholder
- [ ] Fonts load with zero CLS (Lighthouse)
- [ ] Generated types from `/v3/api-docs` compile
- [ ] All 20+ UI primitives implemented and tested
- [ ] `pnpm typecheck && pnpm lint && pnpm test` all green
- [ ] Storybook (optional) renders all primitives — *or* a `/dev/kitchen-sink` route serves the same purpose
- [ ] Dark mode toggle works on the kitchen-sink page

---

## PHASE 7 — Authentication & Public Site

**Goal:** Login, register, OAuth, and the public website (home, menu, reservation, self-order via QR). Middleware route-guards staff/admin paths.

### 7.1 Auth Flows

**Form pages** (`app/(auth)/...`) use React Hook Form + Zod:

```tsx
// app/(auth)/login/page.tsx
'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiFetch } from '@/lib/api/client';
import { useRouter } from 'next/navigation';

const Schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
type FormValues = z.infer<typeof Schema>;

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(Schema),
  });
  async function onSubmit(values: FormValues) {
    const res = await apiFetch<{ accessToken: string; user: User }>('/api/auth/login', {
      method: 'POST', body: JSON.stringify(values),
    });
    // backend already set HttpOnly cookie; just route
    router.push(roleHome(res.user));
  }
  // ... form JSX
}
```

`roleHome(user)` maps role to dashboard: `SUPER_ADMIN`/`ADMIN` → `/admin/dashboard`, `MANAGER`/`CASHIER`/`WAITER` → `/pos`, `KITCHEN_STAFF` → `/kds`, `CUSTOMER` → `/`.

### 7.2 Middleware Route Guards

```ts
// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC = ['/', '/menu', '/reserve', '/login', '/register', '/oauth'];
const ROLE_GATES: Array<{ prefix: string; perm: string }> = [
  { prefix: '/admin', perm: 'system:config' },        // or any admin perm; refine below
  { prefix: '/pos',   perm: 'order:create' },
  { prefix: '/kds',   perm: 'order:update_status' },
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC.some(p => pathname === p || pathname.startsWith(p + '/'))) return NextResponse.next();

  const token = req.cookies.get('xuma_at')?.value;
  if (!token) return NextResponse.redirect(new URL('/login', req.url));

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
    const permissions = (payload.permissions as string[]) ?? [];
    const gate = ROLE_GATES.find(g => pathname.startsWith(g.prefix));
    if (gate && !permissions.includes(gate.perm)) {
      return NextResponse.redirect(new URL('/forbidden', req.url));
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon|api/).*)'] };
```

Middleware does *coarse* gating (does the user have any permission for this area?). Fine-grained checks (e.g., "can this user delete this specific order?") happen on the backend.

### 7.3 OAuth Callback

`/oauth/callback` page extracts `code` from URL, POSTs to `/api/auth/oauth/google`, redirects to role home on success.

### 7.4 Public Pages

#### 7.4.1 Home (`/`)
- Hero: full-bleed waterfront image, Fraunces headline staggered in, two CTAs (Reserveren = accent, Bekijk menukaart = secondary).
- "Onze keuken" intro paragraph (editorial layout, asymmetric image).
- Featured dishes (3) — from `GET /api/menu/featured`.
- "Goes • Zeeland" location block with subtle map / address.
- Footer with opening hours, NL/EN toggle, social links.

#### 7.4.2 Menu (`/menu`)
- Category tabs (sticky on scroll).
- Each category as a section, dish rows with the **dotted leader line** between name and price.
- Filter by allergen (multi-select chips).
- Search input (client-side fuzzy filter on cached data).

```tsx
// components/menu/menu-row.tsx
export function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-baseline gap-2 py-3">
      <div className="min-w-0 flex-1 flex items-baseline dotted-leader">
        <h3 className="font-display text-xl text-ink shrink-0">{item.name}</h3>
      </div>
      <span className="tnum font-medium text-cacao-700">€{item.priceEur.toFixed(2)}</span>
    </li>
  );
}
```

#### 7.4.3 Reservation (`/reserve`)
- Step form: party size → date → time slot → contact info → confirm.
- Time slots fetched from backend (`GET /api/reservations/slots?date=...`).
- Smooth step transitions with `framer-motion` `AnimatePresence`.

#### 7.4.4 Self-order (`/order?table=N`)
- QR-code-friendly: customer at a table can browse, add to cart, place order linked to that table.
- Lightweight cart in Zustand (`cart-store.ts`), persisted in `localStorage`.

### 7.5 Internationalization (NL primary, EN secondary)

Minimal solution: `lib/i18n/dictionaries/{nl,en}.ts` exports flat objects. A `useTranslation()` hook reads cookie `xuma_lang` (default `nl`), returns `t('home.hero.title')`. Server components read the cookie too. Don't pull in `i18next` unless complexity justifies it.

```ts
// lib/i18n/use-translation.ts
'use client';
import { useCallback } from 'react';
import { useLangStore } from '@/store/ui-store';
import { dictionaries } from './dictionaries';

export function useTranslation() {
  const lang = useLangStore(s => s.lang);
  return useCallback((key: string) => {
    const parts = key.split('.');
    let v: unknown = dictionaries[lang];
    for (const p of parts) v = (v as any)?.[p];
    return (v as string) ?? key;
  }, [lang]);
}
```

### 7.6 Public Page Performance

- Server Components for menu/home so the HTML ships with content (SEO + speed).
- `next/image` for all images with `priority` on hero, `loading="lazy"` elsewhere.
- `revalidate: 600` on the public menu fetch (10 min, matches backend cache TTL).
- Preconnect to API origin in `<head>`.
- Lighthouse target: 95+ on home and menu.

### 7.7 Tests (Phase 7)

- E2E: register → login → role redirect → log out
- E2E: book a reservation as guest
- E2E: middleware blocks unauthorized access to `/admin`
- A11y: axe scan on home, menu, reserve — zero violations

### 7.8 Phase 7 — Definition of Done

- [ ] All auth flows work against backend
- [ ] Google OAuth round-trips
- [ ] Middleware guards work; deep-links to protected pages bounce to login
- [ ] Public home + menu + reserve render in NL by default, switch to EN cleanly
- [ ] Mobile (375px) and desktop (1440px) both look right
- [ ] No console errors on any public page
- [ ] Lighthouse: Perf ≥ 90, A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 95 on home

---

## PHASE 8 — POS Terminal (Cashier / Waiter)

**Goal:** A two-panel POS UI optimized for tablet landscape (1024×768+). Build orders, hold, split, discount, and settle payments.

### 8.1 Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  Header (table, waiter, hold/save/print)                             │
├──────────────────────────────────────────┬───────────────────────────┤
│                                          │                           │
│    Category Tabs                          │   Order Cart              │
│    ┌────┐ ┌────┐ ┌────┐                  │   ───────                 │
│                                          │   Line 1 ...   €12.50     │
│    Menu Grid (3-4 cols)                  │   Line 2 ...   €18.00     │
│    [Card] [Card] [Card]                  │                           │
│    [Card] [Card] [Card]                  │   Subtotal     €30.50     │
│    [Card] [Card] [Card]                  │   Tax          € 2.74     │
│                                          │   Discount     € 0.00     │
│                                          │   ───────                 │
│                                          │   Total        €33.24     │
│                                          │                           │
│                                          │   [ Settle ] (accent)     │
│                                          │   [ Hold ] [ Cancel ]     │
└──────────────────────────────────────────┴───────────────────────────┘
```

Use a CSS grid `grid-cols-[1fr_380px]` on `tablet:` breakpoint and stack vertically on mobile.

### 8.2 Cart State (Zustand, Persisted)

```ts
// store/cart-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Line = { menuItemId: number; name: string; unitPriceEur: number; quantity: number; note?: string };

type CartState = {
  type: 'DINE_IN' | 'TAKEAWAY' | 'DELIVERY';
  tableId?: number;
  lines: Line[];
  customerNote?: string;
  add(line: Line): void;
  setQty(menuItemId: number, qty: number): void;
  remove(menuItemId: number): void;
  clear(): void;
  subtotal(): number;
};

export const useCart = create<CartState>()(persist((set, get) => ({
  type: 'DINE_IN', lines: [],
  add(line) {
    const existing = get().lines.find(l => l.menuItemId === line.menuItemId && l.note === line.note);
    if (existing) get().setQty(line.menuItemId, existing.quantity + line.quantity);
    else set({ lines: [...get().lines, line] });
  },
  setQty(id, qty) {
    if (qty <= 0) return get().remove(id);
    set({ lines: get().lines.map(l => l.menuItemId === id ? { ...l, quantity: qty } : l) });
  },
  remove(id) { set({ lines: get().lines.filter(l => l.menuItemId !== id) }); },
  clear() { set({ lines: [], customerNote: undefined, tableId: undefined }); },
  subtotal() { return get().lines.reduce((s, l) => s + l.unitPriceEur * l.quantity, 0); },
}), { name: 'xuma-cart' }));
```

### 8.3 Order Submission (Optimistic)

`useCreateOrder()` hook wraps a TanStack `useMutation` that:
1. Generates `Idempotency-Key` (UUID) on first attempt.
2. POSTs `/api/orders` with cart contents.
3. On success: clear cart, toast success, navigate to `/pos/order/<id>` for tracking.
4. On 409 with same idempotency key: backend already accepted it — treat as success.
5. On network failure: keep cart, show retry toast.

### 8.4 Split Bill

A drawer that lets the waiter divide the cart into groups (by person or by item) and start parallel payments. Backend treats this as multiple `Payment` rows tied to one `Order`.

### 8.5 Stripe Elements

When method = CARD:
1. Frontend calls `/api/orders/{id}/payment-intent` → receives `clientSecret`.
2. Renders Stripe Payment Element.
3. On confirm: `stripe.confirmPayment({ elements, redirect: 'if_required' })`.
4. On success: POSTs `/api/payments` to settle the order on backend.

Use `@stripe/stripe-js` + `@stripe/react-stripe-js`. Restyle Elements with brand tokens via Stripe's appearance API.

### 8.6 Receipt

After settle: show success modal with receipt preview, three actions:
- **Print** (browser print, CSS print stylesheet on `/pos/receipt/[id]`)
- **Email** (POST `/api/receipts/{id}/email` with customer email)
- **Done** (clear cart, back to POS)

### 8.7 Hold & Resume

A "Hold" button puts the current cart into a `held_orders` list (in Zustand or backend). A "Resume" drawer lists held orders, click to restore into cart. This is purely a frontend convenience for waiters juggling multiple tables.

### 8.8 Phase 8 — Definition of Done

- [ ] Tablet landscape layout looks polished; touch targets ≥ 44px
- [ ] Full happy path: pick table → add items → settle (cash + card) → print receipt
- [ ] Idempotency prevents double-submit on rapid double-tap
- [ ] Discount can be applied as % or absolute
- [ ] Split bill works end-to-end with Stripe test mode
- [ ] Stripe Elements styled to match brand
- [ ] Held orders survive a page reload

---

## PHASE 9 — Kitchen Display System (KDS) & Real-Time

**Goal:** Live kitchen display showing active tickets, color-coded by wait time, updating in real time via WebSocket. Real-time order status propagates to POS and customer tracking page.

### 9.1 KDS Layout

Three columns: **Incoming** (PENDING), **Cooking** (PREPARING), **Ready** (READY). Tickets are large, high-contrast cards optimized for being read across a kitchen. No fluff.

```
┌──────────────────┬──────────────────┬──────────────────┐
│  INCOMING (3)    │  COOKING (5)     │  READY (2)       │
├──────────────────┼──────────────────┼──────────────────┤
│ #ORD-0042  T4    │ #ORD-0040  T7    │ #ORD-0039  T2    │
│ 2× Mosselen      │ 3× Steak frites  │ 1× Oesters       │
│ 1× Pommes        │ 1× Saffron risot │                  │
│ ▌ note: no salt  │ 14:32 (8 min)    │ 14:25 (15 min)   │
│ 14:35 (1 min)    │ ╳    [Ready →]   │ [Served →]       │
│ [Start →]        │                  │                  │
└──────────────────┴──────────────────┴──────────────────┘
```

### 9.2 Ticket Wait-Time Color Coding

Each ticket card border + age label colors by elapsed time since `createdAt`:

| Elapsed | Color (token) |
|---|---|
| 0–5 min | `willow-500` (calm) |
| 5–10 min | `dune-300` (warming) |
| 10–15 min | `warning` (urgent) |
| > 15 min | `error` (overdue, also pulses) |

Implement as a hook so it auto-rerenders every 30s:

```tsx
function useElapsed(since: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);
  return Math.floor((now - new Date(since).getTime()) / 60_000);
}
```

### 9.3 STOMP Client

```ts
// lib/ws/stomp-client.ts
import { Client, type IFrame } from '@stompjs/stompjs';
import SockJS from 'sockjs-client';

type Listener<T> = (msg: T) => void;

export class StompService {
  private client: Client | null = null;
  private subs = new Map<string, { id: string; cb: Listener<unknown> }>();

  connect(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client = new Client({
        webSocketFactory: () => new SockJS(`${process.env.NEXT_PUBLIC_API_BASE}/ws`),
        connectHeaders: { Authorization: `Bearer ${token}` },
        reconnectDelay: 2000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: () => resolve(),
        onStompError: (f: IFrame) => reject(new Error(f.headers['message'] ?? 'STOMP error')),
      });
      this.client.activate();
    });
  }

  subscribe<T>(topic: string, cb: Listener<T>): () => void {
    if (!this.client?.connected) throw new Error('Not connected');
    const sub = this.client.subscribe(topic, msg => cb(JSON.parse(msg.body) as T));
    this.subs.set(topic, { id: sub.id, cb: cb as Listener<unknown> });
    return () => { sub.unsubscribe(); this.subs.delete(topic); };
  }

  disconnect() { this.client?.deactivate(); this.subs.clear(); }
}

export const stomp = new StompService();
```

```ts
// lib/ws/use-stomp.ts
'use client';
import { useEffect } from 'react';
import { stomp } from './stomp-client';

export function useStompSubscription<T>(topic: string | null, onMessage: (msg: T) => void) {
  useEffect(() => {
    if (!topic) return;
    const unsub = stomp.subscribe<T>(topic, onMessage);
    return unsub;
  }, [topic, onMessage]);
}
```

### 9.4 Connecting and Reconnecting

Connect on the first authenticated page mount (in `Providers`, after the user is known). On reconnect: re-subscribe topics, refetch the active orders query (cache might be stale). Show a small status pill ("Live" / "Reconnecting...") in the corner.

### 9.5 KDS Data Flow

1. On mount: `useQuery(['orders','active'], fetchActive)`.
2. Also `useStompSubscription('/topic/orders/new', order => queryClient.setQueryData(['orders','active'], prev => [order, ...prev]))`.
3. Subscribe to `/topic/orders/+/status` (wildcard) to apply status updates.

Optimistic action: kitchen taps "Start" → mutate to PREPARING → immediately update local cache → backend confirms via WS (idempotent).

### 9.6 Customer Tracking Page

`/order/[id]` (public, signed link or order number + last-4-of-phone). Shows live order status with a staged progress bar:

```
[●]────[●]────[ ]────[ ]
Ordered  Cooking  Ready  Served
```

Updates over WS. Calming, no spinner spam.

### 9.7 Tests (Phase 9)

- E2E: place order from POS → KDS shows it within 2s → mark PREPARING → POS sees the status flip
- WS reconnect: kill backend WS, restart, verify auto-reconnect and re-subscription
- KDS color coding correct at boundary minutes (5, 10, 15)

### 9.8 Phase 9 — Definition of Done

- [ ] KDS updates in < 1s after order created on POS
- [ ] Status changes propagate POS ↔ KDS ↔ customer tracking
- [ ] Reconnect works without page reload
- [ ] No memory leaks on long-lived KDS session (verified with Performance tab over 30 minutes)
- [ ] KDS readable from 3 meters (font size, contrast)

---

## PHASE 10 — Admin Dashboard, Reports & Production Polish

**Goal:** Admin tools (menu CRUD, staff, reservations, dashboards) and production-readiness polish.

### 10.1 Admin Dashboard (`/admin/dashboard`)

KPI cards (today / week / month):
- Revenue, order count, avg ticket, top item
- A line chart of revenue (last 30 days) using **Recharts** with brand colors
- A heatmap of orders by day-of-week × hour
- Top 10 dishes table
- Live "active orders" widget (WS-driven)

Use the data fetched at the route level (server component), then progressively enhance with WS for the live widget.

### 10.2 Admin Menu Management (`/admin/menu`)

- Table view (TanStack Table) with pagination, search, filter by category/availability
- Inline edit for price and availability
- Drawer for full edit (image upload via signed URL flow)
- Bulk actions: 86 selected, restock selected
- Categories tab: drag-to-reorder (use `@dnd-kit/sortable`) → PATCH `/api/admin/menu/categories/reorder`

### 10.3 Staff Management (`/admin/staff`)

- List of users with roles
- Assign / revoke roles (with confirmation)
- Activate / deactivate users
- Reset password (sends an email link via backend)
- Invite new staff (creates user, emails set-password link)

### 10.4 Reservation Console (`/admin/reservations`)

- Calendar view (week + day) of upcoming reservations
- Confirm / cancel / seat actions
- Walk-in entry (creates a "Reservation" with status `SEATED` immediately)

### 10.5 Reports (`/admin/reports`)

- Date range picker (sand-styled, branded)
- Export to CSV (client-side from JSON; the data is small for v1)
- Tabs: Revenue, Top Items, Staff Performance, Heatmap

### 10.6 Polish Checklist

- [ ] Skeleton loaders on every list and detail page
- [ ] Empty states (with icon + helpful copy) instead of bare "no data"
- [ ] Error boundaries at route group level — show a branded "Something went wrong" with a "Try again" button
- [ ] 404 page styled with brand
- [ ] All forms: inline validation, error summary at top on submit fail
- [ ] All destructive actions confirmed via dialog
- [ ] Toasts for every async success/failure
- [ ] Loading spinners only after 200ms (avoid flicker)
- [ ] Print stylesheet for receipts (`@media print`)

### 10.7 Performance Pass

- Lighthouse on every key route ≥ 90 (Perf, A11y, BP, SEO)
- `next build` reports analyzed; no bundle over 250KB gzipped per route
- Images all served via `next/image` with appropriate `sizes`
- Fonts subset to latin only

### 10.8 Accessibility Pass

- Axe-core/Playwright runs zero violations on all key pages
- Keyboard navigation tested on POS and KDS
- Screen-reader walkthrough of public booking flow

### 10.9 Internationalization Pass

- All UI strings extracted to dictionaries
- NL is the source language; EN is a peer translation
- Numbers and dates formatted via `Intl.NumberFormat`/`Intl.DateTimeFormat` with the active locale
- Currency: always `EUR`, formatted as `€ 12,50` in NL and `€12.50` in EN

### 10.10 Cross-Browser & Device

Verified on:
- Latest Chrome, Safari, Firefox, Edge
- iPad Safari (POS tablet), Android Chrome
- iPhone Safari (customer flows), Pixel Chrome (customer flows)

### 10.11 Tests (Phase 10)

- E2E full journeys (customer, waiter, kitchen, admin)
- A11y scans
- Visual regression on key pages (optional, e.g. Playwright screenshots committed)

### 10.12 Phase 10 — Definition of Done

- [ ] Every admin function works against real backend
- [ ] Lighthouse scores ≥ 90 across the board
- [ ] No console errors anywhere
- [ ] All copy reviewed by a native Dutch speaker (where possible) — at minimum, no obvious machine-translated phrasing
- [ ] All five must-work E2E journeys (see `plan_final.md §8`) pass in CI

---

## Appendix A — Frontend Coding Conventions Cheat Sheet

| Topic | Rule |
|---|---|
| File names | `kebab-case.tsx` |
| Components | `PascalCase` |
| Hooks | `useThing` |
| Props type | `<Component>Props`, defined in the same file |
| Class merging | `cn(...)` via `clsx` + `tailwind-merge` |
| Icons | Lucide only |
| Date formatting | `date-fns` with locale |
| Form library | RHF + Zod |
| Animation | Framer Motion |
| State: server | TanStack Query (always) |
| State: form | RHF (always) |
| State: global UI | Zustand |
| State: local | `useState` |
| Effects | Minimize. Prefer derived values. |
| Tests | Vitest + Testing Library; Playwright for E2E |

## Appendix B — Recommended VS Code Extensions

- ESLint, Prettier, Tailwind CSS IntelliSense, Error Lens, Pretty TypeScript Errors, GitLens.

## Appendix C — Naming Conflicts to Watch

- Backend `Order` (entity) ↔ Frontend `Order` (type) — same name, that's fine since they're in different layers.
- Frontend `User` covers all roles; do not split into `Customer`, `Staff` types — those are *backend profile* concerns.

---

*End of Document 4 — Frontend. Continue with `deployment.md`.*
