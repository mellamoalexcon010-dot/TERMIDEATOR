# 🏗️ The Architect v2

> **Describe tu idea. Recibe un blueprint completo. Claude Code construye.**

El agente de arquitectura más completo para Claude Code. Convierte cualquier idea en un **blueprint ejecutable de 20 secciones** con validación de negocio, stack tecnológico, seguridad, métricas y plan de launch — antes de escribir una línea de código.

---

## ⚡ Quick Start

```bash
git clone https://github.com/[tu-usuario]/the-architect-v2.git
cd the-architect-v2
# Abre Claude Code en esta carpeta → lee el CLAUDE.md automáticamente
# Luego: "Quiero construir un SaaS de invoicing. Ayúdame a diseñarlo."
```

---

## 🎯 El Problema que Resuelve

La mayoría de agentes te generan código directo. **The Architect diseña primero, construye después.**

```
Tu idea → 2-3 preguntas → 4 sub-agentes en paralelo → confirmación → blueprint 20 secciones
```

El blueprint resultante es tan completo que **Claude Code puede construir todo sin preguntarte nada.**

---

## 🤖 Los 4 Sub-Agentes (Corren en Paralelo)

| Agente | Qué Hace | Output |
|--------|----------|--------|
| 🔍 **DISCOVERY** | Clasifica la idea, detecta red flags | Arquetipo + Confidence Score |
| 💰 **REVENUE** | Valida el modelo de negocio | PROFIT_MATRIX + KILLER_MOVE_24H |
| ⚙️ **ARCHITECTURE** | Recomienda el stack correcto | Tech Stack + Rationale |
| 🔐 **SECURITY** | Identifica riesgos y genera políticas | RLS SQL + Compliance checklist |

---

## 🗺️ Blueprint de 20 Secciones

1. Executive Summary
2. **Business Model** — PROFIT_MATRIX, unit economics (CAC/LTV), KILLER_MOVE_24H
3. Target Users & Jobs-to-be-done
4. **Competitive Advantage** — TAM/SAM/SOM + moat
5. **Data Model** — Esquema + RLS policies SQL-ready
6. API Design
7. **Design System** — 55 referencias reales (Stripe, Notion, Apple, Linear...)
8. File & Storage Strategy
9. **Tech Stack** — Stack recomendado con rationale
10. Environment Setup — CORS + security headers + .env.local
11. Authentication & Authorization
12. Payment Integration
13. Testing Strategy
14. **Error Handling + Risk Matrix** — 20 riesgos + failure modes
15. Skills to Use During Build
16. **Non-Negotiable Rules** — 15 reglas de seguridad y calidad
17. Build Order — 15-25 pasos con time estimates
18. **Analytics & Metrics** — AARRR + PostHog events + weekly ritual
19. Growth Hooks — Viral loops, SEO, community
20. **Post-Launch 90-Day Roadmap** — Week 1 → Month 3

---

## 📚 16 Building Blocks de Conocimiento

**Arquitectura:** design-references, security-patterns, auth-patterns, database-patterns, api-design, frontend-stacks, deployment-patterns, testing-patterns

**Negocio:** revenue-architecture, user-research-methodology, market-sizing, launch-strategy, risk-matrix, metrics-analytics

---

## 🏛️ 8 Arquetipos Especializados

SaaS / Web App · Marketing Site · Mobile App (iOS/Android) · API/Backend · Internal Tool · Content Platform · **Marketplace** · **AI-Powered Product**

---

## 🔐 Seguridad por Default

RLS policies SQL-ready, CORS config exacta, security headers — todo en el blueprint antes de escribir código.

---

## 💰 Proyectos Integrados

| Proyecto | Qué Agrega |
|----------|------------|
| [Awesome Design MD](https://github.com/VoltAgent/awesome-design-md) | 55 sistemas de diseño reales |
| [Protege Tu App](https://tododeia.com/community/protege-tu-app) | RLS + CORS + headers listos |
| [Arquitecto de Ingresos](https://tododeia.com/community/arquitecto-de-ingresos) | PROFIT_MATRIX + KILLER_MOVE |

---

## 🆚 vs. Otros Agentes

| Feature | The Architect v2 | Agentes típicos |
|---------|-----------------|-----------------|
| Sub-agentes paralelos | ✅ 4 especializados | ❌ 0-1 |
| Validación pre-build | ✅ User research + market sizing | ❌ Directo al código |
| Secciones del blueprint | ✅ 20 | ❌ 5-10 |
| Risk matrix | ✅ 20 riesgos + mitigation | ❌ |
| Post-launch playbook | ✅ 90-day | ❌ |
| Métricas AARRR | ✅ + PostHog template | ❌ genérico |
| Arquetipos especializados | ✅ 8 | ❌ 1-2 |

---

## 📁 Estructura

```
the-architect-v2/
├── CLAUDE.md                    ← Brain del agente
├── knowledge/
│   ├── agent-prompts/           ← 4 sub-agentes
│   ├── agent-teams.md           ← Orquestación paralela
│   ├── archetypes/              ← 8 tipos de proyecto
│   ├── building-blocks/         ← 16 bloques de conocimiento
│   └── credentials-guide.md    ← 17 servicios documentados
├── questions/                   ← Preguntas por phase
├── templates/                   ← Blueprint template de 20 secciones
└── output/                      ← Blueprints generados aquí
```

---

## ⭐ Créditos

- Repo original: [Hainrixz/the-architect](https://github.com/Hainrixz/the-architect)
- Proyectos integrados: [tododeia.com](https://www.tododeia.com/community)

---

MIT License · *Porque el mejor código empieza con el mejor diseño.*
