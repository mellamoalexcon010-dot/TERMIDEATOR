# MARKETING AGENT — 5to Sub-Agente de TERMIDEATOR

**Skills source:** `coreyhaines31/marketingskills` (skills.sh)
**Installs totales del paquete:** 228k+

---

## Misión

El MARKETING AGENT corre en paralelo con los otros 4 sub-agentes durante Phase 2. Su trabajo: asegurarse de que cada blueprint salga con una estrategia de marketing ejecutable desde day 1, no como afterthought.

**Sin marketing = el mejor SaaS muere solo.**

---

## Los 14 Skills que Orquesta

### Acquisition
- `seo-audit` — audita SEO técnico del proyecto
- `programmatic-seo` — estrategia SEO escalable
- `ai-seo` — SEO para productos de IA
- `site-architecture` — estructura de sitio para SEO y conversión
- `schema-markup` — rich snippets y schema.org

### Conversion
- `copywriting` — copy que convierte en landing pages
- `page-cro` — conversion rate optimization por página
- `onboarding-cro` — optimiza onboarding para D1 retention
- `paywall-upgrade-cro` — convierte free → paid
- `popup-cro` — popups que no molestan pero convierten

### Retention & Revenue
- `churn-prevention` — detecta y previene churn antes de que ocurra
- `pricing-strategy` — valida y optimiza pricing tiers
- `email-sequence` — secuencias de emails para activación y retención
- `analytics-tracking` — implementa eventos de analytics correctamente

### Growth & Content
- `social-content` — contenido para redes que genera tráfico
- `content-strategy` — estrategia de contenido a largo plazo
- `marketing-ideas` — ideas de marketing específicas al producto
- `marketing-psychology` — principios psicológicos de conversión
- `competitor-alternatives` — páginas de "alternativa a X" para SEO
- `launch-strategy` — estrategia de lanzamiento completa
- `lead-magnets` — crea lead magnets que capturan emails
- `cold-email` — secuencias de outreach para B2B
- `ad-creative` — creativos para paid ads
- `paid-ads` — estrategia de paid acquisition
- `copy-editing` — edita y mejora cualquier copy
- `sales-enablement` — materiales de ventas para B2B
- `revops` — revenue operations para escalar ventas

---

## Output del MARKETING AGENT

```json
{
  "agent": "MARKETING",
  "acquisition": {
    "primary_channel": "SEO orgánico | Paid | Community | Cold outreach",
    "seo_strategy": "qué páginas crear, qué keywords atacar",
    "paid_strategy": "presupuesto inicial, plataforma, targeting",
    "content_plan": "qué publicar, con qué frecuencia, en qué canal"
  },
  "conversion": {
    "landing_page_cro": "cambios específicos al hero, CTA, social proof",
    "onboarding_flow": "steps optimizados para D1 retention",
    "pricing_page": "estructura de tiers, anchoring, CTA copy",
    "email_sequences": ["welcome", "day3_activation", "day7_retention", "churn_prevention"]
  },
  "retention": {
    "churn_signals": "qué comportamientos predicen churn",
    "prevention_tactics": "qué hacer cuando detectas esas señales",
    "expansion_revenue": "cómo hacer upsell a usuarios existentes"
  },
  "copy": {
    "hero_headline": "propuesta de valor en 8 palabras",
    "subheadline": "clarificación en 15 palabras",
    "cta_primary": "texto del botón principal",
    "pain_points": ["pain 1", "pain 2", "pain 3"]
  },
  "launch": {
    "week_minus_4": "acciones pre-launch",
    "week_1": "launch blitz",
    "week_2_4": "first 100 customers",
    "month_2_3": "growth acceleration"
  }
}
```

---

## Cómo Instalar los Skills

```bash
# Instalar todo el paquete de marketing
npx skills add coreyhaines31/marketingskills

# O skills individuales
npx skills add coreyhaines31/marketingskills/seo-audit
npx skills add coreyhaines31/marketingskills/copywriting
npx skills add coreyhaines31/marketingskills/onboarding-cro
npx skills add coreyhaines31/marketingskills/churn-prevention
npx skills add coreyhaines31/marketingskills/pricing-strategy
npx skills add coreyhaines31/marketingskills/analytics-tracking
npx skills add coreyhaines31/marketingskills/launch-strategy
npx skills add coreyhaines31/marketingskills/email-sequence
npx skills add coreyhaines31/marketingskills/content-strategy
npx skills add coreyhaines31/marketingskills/social-content
npx skills add coreyhaines31/marketingskills/paid-ads
npx skills add coreyhaines31/marketingskills/competitor-alternatives
npx skills add coreyhaines31/marketingskills/cold-email
npx skills add coreyhaines31/marketingskills/paywall-upgrade-cro
```

---

## Cuándo Activar Cada Skill

| Momento | Skill | Comando |
|---------|-------|---------|
| Phase 2 (antes de stack) | `pricing-strategy` | Valida que el pricing es viable |
| Phase 3 (landing page) | `copywriting` + `page-cro` | Genera copy + optimiza conversion |
| Section 7 (design) | `site-architecture` | Estructura de páginas SEO-first |
| Section 18 (analytics) | `analytics-tracking` | Implementa eventos correctos |
| Section 19 (growth) | `seo-audit` + `social-content` | SEO técnico + contenido |
| Section 20 (launch) | `launch-strategy` + `email-sequence` | Plan de launch + emails |
| Build Order Step N | `onboarding-cro` | Optimiza el onboarding |
| Post-launch Mes 2 | `churn-prevention` | Retiene usuarios en riesgo |
