# Vercel Composition Patterns (vercel-labs/agent-skills)

**Instalar:** `npx skills add vercel-labs/agent-skills/vercel-composition-patterns`
**Skills.sh:** https://skills.sh/vercel-labs/agent-skills/vercel-composition-patterns
**Installs:** 154.7k
**Complementa:** vercel-react-best-practices (ya integrado)

---

## Qué Es

El complemento visual/estructural de `vercel-react-best-practices`. Mientras que el primero cubre data fetching, caching y Server Components, este cubre **cómo componer layouts y shells de UI** en Next.js App Router de forma correcta y escalable.

---

## Patterns que Cubre

### 1. Shell Pattern
```tsx
// Layout shell que persiste entre navigations
// El contenido cambia, el shell no
app/
  layout.tsx          ← Shell (nav, sidebar, footer)
  dashboard/
    layout.tsx        ← Sub-shell (sidebar específico)
    page.tsx          ← Contenido que cambia
    loading.tsx       ← Skeleton mientras carga
    error.tsx         ← Error boundary
```

**Cuándo usar:** Todo dashboard, admin panel, SaaS con navegación persistente.

---

### 2. Parallel Routes (slots)
```tsx
// Múltiples secciones que cargan independientemente
app/
  @analytics/
    page.tsx          ← Carga independiente
  @notifications/
    page.tsx          ← Carga independiente
  layout.tsx          ← Recibe ambos como props
```

**Cuándo usar:** Dashboards con widgets independientes, pages con sidebars dinámicos.

---

### 3. Intercepting Routes (modals sin perder contexto)
```tsx
// El modal abre SOBRE la página actual
// Si el usuario refresca, ve la página completa
app/
  photos/
    [id]/
      page.tsx        ← Foto full page
  @modal/
    (.)photos/[id]/
      page.tsx        ← Misma foto como modal
```

**Cuándo usar:** Galerías, feeds con detail view, cualquier modal que necesite ser compartible.

---

### 4. Composition Boundaries
```tsx
// Dónde poner el límite Client/Server
// Server Component por defecto
// Client Component solo donde hay interactividad

// ✅ Correcto: Server fetches, Client renders interactive parts
async function Page() {
  const data = await fetchData() // server
  return <InteractiveComponent data={data} /> // client
}

// ❌ Incorrecto: hacer todo Client por comodidad
'use client'
async function Page() {
  const [data, setData] = useState(null)
  useEffect(() => fetchData().then(setData), [])
  // ...
}
```

---

### 5. Streaming con Suspense
```tsx
// Cargar partes de la página en paralelo
// El usuario ve contenido inmediato
export default function Page() {
  return (
    <>
      <StaticHeader />                    {/* Inmediato */}
      <Suspense fallback={<Skeleton />}>
        <AsyncComponent />                {/* Stream */}
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <AnotherAsync />                  {/* Stream paralelo */}
      </Suspense>
    </>
  )
}
```

---

### 6. Route Groups para Organización
```tsx
app/
  (marketing)/          ← Grupo (no afecta URL)
    about/
    pricing/
    layout.tsx          ← Layout solo para marketing pages
  (app)/                ← Grupo
    dashboard/
    settings/
    layout.tsx          ← Layout solo para app pages (con auth)
```

**Cuándo usar:** Proyectos con secciones muy distintas (marketing vs app).

---

### 7. Server Actions para Forms
```tsx
// Forms que funcionan sin JavaScript
// Progresivamente enhanced con JS
async function createUser(formData: FormData) {
  'use server'
  const name = formData.get('name')
  await db.users.create({ data: { name } })
  revalidatePath('/users')
}

export default function Form() {
  return (
    <form action={createUser}>
      <input name="name" />
      <button type="submit">Create</button>
    </form>
  )
}
```

---

## Cómo Entra en TERMIDEATOR

### En Phase 3 — Architecture Confirmation

El ARCHITECTURE AGENT incluye en su recomendación:

```
Para proyectos con Next.js (SaaS, Marketplace, AI Product):
→ vercel-composition-patterns es OBLIGATORIO

Patterns a usar según arquetipo:
- SaaS dashboard → Shell + Parallel Routes
- E-commerce → Intercepting Routes (product modal)
- Content platform → Streaming + Suspense
- Any form → Server Actions
- Marketing + App → Route Groups
```

### En Section 9 del Blueprint

```markdown
### Layout Architecture (vercel-composition-patterns)

Install: `npx skills add vercel-labs/agent-skills/vercel-composition-patterns`

Patterns used in this project:
- Shell Pattern: app/layout.tsx + app/(app)/layout.tsx
- [pattern 2]: [use case]
- [pattern 3]: [use case]

Key rules:
- Server Components by default, Client only when interactive
- Parallel routes for independent loading sections
- Server Actions for all form mutations
- Suspense boundaries around all async components
```

### En el CLAUDE.md del Target Project

```markdown
### Composition Rules (vercel-composition-patterns)
- Default to Server Components — only use 'use client' for interactivity
- Shell pattern for all authenticated layouts
- Parallel routes for dashboard widgets that load independently
- Intercepting routes for modals that need shareable URLs
- Server Actions for all form submissions (not API routes)
- Suspense around every async component
```

---

## Por Qué Es Urgente

Sin este skill, Claude Code tiende a:
- Hacer todo `'use client'` por defecto (peor performance)
- No usar `loading.tsx` / `error.tsx` (peor UX)
- No aprovechar Parallel Routes (loading secuencial en vez de paralelo)
- Usar `useEffect` para data fetching en vez de Server Components
- No usar Server Actions (más código, más complexity)

Con este skill: layouts profesionales, performance óptima, y el código correcto desde el primer intento.

---

## Install

```bash
# Individual
npx skills add vercel-labs/agent-skills/vercel-composition-patterns

# Con el resto del stack de Vercel (recomendado)
npx skills add vercel-labs/agent-skills/vercel-react-best-practices
npx skills add vercel-labs/agent-skills/vercel-composition-patterns
npx skills add vercel-labs/next-skills/next-best-practices
```
