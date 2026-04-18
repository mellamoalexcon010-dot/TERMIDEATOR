# Revenue Architecture — Arquitecto de Ingresos

Based on: https://www.tododeia.com/community/arquitecto-de-ingresos

## Purpose

Before locking any technical decisions, The Architect runs a monetization analysis. A product built on the wrong business model wastes weeks of development. This building block turns Phase 2 business validation into a concrete, 14-day executable plan.

## When to Use

Read this file during **Phase 2 (Deep Dive)** for every project that will charge money. Run the analysis internally — don't dump the whole prompt at the user. Extract the relevant outputs and present them as part of the architecture conversation.

---

## The Revenue Architecture Analysis

Apply this logic internally when analyzing the user's idea:

### Step 1 — Build the Context Model

Before recommending a monetization model, build three blocks from what the user told you:

**Hechos_Verificados** (what the user has confirmed):
- The problem being solved
- Who the target user is
- Whether there are existing paying alternatives
- Any constraints mentioned (budget, timeline, team size)

**Supuestos_Operativos** (reasonable assumptions given context):
- Market size signal
- User's willingness to pay
- Acquisition channel viability

**Restricciones_Claves** (hard limits):
- Technical complexity ceiling
- Regulatory or compliance issues
- Bootstrap vs funded (affects pricing strategy)

### Step 2 — PROFIT_MATRIX

For the confirmed project, evaluate 3–5 monetization levers:

| Palanca | Modelo | Impacto Est. | Confianza | Tiempo a $1 | Esfuerzo |
|---------|--------|-------------|-----------|-------------|----------|
| Suscripción mensual | $X/mes | Alto | 80% | 2-4 sem | Medio |
| Freemium + upgrade | Gratis + $X | Medio | 65% | 4-8 sem | Bajo-Medio |
| Comisión marketplace | X% por tx | Alto | 70% | 4-6 sem | Alto |
| Pago único | $X one-time | Bajo | 85% | 1-2 sem | Bajo |
| Usage-based | $X / unidad | Alto | 60% | 3-6 sem | Alto |

Present only the 2–3 most relevant options for the specific project.

### Step 3 — KILLER_MOVE_24H

After selecting the monetization model, define the single highest-leverage action the founder can take in the next 24 hours to validate or accelerate revenue. Examples:

- "Crea una página de pricing y mándala a 10 personas de tu target — antes de escribir código"
- "Abre Stripe y crea el producto/price ID para que el build order incluya pagos desde el día 1"
- "Publica en [comunidad específica] describiendo el problema — mide si la gente responde"

### Step 4 — SPRINT_PLAN_14_DIAS

Generate a 14-day plan that maps directly to the Build Order. Include:
- Days 1–3: Foundation + pricing page live (even before full product)
- Days 4–7: Core feature that delivers the promised value
- Days 8–10: Payment integration working end-to-end
- Days 11–14: First user acquisition push

---

## How to Present This in Phase 2

Don't dump tables. Deliver this as a confident recommendation:

**Good format:**
> "Para este proyecto, el modelo que mejor funciona es freemium con upgrade a Pro a $29/mes. La razón: tu usuario necesita probar antes de pagar, el CAC va a ser alto en los primeros meses, y $29 es el sweet spot para herramientas de productividad B2C según los benchmarks del mercado. El KILLER_MOVE es publicar la pricing page esta semana y ver si alguien pregunta cómo pagar — antes de construir el producto completo."

---

## Monetization Model Quick Reference

### Subscription SaaS
- **Best for:** Tools used daily/weekly, clear recurring value
- **Pricing anchor:** $9/$29/$99 per month (individual/pro/team)
- **Key metric:** Monthly churn < 5%
- **Risk:** Slow to reach meaningful MRR

### Freemium
- **Best for:** Products with viral/social component, network effects
- **Pricing anchor:** Free + $X/mo for power features
- **Key metric:** Free-to-paid conversion > 3%
- **Risk:** Too many free users drain infrastructure costs

### Marketplace Commission
- **Best for:** Two-sided markets, trust-dependent transactions
- **Pricing anchor:** 10–25% per transaction
- **Key metric:** GMV growth, take rate
- **Risk:** Cold start problem, race to zero on fees

### Usage-Based
- **Best for:** AI products, infrastructure, tools with variable consumption
- **Pricing anchor:** Per token / per call / per seat
- **Key metric:** Net Revenue Retention > 110%
- **Risk:** Unpredictable revenue, hard to forecast

### One-Time Payment
- **Best for:** Tools with clear one-time value, templates, courses
- **Pricing anchor:** $47–$297 depending on value
- **Key metric:** Volume of sales
- **Risk:** No recurring revenue, constant acquisition pressure

---

## What Goes in the Blueprint

In **Section 2 (Business Model)**, include:
1. The selected monetization model with the 2-sentence rationale
2. The PROFIT_MATRIX table (top 3 levers only)
3. The KILLER_MOVE_24H as the first item in Section 20 (Post-Launch Checklist)
4. The 14-day sprint mapped to Build Order phases

**The key principle from Arquitecto de Ingresos:** Every architecture decision must serve the shortest path to first dollar. If a feature doesn't directly support the monetization model or the KILLER_MOVE, it belongs in V2.
