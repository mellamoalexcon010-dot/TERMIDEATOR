# Taste Skill — Aesthetic Intelligence (leonxlnx/taste-skill)

**Instalar:** `npx skills add leonxlnx/taste-skill`
**Skills.sh:** https://skills.sh/leonxlnx/taste-skill
**Total installs:** ~185k en 5 skills
**Qué es:** Principios de gusto visual y estética especializada por dirección

---

## Por Qué Importa

`frontend-design` de Anthropic elige la dirección estética. `taste-skill` la ejecuta con criterio. Son complementarios: uno dice "qué", el otro dice "cómo hacerlo bien".

---

## Los 5 Skills

### `design-taste-frontend` — 36.4k installs
**El skill fundacional del paquete.**

```
Qué hace: Enseña principios de gusto visual aplicados a UI
          No es teoría — son reglas prácticas con ejemplos de código

Principios que aplica:
- Whitespace como elemento de diseño (no ausencia de contenido)
- Contraste como comunicación (qué importa más que qué)
- Consistencia vs variedad (cuándo romper el patrón intencionalmente)
- La regla del 60-30-10 para color
- Tipografía como personalidad (no solo legibilidad)
- Jerarquía visual sin gritar

Cuándo usar: Phase 3 antes de generar el design system
Input: "Use design-taste-frontend to establish visual principles for [project]"
```

---

### `high-end-visual-design` — 32k installs
**Para proyectos premium, luxury, o que quieren verse de alta calidad.**

```
Qué hace: Aplica los principios de diseño de marcas premium
          Piensa: Apple, Stripe, Linear, Loewe, Bottega Veneta en software

Características que genera:
- Generous whitespace (mucho más del que parece "suficiente")
- Tipografía editorial con tracking ajustado
- Paleta muy restringida (máximo 3 colores, alta pureza)
- Imágenes de alta calidad o ausencia total de imágenes
- Micro-animaciones sutiles y precisas
- Grid estricto y asimétrico
- Copy conciso con mucho peso por palabra

Cuándo usar: Arquetipos luxury, fintech premium, herramientas para profesionales
             Marketing sites de productos premium
Input: "Use high-end-visual-design for the hero and pricing sections"
```

---

### `minimalist-ui` — 29.5k installs
**Para proyectos que quieren hacer más con menos.**

```
Qué hace: Aplica principios de minimalismo real (no "diseño plano aburrido")
          La diferencia: minimalismo con intención vs diseño sin esfuerzo

Principios:
- Eliminar hasta que duele, después un elemento más
- Cada elemento que queda debe ganarse su lugar
- El espacio vacío comunica
- La tipografía hace todo el trabajo visual
- El color como excepción, no como regla

Lo que explícitamente evita:
- Iconos decorativos que no agregan info
- Cards por el solo hecho de tener cards
- Dividers cuando el whitespace puede hacer el trabajo
- Sombras que no indican profundidad real
- Gradientes sin propósito funcional

Cuándo usar: Developer tools, productivity apps, B2B SaaS, internal tools
Input: "Use minimalist-ui to audit [component] and remove unnecessary elements"
```

---

### `redesign-existing-projects` — 31.5k installs
**Para cuando el usuario tiene un proyecto existente que quiere mejorar.**

```
Qué hace: Framework para rediseñar sin romper lo que funciona
          Identifica qué mantener, qué mejorar y qué eliminar

Proceso que sigue:
1. Audit actual (qué funciona bien, qué no)
2. Identify constraints (qué NO puede cambiar)
3. Define direction (qué estilo nuevo)
4. Incremental changes (en orden de impacto)
5. Validate consistency (que el nuevo y viejo cohesionen)

Cuándo usar: El usuario ya tiene código y quiere refreshear el diseño
             Post-launch cuando hay feedback visual negativo
Input: "Use redesign-existing-projects to refresh the dashboard design"
```

---

### `industrial-brutalist-ui` — 27.5k installs
**Para proyectos que quieren romper las convenciones.**

```
Qué hace: Aplica principios del brutalismo industrial a UI digital

Características que genera:
- Bordes gruesos y visibles (1-4px solid, no shadows)
- Tipografía mono o sans-serif heavy
- Colores puros y high contrast (blanco puro, negro puro, un accent fuerte)
- Grid irregular e intencionalmente roto
- Elementos que se solapan
- Texto como elemento gráfico
- Zero decoración — todo funcional

Para qué proyectos:
- Developer tools que quieren diferenciarse
- Herramientas para creadores (música, arte, código)
- Startups que quieren posicionarse como "anti-enterprise"
- Proyectos con audiencia técnica joven

Cuándo usar: Cuando frontend-design elige dirección brutalista/raw
Input: "Use industrial-brutalist-ui to design the code editor interface"
```

---

## `stitch-design-taste` — 27.5k installs *(bonus del paquete)*

```
Qué hace: Skill de Google Labs que aplica principios de taste a Stitch
          Funciona independientemente como guía de principios visuales
          Complementa los otros 5 con perspectiva de Google Design

Cuándo usar: Como referencia adicional de principios visuales
```

---

## Cómo Entra en TERMIDEATOR

### En Phase 3 — Selección de Dirección Estética

Cuando el usuario confirma el stack, el ARCHITECTURE AGENT pregunta:

```
"¿Cuál es la dirección visual del proyecto?"

Opciones (y el skill que aplica):
→ Premium / luxury → high-end-visual-design
→ Minimal / clean  → minimalist-ui
→ Bold / brutal    → industrial-brutalist-ui
→ Rediseño        → redesign-existing-projects
→ General         → design-taste-frontend

(Nota: frontend-design de Anthropic corre siempre como Layer 0)
```

### En el Build Order

```markdown
### Design Pipeline Steps

Step 1: Direction (Phase 3)
  frontend-design → aesthetic direction
  taste-skill/[elegido] → ejecutar esa dirección correctamente

Step N (post-build): Polish
  impeccable/critique → feedback
  impeccable/polish → fixes
  impeccable/[específico] → por dimensión

Final: web-design-guidelines → quality gate
```

### En Section 7 del Blueprint

```markdown
### Visual Direction
Selected style: [premium/minimal/brutalist/redesign]
Skill: `npx skills add leonxlnx/taste-skill/[skill]`

Key principles for this project:
[Generados por el skill seleccionado]

How to apply:
"Use [skill] to review and refine [component/section]"
```

---

## Instalar

```bash
# Paquete completo
npx skills add leonxlnx/taste-skill

# Individuales según dirección elegida
npx skills add leonxlnx/taste-skill/design-taste-frontend
npx skills add leonxlnx/taste-skill/high-end-visual-design
npx skills add leonxlnx/taste-skill/minimalist-ui
npx skills add leonxlnx/taste-skill/redesign-existing-projects
npx skills add leonxlnx/taste-skill/industrial-brutalist-ui
```

---

## Combinación con el Pipeline Completo

```
frontend-design        → QUÉ dirección (brutalista, luxury, minimal...)
taste-skill/[elegido]  → CÓMO ejecutar esa dirección con criterio
ui-ux-pro-max          → sistema de diseño por industria
emil-kowalski          → cómo se MUEVE
impeccable             → pulir después de construir
web-design-guidelines  → quality gate final
```
