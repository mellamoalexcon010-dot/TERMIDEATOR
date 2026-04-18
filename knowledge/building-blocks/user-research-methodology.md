# User Research Methodology — Validación Pre-Arquitectura

Sin validar con usuarios reales, construyes para nadie. Este building block define exactamente cómo el usuario valida su idea ANTES de que el Architect diseñe el stack.

---

## Framework de Validación en 5 Pasos

### Paso 1: Problem Validation (Semana 1)
**Objetivo:** ¿El problema es real y duele?

**Método:** 10 entrevistas de 30 min con target users
```
Busca usuarios que TIENEN el problema ahora:
- No busques "personas que podrían estar interesadas"
- Busca "gente que está pagando soluciones mediocres para resolver esto"
- Si nadie paga, es hobby market
```

**Script de entrevista:**
```
1. "¿Cómo resuelves [problema] hoy?" (observa: cuánto esfuerzo, cuánta frecuencia)
2. "¿Cuánto tiempo pierdes en esto por semana?" (mide el pain)
3. "¿Cuánto pagarías para eliminarlo?" (silencio incómodo, espera respuesta honesta)
4. "¿Qué tendrías que cambiar en tu negocio para no necesitar esto?" (busca alternativas)
5. "¿Quién más en tu industria tiene este problema?" (referencias para más entrevistas)
```

**Señales de GO / NO-GO:**
- ✅ GO: 7+ de 10 dicen "problema real", 5+ mencionan costo
- ❌ NO-GO: 3+ dicen "inventaría workaround", 0 mencionan costo

**Deliverable:** User research doc con 10 entrevistas resumidas

---

### Paso 2: Solution Validation (Semana 1-2)
**Objetivo:** ¿Está mi solución en el camino correcto?

**Método:** Prototipo de papel / wireframe sin código

```
NO construyas código. Dibuja en Figma o papel:
- Landing page de value prop
- Flujo principal del usuario
- 3 pantallas clave
```

**Test con 5 de los 10 usuarios originales:**
```
"Aquí está mi idea. ¿Esto resuelve tu problema?"
Espera a que digan SÍ sin que los convenzas.
```

**Señales de GO / NO-GO:**
- ✅ GO: 4+ dicen "sí, esto me resuelve el problema"
- ❌ NO-GO: 2+ dicen "esto no es lo que necesito"

**Deliverable:** Wireframes + feedback document

---

### Paso 3: Pricing Validation (Semana 2)
**Objetivo:** ¿Pagarían? ¿Cuánto?

**Método:** Van Westendorp Price Sensitivity Analysis

```
Pregunta a los 10 usuarios originales:

1. "¿A qué precio empezaría a parecer demasiado caro?"
2. "¿A qué precio empezaría a parecer de mala calidad?"
3. "¿A qué precio sería una buena compra?"
4. "¿Cuál es tu precio perfecto?"

Grafica las respuestas. El rango donde no hay "demasiado caro" 
ni "demasiado barato" es tu sweet spot.
```

**Unit Economics Sanity Check:**
```
Si los usuarios dicen $29/mes:
- CAC target: $150 (5 meses payback)
- LTV target: $1740 (60 meses retention)
- Churn target: 3% monthly

¿Es mathematically viable? Si no, repensa pricing.
```

**Señales de GO / NO-GO:**
- ✅ GO: 6+ dicen que pagarían $X
- ❌ NO-GO: 5+ dicen "gratis o nada"

**Deliverable:** Pricing analysis + unit economics spreadsheet

---

### Paso 4: Pre-Sale Validation (Semana 2-3)
**Objetivo:** ¿Venderías en día 1 si existiera?

**Método:** 5 pre-sales commitments

```
Busca 5 usuarios que digan:
"Cuando lo lances, dame acceso. Pagaré $X/mes."

No es un Zoom call. Es un email:
"Cuando lance [producto], ¿pagarías $29/mes?"

Espera respuesta escrita.
```

**Señales de GO / NO-GO:**
- ✅ GO: 5 personas dicen "sí" (no "quizá", "sí")
- ❌ NO-GO: 3+ dicen "no" o "me avisa cuando exista"

**Deliverable:** 5 email confirmations de pre-sale

---

### Paso 5: Competitive Validation (Semana 3)
**Objetivo:** ¿Por qué no usan mi competencia?

**Método:** Entrevista a usuarios que YA usan competidores

```
Si existe Wave, Stripe, o similar:
"¿Por qué no usas [competidor]?"
Escucha. Ese gap es tu ventaja.

Respuestas que importan:
- "Es demasiado caro" → Tu precio más bajo
- "Es lento de aprender" → Tu UX más simple
- "No tiene [feature]" → Tu feature diferenciadora
- "Sirve pero no perfecto" → Tu nicho
```

**Señales de GO / NO-GO:**
- ✅ GO: 5+ dan el mismo motivo para no usar competencia (tu diferenciador)
- ❌ NO-GO: Motivos variados / "en realidad está bien, nomás"

**Deliverable:** Competitive analysis document

---

## Red Flags Que Matan el Proyecto

Si observas UNO de estos antes de build, piensa seriamente:

🚩 **"Mi solución es mejor pero nadie pagará por ella"**
→ Significa: problema no duele lo suficiente

🚩 **"Mis usuarios dicen que es buena idea pero nunca responden a mi email"**
→ Significa: low intent, hobby market

🚩 **"Compiten 20 jugadores bien financiados, todos grandes"**
→ Significa: market es proven pero vosotros no ganarán (a menos que tengas moat)

🚩 **"Usuarios dicen 'gratis o nada'"**
→ Significa: problema no duele lo suficiente o solución mediocre

🚩 **"Mis 10 usuarios no son reales" (friends & family)**
→ Significa: bias confirmatorio. Buscá strangers.

---

## Cómo Entra en TERMIDEATOR

**Phase 2 — Después de KILLER_MOVE:**

El Architect dice:
> "Antes de diseñar el stack, validemos si el problema es real. Te voy a preguntar 5 cosas que te ayudan a hacer este research en 2 semanas."

**Preguntas del Architect:**
1. "¿Ya hablaste con 10+ usuarios que TIENEN este problema? ¿Dieron el dolor principal?"
2. "¿Tienen una solución actual? ¿Cuánto cuesta o pagan en workaround?"
3. "¿Cuánto pagarían por eliminar este problema?"
4. "¿Alguno dijo 'cuando lo lances, yo lo compro'? ¿Cuántos?"
5. "¿Existe competencia? ¿Por qué tus usuarios no los usan?"

**Si usuario dice:**
- "No tengo usuarios validados" → Architect: "Pausa. Ejecuta Paso 1 y Paso 2 primero. Esto toma 2 semanas. Después volvemos a la arquitectura."
- "Ya validé con X usuarios" → Architect: "Perfecto. Entramos a Phase 3 sabiendo que el mercado existe."

---

## Métricas de Validación

| Métrica | Benchmark | Significa |
|---------|-----------|-----------|
| Problem validation | 7+ de 10 | Mercado real existe |
| Solution validation | 4+ de 10 | Dirección correcta |
| Pricing validation | 6+ aceptan precio | Monetizable |
| Pre-sales | 5 compromisos | Traction real |
| Competitive edge | 5+ citan tu diferenciador | Moat clara |

**Regla de oro:** Si UNA métrica falla, no avances. Itera primero.

---

## Plantilla: User Research Tracker

```
User #1:
- Name: [name]
- Company: [company]
- Problem severity (1-10): [X]
- Current cost/effort: [X hours/week]
- Willingness to pay: $[X]/month
- Solution feedback: [good/needs change/wrong direction]
- Pre-sale: [YES/NO]
- Competitor: [which one], why don't they use: [reason]

User #2:
...
```

Mantén este documento vivo. Es tu brújula antes de code.
