# Metrics & Analytics Template — Data-Driven Decision Making

Sin métricas, tomas decisiones basadas en feeling. Este building block define exactamente qué medir desde day 1 y cómo actuar en los datos.

---

## Part 1: The North Star Metric (ONE Metric)

Every product has ONE metric that matters more than others.

```
SaaS B2B:        Monthly Recurring Revenue (MRR)
SaaS B2C:        Daily/Weekly Active Users (DAU/WAU)
Marketplace:     Gross Merchandise Volume (GMV)
AI Product:      Monthly API calls / tokens consumed
Content Platform: Monthly pageviews / articles read
Social:          Monthly active users (MAU)
```

**Why one?** If you optimize for 10 metrics, you optimize for zero.

---

## Part 2: Pirate Metrics (AARRR)

Track these 5 funnel stages:

```
ACQUISITION → ACTIVATION → RETENTION → REVENUE → REFERRAL
```

### A1: Acquisition
**"How do they find us?"**

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Signups/week | 20+ | Analytics |
| CAC (cost per signup) | $5-20 | Ad spend / signups |
| Traffic sources (organic/paid) | 80% organic | Analytics source tracking |
| Conversion (visitor → signup) | >5% | (signups / visitors) × 100 |

**How to Act:**
- If CAC > 10x lifetime purchase value → reduce ad spend, optimize copy
- If organic = 0% → you don't have messaging that spreads
- If conversion < 2% → landing page is confusing, rewrite

### A2: Activation
**"Do they get the core value?"**

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Onboarding completion | >70% | % reach "aha moment" |
| Time to first aha | <5 min | Segment who stay vs churn, find moment |
| Feature usage | >80% try core feature | Segment by feature |
| D1 retention | >50% | % return next day |

**How to Act:**
- If D1 retention < 50% → onboarding is broken, cut one section
- If time to aha > 10 min → show them the value sooner
- If <80% try core feature → put it earlier in flow

### A3: Retention
**"Do they keep coming back?"**

| Metric | Target | How to Measure |
|--------|--------|----------------|
| D7 retention | >40% | % of signup cohort active day 7 |
| D30 retention | >20% | % of signup cohort active day 30 |
| Churn rate monthly | <5% | 1 - (ending users / starting users) |
| Cohort retention curve | Trending up | Track monthly cohorts in retention matrix |

**Retention Cohort Matrix Template:**
```
             W1   W2   W3   W4   W5   W6   W7   W8
Jan Cohort  100% 62%  48%  42%  40%  38%  37%  36%
Feb Cohort  100% 65%  50%  44%  42%  40%  39%  38%
Mar Cohort  100% 70%  52%  46%  44%  42%  41%  40%
Apr Cohort  100% 72%  55%  48%  46%  44%  43%  42%

^ This is good: each new cohort retains better
```

**How to Act:**
- If D7 < 40% → core value isn't sticking, talk to churned users
- If Churn > 5% → losing 5+ customers monthly per 100 (unsustainable)
- If retention curve flat month 2 → add retention feature (email, streak, social)

### A4: Revenue
**"How much money do they give us?"**

| Metric | Target | How to Measure |
|--------|--------|----------------|
| MRR (Monthly Recurring Revenue) | $X → $X×12 by year 1 | Sum of all active subscriptions |
| ARPU (Avg Revenue Per User) | $X/mo | MRR / active users |
| LTV (Lifetime Value) | >5x CAC | (ARPU × retention_months) |
| Net Revenue Retention | >110% | (MRR_end + expansion + churn) / MRR_start |

**Pricing Sanity Check:**
```
Your pricing works if:
ARPU > (operation costs + marketing) per user per month

Example:
- ARPU: $29/month
- Costs per user: $5 (server) + $3 (support) = $8/month
- Gross margin: ($29 - $8) / $29 = 72%
- Viable? YES (need only 4-5 months to payback CAC of $150)
```

**How to Act:**
- If LTV < 3x CAC → unit economics broken, raise prices or cut costs
- If NRR < 100% → users churn faster than expansion revenue
- If ARPU too low → consider higher-value tier or upsell

### A5: Referral
**"Do happy users bring friends?"**

| Metric | Target | How to Measure |
|--------|--------|----------------|
| K-factor (viral coefficient) | >1.0 = viral | (invites/user) × (conversion%) |
| Share of signups from referral | >10% | (referral signups / total) × 100 |
| Referral CAC | <organic CAC | Cost to acquire via referral |
| NPS (Net Promoter Score) | >50 | Would they recommend? (0-10 scale) |

**K-factor Calculation:**
```
Example:
- 100 users sign up day 1
- Each sends 2 invites on average = 200 invites
- 20% of invites convert = 40 new users
- K = 200 × 0.20 / 100 = 0.4

K = 0.4 means not viral (< 1.0).
To be viral: need 2.5 invites/user OR 40% conversion
```

**How to Act:**
- If K < 0.5 → referral isn't your growth engine, focus on paid
- If NPS < 40 → users don't love you enough to refer
- If referral = 0% → no one's asking for it, remove button

---

## Part 3: Setup PostHog (The Standard)

### Key Events to Track (By Archetype)

#### SaaS B2B

```
user_signed_up
├─ source: "google" | "twitter" | "direct"
├─ plan: "free" | "pro" | "enterprise"

user_onboarded
├─ time_to_aha: 180 (seconds)
├─ path: ["invite_team", "connect_api", "first_sync"]

core_action_completed
├─ action: "invoice_created" | "report_generated"
├─ duration: 45 (seconds)

user_upgraded
├─ from: "free"
├─ to: "pro"
├─ trigger: "hit_limit" | "feature_need" | "sales"

user_churned
├─ reason: "too_expensive" | "not_using" | "switching"
├─ ltv_at_churn: 1200
```

#### SaaS B2C

```
user_signed_up
├─ source: "instagram" | "twitter" | "direct"
├─ country: "US" | "MX" | "CO"

user_completed_onboarding
├─ time: 120 (seconds)
├─ steps_skipped: 0

user_took_core_action
├─ action: "created_post" | "joined_community"
├─ success: true | false

user_invited_friend
├─ friend_converted: true | false
├─ days_to_invite_after_signup: 3

user_subscribed
├─ plan: "monthly" | "yearly"
├─ price: 9.99

user_opened_app
├─ day: 1 | 3 | 7 | 30
├─ time_in_app: 180 (seconds)
```

#### Marketplace

```
seller_joined
├─ category: "services" | "products"

seller_created_listing
├─ product_category: "..."
├─ time_to_first_listing: 300 (seconds)

buyer_browsed
├─ category: "services" | "products"
├─ search_term: "what they looked for"

transaction_completed
├─ seller_id: "..."
├─ buyer_id: "..."
├─ amount: 100
├─ platform_fee: 20

transaction_disputed
├─ reason: "quality" | "not_delivered"
```

#### AI Product

```
user_made_api_call
├─ model: "claude-sonnet" | "gpt-4"
├─ tokens_input: 150
├─ tokens_output: 80
├─ latency_ms: 2000

user_refined_prompt
├─ iterations: 3
├─ satisfaction: 1-10

user_upgraded_plan
├─ from: "free"
├─ to: "pro"
├─ token_limit_reached: true

user_hit_rate_limit
├─ current_limit: 100_calls_per_day
├─ time_before_reset: 300 (seconds)
```

### Dashboard to Build (Day 1)

```
Home Dashboard:
├─ Today: Signups, Active Users, Revenue
├─ This Week: Acquisition, Activation (D1 retention)
├─ This Month: MRR, Churn rate, NPS

Activation Dashboard:
├─ Onboarding completion funnel
├─ Time to first aha (by cohort)
├─ Core feature usage

Retention Dashboard:
├─ Retention cohort matrix (D1/D7/D30)
├─ Churn rate (monthly)
├─ Weekly active users trend

Revenue Dashboard:
├─ MRR growth
├─ ARPU by plan
├─ LTV vs CAC
```

---

## Part 4: Weekly Review Ritual

Every Monday, spend 15 min on:

```
NORTH STAR METRIC
- Last week: X
- Target: Y
- Trend: 📈 / 📉 / ➡️
- If 📉: Why? Action?

TOP 3 METRICS BY STAGE:
1. Acquisition CAC: $X (trend?)
2. Activation D1: X% (trend?)
3. Retention D30: X% (trend?)

1 METRIC TO FOCUS THIS WEEK:
- This week we're optimizing [metric]
- How? [specific action]
- Success = [target]

RED FLAGS:
- Any metric dropped >10% week-over-week? [list]
- Hypothesis for why? [list]
- What to investigate? [list]
```

**Action Based on Metrics:**

```
If Acquisition CAC rising →
- Landing page copy is weak (test new angle)
- Ad fatigue (try new ad creatives)
- Market saturation (try new channel)

If Activation D1 < 50% →
- Onboarding takes too long (cut steps)
- Value prop unclear (rewrite email)
- Tech broken (fix bugs)

If Retention D30 < 20% →
- Core problem isn't solved (talk to churned users)
- Feature set is incomplete (add missing feature)
- Price too high (discount for short-term)

If MRR flat →
- Not enough activation (improve onboarding)
- Churn too high (improve retention)
- CAC too high (can't afford to scale)
```

---

## Part 5: How This Enters The Architect

**Section 18 (Analytics & Metrics) is EXPANDED:**

```
18. Analytics & Metrics Template

    By Archetype:
    ├─ SaaS B2B: Events + dashboard above
    ├─ SaaS B2C: Events + dashboard above
    ├─ Marketplace: Events + dashboard above
    ├─ AI Product: Events + dashboard above
    
    Setup:
    ├─ PostHog free tier (unlimited events for 1M events/month)
    ├─ Google Analytics 4 (free)
    ├─ Day 1 events: [archetype-specific list]
    
    Weekly Ritual:
    ├─ Monday review (15 min)
    ├─ Dashboard check
    ├─ Action: optimize [metric]
    
    Dashboard Template:
    ├─ Home: North Star + top 3 metrics
    ├─ Activation: Funnel + onboarding
    ├─ Retention: Cohort matrix
    ├─ Revenue: MRR, ARPU, LTV
```

**Architect says in Phase 3:**

> "Desde day 1, debes medir:
> - [North Star metric]
> - Onboarding → Activation → Retention → Revenue
> 
> Te estoy dando el setup de PostHog y el dashboard template.
> Copia y pega. Pero PRIMERO, entiende QUÉ estás midiendo y POR QUÉ."

---

## Metrics Sanity Checklist

```
☐ Tengo 1 North Star metric claro
☐ Entiendo AARRR (Acquisition → Activation → Retention → Revenue → Referral)
☐ Puedo medir cada etapa en día 1
☐ PostHog está configurado con eventos key
☐ Dashboard template está hecho
☐ Tengo ritual semanal (15 min Monday morning)
☐ He documentado: "Si [métrica] baja, hacemos [acción]"
☐ Team entiende por qué medimos esto
☐ Compartimos números cada semana (no secreto)
```

Sin esto, eres blind en el negocio. Con esto, tomas decisiones data-driven desde day 1.
