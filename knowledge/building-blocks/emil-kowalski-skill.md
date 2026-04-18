# Emil Kowalski — Design Engineering Skill

**Skill:** `npx skills add emilkowalski/skill`
**Site:** https://emilkowal.ski/skill
**Covers:** Animations, component design, UI polish, performance, accessibility

---

## Qué Es

Un skill de Claude Code creado por Emil Kowalski — el design engineer detrás de Sonner (el sistema de toasts más usado en React), Vaul (drawers), y otras librerías que se usan en millones de apps.

El skill convierte sus artículos y principios en inteligencia directa para Claude Code. Cuando está activo, Claude genera animaciones, componentes y UI con el mismo nivel de craft que Emil aplica en sus proyectos open source.

**No es para usar siempre encendido.** Es un skill para usar en momentos específicos:
- Revisar animaciones existentes
- Implementar transiciones, modales, drawers
- Pulir hover states y micro-interacciones
- Auditar UI code antes del launch

---

## Instalación

```bash
npx skills add emilkowalski/skill
```

Funciona con Claude Code, Codex, Cursor, y más.

---

## Los Principios Core

### Animaciones — Timing & Easing

```
REGLA 1: Nunca más de 1 segundo total
  Si tu animación tarda más, no es animación — es loading screen.

REGLA 2: Easing por tipo de movimiento
  Entrance → ease-out (el elemento desacelera al llegar, como un auto entrando)
  Exit → ease-in (el elemento acelera al salir, como soltar una cuerda)
  A → B en pantalla → ease-in-out (drag, reposition)
  NUNCA linear para UI (solo para progress bars y loops)

REGLA 3: Spring physics > CSS easing
  Springs tienen overshoot natural y settle. Se sienten orgánico.
  transition: spring(1, 80, 10) con Motion o CSS linear()

REGLA 4: Duración por frecuencia de uso
  Decenas de veces/día (hover, nav) → no animation o <100ms
  Varias veces/día (drawer, modal) → 200-400ms
  Raro (onboarding, celebración) → puede ser más largo
```

### Animaciones — Propiedades a Animar

```
GPU-accelerated (usar SIEMPRE que se pueda):
  ✅ transform (translate, scale, rotate)
  ✅ opacity

Evitar si hay alternativa:
  ⚠️ width/height (usar scale en su lugar)
  ⚠️ top/left/right/bottom (usar transform: translate)
  ❌ margin/padding para movimiento (nunca)

will-change: usar solo cuando necesario, remover después.
```

### Patrones de Entrada/Salida

```
Fade + Rise (el clásico para contenido apareciendo):
  FROM: opacity: 0, y: 8
  TO:   opacity: 1, y: 0

Fade + Sink (para contenido desapareciendo — gravedad natural):
  FROM: opacity: 1, y: 0
  TO:   opacity: 0, y: 8

Modals:
  FROM: scale(0.96) + opacity: 0  ← NO scale(0) — empieza cerca del final
  TO:   scale(1) + opacity: 1

Toasts (Sonner pattern):
  Entran del borde + fade. Salen al mismo borde.
  Slide from right → slide out to right.
```

### Staggering

```
✅ Usar para: lista de cards, items relacionados
❌ No usar para: elementos UI no relacionados
Tamaño ideal del grupo: 3-7 items
Más de 7 = el último item espera demasiado

Orden de entrada: background → container → content → actions
Orden de salida: mirror o todo-a-la-vez (no stagger en exit)
```

### Accesibilidad (No Opcional)

```css
@media (prefers-reduced-motion: no-preference) {
  .animated-element {
    animation: fadeIn 200ms ease-out;
  }
}
```

O en JS:
```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

---

## Principios de Design Engineering

### El Craft Invisible

```
La primera impresión importa más que la impresión décima.
El usuario evalúa la calidad de tu app en los primeros 3 segundos.
Las animaciones son el handshake de tu producto.

"En un mundo donde todo el software es good enough,
el taste es el diferenciador."
— Emil Kowalski
```

### Componentes con Personalidad

```
Playful (apps B2C, games, kids): más bounce, más elastic
Professional (dashboards, B2B): crisp, rápido, sin bounce
Elegant (luxury, fashion): más lento, ease en vez de ease-out
Match the motion to the mood of the component.

Ejemplo: Sonner usa ease en vez de ease-out porque
la librería tiene un vibe más elegante que urgente.
Todo es coherente: el easing, la duración, el diseño de la toast.
```

### Code Review de Animaciones

Cuando Emil revisa código de animaciones, usa SIEMPRE una tabla markdown:

```
| Before | After | Why |
|--------|-------|-----|
| transition: all 300ms | transition: transform 200ms ease-out | Specific props + correct easing |
| scale(0) | scale(0.96) | Start closer to final state |
| ease-in-out | ease-out | Entrance should decelerate |
```

**Nunca lista con "Before: / After:" en líneas separadas. Siempre tabla.**

### Antes de Escribir Cualquier Animación

Responde estas preguntas en orden:
1. ¿Con qué frecuencia el usuario ve esto?
2. ¿Qué propósito funcional tiene la animación?
3. ¿Puede el usuario interrumpirla?
4. ¿Respeta prefers-reduced-motion?

---

## Patrones Específicos

### Focus States
```
Nunca animar el focus ring.
Los focus rings son para accesibilidad.
Anima el elemento, no el indicador.
```

### Disabled States
```
Cero animación en elementos disabled.
No hover effects. No tease. No interacción visual.
```

### Loading States
```
Subtle pulse o skeleton shimmer.
No spinners a menos que sea absolutamente necesario.
Mantén el ritmo calmo.
```

### Scroll-linked Animations
```
Scroll animations pueden causar jank.
Usar scroll-timeline o Intersection Observer con cuidado.
Nunca animar during scroll directamente.
```

---

## Cómo Entra en TERMIDEATOR

### Cuándo Activarlo

**NO siempre encendido.** Activar en estos momentos específicos:

1. **Phase 3 (Design System):**
   - Junto con UI UX Pro Max para definir motion principles
   - "¿Qué tipo de animaciones van con este proyecto? (professional, playful, elegant)"

2. **Section 16 (Non-Negotiable Rules):**
   - Agregar animation rules al CLAUDE.md del target project

3. **Build Order (Step de UI):**
   - "Antes de lanzar: usa el skill de Emil para auditar todas las animaciones"

4. **Section 13 (Testing):**
   - Checklist de animaciones en la pre-delivery review

### En el CLAUDE.md del Target Project

Incluir esta sección:

```markdown
### Animation Rules (Emil Kowalski)
Install: `npx skills add emilkowalski/skill`
Use for: animation review, motion decisions, component polish

Core rules:
- Never animate > 1 second
- ease-out for entrances, ease-in for exits
- Animate transform/opacity only (GPU-accelerated)
- FROM: opacity: 0, y: 8 → TO: opacity: 1, y: 0
- Modals: scale(0.96) not scale(0)
- Always prefers-reduced-motion
- Match motion to component personality (playful/professional/elegant)

Audit command: "Use the Emil skill to review all animations in [component]"
```

---

## Combinación Perfecta con UI UX Pro Max

| Skill | Qué Hace | Cuándo |
|-------|----------|--------|
| **UI UX Pro Max** | Design system completo (colores, tipografía, layout, componentes) | Phase 3, antes del build |
| **Emil Kowalski** | Motion design y animation principles | Phase 3 + pre-launch audit |
| **Awesome Design MD** | Brand reference (Stripe, Notion, Apple...) | Phase 3, brand direction |

**Juntos los 3 forman el design pipeline más completo posible para Claude Code.**

```
UI UX Pro Max  → Qué se ve
Emil Kowalski  → Cómo se mueve
Awesome Design MD → A qué marca se parece
```

---

## Proyectos Open Source de Emil (Ya Los Usas)

Si tu stack usa cualquiera de estos, el skill de Emil es especialmente relevante:

- **Sonner** — Toast notifications (el más copiado en React)
- **Vaul** — Drawer component
- **cmdk** — Command menu (usado en Linear, Vercel, etc.)

Sus principios de animación están literalmente implementados en estos componentes.
