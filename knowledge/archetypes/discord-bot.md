# Archetype: Discord Bot / Slack Bot

## When to Use
El usuario quiere construir un bot para Discord o Slack. Keywords: bot, comandos slash, servidor de Discord, workspace de Slack, automatización de mensajes, integración con comunidad.

## Stack Recomendado

### Discord Bot
| Layer | Tech | Por qué |
|-------|------|---------|
| Framework | Discord.js v14 | Más maduro, mejor documentación |
| Language | TypeScript | Tipado para interacciones complejas |
| Runtime | Node.js 20+ | Discord.js requiere Node |
| Database | Supabase | Guardar configs por servidor/usuario |
| Hosting | Railway / Fly.io | Siempre activo (no serverless) |
| Queue | Upstash (Redis) | Rate limiting, jobs async |
| AI (si aplica) | Anthropic SDK | Claude integrado en el bot |

### Slack Bot
| Layer | Tech |
|-------|------|
| Framework | Bolt.js (oficial de Slack) |
| Hosting | Railway / Vercel (con webhooks) |
| Database | Supabase |

## Required Stack Skills
```bash
npx skills add wshobson/agents/nodejs-backend-patterns
npx skills add wshobson/agents/typescript-advanced-types
npx skills add supabase/agent-skills/supabase-postgres-best-practices
npx skills add obra/superpowers
```

## Tipos de Bots
| Tipo | Descripción | Monetización |
|------|-------------|--------------|
| **Utility** | Moderación, tickets, roles | Premium features |
| **AI** | Chat con Claude/GPT en Discord | Token limits por tier |
| **Games** | RPG, trivia, economia virtual | Virtual currency |
| **Community** | Leaderboards, stats, events | Subscription por servidor |
| **Integrations** | Conecta Discord con otros servicios | Freemium |

## Unit Economics
- **Metric principal:** Servers activos (no users — los servers tienen muchos users)
- **Pricing:** Por servidor (ej: $5-20/mes por servidor) o por features
- **CAC:** bajo (Discord tiene comunidades donde los bots se comparten)
- **Churn:** bajo si el bot está integrado en el workflow del servidor
- **LTV:** ARR por servidor × retención promedio (typical: 12-24 meses)

## Build Order
1. Setup con Discord.js v14 + TypeScript
2. Gateway connection + event handlers
3. Slash commands (CommandInteraction)
4. Prefix commands (legacy, pero útil)
5. Database setup (Supabase)
6. Guild (servidor) config per-guild
7. Premium features + Stripe billing
8. Dashboard web (opcional pero aumenta LTV)
9. Deploy a Railway (persistent process)
10. Bot listing en top.gg / discordbotlist.com

## Monetización Específica
```
Plan Free:    Features básicas, 1 server
Plan Pro:     $4.99/mes → features avanzadas
Plan Business: $14.99/mes → múltiples servers, API access

Billing: Stripe → webhook → actualiza premium_tier en DB → 
         bot chequea DB antes de ejecutar commands premium
```

## Riesgos Específicos
- **Discord API rate limits** → implementar queue con Upstash Redis
- **Bot offline** → Railway tiene 99.9% uptime, monitorear con UptimeRobot
- **Guild ban** → términos de servicio de Discord son estrictos, evitar spam
- **Scale de sharding** → si > 2500 servers, necesita sharding (Discord.js lo soporta)
- **Webhook attacks** → verificar firmas de Discord en todos los endpoints

## Non-Negotiables
- Rate limiting en todos los commands
- Error handling graceful (no crashes el bot entero)
- Guild-specific configs en DB (no hardcoded)
- Logging de commands para debug
- Health check endpoint para monitoring
- Verificación de firmas en webhooks de Discord
