# Archetype: Browser Automation / Web Scraper

## When to Use
El usuario quiere automatizar acciones en browsers, extraer datos de la web, o construir herramientas de scraping/monitoring. Keywords: scraping, automatización, extraer datos, monitorear precios, web crawler, Playwright, Puppeteer, Firecrawl.

## Stack Recomendado
| Layer | Tech | Por qué |
|-------|------|---------|
| Automation | Playwright | Más robusto que Puppeteer, soporte multi-browser |
| Scraping inteligente | Firecrawl | Maneja JS, anti-bot, rate limiting automático |
| Language | TypeScript + Node.js | Tipado para selectores complejos |
| Queue | BullMQ + Redis (Upstash) | Jobs async, retry logic, rate limiting |
| Storage | Supabase | Guardar datos scrapeados |
| Scheduler | Trigger.dev | Cron jobs para scraping periódico |
| Proxy | Bright Data / Oxylabs | Anti-ban para scraping a escala |
| Hosting | Railway | Long-running processes |

## Required Stack Skills
```bash
npx skills add firecrawl/cli/firecrawl
npx skills add wshobson/agents/nodejs-backend-patterns
npx skills add wshobson/agents/typescript-advanced-types
npx skills add supabase/agent-skills/supabase-postgres-best-practices
npx skills add obra/superpowers
```

## Sub-tipos de Proyectos
| Tipo | Descripción | Herramienta |
|------|-------------|-------------|
| **Web Scraper** | Extrae datos de sitios web | Firecrawl / Playwright |
| **Price Monitor** | Monitorea precios en e-commerce | Playwright + Scheduler |
| **Lead Scraper** | Extrae contactos de directorios | Firecrawl + Bright Data |
| **Content Aggregator** | Agrega noticias/posts de múltiples fuentes | RSS + Firecrawl |
| **Competitive Intelligence** | Monitorea competidores | Playwright + Diff detection |
| **Browser Automation** | Automatiza tareas repetitivas en el browser | Playwright |
| **QA Automation** | Tests E2E de aplicaciones | Playwright |

## Build Order
1. Setup Playwright + TypeScript
2. Basic scraper para target site
3. Anti-detection (user agents, delays, proxies)
4. Data extraction + cleaning + validation
5. Supabase schema para datos
6. BullMQ queue para jobs async
7. Scheduler con Trigger.dev (cron)
8. Alerts (email/Slack) cuando detecta cambios
9. Dashboard para visualizar datos
10. API para exponer datos scrapeados

## Legal y Ético (CRÍTICO)
```
SIEMPRE verificar antes de scraper:
1. robots.txt del sitio → respetar las reglas
2. Terms of Service del sitio → algunos prohíben scraping
3. Rate limiting → no saturar el servidor objetivo
4. Datos personales → GDPR aplica si scrapeás PII

Zonas grises:
- Datos públicos de perfiles sociales → legal pero ToS puede prohibirlo
- Precios de competidores → generalmente OK si es para uso interno
- Contactos de LinkedIn → LinkedIn activamente bloquea y demanda

Zonas seguras:
- Datos abiertos / APIs públicas → siempre usar API si existe
- Tus propias aplicaciones → testing automatizado es OK
- Sitios con permiso explícito → scraping whitelisted
```

## Riesgos Específicos
- **IP banning** → proxy rotation desde el inicio
- **Selector breaks** → sitios cambian HTML → tests automáticos que detecten
- **Rate limiting** → respetar delays, usar queue
- **CAPTCHA** → 2captcha / Anti-Captcha services (costo adicional)
- **Legal** → robots.txt + ToS review ANTES de build
- **Data freshness** → scheduler confiable, alertas si el job falla

## Monetización
| Modelo | Implementación |
|--------|----------------|
| API de datos | Supabase + PostgREST → API → Stripe metered billing |
| SaaS dashboard | Usuarios pagan por acceso a datos actualizados |
| Reports / exports | PDF/CSV exports por créditos |
| Alertas | Notificaciones cuando algo cambia → $X/mes |

## Non-Negotiables
- Respetar robots.txt
- Rate limiting (min 1-2 segundos entre requests)
- Error handling + retry con backoff exponencial
- Logging completo de cada job
- Scheduler con health checks
- Data validation antes de insertar en DB
