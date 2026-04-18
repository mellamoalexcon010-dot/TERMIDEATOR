# Design References — Awesome Design MD

Based on: https://github.com/VoltAgent/awesome-design-md (55 real-world design systems)

## What This Is

Instead of inventing a design system from scratch, the blueprint can reference a proven design system from a famous company. The builder copies one `DESIGN.md` file into the project root and Claude Code applies it automatically — colors, typography, spacing, components, everything.

## How The Architect Uses This

In **Phase 3**, after presenting the tech stack, ask the user:

> "Para el diseño visual, ¿quieres inspirarte en alguna de estas marcas famosas? Claude Code va a leer ese sistema de diseño y aplicarlo directamente."

Present only the options that match the project's vibe. Don't show all 55.

## Recommendation by Project Type

### SaaS / B2B Tools
| Reference | Style | Best For |
|-----------|-------|----------|
| **Linear** | Dark, sharp, developer-focused | Dev tools, PM tools, technical SaaS |
| **Vercel** | Minimal dark, crisp typography | Infrastructure, deployment tools |
| **Supabase** | Dark green, data-forward | Database, backend tools |
| **Stripe** | Clean white, high trust | Fintech, payment-adjacent SaaS |
| **Notion** | Warm minimal, content-first | Productivity, knowledge management |

### Consumer Apps / B2C
| Reference | Style | Best For |
|-----------|-------|----------|
| **Apple** | Ultra-clean, generous whitespace | Premium consumer, health, lifestyle |
| **Spotify** | Dark with bold color pops | Media, music, entertainment |
| **Figma** | Playful, colorful, creative | Design tools, creative products |

### Marketplaces
| Reference | Style | Best For |
|-----------|-------|----------|
| **Stripe** | White, high-trust, professional | Service marketplaces, B2B platforms |
| **Apple** | Premium, clean | High-end product marketplaces |

### AI Products
| Reference | Style | Best For |
|-----------|-------|----------|
| **Claude (Anthropic)** | Warm, approachable AI | AI assistants, chatbots |
| **OpenAI** | Clean minimal | AI tools, developer-facing |
| **Cohere** | Modern, data-focused | B2B AI, enterprise AI |
| **Cursor** | Dark, developer | AI coding tools |

## What Goes in the Blueprint

In **Section 7 (Design System)**, replace generic hex values with this block:

```markdown
### Design Reference
**Source:** [Company] design system via Awesome Design MD
**Repo:** https://github.com/VoltAgent/awesome-design-md
**File path in project:** `DESIGN.md` (project root)

### Setup Command for Claude Code
```bash
# Run this first — downloads the design system
curl -o DESIGN.md https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/[company]/DESIGN.md
```

### How to Apply
Claude Code reads DESIGN.md automatically. To apply to any component:
> "Lee el DESIGN.md en la raíz del proyecto y aplica ese sistema de diseño a [componente]."
```

## If User Wants a Custom Design

If user says "quiero algo único" or has a specific brand, generate a custom design system with actual hex values (don't reference Awesome Design MD). Use the original blueprint template Section 7.

## Combining Two References

Valid pattern — tell the builder:
> "Toma la tipografía y espaciado de Notion, y los colores de Linear. Copia ambos DESIGN.md y dile a Claude qué tomar de cada uno."

## Available Companies (Full List)

**AI/ML:** Claude, Cohere, OpenAI
**Dev Tools:** Cursor, Linear, Vercel, Supabase
**Infrastructure:** MongoDB, Stripe, HashiCorp
**Design/Productivity:** Figma, Notion, Webflow
**Enterprise/Brand:** Apple, Uber, SpaceX, IBM
**SaaS/Startups:** Spotify, Slack, Twilio

Each design includes `DESIGN.md` + `preview.html` + `preview-dark.html`.
