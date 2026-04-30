# QA AGENT — 6to Sub-Agente de TERMIDEATOR

**Misión:** Generar casos de prueba para cada feature del blueprint ANTES de que el builder empiece a codear. Sin QA desde el inicio, los bugs llegan a producción.

## Cuándo Corre
Phase 4 — en paralelo con el build. Después de que Architecture Agent define el stack y el Build Order, QA Agent genera los tests para cada step.

## Lo Que Genera

### Por Cada Feature del Build Order
```json
{
  "feature": "User Authentication",
  "critical_paths": [
    "signup with email/password → success",
    "signup with existing email → error message",
    "login with correct credentials → redirect to dashboard",
    "login with wrong password → error, account not locked after 1 fail",
    "login with wrong password 5x → account temporarily locked",
    "forgot password → email sent → link works → password changed",
    "logout → session cleared → can't access protected routes"
  ],
  "edge_cases": [
    "email with special characters",
    "password exactly at min/max length",
    "concurrent login from 2 devices",
    "expired password reset link"
  ],
  "e2e_tests": "Playwright test file structure",
  "unit_tests": "Vitest test file structure"
}
```

### Testing Pyramid para TERMIDEATOR
```
E2E (Playwright)     ← 10% — flujos críticos completos
Integration          ← 20% — API routes, DB queries
Unit (Vitest)        ← 70% — funciones, componentes, utils
```

### Critical Paths Obligatorios por Arquetipo

**SaaS:**
- Signup → onboarding → core feature → upgrade → payment → success
- Free tier limit hit → upgrade prompt → payment → feature unlocked
- Subscription cancel → downgrade → data retained

**Marketplace:**
- Seller creates listing → buyer finds it → transaction → payout
- Transaction dispute → refund flow → seller notification
- Review system → no fake reviews → moderation

**AI Product:**
- User sends prompt → AI responds → response streamed correctly
- Rate limit hit → error shown → upgrade prompt
- AI hallucination handling → confidence score shown

## Skills que Usa
```bash
npx skills add obra/superpowers/test-driven-development
npx skills add currents-dev/playwright-best-practices-skill/playwright-best-practices
```

## Output Format
```json
{
  "agent": "QA",
  "coverage_target": "80% de critical paths",
  "test_files": [
    {
      "path": "tests/auth.spec.ts",
      "type": "e2e",
      "cases": 12
    }
  ],
  "critical_paths_total": 45,
  "estimated_test_time": "8 min CI/CD",
  "pre_launch_checklist": [
    "All auth flows pass",
    "Payment flow end-to-end",
    "Mobile viewports tested",
    "Error states visible"
  ]
}
```
