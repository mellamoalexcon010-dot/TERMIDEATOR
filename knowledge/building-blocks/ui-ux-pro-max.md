# UI UX Pro Max — Design Intelligence Engine

**Repo:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
**Stars:** 67.3k ⭐ (el skill más popular de Claude Code)
**Version:** v2.5.0

---

## Qué Es

Un skill de Claude Code que genera sistemas de diseño completos usando inteligencia artificial. Analiza el tipo de producto y auto-genera: pattern, style, colors, typography, effects, anti-patterns y un pre-delivery checklist.

---

## Instalación (2 opciones)

**Opción A — Claude Marketplace (más fácil):**
```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

**Opción B — CLI (recomendado para proyectos nuevos):**
```bash
npm install -g uipro-cli
uipro init --ai claude        # instala localmente en el proyecto
uipro init --ai claude --global  # instala globalmente en ~/.claude/skills/
```

---

## Cómo Usarlo en TERMIDEATOR

### Activación automática
El skill se activa solo cuando describes trabajo de UI/UX. Solo di algo como:
```
"Build a landing page for my SaaS product"
"Create a dashboard for healthcare analytics"
"Design a portfolio with dark mode"
```

### Generar y persistir el design system
```bash
# Genera design system + guarda en design-system/MASTER.md
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS B2B dashboard" --design-system --persist -p "MyApp"

# Crear override para una página específica
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS B2B" --design-system --persist -p "MyApp" --page "pricing"
```

Esto crea:
```
design-system/
├── MASTER.md        ← Source of Truth global
└── pages/
    └── pricing.md   ← Overrides específicos de la página
```

### Búsquedas específicas
```bash
# Por estilo
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style

# Por tipografía
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant serif" --domain typography

# Por stack específico
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack react
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind
```

---

## Lo Que Genera (por cada proyecto)

```
PATTERN: Hero-Centric + Social Proof
STYLE: Glassmorphism / Minimalism / Brutalism / etc.
COLORS:
  Primary:    #hex (role)
  Secondary:  #hex
  CTA:        #hex
  Background: #hex
  Text:       #hex
TYPOGRAPHY: [Font pairing] + Google Fonts URL
KEY EFFECTS: transitions, hover states, animations
ANTI-PATTERNS: what NOT to do for this industry
PRE-DELIVERY CHECKLIST:
  [ ] No emojis como icons (usar SVG: Heroicons/Lucide)
  [ ] cursor-pointer en todos los elementos clickeables
  [ ] Hover states con smooth transitions (150-300ms)
  [ ] Contraste text 4.5:1 mínimo
  [ ] Focus states visibles para keyboard nav
  [ ] prefers-reduced-motion respetado
  [ ] Responsive: 375px, 768px, 1024px, 1440px
```

---

## 161 Categorías de Industria

El skill conoce reglas específicas para:

| Categoría | Ejemplos |
|-----------|---------|
| **Tech & SaaS** | SaaS, Micro SaaS, B2B, Dev Tool, AI/Chatbot, Cybersecurity |
| **Finance** | Fintech, Banking, Insurance, Personal Finance, Invoice & Billing |
| **Healthcare** | Medical Clinic, Pharmacy, Mental Health, Medication Reminder |
| **E-commerce** | General, Luxury, Marketplace P2P, Subscription Box, Food Delivery |
| **Services** | Beauty/Spa, Restaurant, Hotel, Legal, Home Services, Booking |
| **Creative** | Portfolio, Agency, Photography, Gaming, Music Streaming |
| **Lifestyle** | Habit Tracker, Recipe, Meditation, Weather, Diary, Mood Tracker |
| **Emerging** | Web3/NFT, Spatial Computing, Quantum, Autonomous Drones |

---

## 67 Estilos de UI Disponibles

Los más usados para SaaS/Startups:

| Estilo | Mejor Para |
|--------|-----------|
| **Minimalism & Swiss** | Enterprise, dashboards, docs |
| **Glassmorphism** | Modern SaaS, financial dashboards |
| **Dark Mode (OLED)** | Coding platforms, night-mode apps |
| **Neubrutalism** | Gen Z brands, startups, Figma-like |
| **Bento Box Grid** | Dashboards, product pages, portfolios |
| **AI-Native UI** | AI products, chatbots, copilots |
| **Soft UI Evolution** | Modern enterprise, SaaS |
| **Claymorphism** | Educational apps, B2C SaaS |
| **Flat Design** | Web apps, mobile, startup MVPs |
| **Aurora UI** | Modern SaaS, creative agencies |

---

## 15 Stacks Soportados

React · Next.js · Astro · Vue · Nuxt.js · Nuxt UI · Svelte · SwiftUI · React Native · Flutter · HTML+Tailwind · shadcn/ui · Jetpack Compose · Angular · Laravel

---

## Cómo Entra en TERMIDEATOR (Design System Pipeline)

```
Phase 3: Architecture
    ↓
Layer 1: UI UX Pro Max
  → genera design-system/MASTER.md
  → 161 reglas por industria
  → colores + tipografía + efectos + anti-patterns
    ↓
Layer 2: Awesome Design MD (opcional)
  → usuario elige marca de referencia (Stripe, Notion, Apple...)
  → descarga DESIGN.md
  → aplica overrides sobre MASTER.md
    ↓
Layer 3: Custom (si quiere algo único)
  → genera sistema original en Section 7
    ↓
Section 7 del Blueprint incluye:
  → path a design-system/MASTER.md
  → path a DESIGN.md (si eligió referencia)
  → instrucciones de jerarquía para Claude Code
```

---

## Prompt Clave para el Blueprint

Incluir en **Section 7 (Design System)** del blueprint:

```markdown
### Design System Setup

**Primary (UI UX Pro Max):**
Install: `npm install -g uipro-cli && uipro init --ai claude`
Generate: `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "[project type]" --design-system --persist -p "[ProjectName]"`
File: `design-system/MASTER.md`

**Reference (Awesome Design MD):**
File: `DESIGN.md` (project root)
Source: [company] from github.com/VoltAgent/awesome-design-md

**Hierarchy for Claude Code:**
1. Check `design-system/pages/[current-page].md` first (page-specific overrides)
2. Fall back to `design-system/MASTER.md` (global system)
3. Apply `DESIGN.md` for brand feel on top of MASTER.md structure
```

---

## Por Qué Es el Mejor Skill de Diseño

- **67.3k estrellas** — validado por la comunidad más grande de Claude Code
- **161 reglas por industria** — no es diseño genérico, es específico a tu producto
- **Anti-patterns incluidos** — te dice qué NO hacer (ej: "no AI purple/pink gradients para banking")
- **Pre-delivery checklist** — accesibilidad, responsive, hover states — todo chequeado
- **Persistencia** — genera `MASTER.md` que Claude Code lee en toda la sesión
- **Jerarquía de overrides** — global + por página = consistencia + flexibilidad
