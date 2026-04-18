# Risk Matrix + Failure Mode Analysis

El mejor código no importa si te quiebras. Este building block identifica los top 20 riesgos para tu proyecto y cómo mitigarlos ANTES de que ocurran.

---

## Part 1: Risk Classification

### 5 Categorías de Riesgo

1. **Market Risk** — ¿El mercado existe? ¿Pagarían?
2. **Product Risk** — ¿Puedes construirlo? ¿Funcionará?
3. **Execution Risk** — ¿Tu equipo puede lanzar?
4. **Competitive Risk** — ¿Vencer la competencia?
5. **Financial Risk** — ¿Dinero suficiente para llegar?

---

## Part 2: Risk Matrix por Arquetipo

### SaaS / Web App

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|-----------|
| **Market**: TAM smaller than expected | High | Medium | Validate with 20 users before code |
| **Product**: Takes 6 months not 3 | High | High | Break into 2-week sprints, track burn rate |
| **Product**: Onboarding too complex | High | Medium | Test with 5 external users week 2 |
| **Execution**: Missed tech integration (Stripe fails) | Medium | Medium | Do spike test on Stripe API day 1 |
| **Competition**: Bigger player notices, competes | Medium | Low | Choose defensible niche, move fast |
| **Financial**: Runway runs out | High | Medium | Target profitability in 12 months |
| **Execution**: Key person sick/quits | Medium | Low | Solo founder risk is real — hire early |
| **Product**: Churn > 5%/month | High | Medium | Ship feature that solves pain in month 2 |

### Marketplace

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|-----------|
| **Market**: Supply-side chicken/egg problem | Critical | High | Recruit supply first (50 sellers before buyers) |
| **Market**: Demand-side doesn't come | Critical | High | Recruit 100 buyers in week 1 with special offer |
| **Product**: Trust/safety issues (scams, fakes) | High | High | Manual review first 100 txns, report system |
| **Financial**: Unit economics broken (take 20%, costs 30%) | Critical | Medium | Model before code: CAC + operational cost |
| **Execution**: Two-sided onboarding is complex | High | High | Keep both flows stupid simple |
| **Competition**: Bigger marketplace steals users | Medium | Low | Move fast, own a niche first |
| **Product**: Duplicate listings / low quality | Medium | High | Moderation queue + quality filters |

### AI-Powered Product

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|-----------|
| **Product**: LLM hallucinations (wrong outputs) | High | High | Add human review for sensitive outputs, test with 10 prompts |
| **Product**: AI latency (slow responses) | Medium | High | Implement caching, queuing, streaming |
| **Financial**: AI token costs exceed revenue | Critical | High | Model: $X tokens per user per month, price accordingly |
| **Product**: Prompt injection / security | Medium | Medium | Validate inputs, never concatenate user input directly |
| **Market**: Users don't trust AI results | High | Medium | Show confidence scores, allow user correction |
| **Execution**: Fine-tuning takes longer than expected | Medium | Medium | Start with prompt engineering, fine-tune only if needed |
| **Competition**: OpenAI releases better free model | High | Low | Build on moat (speed, specific domain, UX) |
| **Financial**: API deprecations (OpenAI model changes) | Medium | Low | Don't build on 1 model, have fallback |

### Mobile App (iOS/Android)

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|-----------|
| **Market**: App Store rejection | High | Medium | Follow guidelines, test with beta testers |
| **Product**: iOS/Android behave differently | High | High | Test on both platforms week 2, not week 6 |
| **Product**: App crashes / data loss | High | High | Crash reporting (Sentry) + backup strategy |
| **Financial**: IAP (in-app purchase) takes 30% cut | High | High | Plan pricing with 30% already cut |
| **Execution**: Push notifications don't work | Medium | Medium | Test on day 1, not day 90 |
| **Execution**: Release cycle slow (app store review) | Medium | High | Plan: web version + app simultaneous |
| **Competition**: Larger player has native app | Medium | Low | Focus on speed/UX differentiator |

---

## Part 3: Your Top 20 Risks (Framework)

For YOUR project, identify top 20:

**Step 1: Brain dump**
List every risk you're worried about. Don't filter.

**Step 2: Rate each**
```
Severity (1-10): How bad if it happens?
  10 = Company dies
  5 = Delays 3 months
  1 = Annoyance
  
Likelihood (0-100%): What's the chance?
  100% = Will definitely happen
  50% = Coin flip
  10% = Unlikely but possible
  
Risk Score = Severity × Likelihood
```

**Step 3: Sort by risk score**

**Step 4: Mitigation for top 10**

```
Risk: [Risk name]
Severity: [X/10]
Likelihood: [X%]
Score: [X × Y]

IF it happens: [consequence]
Mitigation: [action you can take NOW]
  - Action 1: [specific, testable]
  - Action 2: [specific, testable]

Accountability: [who checks this?]
Timeline: [when do you validate?]
```

---

## Part 4: Failure Modes (What Can Go Wrong)

### Critical Failure Modes (Company Killer)

#### Marketplace: Nobody sells
```
FAILURE: You launch, 0 sellers sign up in week 1
CONSEQUENCE: No inventory → no reason for buyers to show up
  
EARLY WARNING SIGNS:
- Sellers say "I'll do it eventually" (not "yes")
- Onboarding takes >20 min
- You can't find 10 sellers in 2 weeks of searching

MITIGATION:
- Pre-recruit 50 sellers before launch (recruit = ask personally)
- Seller incentive clear (first $500 free, or revenue share, or both)
- Seller onboarding < 5 minutes
- Have 50 listings ready on day 1 (you create them OR pre-recruit supply)
```

#### SaaS: Churn > 5% monthly
```
FAILURE: Customers leave faster than you can acquire new ones
CONSEQUENCE: Impossible to grow, company dies by month 12

EARLY WARNING SIGNS:
- Week 2: 1/3 of trial users inactive
- Week 4: Customers don't log in >3 days
- Month 2: "It's okay but I don't need it anymore"

MITIGATION:
- Ship your core differentiator in week 2 (not week 6)
- Email users week 1 that summarizes what they built/saved
- Track: % active daily, % who completed onboarding
- If D7 retention < 50%, STOP. Iterate before scaling.
```

#### AI Product: Token costs exceed revenue
```
FAILURE: Each user call costs you $1 in AI tokens, but you charge $0.50
CONSEQUENCE: Lose money on every sale, break in 3 months

EARLY WARNING SIGNS:
- You model pricing without modeling token costs
- LLM calls are unoptimized (long prompts, not cached)
- No rate limiting (1 power user generates $100 in costs)

MITIGATION:
- Model before code: X API calls per user per month
- Charge 3-5x the token cost minimum
- Implement caching (same prompt = no new tokens)
- Add rate limits: 100 calls/month per user on free tier
```

#### Any Project: Runway Runs Out
```
FAILURE: You're out of money 3 months before profitability
CONSEQUENCE: Can't pay developers, server bills, yourself

EARLY WARNING SIGNS:
- You never modeled monthly burn rate
- Months 1-3 you spend like it's free
- At month 6, you have 3 months runway left but 6 months to profitability

MITIGATION:
- Calculate: monthly burn = (salaries + server + tools) / team size if solo
- Target: profitability in 12 months (or money for 18 months)
- If bootstrapped: ship something revenue-generating in month 3
- If raising: don't start code until $ is in bank
```

---

## Part 5: Red Flags That Scream Danger

### Execution Red Flags

🚩 **"We'll test security after launch"**
→ STOP. Do security review BEFORE.

🚩 **"We'll optimize performance later"**
→ If it's slow on day 1, users bounce. Fix in week 1.

🚩 **"We don't need monitoring/analytics until 1000 users"**
→ WRONG. Ship with Sentry + PostHog day 1.

🚩 **"Our onboarding will be obvious"**
→ TEST with 5 external people before launch.

### Market Red Flags

🚩 **"We have no competitors"**
→ Market doesn't exist OR you didn't look hard enough.

🚩 **"Everyone will want this"**
→ Wrong. Build for a specific person, not everyone.

🚩 **"We've been thinking about this for 2 years"**
→ WHY haven't you validated with users yet?

🚩 **"Pricing will be obvious once we launch"**
→ Price before launch. Test pricing in beta.

### Financial Red Flags

🚩 **"We have $50k runway"**
→ At $5k/month burn, that's 10 months. You need 12 months to profitability.

🚩 **"We'll make it back on VC"**
→ Hope is not a strategy. Model path to profitability on your own.

🚩 **"Our unit economics don't work but we'll scale it"**
→ WRONG. Fix unit economics first, then scale.

---

## How This Enters TERMIDEATOR

**Section 14 (Error Handling Patterns) is EXPANDED to include:**

```
14A. Technical Failure Modes
     → Every critical flow has failure state

14B. Business Failure Modes
     → Top 20 risks for this archetype

14C. Mitigation Checklist
     → Specific actions before launch
```

**Architect asks in Phase 3:**

> "Ahora vamos a identificar qué puede salir mal. 
>  Para tu [SaaS/Marketplace/AI] los riesgos principales son:
>  [Lista top 5 para su arquetipo]
>  
>  ¿Cómo mitigamos cada uno ANTES de que ocurra?"

**If user identifies gap:**
→ Blueprint includes that risk + mitigation plan in Section 14.

---

## Risk Mitigation Checklist Template

```
PROJECT: [Name]
ARCHETYPE: [Type]

TOP 5 RISKS:

Risk #1: [Name]
├─ Severity: [X/10]
├─ Likelihood: [X%]
├─ Mitigation 1: [Action]
├─ Mitigation 2: [Action]
├─ Owner: [Who]
└─ Timeline: [When validate?]

Risk #2: [...]

PRE-LAUNCH VALIDATION:
☐ Risk 1 mitigation completed
☐ Risk 2 mitigation tested
☐ Risk 3 early warning system in place
☐ Team aligned on failure modes
☐ Incident response documented

RED FLAGS (STOP if ANY):
☐ Revenue model fundamentally broken
☐ 0 users want this (< 5/10 problem validation)
☐ Can't build in 3 months (revisit scope)
☐ Insufficient runway (get more capital)
☐ Team misaligned on core strategy
```

Use este documento como tu safety net. Antes de launch, cada riesgo debe tener un mitigation plan.
