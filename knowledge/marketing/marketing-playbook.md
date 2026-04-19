# Marketing Playbook — coreyhaines31/marketingskills

**Instalar:** `npx skills add coreyhaines31/marketingskills`
**Skills.sh:** https://skills.sh — 228k+ installs en el paquete completo

Este building block documenta cómo usar los 14+ skills de marketing de `coreyhaines31` en cada fase del blueprint.

---

## PARTE 1: ACQUISITION

### SEO Strategy (3 skills)

**`seo-audit`** — Auditoría técnica pre-launch
```
Cuándo: Section 19, antes de lanzar
Qué hace: revisa velocidad, meta tags, estructura, canonical, sitemap, robots
Comando: "Run seo-audit on my project"
Output: lista priorizada de fixes con impacto estimado
```

**`programmatic-seo`** — SEO a escala
```
Cuándo: Content Platform + SaaS con muchos use cases
Qué hace: genera páginas tipo "[tool] for [industry]" automáticamente
Cuándo usarlo: proyectos con 100+ páginas potenciales
Output: template de página + estrategia de keywords long-tail
```

**`competitor-alternatives`** — Páginas "Alternativa a X"
```
Cuándo: Section 19 (Growth Hooks)
Qué hace: genera páginas SEO "alternativa a [competidor]" que rankean
Por qué importa: intención de compra alta, fácil de rankear
Output: estructura de página + copy + keywords target
```

**`site-architecture`** — Estructura del sitio
```
Cuándo: Phase 3 (antes de construir)
Qué hace: define qué páginas crear, cómo enlazarlas, cuáles priorizar
Output: sitemap con jerarquía + páginas prioritarias para SEO
```

**`schema-markup`** — Rich snippets
```
Cuándo: Build Order Step de SEO
Qué hace: agrega schema.org para rich snippets en Google
Output: JSON-LD listo para implementar por tipo de página
```

---

## PARTE 2: CONVERSION

### Landing Page & CRO (4 skills)

**`copywriting`** — Copy que convierte
```
Cuándo: Section 7 (Design System) → copywriting del contenido
Qué hace: genera headline, subheadline, benefits, social proof, CTA
Framework que usa: PAS (Problem, Agitation, Solution)
Output: copy completo para landing page

Estructura de landing page que genera:
1. Hero: Pain en 8 palabras + solución en 15 + CTA
2. Social proof: métricas o testimonios inmediatamente después
3. Problem section: 3 pains específicos del usuario
4. Solution: cómo lo resuelve feature por feature
5. Pricing: tiers con anchoring psicológico correcto
6. FAQ: objeciones comunes resueltas
7. Final CTA: urgencia + garantía
```

**`page-cro`** — Conversion Rate Optimization
```
Cuándo: Section 20 (post-launch semana 2)
Qué hace: analiza la landing page y da cambios específicos para mejorar conversión
Framework: heatmap interpretation + A/B test suggestions
Output: lista de cambios por impacto (quick wins primero)

Los 5 quick wins más comunes:
1. Mover CTA más arriba del fold
2. Agregar número concreto al headline ("Ahorra 3h/semana")
3. Reducir opciones de pricing de 5 a 3
4. Agregar testimonios con fotos reales
5. Cambiar "Registrarse" por verbo de acción ("Empezar gratis")
```

**`onboarding-cro`** — Onboarding para D1 Retention
```
Cuándo: Section 18 (Analytics) + Section 20 (Post-launch Week 1)
Qué hace: optimiza el onboarding para que más usuarios lleguen al "aha moment"
Métrica que mueve: D1 Retention (de 30% a 50%+)
Output: steps de onboarding reordenados + qué eliminar

Principios que aplica:
- Mostrar el valor ANTES de pedir información
- Máximo 3 steps en onboarding inicial
- Progress bar = compromiso psicológico
- El "aha moment" debe llegar en <5 minutos
- Si el usuario abandona en Step 2: ese step es el problema
```

**`paywall-upgrade-cro`** — Free → Paid Conversion
```
Cuándo: Section 12 (Payment Integration) + Section 20
Qué hace: optimiza el momento y forma en que aparece el paywall
Métrica que mueve: free-to-paid conversion (de 2% a 5-8%)
Output: trigger points + copy del paywall + urgency tactics

Mejores triggers para mostrar paywall:
- Cuando el usuario intenta una acción premium por 2da vez
- Al alcanzar un límite concreto (no vago)
- Después de un "win" (usuario logró algo con el free plan)
- NUNCA en el día 1 del trial
```

---

## PARTE 3: RETENTION & REVENUE

### Retención y Expansión (3 skills)

**`churn-prevention`** — Prevenir churn antes de que ocurra
```
Cuándo: Section 20 (Month 2) + integrar en Section 18 (Analytics)
Qué hace: define señales de alerta de churn + acciones automáticas
Métrica que mueve: monthly churn (de 8% a <5%)

Señales de churn que detectar (agregar a PostHog):
- Usuario no logueó en 7 días
- Usuario visitó pricing page sin convertir
- Usuario abrió < 2 features core en 14 días
- NPS < 7
- Soporte con 2+ tickets sin resolver

Acciones automáticas por señal:
- 7 días sin login → email "¿Cómo podemos ayudarte?"
- Visitó pricing sin convertir → email con descuento
- NPS < 7 → Slack alert para CS team + call proactivo
```

**`pricing-strategy`** — Optimizar pricing para máxima conversión
```
Cuándo: Phase 2 (Revenue Agent) + Section 2 (Business Model)
Qué hace: valida tiers, sugiere anchoring, optimiza nombres de planes

Principios de pricing que aplica:
- 3 tiers max (más = parálisis de decisión)
- El tier del medio debe ser el que quieres que compren
- El tier caro existe para hacer que el medio parezca razonable
- Nombres: Starter/Pro/Enterprise (nunca Basic/Advanced/Premium)
- Precio anual = MRR × 10 (dan 2 meses gratis = 17% descuento)
- Feature diferenciadora en el tier Pro: 1 feature, no 20
```

**`email-sequence`** — Secuencias de email completas
```
Cuándo: Section 20 (Build Order Step de Email)
Qué hace: genera las secuencias de email completas

Secuencias que genera:
1. Welcome sequence (días 1-7):
   Día 1: Bienvenida + link a feature principal
   Día 3: Tip de uso avanzado + social proof
   Día 5: Historia de cliente exitoso
   Día 7: "¿Estás obteniendo valor?" + CTA upgrade

2. Activation sequence (para usuarios inactivos):
   Trigger: sin login en 5 días
   Email 1: "¿Qué salió mal?" + quick tip
   Email 2 (3 días después): caso de uso específico
   Email 3 (5 días después): oferta especial

3. Upgrade sequence:
   Trigger: hit de límite en free plan
   Email 1: "Estás llegando al límite" + beneficios de Pro
   Email 2 (2 días): descuento por tiempo limitado
   Email 3 (5 días): último recordatorio
```

---

## PARTE 4: GROWTH & CONTENT

### Contenido y Crecimiento (4 skills)

**`content-strategy`** — Estrategia de contenido a largo plazo
```
Cuándo: Section 19 (Growth Hooks)
Qué hace: define qué tipo de contenido crear, en qué canal, con qué frecuencia
Output: calendario editorial por 3 meses + formatos por canal

Canales por arquetipo:
- SaaS B2B: LinkedIn + blog SEO + newsletters de industria
- SaaS B2C: Twitter/X + TikTok + YouTube tutorials
- Marketplace: Instagram + Pinterest + comunidades de nicho
- AI Product: Twitter/X + HN + Reddit r/MachineLearning
```

**`social-content`** — Contenido para redes sociales
```
Cuándo: Section 20 (Post-launch Week 1+)
Qué hace: genera posts específicos para cada red
Output: batería de 30 posts + templates reutilizables

Formatos que genera por red:
- Twitter/X: threads de 7 tweets + quote tweets + replies estratégicos
- LinkedIn: posts de "lección aprendida" + casos de uso + métricas
- Instagram: carruseles de tips + before/after + behind-the-scenes
```

**`marketing-ideas`** — Ideas de marketing específicas al producto
```
Cuándo: Section 19 (Growth Hooks) + Phase 2 (Discovery)
Qué hace: genera 20 ideas de marketing rankeadas por impacto/esfuerzo
Output: lista de ideas con dificultad y tiempo estimado

Tipos de ideas que genera:
- Viral mechanics dentro del producto (referrals, sharing)
- Partnership opportunities específicas al nicho
- Content hooks que generan engagement
- Community plays
- PR opportunities
```

**`marketing-psychology`** — Principios psicológicos de conversión
```
Cuándo: Section 7 (copy) + Section 12 (pricing page)
Qué hace: aplica principios probados de psicología del consumidor

Principios que aplica:
- Escasez: "Solo 3 spots en el plan Enterprise"
- Urgencia: "Precio sube el viernes"
- Social proof: "1,247 founders ya confían en [producto]"
- Autoridad: logos de clientes conocidos arriba del fold
- Reciprocidad: dar valor gratis antes de pedir la venta
- Commitment: progress bar en onboarding
- Loss aversion: "No pierdas 3h/semana más en X"
```

---

## PARTE 5: B2B SPECIFIC

**`cold-email`** — Outreach para B2B
```
Cuándo: Section 20 (Week 2-4 → Founder-led sales)
Qué hace: genera secuencias de cold email para B2B outreach
Output: 3-email sequence + follow-up + subject lines A/B

Estructura del cold email que funciona:
Email 1: 
- Subject: [problema específico que resuelves] (no el nombre del producto)
- Line 1: observación específica sobre el prospecto
- Line 2: el problema que tienen (sin asumirlo, preguntándolo)
- Line 3: cómo lo resolviste para [empresa similar]
- CTA: ¿15 min esta semana?
```

**`paid-ads`** — Estrategia de paid acquisition
```
Cuándo: Section 20 (Month 2 si unit economics lo soportan)
Qué hace: define plataforma, budget, targeting, creative approach
Output: plan de paid acquisition con CAC proyectado

Solo activar si: ARPU > 5x CAC proyectado
Plataformas por arquetipo:
- SaaS B2B: LinkedIn Ads + Google Search
- SaaS B2C: Meta Ads + TikTok Ads
- Marketplace: Google Shopping + Meta
- AI Product: Twitter/X Ads + Reddit Ads
```

**`ad-creative`** — Creativos para anuncios
```
Cuándo: junto a paid-ads
Qué hace: genera conceptos de creativos por plataforma
Output: 5 conceptos de ad con copy + visual direction

Fórmulas de ad que genera:
- "Antes/Después": [estado actual dolor] → [estado futuro con producto]
- "Testimonial": quote real de cliente + resultado específico
- "Demo": gif/video de la feature principal en 15 segundos
- "Stats": número impactante + contexto + CTA
```

---

## Dónde Entra Cada Skill en el Blueprint

| Sección | Skills que entran |
|---------|-------------------|
| **Phase 2** | `pricing-strategy`, `marketing-psychology` |
| **Section 2 (Business Model)** | `pricing-strategy` |
| **Section 7 (Design)** | `copywriting`, `site-architecture` |
| **Section 18 (Analytics)** | `analytics-tracking`, `churn-prevention` (eventos) |
| **Section 19 (Growth Hooks)** | `seo-audit`, `programmatic-seo`, `competitor-alternatives`, `social-content`, `content-strategy`, `marketing-ideas`, `lead-magnets` |
| **Section 20 (Post-Launch)** | `launch-strategy`, `email-sequence`, `onboarding-cro`, `page-cro`, `paywall-upgrade-cro`, `cold-email`, `paid-ads`, `ad-creative` |
| **Month 2+** | `churn-prevention`, `paid-ads` |

---

## Instalar Todo de Una

```bash
# Paquete completo
npx skills add coreyhaines31/marketingskills

# Verificar instalación
ls .claude/skills/marketingskills/
```

Una vez instalado, activar por nombre en Claude Code:
```
"Use the copywriting skill to generate copy for my landing page"
"Run the seo-audit skill on my project"
"Use onboarding-cro to review my onboarding flow"
```
