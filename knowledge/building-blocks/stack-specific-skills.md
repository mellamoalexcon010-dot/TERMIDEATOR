# Stack-Specific Skills — Best Practices por Tecnología

Skills oficiales de los vendors más importantes del stack de TERMIDEATOR. Cada uno da las mejores prácticas directamente del equipo que construyó la tecnología.

---

## TIER 1 — Stack Default de TERMIDEATOR

### `vercel-react-best-practices` — 329.1k installs
**Source:** `vercel-labs/agent-skills`
**Instalar:** `npx skills add vercel-labs/agent-skills/vercel-react-best-practices`

El segundo skill más instalado del mundo. Nuestro framework default es Next.js 15. Este skill da las mejores prácticas reales del equipo de Vercel.

**Qué cubre:**
- Server Components vs Client Components — cuándo usar cada uno
- Data fetching patterns con App Router
- Caching strategies (React Cache, fetch cache, unstable_cache)
- Streaming y Suspense correctamente
- Error boundaries y error.tsx
- Loading states con loading.tsx
- Route handlers vs Server Actions
- Optimistic UI patterns

**Cuándo activar:** Section 9 (Tech Stack) — siempre que el stack incluya Next.js.

```bash
npx skills add vercel-labs/agent-skills/vercel-react-best-practices
# Uso: "Use vercel-react-best-practices when implementing [feature]"
```

---

### `supabase-postgres-best-practices` — 105.9k installs
**Source:** `supabase/agent-skills`
**Instalar:** `npx skills add supabase/agent-skills/supabase-postgres-best-practices`

Supabase es nuestro database default. Este skill es el manual oficial de mejores prácticas.

**Qué cubre:**
- Query optimization y indexing strategy
- RLS avanzado (más allá del básico)
- Realtime subscriptions sin memory leaks
- Storage policies
- Edge Functions patterns
- Connection pooling con pgbouncer
- Migrations seguras en producción
- Backup y recovery procedures

**Cuándo activar:** Section 5 (Data Model) — siempre que el stack incluya Supabase.

```bash
npx skills add supabase/agent-skills/supabase-postgres-best-practices
# Uso: "Use supabase-postgres-best-practices when designing the schema for [table]"
```

---

### `shadcn` — 93.7k installs
**Source:** `shadcn/ui`
**Instalar:** `npx skills add shadcn/ui/shadcn`

shadcn/ui es nuestro component system default. Skill oficial que da el mejor uso de sus componentes.

**Qué cubre:**
- Cuándo usar qué componente (Dialog vs Sheet vs Drawer)
- Customización correcta sin romper el sistema
- Form validation con React Hook Form + Zod
- Composición de componentes complejos
- Temas y CSS variables
- Accesibilidad built-in

**Cuándo activar:** Section 7 (Design System) + cualquier step de UI en el Build Order.

```bash
npx skills add shadcn/ui/shadcn
# Uso: "Use the shadcn skill to implement the pricing page components"
```

---

### `vercel-react-native-skills` — 94.2k installs
**Source:** `vercel-labs/agent-skills`
**Instalar:** `npx skills add vercel-labs/agent-skills/vercel-react-native-skills`

Para el arquetipo **Mobile App** — React Native / Expo.

**Qué cubre:**
- Navigation patterns (Stack, Tab, Modal)
- Performance optimization (FlatList, memo, useMemo)
- Platform-specific code (iOS vs Android)
- Deep linking
- Push notifications
- App Store / Play Store prep

**Cuándo activar:** Solo para arquetipo Mobile App — Section 9.

---

## TIER 2 — Alternativas y Complementos

### `better-auth-best-practices` — 39k installs
**Source:** `better-auth/skills`
**Instalar:** `npx skills add better-auth/skills/better-auth-best-practices`

Alternativa a Clerk cuando el usuario no quiere pagar o quiere auth open source.

**Cuándo elegir Better Auth vs Clerk:**
- Clerk: usuario quiere zero-config, tiene presupuesto, quiere UI de auth lista
- Better Auth: usuario quiere control total, proyecto bootstrap, no quiere vendor lock-in

**Qué cubre:**
- Setup en Next.js App Router
- OAuth providers
- Session management
- 2FA implementation
- Magic links

---

### `supabase` — 23.6k installs
**Source:** `supabase/agent-skills`
**Instalar:** `npx skills add supabase/agent-skills/supabase`

Skill general de Supabase (setup, quickstart, patterns básicos). Usar junto a `supabase-postgres-best-practices` para cobertura completa.

---

### `next-best-practices` — 66.8k installs
**Source:** `vercel-labs/next-skills`
**Instalar:** `npx skills add vercel-labs/next-skills/next-best-practices`

Complemento a `vercel-react-best-practices`. Más específico a patrones de Next.js.

---

### `next-cache-components` — 21.5k installs
**Source:** `vercel-labs/next-skills`
**Instalar:** `npx skills add vercel-labs/next-skills/next-cache-components`

Para proyectos con alto tráfico o datos que cambian poco. Implementa caching strategies avanzadas.

---

### `deploy-to-vercel` — 32.9k installs
**Source:** `vercel-labs/agent-skills`
**Instalar:** `npx skills add vercel-labs/agent-skills/deploy-to-vercel`

Automatiza el deploy a Vercel desde Claude Code. Entra en el último step del Build Order.

```bash
# Uso: "Use deploy-to-vercel to deploy the project to production"
```

---

### `firecrawl` — 35.3k installs
**Source:** `firecrawl/cli`
**Instalar:** `npx skills add firecrawl/cli/firecrawl`

Para Phase 2 (Market Sizing) — scraping de competidores en tiempo real.

```bash
# Uso en Phase 2: "Use firecrawl to analyze [competitor].com and extract their pricing, features, and copy"
```

Sub-skills de firecrawl:
- `firecrawl-scrape` — scrape de una página específica
- `firecrawl-search` — busca en múltiples sitios
- `firecrawl-crawl` — crawl completo de un dominio
- `firecrawl-map` — mapea la estructura de un sitio

---

### `playwright-best-practices` — 28.9k installs
**Source:** `currents-dev/playwright-best-practices-skill`
**Instalar:** `npx skills add currents-dev/playwright-best-practices-skill/playwright-best-practices`

Mejores prácticas de Playwright para E2E testing. Complementa Section 13 (Testing Strategy).

---

### `typescript-advanced-types` — 33.6k installs
**Source:** `wshobson/agents`
**Instalar:** `npx skills add wshobson/agents/typescript-advanced-types`

Para proyectos con TypeScript complejo. Entra como regla en el CLAUDE.md del target project.

---

### `nodejs-backend-patterns` — 26.5k installs
**Source:** `wshobson/agents`
**Instalar:** `npx skills add wshobson/agents/nodejs-backend-patterns`

Para el arquetipo **API/Backend** — patterns de Node.js en producción.

---

### `tailwind-design-system` — 34.4k installs
**Source:** `wshobson/agents`
**Instalar:** `npx skills add wshobson/agents/tailwind-design-system`

Estructura y consistency para el sistema de diseño con Tailwind. Complementa UI UX Pro Max.

---

### Firebase Stack (firebase/agent-skills)

Para el arquetipo **Mobile App** o si el usuario prefiere Firebase sobre Supabase:

```bash
npx skills add firebase/agent-skills/firebase-basics
npx skills add firebase/agent-skills/firebase-auth-basics
npx skills add firebase/agent-skills/firebase-firestore-standard
npx skills add firebase/agent-skills/firebase-hosting-basics
npx skills add firebase/agent-skills/firebase-ai-logic  # para AI products
```

---

### Expo Stack (expo/skills)

Para el arquetipo **Mobile App** con Expo:

```bash
npx skills add expo/skills/building-native-ui
npx skills add expo/skills/native-data-fetching
npx skills add expo/skills/expo-tailwind-setup
npx skills add expo/skills/expo-deployment
npx skills add expo/skills/expo-api-routes
```

---

## Matriz: Stack → Skills Obligatorios

| Stack | Skills Obligatorios |
|-------|-------------------|
| **Next.js + Supabase** | `vercel-react-best-practices` + `supabase-postgres-best-practices` + `shadcn` |
| **Next.js + Firebase** | `vercel-react-best-practices` + `firebase-basics` + `shadcn` |
| **React Native / Expo** | `vercel-react-native-skills` + `expo/skills/*` |
| **API / Backend** | `nodejs-backend-patterns` + `typescript-advanced-types` |
| **Any with Auth** | `better-auth-best-practices` (si no usa Clerk) |
| **Any with Tailwind** | `tailwind-design-system` |
| **Any pre-launch** | `deploy-to-vercel` + `playwright-best-practices` |

---

## Cómo Entra en el Blueprint

**Section 9 (Tech Stack)** — incluir la tabla de skills por tecnología

**Section 15 (Skills to Use During Build)** — listar los skills obligatorios del stack

**CLAUDE.md del target project:**
```markdown
### Stack Skills (install before building)
npx skills add vercel-labs/agent-skills/vercel-react-best-practices
npx skills add supabase/agent-skills/supabase-postgres-best-practices
npx skills add shadcn/ui/shadcn
npx skills add obra/superpowers
npx skills add coreyhaines31/marketingskills

Rules:
- Always use vercel-react-best-practices for Next.js patterns
- Always use supabase-postgres-best-practices for DB queries
- Use shadcn skill for any component implementation
```
