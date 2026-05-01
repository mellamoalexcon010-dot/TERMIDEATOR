# Impeccable — UI Craft System (pbakaus/impeccable)

**Instalar:** `npx skills add pbakaus/impeccable`
**Skills.sh:** https://skills.sh/pbakaus/impeccable
**Total installs:** 573k+ en 12 skills
**Autor:** pbakaus (ex-Google, design engineer)

---

## Qué Es

No es un skill — es un sistema completo de 12 herramientas de craft visual. Cada skill toma un aspecto específico del diseño y lo lleva al límite. La diferencia con otros design skills: estos se usan SOBRE un diseño existente para pulirlo, no para crear desde cero.

**Flujo de uso:**
```
frontend-design → UI UX Pro Max → build → IMPECCABLE (polish & refine)
```

---

## Los 12 Skills

### Tier 1 — Los más usados (usar en todo proyecto)

**`polish`** — 85.4k installs
```
Qué hace: Mejora cualquier UI existente identificando los problemas más notorios
Usa cuando: El diseño está "funcionando" pero no se ve profesional
Input: "Use polish on the pricing page"
Output: Lista de cambios específicos con antes/después
```

**`critique`** — 82.9k installs
```
Qué hace: Audita el diseño con criterio de design engineer real
Usa cuando: Quieres feedback honesto antes de lanzar
Input: "Use critique on the dashboard"
Output: Análisis por dimensión (hierarchy, spacing, color, motion, copy)
```

**`bolder`** — 80.3k installs
```
Qué hace: Hace el diseño más audaz y con más personalidad
Usa cuando: El diseño es "seguro" pero aburrido
Input: "Use bolder on the hero section"
Output: Variantes más bold con justificación de cada cambio
```

**`delight`** — 80.1k installs
```
Qué hace: Agrega micro-interacciones y momentos de placer al usuario
Usa cuando: El diseño funciona pero no es memorable
Input: "Use delight on the onboarding flow"
Output: Lista de micro-interacciones: hover states, loading states, transitions, empty states, success states
```

**`distill`** — 79.7k installs
```
Qué hace: Simplifica y elimina el ruido visual
Usa cuando: El diseño tiene demasiados elementos compitiendo
Input: "Use distill on the settings page"
Output: Lista de elementos a eliminar o reducir + justificación
```

### Tier 2 — Específicos por dimensión

**`typeset`** — 64.8k installs
```
Qué hace: Mejora especificamente la tipografía — escala, jerarquía, espaciado entre líneas, pares de fuentes
Usa cuando: La tipografía se siente inconsistente o genérica
Input: "Use typeset on the landing page"
Output: Sistema tipográfico revisado con scale, weights, line-heights
```

**`overdrive`** — 62.9k installs
```
Qué hace: Lleva el diseño al extremo de su dirección estética
Usa cuando: Quieres saber cómo se vería el diseño al 200%
Input: "Use overdrive on the product page"
Output: Variante extrema con cada elemento llevado al límite
```

**`normalize`** — 54.6k installs
```
Qué hace: Hace el diseño más consistente — mismo spacing, mismo border-radius, misma palette
Usa cuando: El diseño tiene inconsistencias entre páginas o componentes
Input: "Use normalize across all components"
Output: Token system consistente + componentes actualizados
```

**`extract`** — 53.5k installs
```
Qué hace: Extrae los tokens de diseño de un componente o página y los convierte en variables CSS
Usa cuando: Refactorizando de hardcoded values a design tokens
Input: "Use extract on the Button component"
Output: CSS variables + actualización del componente
```

**`onboard`** — 53.3k installs
```
Qué hace: Mejora específicamente el flujo de onboarding con principios de UX
Usa cuando: D1 retention < 50%
Input: "Use onboard to review the signup flow"
Output: Análisis + cambios específicos + best practices de onboarding
```

**`harden`** — 53.2k installs
```
Qué hace: Hace el diseño más robusto — estados de error, loading states, empty states, edge cases
Usa cuando: El diseño solo funciona en el "happy path"
Input: "Use harden on the checkout flow"
Output: Lista de estados faltantes + implementación para cada uno
```

**`arrange`** — 39.3k installs
```
Qué hace: Mejora el layout y la organización visual — grid, whitespace, alignment, grouping
Usa cuando: El layout se siente desordenado o mal organizado
Input: "Use arrange on the dashboard layout"
Output: Sistema de grid revisado + reglas de spacing
```

**`layout`** — 26.4k installs
```
Qué hace: Diseña el sistema de layout — columnas, breakpoints, contenedores, márgenes
Usa cuando: No hay un sistema de layout consistente
Input: "Use layout to establish the grid system"
Output: Grid system completo con breakpoints y tokens
```

**`shape`** — 30.1k installs
```
Qué hace: Trabaja con formas, border-radius, shadows y la "forma" visual de los componentes
Usa cuando: Los componentes se sienten planos o sin personalidad
Input: "Use shape on the card components"
Output: Border-radius system + shadow system + geometric personality
```

**`teach-impeccable`** — 50.3k installs
```
Qué hace: Meta-skill que enseña a usar el sistema completo de Impeccable
Usa cuando: Quieres aprender el framework completo
Input: "Use teach-impeccable"
Output: Guía de cuándo usar cada skill y en qué orden
```

---

## Cuándo Usar Cada Skill en TERMIDEATOR

### En el Build Order del Blueprint

```markdown
### Design Polish Steps (después de completar la UI base)

Step N: Polish Pass 1 — critique + polish
  "Use critique on all pages, then use polish to fix top issues"
  
Step N+1: Polish Pass 2 — por dimensión específica
  Si tipografía débil → typeset
  Si diseño aburrido → bolder + delight
  Si muchos elementos → distill
  Si inconsistente → normalize + extract

Step N+2: Hardening
  "Use harden on: auth flow, checkout flow, core feature flow"
  Agrega todos los estados faltantes

Step N+3: Final audit
  web-design-guidelines → accesibilidad
  polish → último chequeo visual
```

### Por Fase del Diseño

| Fase | Skills de Impeccable | Cuándo |
|------|---------------------|--------|
| Post-build initial | `critique` + `polish` | Después de primer draft |
| Tipografía | `typeset` | Antes de finalizar Section 7 |
| Energía visual | `bolder` + `overdrive` | Si el diseño se siente seguro/aburrido |
| Simplificación | `distill` + `normalize` | Si hay demasiado ruido |
| Interacción | `delight` + `harden` | Antes de launch |
| Layout | `arrange` + `layout` | Si el grid se siente inconsistente |
| Tokens | `extract` | Durante refactoring |
| Onboarding | `onboard` | Si D1 retention < 50% |

---

## Combinar con el Design Pipeline

```
Layer 0: frontend-design → dirección estética
Layer 1: UI UX Pro Max → sistema completo
Layer 2: Emil Kowalski → motion principles
Layer 3: Awesome Design MD → brand reference
BUILD ↓
Layer 4: IMPECCABLE → polish & refinement
  - critique → feedback honesto
  - polish → fixes inmediatos
  - bolder/delight/typeset → según necesidad
  - harden → estados robustos
Audit: web-design-guidelines → quality gate final
```

---

## Instalar

```bash
# Paquete completo
npx skills add pbakaus/impeccable

# Skills individuales más usados
npx skills add pbakaus/impeccable/polish
npx skills add pbakaus/impeccable/critique
npx skills add pbakaus/impeccable/bolder
npx skills add pbakaus/impeccable/delight
npx skills add pbakaus/impeccable/distill
npx skills add pbakaus/impeccable/typeset
npx skills add pbakaus/impeccable/harden
npx skills add pbakaus/impeccable/normalize
```

---

## Regla de Uso

Impeccable se usa DESPUÉS de construir. No reemplaza a frontend-design ni a UI UX Pro Max — los complementa. Si usás Impeccable antes de tener un diseño base, no tiene material sobre qué trabajar.

**El orden correcto:**
1. `frontend-design` → dirección
2. `ui-ux-pro-max` → sistema
3. BUILD el producto
4. `impeccable/critique` → feedback
5. `impeccable/polish` → fixes
6. `impeccable/[específico]` → dimensiones
7. `web-design-guidelines` → audit final
