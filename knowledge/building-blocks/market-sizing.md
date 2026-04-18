# Market Sizing + Competitive Analysis

Sin entender el mercado, diseñas para fantasía. Este building block valida que TAM es real y que tienes una ventaja defendible contra competencia.

---

## Part 1: Market Sizing — TAM / SAM / SOM

### Total Addressable Market (TAM)
**La pregunta:** ¿Cuánta plata hay en este mercado SI ganara 100%?

**Método: Top-Down (start here)**
```
Paso 1: Identifica la categoría padre
  SaaS de invoicing → categoría = "Small Business Admin Software"
  
Paso 2: Usa números públicos
  - IDC / Gartner reports (busca en Google Scholar)
  - Datos del gobierno (industry reports)
  - Benchmarks de competencia (Stripe publica datos)

Paso 3: Cálcula
  TAM = (Target users) × (Average revenue per user)
  
Ejemplo:
  - SMBs en USA: 5.6M
  - Average SaaS spend per SMB per year: $5,000
  - TAM = 5.6M × $5,000 = $28B
```

**Sanity check:** ¿El número parece real? Si TAM < $100M, busca segmento más pequeño. Si TAM > $1T, es demasiado amplio.

### Serviceable Addressable Market (SAM)
**La pregunta:** ¿Cuánta plata hay si me enfoco en MI segmento?

```
SAM = TAM × (% que puedo reach con mi modelo de negocio)

Ejemplo:
  - TAM (invoicing): $28B
  - Mi nicho (micro-SaaS para freelancers): 2% del mercado
  - SAM = $28B × 0.02 = $560M
```

### Serviceable Obtainable Market (SOM)
**La pregunta:** ¿Cuánta plata puedo REALISTICALLY obtener en 5 años?

```
SOM = SAM × (% market share reasonable para startup)

Startups típicas: 1-5% market share es considerado éxito GRANDE.

Ejemplo:
  - SAM (freelancer invoicing): $560M
  - Realistic market share: 3%
  - SOM = $560M × 0.03 = $16.8M
  
Si aspiras a $16.8M en 5 años:
  - ARR Year 5: $16.8M
  - ARR Year 1: ~$2M (assuming 50% YoY growth)
```

### TAM/SAM/SOM Red Flags

🚩 **"Mi TAM es $100B+"**
→ Significa: mercado demasiado amplio, enfoques más

🚩 **"Mi TAM es $50M"**
→ Significa: mercado tiny, revierta si no hay moat defensible

🚩 **"No sé cómo calcular TAM"**
→ Significa: no has investigado enough. Pasa 2 horas en Google Scholar.

---

## Part 2: Competitive Teardown — Top 5 Competidores

### Qué Investigar (Por Competidor)

**1. Pricing & Revenue Model**
```
- What tiers? ($X/mo, $Y/mo, $Z/enterprise)
- Unit economics: customers × price = ARR (puedes estimar desde reviews/blogs)
- Growth rate: trending up / flat / declining (Similarweb, G2 reviews count)
- Churn signals: users complaining about alternatives (Reddit, Product Hunt)
```

**2. Feature Set**
```
- Core features (what solves the pain)
- Nice-to-haves (bells & whistles)
- What's MISSING (this is your opportunity)
- Roadmap (if public — what are they NOT building?)
```

**3. UX/DX**
```
- Onboarding: easy or painful?
- Learning curve: steep or flat?
- Documentation: comprehensive or sparse?
- API: exists? Good? Bad?
```

**4. Market Position**
```
- Who are their target users?
- What's their positioning (price leader? feature leader? ease leader?)
- Who do THEY compete with?
- What's their brand perception? (luxury / budget / mainstream)
```

**5. Viability Signals**
```
- Funding: bootstrapped / raised / how much
- Team size: 5 people / 50 people / 500
- Growth: Series A / Series C / IPO prep
- Health: improving or declining (G2 reviews, product releases)
```

### Competitive Matrix Template

```
|               | Our App | Competitor A | Competitor B | Competitor C |
|---------------|---------|--------------|--------------|--------------|
| Price         | $29/mo  | $49/mo       | Free + $X    | $99/mo       |
| Core Feature 1| ✅ Best | ⭐ OK        | ❌ Missing   | ✅ Good      |
| Core Feature 2| ✅ Good | ✅ Best      | ✅ Good      | ❌ Missing   |
| UX Rating     | 9/10    | 7/10         | 6/10         | 8/10         |
| Learning Time | 10 min  | 30 min       | 20 min       | 15 min       |
| Onboarding    | ✅ WOW  | ⭐ OK        | ⭐ OK        | ❌ Painful   |
| Our Edge      | Fastest | —            | Cheapest     | —            |
```

---

## Part 3: Differentiation — Your Moat

**The One Thing:** ¿Cuál es la ÚNICA razón por la que elegirían tu producto?

```
"We are [positioning] for [users] because [difference]."

NOT: "We have a better app than [competitor]"
YES: "We're the fastest invoicing for freelancers because we auto-categorize
      from Stripe/PayPal, saving 30 min/week."
```

### Types of Moats (Pick ONE)

| Moat Type | How to Test | Red Flag |
|-----------|------------|----------|
| **Price Leader** | Can you undercut 50% and survive? | "I'll compete on price" (race to zero) |
| **Feature Leader** | Do 5+ users say "other apps don't have this"? | "We'll have MORE features" (bloatware) |
| **UX Leader** | Do users say "so easy" unprompted? | "Our UI is beautiful" (ux ≠ beautiful) |
| **Network Effect** | Does value increase with users? | Only for marketplaces, social |
| **Switching Cost** | Is it painful to leave? | Vendor lock-in ≠ moat |
| **Speed** | Are you 10x faster? | "Faster" is relative |

---

## How This Enters TERMIDEATOR

**Phase 2 — Revenue Agent Step:**

Revenue Agent asks:
1. **TAM/SAM/SOM:** "Antes de monetizar, ¿cuál es el tamaño real del mercado?"
   - Si TAM < $100M → rethink
   - Si SOM < $1M → hobby market
   - Si SOM > $100M → potentially huge

2. **Competitive Analysis:** "¿Existen 5+ competidores? ¿Por qué ganamos?"
   - Si 0 competidores → market no existe o está naked
   - Si 1-2 competidores → young market (good timing)
   - Si 20+ competidores → mature market (need strong moat)
   - Si no sé el answer → need to research

3. **Moat Check:** "¿Cuál es TU ventaja única que un clon no puede copiar en 6 meses?"
   - Si "better features" → not enough (they copy in 3 months)
   - Si "our team" → not defensible at scale
   - Si "we're first mover" → need moat PLUS first-mover (see Twitter)
   - Si "[specific UX/speed/cost] and users love us for it" → potentially defensible

**If TAM < $100M OR moat is weak:**
→ Architect: "Esta dirección puede funcionar, pero el upside está limitado. ¿Es un lifestyle business o vas a fundraise? Eso cambia la arquitectura."

---

## Market Research Tools

| Tool | For What | Cost |
|------|----------|------|
| **Google Scholar** | TAM research, market reports | Free |
| **Similarweb** | Traffic, growth rate | Free (limited) |
| **G2 / Capterra** | Competitor reviews, customer count | Free |
| **Product Hunt** | Launch benchmarks, user feedback | Free |
| **Crunchbase** | Competitor funding, team size | Free (limited) |
| **LinkedIn Sales Navigator** | Prospect research, company insights | $$$  |
| **Gartner / IDC** | Official market research | $$$$ |

---

## Sanity Checklist

Before entering Phase 3, answer these:

```
☐ TAM is $100M+ (or nicho viable en $10-100M range)
☐ SAM is $1M+ (addressable por mi modelo de negocio)
☐ SOM es $1M+ en 5 años (achievable con realistic growth)
☐ Encontré 3+ competidores (means market exists)
☐ Puedo nombrar 1 razón clara por la que gano vs competencia
☐ Esa razón NO es "we work harder" o "our team is smarter"
☐ 5+ usuarios potenciales dicen "otros apps no me dan eso"
```

Si 2+ boxes están vacíos → vuelve a la investigación. No avances a arquitectura.
