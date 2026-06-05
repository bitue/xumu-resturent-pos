# 🎨 Xuma Restaurant — Design System

**Role:** Software Architect / Design Lead
**Document:** 6 of 7 — Design Language
**Brand:** Xuma · Goes, Zeeland, Netherlands
**Companion file:** `07_color_system.md` (full palette & tokens)

> **For the build agent:** This document defines the visual language for the Next.js frontend (Phases 1–5). It is grounded in two things: (1) Xuma's *existing* brand — warm brown + rose, the old blacksmith building, the waterfront setting — and (2) authentic Dutch/Zeeland visual culture. Implement these tokens; do not substitute generic AI defaults (no Inter, no purple gradients, no cookie-cutter cards).

---

## 1. Brand Essence

Xuma is a refined waterfront restaurant in Goes, Zeeland, set in a characterful former **smederij** (blacksmith's forge). The kitchen marries **world flavors with pure Zeeland produce** — "een culinaire ontdekkingsreis" (a culinary voyage of discovery). The interior is *warm, refined, contemporary*; soft shapes, natural materials, views over the water (de Veste), the stone bridge, and the weeping willows.

**Brand keywords:** Warm · Refined · Curious · Coastal · Crafted · Contemporary

**Design north star:** *Quiet luxury with Dutch soul.* Generous whitespace, characterful serif headlines, warm earthy palette, tactile texture — the digital equivalent of a beautifully plated dish in a sunlit room by the water.

---

## 2. Cultural Design Principles (Dutch-Grounded)

These principles translate Dutch/Zeeland culture into interface decisions.

### 2.1 Golden-Age Restraint = Luxury
In the 17th-century Dutch Golden Age, the wealthy signaled status through **sober tones and moderation**, not loud color. Delftware's blue-on-cream was prized precisely for its restraint.
→ **In UI:** Generous negative space. One characterful accent per view, not five. Let the food photography and the brown/rose brand breathe.

### 2.2 De Stijl Clarity
Mondrian, Rietveld, and De Stijl gave the world clean lines, honest structure, and the dissolving of boundaries between inside and outside.
→ **In UI:** Clear modular grid. Honest, legible structure. Echo Xuma's own line *"binnen en buiten vullen elkaar moeiteloos aan"* (inside and outside flow into each other) — use full-bleed imagery and seamless section transitions.

### 2.3 Craft & Materiality (the Smederij)
The building was a forge; the food celebrates *structuur* (texture) — crisp beside creamy, fresh beside spicy.
→ **In UI:** Tactile details — subtle paper/linen grain on cream backgrounds, hand-crafted feel in dividers, a whisper of forged-iron darkness in the ink tones. Texture over flat color.

### 2.4 Coastal Calm (Zeeland / de Veste)
Big skies, water, dunes, willows, oysters.
→ **In UI:** Airy layouts, soft water-grey and willow-green secondary tones, imagery with natural light and water.

### 2.5 Dutch Directness
Dutch communication is famously clear and unfussy.
→ **In UI:** Plain, confident copy. Obvious calls-to-action ("Reserveren"). No dark patterns, no clutter. Bilingual-ready (Dutch primary, English secondary).

---

## 3. Typography

> Per design best-practice: **no Inter, Roboto, Arial, or system fonts.** Choose characterful type that signals refinement.

### 3.1 Type Pairing (Primary Recommendation)

| Role | Typeface | Why |
|---|---|---|
| **Display / Headings** | **Fraunces** | A "wonky" old-style serif with optical sizing and warmth. Editorial, characterful, refined without being stiff. Carries the Golden-Age elegance. |
| **Body / UI** | **Hanken Grotesk** | Clean, warm humanist grotesk. Highly legible at small sizes, modern but soft — pairs beautifully with Fraunces. |
| **Prices / Numerals** | **Hanken Grotesk** (tabular figures) | Use `font-variant-numeric: tabular-nums` for menu price alignment. |

**Alternative pairing** (if you want a more overtly Dutch-modern feel): **GT Sectra** or **Reckless** (display) + **Mona Sans** (body). Both available; Fraunces + Hanken Grotesk is the free Google-Fonts default.

Load via `next/font` (zero layout shift):
```ts
import { Fraunces, Hanken_Grotesk } from 'next/font/google';
export const display = Fraunces({ subsets: ['latin'], variable: '--font-display', axes: ['opsz'] });
export const body = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-body' });
```

### 3.2 Type Scale (1.250 — Major Third)

| Token | Size (rem) | Use | Font |
|---|---|---|---|
| `display-xl` | 4.209 | Hero headline | Fraunces, 300–400 wt, tight leading |
| `display-l` | 3.157 | Section titles | Fraunces |
| `h1` | 2.369 | Page title | Fraunces |
| `h2` | 1.777 | Subsection | Fraunces |
| `h3` | 1.333 | Card title | Fraunces / Hanken 600 |
| `body-l` | 1.125 | Lead paragraph | Hanken |
| `body` | 1.0 | Default | Hanken |
| `small` | 0.889 | Captions, meta | Hanken |
| `tiny` | 0.79 | Labels, badges | Hanken 500, letter-spacing 0.04em uppercase |

**Rules:**
- Headlines in Fraunces, weight 300–400, **tight line-height (1.05–1.15)** for editorial elegance.
- Body in Hanken Grotesk, weight 400, **line-height 1.6** for comfortable reading.
- Uppercase micro-labels with `letter-spacing: 0.08em` for menu categories ("LUNCH", "BITES").
- Never justify body text; left-align (ragged right).

---

## 4. Spacing, Grid & Layout

### 4.1 Spacing Scale (8px base)
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` px
Tokens: `space-1 … space-10`. Default section vertical rhythm: `96px` desktop / `56px` mobile.

### 4.2 Grid
- **12-column** grid, max content width **1240px**, gutters 24px.
- Generous outer margins (≥ 8vw on desktop) — whitespace is the luxury signal.
- Mobile: single column, 20px side padding.

### 4.3 Layout Motifs
- **Asymmetry & overlap:** Let images bleed off-grid; overlap a dish photo onto a cream panel. Avoid rigid centered stacks.
- **Full-bleed water imagery** between sections (the inside/outside principle).
- **Editorial menu layout:** dotted leader lines between dish name and price (classic, elegant), category headers in uppercase micro-labels.
- **Sticky, slim transparent header** that gains a cream background + subtle shadow on scroll.

---

## 5. Components (Design Specs)

> Build with Tailwind + the tokens in `07_color_system.md`. Use shadcn/ui primitives, restyled to these specs.

### 5.1 Buttons
| Variant | Style |
|---|---|
| **Primary** | Cacao-600 bg, cream text, no border-radius extremes — use `radius-md` (10px). Subtle lift shadow on hover, warm. |
| **Secondary** | Transparent bg, cacao-600 1px border, cacao-700 text. Fills with cacao-50 on hover. |
| **Accent (Reserve)** | Rose-400 bg, ink text → the brand "heart" CTA. Reserved for the primary reservation action. |
| **Ghost** | Text-only, underline-on-hover with a willow-green underline. |

All buttons: `font-body 500`, `letter-spacing 0.01em`, generous padding (`12px 24px`), 180ms ease transitions.

### 5.2 Cards (Dish / Feature)
- Cream surface, `radius-lg` (16px), 1px sand border, soft layered shadow.
- Image top (4:3), name in Fraunces h3, description in Hanken small (stone text), price in tabular numerals (cacao-700).
- Allergen chips: tiny pill badges, willow or water tinted.
- Hover: image gentle zoom (scale 1.04, 400ms), card lifts 2px.

### 5.3 Navigation
- Slim header, logo centered or left, links in uppercase micro-labels.
- Language toggle (NL/EN) top-right.
- Mobile: full-screen cream overlay menu with large Fraunces links, staggered reveal.

### 5.4 Menu Section (Signature Component)
- Category tabs (Lunch / Zakelijk / High Tea / Bites) as understated underlined text tabs (active = cacao underline).
- Dish rows with **dotted leader lines** to the price.
- Optional subtle Delft-blue tile motif as a section divider (decorative, low opacity).

### 5.5 Forms (Reservation)
- Cream inputs, sand 1px border, focus = cacao-500 border + soft rose focus ring.
- Clear labels above fields (Dutch directness). Inline validation in a warm error tone, never harsh red-on-white alone.

### 5.6 Badges & Status (POS/Admin)
- Order status colors map to semantic tokens (see color file): Pending=sand, Preparing=water-blue, Ready=willow-green, Served=cacao, Paid=success-green, Cancelled=muted rose-red.

---

## 6. Motion

Refined and unhurried — luxury moves slowly.

| Moment | Animation |
|---|---|
| Page load (hero) | Staggered reveal: headline fades+rises (0ms), subcopy (120ms), CTA (240ms), hero image clip-reveal (300ms). |
| Section scroll-in | Fade + 16px rise, `cubic-bezier(0.22,1,0.36,1)`, 600ms, triggered at 15% viewport. |
| Card hover | Image scale 1.04 + card lift, 400ms ease-out. |
| Buttons | 180ms color/shadow. |
| Header | Background fade-in on scroll past 80px. |

**Defaults:** easing `cubic-bezier(0.22, 1, 0.36, 1)` (gentle ease-out). Respect `prefers-reduced-motion` — disable transforms, keep opacity fades only. Use the Motion library (`framer-motion`) in React.

---

## 7. Imagery & Art Direction

The current site already has strong assets (warm interiors, plated dishes, water views) — direct the new photography the same way:

- **Light:** Natural, warm, soft. Golden-hour over the water. No harsh flash.
- **Subjects:** Plated dishes emphasizing *texture* (crisp/creamy contrast), Zeeland produce (oysters, lobster bitterballen), the waterfront terrace, willows, the historic building's iron/brick details.
- **Treatment:** True-to-life warm tones; slight film grain acceptable. Avoid heavy filters or teal-orange Hollywood grading.
- **Composition:** Negative space for text overlays; close-up macro for texture; wide environmental shots for atmosphere.
- **Decorative motif:** A subtle, modern reinterpretation of a **Delft-blue tile pattern** may be used sparingly as a section divider or footer texture — abstracted, low-opacity, never kitschy.

---

## 8. Iconography
- Line icons, 1.5px stroke, rounded caps — warm and friendly, matching the soft brand shapes (Lucide icon set).
- Custom brand marks: the Xuma **heart** (rose) as a recurring micro-accent (bullets, loading states, favicon).

---

## 9. Accessibility (WCAG 2.1 AA)
- Body text contrast ≥ 4.5:1; large text ≥ 3:1 (see contrast table in color file).
- Never convey meaning by color alone — pair status colors with labels/icons.
- Focus-visible rings on all interactive elements (rose-tinted, 2px offset).
- Min tap target 44×44px (critical for POS touchscreens).
- Full keyboard navigation; semantic HTML; alt text on all imagery.
- Honor `prefers-reduced-motion` and `prefers-color-scheme`.

---

## 10. Voice & Tone (Copy)
- **Primary language: Dutch**, English secondary (the site is bilingual-ready).
- Warm, confident, a little poetic about food — but Dutch-direct on actions.
- CTA copy: *Reserveren*, *Bekijk de menukaart*, *Ontdek Xuma*.
- Avoid exclamation overload; let the food and imagery carry the excitement.

---

## 11. What NOT To Do (Design Guardrails)
- ❌ No Inter / Roboto / Arial / system-font headings.
- ❌ No purple gradients, no generic SaaS-card aesthetic.
- ❌ No loud national-orange as a primary color (festive accent only).
- ❌ No literal clog/tulip/windmill clichés. Dutch refinement, not souvenir-shop.
- ❌ No pure black (`#000`) or pure white (`#FFF`) — use warm ink and cream.
- ❌ No cramped layouts — whitespace is the brand.
- ❌ Don't discard the brown + rose identity; refine it.

---

*End of Document 6 — Design System. See Document 7 for the complete color palette, tokens, Tailwind config, and CSS variables.*
