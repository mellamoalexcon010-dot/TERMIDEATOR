# Anthropic Official Design Skills

**Source:** `anthropics/skills` + `vercel-labs/agent-skills`

---

## El Pipeline Completo de Diseño — 5 Layers

```
Layer 0: frontend-design        ← PRIMERO — dirección estética, evita AI slop
Layer 1: UI UX Pro Max          ← 161 reglas por industria, genera MASTER.md
Layer 2: Emil Kowalski          ← animaciones y motion principles
Layer 3: Awesome Design MD      ← brand reference (Stripe, Notion, Apple...)
Audit:   web-design-guidelines  ← quality gate pre-deploy, 100+ reglas
Assets:  canvas-design          ← posters, covers, social cards
Themes:  theme-factory          ← 10 temas pre-definidos rápidos
```

---

## 1. `frontend-design` — 311k installs ⭐ LAYER 0

**Instalar:**
```bash
npx skills add anthropics/skills --skill frontend-design
# o desde claude-code plugins:
/plugin marketplace add anthropics/claude-code
```

**Qué hace:** Obliga a Claude Code a elegir una dirección estética BOLD antes de escribir código. Sin él, Claude siempre genera el mismo diseño genérico — Inter font, gradientes morados, cards redondeadas, layout centrado. Con él, cada build es diferente.

**Cómo funciona:**
Antes de tocar código, el skill hace 4 preguntas internamente:
1. **Purpose** — ¿Qué problema resuelve esta interfaz? ¿Quién la usa?
2. **Tone** — Elige un extremo: brutalista, maximalista, retro-futurista, luxury, editorial, orgánico, industrial, art deco...
3. **Constraints** — Framework, performance, accesibilidad
4. **Differentiation** — ¿Qué hace MEMORABLE esta interfaz?

**Direcciones estéticas disponibles:**
- Brutally minimal / Swiss design
- Maximalist chaos
- Retro-futuristic
- Organic / natural
- Luxury / refined
- Playful / toy-like
- Editorial / magazine
- Brutalist / raw
- Art deco / geometric
- Soft / pastel
- Industrial / utilitarian
- Dark premium
- Claymorphism
- Neubrutalism

**Lo que explícitamente evita:**
- Fonts: Inter, Roboto, Arial, Space Grotesk (overused by AI)
- Colors: purple gradients, generic blue CTAs
- Layouts: todas las cards centradas, mismo padding everywhere
- Patterns: hero → features → pricing → CTA (siempre el mismo)

**Implementación:**
```
Typography: par display font + body font único y caracterful
Colors: CSS variables, dominant color + sharp accent
Motion: CSS-only animations, page load staggered reveals, hover states sorpresivos
Spatial: asimetría, overlap, diagonal flow, grid-breaking layouts
Backgrounds: gradient meshes, noise textures, geometric patterns, dramatic shadows
```

**Cuándo activar en TERMIDEATOR:**
- Phase 3 — ANTES de generar el design system (Layer 0)
- El agente pregunta: "¿Qué dirección estética querés? (brutal-minimal / maximalista / editorial / luxury / retro / ...)"
- La respuesta define el tono de todo lo que viene después

---

## 2. `web-design-guidelines` — 262k installs ⭐ QUALITY GATE

**Instalar:**
```bash
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
```

**Qué hace:** Audita código UI contra las Web Interface Guidelines de Vercel. No es un skill creativo — es un quality gate. Encuentra problemas que pasarían a producción sin él.

**100+ reglas que cubre:**
- ARIA attributes correctos en todos los elementos interactivos
- Focus states visibles para keyboard navigation
- Touch targets mínimo 44×44px en mobile
- prefers-reduced-motion respetado en todas las animaciones
- HTML semántico (headings en orden, landmarks correctos)
- Keyboard navigation completa (Tab, Enter, Escape, Arrow keys)
- Heading hierarchy correcta (h1 → h2 → h3, no saltos)
- Labels en todos los inputs (no solo placeholder)
- Alt text en imágenes
- Contraste mínimo 4.5:1 en texto normal, 3:1 en texto grande
- No content que desaparece en hover only (accesibilidad)

**Cómo usar:**
```bash
/web-design-guidelines src/components/
/web-design-guidelines src/app/pricing/page.tsx
```

**Output:** Lista de findings en formato `file:line` con descripción del problema y sugerencia de fix.

**Cuándo activar en TERMIDEATOR:**
- Build Order: último step antes del deploy
- Regla en CLAUDE.md del target project: "Before deploying, run web-design-guidelines on all new components"

---

## 3. `canvas-design` — 40.8k installs ⭐ ASSETS VISUALES

**Instalar:**
```bash
npx skills add anthropics/skills --skill canvas-design
```

**Qué hace:** Genera arte visual original en PDF/PNG. Workflow de 2 fases:
1. Genera un "manifiesto de filosofía de diseño" (.md) — no solo "hacé un poster", sino establece el movimiento estético computacional
2. Expresa ese manifiesto visualmente

**Para qué:**
- Posters de lanzamiento del producto
- Covers de blog posts
- Social cards (OG images para Twitter/LinkedIn)
- Infografías de datos del producto
- Assets de marketing para ProductHunt launch

**Cuándo activar en TERMIDEATOR:**
- Section 19 (Growth Hooks) — generar assets de launch
- Section 20 (Post-Launch) — social content visual

---

## 4. `theme-factory` — 30k installs ⭐ TEMAS RÁPIDOS

**Instalar:**
```bash
npx skills add anthropics/skills --skill theme-factory
```

**Qué hace:** 10 temas pre-definidos con colores y tipografías listos para aplicar a cualquier artefacto — slides, docs, reports, HTML landing pages.

**Cuándo usarlo:**
- Si el usuario quiere un design system rápido sin personalización
- Para prototipos y MVPs donde velocidad > perfección
- Para documentación interna y pitches

**Nota:** Para proyectos en producción, usar Layer 0 (frontend-design) + Layer 1 (UI UX Pro Max) en vez de theme-factory.

---

## 5. `brand-guidelines` — 28.9k installs ⭐ BRAND CONSISTENCY

**Instalar:**
```bash
npx skills add anthropics/skills --skill brand-guidelines
```

**Qué hace:** Aplica colores y tipografía de una marca a cualquier artefacto. Viene pre-configurado con el sistema de Anthropic, pero sirve como **template** para el sistema de la marca del usuario.

**Cómo customizar para el usuario:**
1. Instalar el skill
2. Copiar el archivo de configuración
3. Reemplazar colores y tipografías con los del proyecto
4. Claude aplica el sistema automáticamente a todos los artefactos

**Paleta default (Anthropic):**
- Primary: dark/light neutrals
- Accents: orange, blue, green
- Headings: Poppins (24pt+)
- Body: Lora
- Fallbacks: Arial, Georgia

**Cuándo activar en TERMIDEATOR:**
- Phase 3 — si el usuario ya tiene una marca definida
- Se combina con frontend-design: la marca define los colores, frontend-design define la dirección estética

---

## Integración en el Blueprint

**Section 7 (Design System) — orden de ejecución:**

```markdown
### Design System Pipeline

Step 0: Direction (frontend-design)
  → Activate: "Use frontend-design to establish aesthetic direction for [project type]"
  → Output: aesthetic direction doc with typography, color approach, motion style

Step 1: System (UI UX Pro Max)
  → Generate: `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "[type]" --design-system --persist -p "[Name]"`
  → Output: design-system/MASTER.md

Step 2: Brand Reference (Awesome Design MD, optional)
  → Download: `curl -o DESIGN.md https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/[company]/DESIGN.md`
  → Apply: overrides on top of MASTER.md

Step 3: Motion (Emil Kowalski)
  → Define: motion principles for this project (playful/professional/elegant)
  → Rules: ease-out entrances, ease-in exits, transform/opacity only

Step 4: Assets (canvas-design, for launch)
  → Generate: OG image, launch poster, social card

Audit (web-design-guidelines — pre-deploy)
  → Run: `/web-design-guidelines src/` before every deploy
```

---

## Install All (One Command)

```bash
# Todos los design skills de Anthropic
npx skills add anthropics/skills --skill frontend-design
npx skills add anthropics/skills --skill canvas-design
npx skills add anthropics/skills --skill theme-factory
npx skills add anthropics/skills --skill brand-guidelines

# Quality gate de Vercel
npx skills add vercel-labs/agent-skills --skill web-design-guidelines

# Pipeline completo
npx uipro-cli init --ai claude
npx skills add emilkowalski/skill
```
