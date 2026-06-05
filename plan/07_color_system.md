# 🎨 Xuma Restaurant — Color System & Tokens

**Role:** Software Architect / Design Lead
**Document:** 7 of 7 — Color Palette
**Companion file:** `06_design_system.md`

> **For the build agent:** This is the single source of truth for color. Implement the CSS variables (§6) and Tailwind config (§7) exactly. Every color is justified by either Xuma's existing brand or authentic Dutch/Zeeland culture (§1). Use semantic tokens (§5) in components — never raw hex.

---

## 1. Color Strategy & Cultural Rationale

Xuma's existing identity is **warm brown + rose** (the brown logo and the pink "hart"). We keep that as the core and surround it with a Dutch/Zeeland-grounded supporting palette. Each color earns its place:

| Color Family | Cultural / Brand Source | Role |
|---|---|---|
| **Cacao (Brown)** | Xuma's existing brown logo; the iron/wood of the old *smederij* | **Primary brand** |
| **Rose (Hart)** | Xuma's pink heart motif 🤎 | **Secondary / signature accent** |
| **Delft Blue** | Dutch Golden-Age craftsmanship — Delftware cobalt-on-cream | **Heritage accent** (trust, detail, links) |
| **Willow Green** | The weeping willows (*treurwilgen*) along de Veste, Zeeland nature | **Nature accent / success** |
| **Water Grey-Blue** | The waterfront (*de Veste*), big Zeeland skies | **Calm secondary / info** |
| **Dune & Cream** | Zeeland coast, dune sand; Golden-Age cream pottery ground | **Neutrals / backgrounds** |
| **Ink** | Forged iron of the smithy; Golden-Age sober black-tones | **Text** |
| **Oranje** | National color (House of Orange) — celebratory only | **Festive accent (optional)** |

**Why not lead with orange?** Dutch national orange is loud and tied to football/King's Day. For *refined dining* it reads as touristy. We hold it in reserve for festive moments (King's Day specials, events like the "White Edition") and never as a primary.

---

## 2. Core Brand Colors

```
CACAO (Primary)   ███  #6B4A33   warm forge brown — buttons, brand, primary text accents
ROSE  (Signature) ███  #CE8186   the Xuma heart — reserve CTA, highlights, brand warmth
DELFT (Heritage)  ███  #274C77   Golden-Age cobalt — links, structured detail, trust
```

---

## 3. Full Color Scales (Tailwind-Ready, 50–900)

### 3.1 Cacao — Primary (Brown)
| Step | Hex | Use |
|---|---|---|
| 50 | `#FAF4EF` | tint backgrounds, hover fills |
| 100 | `#F0E2D6` | subtle surfaces |
| 200 | `#E0C8B4` | borders on tint |
| 300 | `#C9A88C` | disabled, muted icon |
| 400 | `#A87E5E` | secondary brand |
| 500 | `#855C3E` | hover state of primary |
| **600** | **`#6B4A33`** | **PRIMARY — buttons, brand** |
| 700 | `#543A28` | primary text on cream, pressed |
| 800 | `#3E2C20` | headings (warm) |
| 900 | `#2A1E16` | deep brand shade |

### 3.2 Rose — Signature (Hart)
| Step | Hex | Use |
|---|---|---|
| 50 | `#FBF1F1` | soft tint bg |
| 100 | `#F6E1E2` | focus ring tint |
| 200 | `#ECC4C6` | decorative |
| 300 | `#DFA1A4` | decorative / dark-mode accent |
| **400** | **`#CE8186`** | **signature accent — Reserve CTA** |
| 500 | `#B96A70` | hover of accent |
| 600 | `#A1545B` | pressed |
| 700 | `#834349` | rose text (AA on cream) |
| 800 | `#65343A` | deep |
| 900 | `#48262A` | deepest |

### 3.3 Delft — Heritage (Blue)
| Step | Hex | Use |
|---|---|---|
| 50 | `#EEF2F8` | info bg |
| 100 | `#D6E0EE` | tile-motif tint |
| 200 | `#AEC2DC` | decorative |
| 300 | `#7E9BC2` | dark-mode link |
| 400 | `#5277A6` | hover link |
| 500 | `#345C8A` | — |
| **600** | **`#274C77`** | **links, heritage detail, info-strong** |
| 700 | `#1F3A5C` | link text / pressed |
| 800 | `#182C45` | — |
| 900 | `#111E2E` | deep |

### 3.4 Willow — Nature / Success (Green)
| Step | Hex | Use |
|---|---|---|
| 50 | `#F3F5ED` | success bg |
| 100 | `#E2E8D2` | chip tint |
| 200 | `#C7D1AC` | decorative |
| 300 | `#A8B681` | dark-mode accent |
| 400 | `#8B9A60` | — |
| **500** | **`#6F7E48`** | **nature accent / "Ready" status** |
| 600 | `#586638` | success-strong, text |
| 700 | `#44502C` | text on light |
| 800 | `#333C21` | — |
| 900 | `#232914` | deep |

### 3.5 Water — Calm / Info (Grey-Blue)
| Step | Hex | Use |
|---|---|---|
| 50 | `#F2F5F6` | — |
| 100 | `#E1E9EC` | — |
| 200 | `#C5D2D9` | "Preparing" status tint |
| 300 | `#9DB2BD` | calm accent |
| **400** | **`#7E97A3`** | **info / calm secondary** |
| 500 | `#637C88` | — |
| 600 | `#4E646F` | text |
| 700 | `#3C4E57` | — |

### 3.6 Sand / Dune & Cream — Neutrals (warm)
| Token | Hex | Use |
|---|---|---|
| `cream` (bg) | `#FAF6EF` | **default page background** |
| `cream-deep` | `#F4EDE1` | alt section background |
| `dune-100` | `#EDE3D2` | panels, cards-alt |
| `dune-200` | `#E2D4BC` | borders |
| `dune-300` | `#D9C5A3` | strong border / divider |
| `sand-line` | `#E8DCC8` | hairline dividers, input borders |

### 3.7 Ink & Stone — Text (warm neutrals)
| Token | Hex | Use |
|---|---|---|
| `ink` | `#241C17` | **primary text** (warm near-black) |
| `ink-soft` | `#3A2F27` | headings alt |
| `stone-600` | `#6E625660` → `#6E6256` | secondary text |
| `stone-500` | `#8A7C6E` | muted text, captions |
| `stone-300` | `#B8AC9D` | placeholder, disabled text |

### 3.8 Oranje — Festive (optional, events only)
| Token | Hex | Use |
|---|---|---|
| `oranje` | `#E07B39` | King's Day / event accents only |
| `oranje-deep` | `#C8632A` | hover |

---

## 4. Semantic / System Colors

| Semantic | Light Hex | Source family |
|---|---|---|
| `success` | `#586638` | Willow 600 |
| `success-bg` | `#F3F5ED` | Willow 50 |
| `info` | `#274C77` | Delft 600 |
| `info-bg` | `#EEF2F8` | Delft 50 |
| `warning` | `#C8842A` | warm amber (dune-derived) |
| `warning-bg` | `#FBF1E2` | — |
| `error` | `#A8443F` | muted brick-red (Dutch-flag red, softened) |
| `error-bg` | `#F8ECEA` | — |

> **Error red note:** We use a *muted brick red* `#A8443F` (echoing the red of the Dutch flag and Goes's red-brick canal houses) instead of a harsh digital red — it sits in harmony with the warm palette.

### 4.1 POS Order-Status Colors
| Status | Color | Token |
|---|---|---|
| PENDING | `#D9C5A3` (sand) | neutral waiting |
| PREPARING | `#7E97A3` (water) | in progress |
| READY | `#6F7E48` (willow) | ready to serve |
| SERVED | `#6B4A33` (cacao) | delivered |
| PAID | `#586638` (success) | closed |
| CANCELLED | `#A8443F` (error) | voided |

---

## 5. Semantic Token Map (use these in code, not raw hex)

| Token | Light value | Dark value |
|---|---|---|
| `--bg` | `#FAF6EF` cream | `#1E1813` |
| `--bg-alt` | `#F4EDE1` | `#241C17` |
| `--surface` | `#FFFFFF`→use `#FFFDF9` | `#2B221B` |
| `--border` | `#E8DCC8` sand-line | `#3A2F27` |
| `--text` | `#241C17` ink | `#F4EDE1` |
| `--text-muted` | `#8A7C6E` stone | `#B8AC9D` |
| `--primary` | `#6B4A33` cacao-600 | `#C9A88C` cacao-300 |
| `--primary-hover` | `#855C3E` | `#E0C8B4` |
| `--primary-fg` | `#FAF6EF` | `#241C17` |
| `--accent` | `#CE8186` rose-400 | `#DFA1A4` |
| `--accent-fg` | `#241C17` | `#241C17` |
| `--heritage` | `#274C77` delft-600 | `#7E9BC2` |
| `--link` | `#274C77` | `#7E9BC2` |
| `--focus-ring` | `#CE8186` rose-400 | `#DFA1A4` |

---

## 6. CSS Variables (drop into `globals.css`)

```css
:root {
  /* Brand scales */
  --cacao-50:#FAF4EF; --cacao-100:#F0E2D6; --cacao-200:#E0C8B4; --cacao-300:#C9A88C;
  --cacao-400:#A87E5E; --cacao-500:#855C3E; --cacao-600:#6B4A33; --cacao-700:#543A28;
  --cacao-800:#3E2C20; --cacao-900:#2A1E16;

  --rose-50:#FBF1F1; --rose-100:#F6E1E2; --rose-200:#ECC4C6; --rose-300:#DFA1A4;
  --rose-400:#CE8186; --rose-500:#B96A70; --rose-600:#A1545B; --rose-700:#834349;
  --rose-800:#65343A; --rose-900:#48262A;

  --delft-50:#EEF2F8; --delft-100:#D6E0EE; --delft-200:#AEC2DC; --delft-300:#7E9BC2;
  --delft-400:#5277A6; --delft-500:#345C8A; --delft-600:#274C77; --delft-700:#1F3A5C;
  --delft-800:#182C45; --delft-900:#111E2E;

  --willow-50:#F3F5ED; --willow-100:#E2E8D2; --willow-200:#C7D1AC; --willow-300:#A8B681;
  --willow-400:#8B9A60; --willow-500:#6F7E48; --willow-600:#586638; --willow-700:#44502C;

  --water-100:#E1E9EC; --water-200:#C5D2D9; --water-300:#9DB2BD; --water-400:#7E97A3;
  --water-500:#637C88; --water-600:#4E646F;

  /* Neutrals */
  --cream:#FAF6EF; --cream-deep:#F4EDE1; --surface:#FFFDF9;
  --dune-100:#EDE3D2; --dune-200:#E2D4BC; --dune-300:#D9C5A3; --sand-line:#E8DCC8;
  --ink:#241C17; --ink-soft:#3A2F27; --stone-600:#6E6256; --stone-500:#8A7C6E; --stone-300:#B8AC9D;

  /* Festive */
  --oranje:#E07B39; --oranje-deep:#C8632A;

  /* Semantic */
  --success:#586638; --success-bg:#F3F5ED;
  --info:#274C77;    --info-bg:#EEF2F8;
  --warning:#C8842A; --warning-bg:#FBF1E2;
  --error:#A8443F;   --error-bg:#F8ECEA;

  /* Tokens */
  --bg:var(--cream); --bg-alt:var(--cream-deep); --border:var(--sand-line);
  --text:var(--ink); --text-muted:var(--stone-500);
  --primary:var(--cacao-600); --primary-hover:var(--cacao-500); --primary-fg:var(--cream);
  --accent:var(--rose-400); --accent-fg:var(--ink);
  --heritage:var(--delft-600); --link:var(--delft-600); --focus-ring:var(--rose-400);

  /* Radii & shadow */
  --radius-sm:8px; --radius-md:10px; --radius-lg:16px; --radius-xl:24px;
  --shadow-soft:0 1px 2px rgba(36,28,23,.04), 0 4px 16px rgba(36,28,23,.06);
  --shadow-lift:0 4px 12px rgba(36,28,23,.08), 0 12px 32px rgba(36,28,23,.10);
}

[data-theme="dark"] {
  --bg:#1E1813; --bg-alt:#241C17; --surface:#2B221B; --border:#3A2F27;
  --text:#F4EDE1; --text-muted:#B8AC9D;
  --primary:#C9A88C; --primary-hover:#E0C8B4; --primary-fg:#241C17;
  --accent:#DFA1A4; --accent-fg:#241C17;
  --heritage:#7E9BC2; --link:#7E9BC2; --focus-ring:#DFA1A4;
}
```

---

## 7. Tailwind Config (`tailwind.config.ts`)

```ts
import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cacao:  { 50:'#FAF4EF',100:'#F0E2D6',200:'#E0C8B4',300:'#C9A88C',400:'#A87E5E',500:'#855C3E',600:'#6B4A33',700:'#543A28',800:'#3E2C20',900:'#2A1E16' },
        rose:   { 50:'#FBF1F1',100:'#F6E1E2',200:'#ECC4C6',300:'#DFA1A4',400:'#CE8186',500:'#B96A70',600:'#A1545B',700:'#834349',800:'#65343A',900:'#48262A' },
        delft:  { 50:'#EEF2F8',100:'#D6E0EE',200:'#AEC2DC',300:'#7E9BC2',400:'#5277A6',500:'#345C8A',600:'#274C77',700:'#1F3A5C',800:'#182C45',900:'#111E2E' },
        willow: { 50:'#F3F5ED',100:'#E2E8D2',200:'#C7D1AC',300:'#A8B681',400:'#8B9A60',500:'#6F7E48',600:'#586638',700:'#44502C' },
        water:  { 100:'#E1E9EC',200:'#C5D2D9',300:'#9DB2BD',400:'#7E97A3',500:'#637C88',600:'#4E646F' },
        dune:   { 100:'#EDE3D2',200:'#E2D4BC',300:'#D9C5A3' },
        cream:  { DEFAULT:'#FAF6EF', deep:'#F4EDE1' },
        ink:    { DEFAULT:'#241C17', soft:'#3A2F27' },
        stone:  { 300:'#B8AC9D',500:'#8A7C6E',600:'#6E6256' },
        sand:   '#E8DCC8',
        oranje: { DEFAULT:'#E07B39', deep:'#C8632A' },
        // semantic
        bg:'var(--bg)', surface:'var(--surface)', border:'var(--border)',
        primary:'var(--primary)', accent:'var(--accent)', heritage:'var(--heritage)',
        success:'#586638', info:'#274C77', warning:'#C8842A', error:'#A8443F',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],   // Fraunces
        body: ['var(--font-body)', 'sans-serif'],    // Hanken Grotesk
      },
      borderRadius: { sm:'8px', md:'10px', lg:'16px', xl:'24px' },
      boxShadow: {
        soft:'0 1px 2px rgba(36,28,23,.04), 0 4px 16px rgba(36,28,23,.06)',
        lift:'0 4px 12px rgba(36,28,23,.08), 0 12px 32px rgba(36,28,23,.10)',
      },
      backgroundImage: {
        'hero-fade':'linear-gradient(180deg, rgba(36,28,23,0) 0%, rgba(36,28,23,.55) 100%)',
        'cream-grain':"url('/textures/linen-grain.png')", // subtle paper texture overlay
      },
    },
  },
} satisfies Config;
```

---

## 8. Signature Gradients & Textures
- **Hero overlay:** `linear-gradient(180deg, transparent, rgba(36,28,23,.55))` over food/water imagery so white headline text stays legible.
- **Warm wash:** `radial-gradient(circle at 30% 20%, #FAF4EF, #F4EDE1)` for soft section backgrounds.
- **Linen grain:** a 4–6% opacity paper/linen PNG over cream backgrounds for tactility (the craft principle). Keep extremely subtle.
- **Delft tile motif:** abstracted blue tile pattern at ~6% opacity as a footer/divider texture — modern, not literal.

---

## 9. Accessibility — Contrast Pairings

**Safe for body text (≥ 4.5:1 on cream `#FAF6EF`):**
- `ink #241C17` ✅ (≈ 13:1)
- `cacao-700 #543A28` ✅ · `cacao-800 #3E2C20` ✅
- `delft-600 #274C77` ✅ (links) · `delft-700` ✅
- `willow-700 #44502C` ✅ · `rose-700 #834349` ✅
- `stone-600 #6E6256` ✅ (secondary text)

**Decorative / large-text only (do NOT use for body text):**
- `rose-400 #CE8186`, `rose-300`, `willow-300/400`, `water-300/400`, `dune` tones, `stone-300`.

**On dark surfaces (`#2B221B`):** use `cream #F4EDE1`, `cacao-300`, `rose-300`, `delft-300`, `willow-300`.

> Always verify final combinations with a contrast checker (e.g., when overlaying text on photography). Never rely on color alone to convey status — pair with text/icon.

---

## 10. Quick Usage Cheat-Sheet

| Element | Color |
|---|---|
| Page background | `cream #FAF6EF` |
| Primary button | `cacao-600` bg / `cream` text |
| Reserve CTA | `rose-400` bg / `ink` text |
| Links | `delft-600` |
| Body text | `ink #241C17` |
| Secondary text | `stone-500/600` |
| Headings | `ink-soft #3A2F27` or `cacao-800` |
| Card surface | `#FFFDF9` / `cream` |
| Borders / dividers | `sand #E8DCC8` |
| Success / "Ready" | `willow-500/600` |
| Info | `delft-600` |
| Error | `#A8443F` (brick red) |
| Festive (events) | `oranje` — sparingly |

---

*End of Document 7 — Color System. This completes the design package (Documents 6–7) and the full specification set (Documents 1–7).*
