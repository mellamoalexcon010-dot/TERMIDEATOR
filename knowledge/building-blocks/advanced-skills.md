# Advanced Skills — Power Tools para TERMIDEATOR

Skills especializados de alta potencia para auditoría, contenido visual y diagramas.

---

## 1. Shannon — Autonomous Pen Testing (unicodeveloper)

**Instalar:** `npx skills add unicodeveloper/shannon`
**Source:** skills.sh/unicodeveloper/shannon
**Benchmark:** 96.15% exploit success rate en XBOW

**Qué hace:** Ejecuta exploits reales de seguridad contra tu aplicación antes de lanzar. No es un escáner estático — es un agente autónomo que ataca activamente.

**50+ tipos de vulnerabilidades que testea:**
- SQL Injection (manual + blind)
- XSS (reflected, stored, DOM-based)
- CSRF
- SSRF (Server-Side Request Forgery)
- Path Traversal
- Command Injection
- Broken Authentication
- IDOR (Insecure Direct Object Reference)
- Open Redirect
- XXE (XML External Entity)

**5 categorías OWASP que cubre:**
- A01: Broken Access Control
- A02: Cryptographic Failures
- A03: Injection
- A07: Identification and Authentication Failures
- A10: Server-Side Request Forgery

**Cómo funciona:**
- Corre en Docker (aislado de tu sistema)
- Genera reporte con vulnerabilidades encontradas + severity + fix recomendado
- Costo aproximado: ~$50 por pentest completo (tokens de Claude)

**Cuándo activar en TERMIDEATOR:**
- Section 20 (Post-Launch) — semana antes del launch
- Obligatorio para: fintech, health, marketplaces con pagos
- Recomendado para: cualquier SaaS con datos de usuarios

**Comando:**
```bash
docker run shannon pentest --target https://staging.tudominio.com
# Usa staging, NUNCA producción
```

---

## 2. Remotion — Videos Programáticos con React

**Instalar:** `npx skills add remotion-dev/skills/remotion-best-practices`
**Source:** skills.sh/remotion-dev/skills/remotion-best-practices
**Qué hace:** Genera videos programáticos usando React. Cada frame es un componente React.

**Casos de uso para TERMIDEATOR:**

| Tipo de Video | Para Qué | Sección del Blueprint |
|---------------|----------|----------------------|
| Product demo | Mostrar el producto en ProductHunt | Section 20 (Launch) |
| Feature announcement | Video de changelog para redes | Section 19 (Growth) |
| Onboarding walkthrough | Tutorial animado para usuarios | Section 11 (Auth/Onboarding) |
| Social content | Videos cortos para Twitter/TikTok | Section 19 (Social Content) |
| Pitch deck animado | Para fundraising o demos | Extra |

**Cómo se integra con el MARKETING AGENT:**
```
MARKETING AGENT genera el script del video
  ↓
Remotion skill genera el código React del video
  ↓
npm run build → video MP4 exportado
  ↓
Upload a Twitter/LinkedIn/ProductHunt
```

**Stack de Remotion:**
```bash
npx create-video@latest
npm run dev     # preview en browser
npm run build   # exporta MP4
```

**Cuándo activar:**
- Section 19 (Growth Hooks) — para founders que quieren video marketing
- Section 20 (Post-Launch Week 1) — video de demo para ProductHunt
- NOT obligatorio — es un nice-to-have para equipos con tiempo

---

## 3. AccessLint — WCAG Accessibility Audit

**Instalar:** `npx skills add accesslint/cli`
**Alternativa:** Usar junto a `web-design-guidelines` de Vercel

**Qué hace:** Audita accesibilidad específicamente contra WCAG 2.1 AA. Más profundo que web-design-guidelines en el área de accesibilidad.

**WCAG 2.1 AA — Lo Que Checkea:**
```
Perceivable:
  ✓ Alt text en todas las imágenes
  ✓ Captions para videos/audio
  ✓ Contraste mínimo 4.5:1 (texto normal) / 3:1 (texto grande)
  ✓ No content que depende solo de color

Operable:
  ✓ Todo accesible con teclado
  ✓ No trampas de foco (keyboard trap)
  ✓ Skip navigation links
  ✓ Focus visible en todos los elementos interactivos
  ✓ Touch targets mínimo 44x44px

Understandable:
  ✓ Labels descriptivos en forms
  ✓ Error messages informativos
  ✓ Consistent navigation

Robust:
  ✓ HTML válido
  ✓ ARIA usado correctamente
  ✓ Nombre/rol/valor en componentes custom
```

**Por qué importa para TERMIDEATOR:**
- Enterprise clients requieren WCAG compliance (SOC2, contratos)
- Evita demandas por accesibilidad (en US esto es real)
- SEO: accesibilidad correlaciona con mejor ranking

**Cuándo activar:**
- Build Order: penúltimo step, junto con web-design-guidelines
- Proyectos enterprise o B2B: obligatorio
- Proyectos B2C consumer: recomendado

---

## 4. Excalidraw Diagram Generator — Diagramas Reales

**Instalar:** `npx skills add https://github.com/coleam00/excalidraw-diagram-skill --skill excalidraw-diagram`
**Alternativa:** `npx skills add coleam00/excalidraw-diagram-skill`

**Qué hace:** Genera diagramas de arquitectura en formato Excalidraw (.excalidraw) exportables y editables. No es texto ASCII — son diagramas visuales reales.

**Tipos de diagramas para TERMIDEATOR:**

| Diagrama | Sección del Blueprint | Cuándo |
|----------|----------------------|--------|
| System Architecture | Section 6 (API Design) | Siempre |
| Database Schema (ERD) | Section 5 (Data Model) | Siempre |
| User Flow | Section 3 (Target Users) | Siempre |
| Authentication Flow | Section 11 (Auth) | Siempre |
| Deployment Architecture | Section 10 (Env Setup) | Para DevOps |
| API Request Lifecycle | Section 6 (API Design) | Para APIs complejas |

**Cómo entra en el Blueprint:**

```markdown
### Section 6 — Architecture Diagram

[Generate with Excalidraw skill]
Command: "Use excalidraw-diagram to create the system architecture for [project]
         showing: Browser → Vercel Edge → Next.js → Supabase → External APIs"

Output: architecture.excalidraw (editable)
Export: architecture.png (para incluir en docs)
```

**Por qué Excalidraw vs texto ASCII:**
- Los diagramas en texto se rompen con cualquier edición
- Excalidraw es editable por el usuario
- Se puede compartir con el equipo
- Se exporta a PNG para documentación

---

## Integración en TERMIDEATOR

### En el Build Order del Blueprint

```markdown
### Pre-Launch Checklist (Section 20)

Step N-3: Run AccessLint
  Command: `npx accesslint src/`
  Fix all WCAG 2.1 AA violations before continuing

Step N-2: Run web-design-guidelines
  Command: `/web-design-guidelines src/`
  Fix all findings before continuing

Step N-1: Shannon Security Audit
  Environment: STAGING only
  Command: `docker run shannon pentest --target https://staging.[domain].com`
  Fix all HIGH/CRITICAL findings before launch

Step N: Deploy to Production
  Command: Use deploy-to-vercel skill
```

### En Section 6 del Blueprint

```markdown
### Architecture Diagrams

Generated with Excalidraw skill:
- system-architecture.excalidraw — full system view
- user-flow.excalidraw — main user journeys
- db-schema.excalidraw — entity relationships
- auth-flow.excalidraw — authentication sequence
```

### En Section 19 (Growth Hooks)

```markdown
### Video Marketing (Remotion)

Install: `npx create-video@latest`
Skill: `npx skills add remotion-dev/skills/remotion-best-practices`

Videos to create:
- product-demo.tsx — 60 second product demo for ProductHunt
- feature-[name].tsx — feature announcements
- social-clip.tsx — 15 second clips for Twitter/TikTok
```

---

## Install All

```bash
# Security audit
npx skills add unicodeveloper/shannon

# Video content
npx skills add remotion-dev/skills/remotion-best-practices

# Accessibility
npx install -g accesslint-cli

# Architecture diagrams
npx skills add coleam00/excalidraw-diagram-skill
```
