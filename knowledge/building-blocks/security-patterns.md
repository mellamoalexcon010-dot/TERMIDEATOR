# Security Patterns

Based on: https://www.tododeia.com/community/protege-tu-app

Every blueprint that has auth, a database, or user data MUST include these three security configurations. The builder copies the relevant prompt and runs it with Claude Code.

---

## The Three Mandatory Protections

### 1. Row-Level Security (RLS) — Supabase/PostgreSQL

**What it does:** Ensures users can only see and modify their own data. Without it, changing an ID in a URL gives access to anyone's data.

**When to include:** Every project using Supabase. Non-negotiable.

**Prompt for builder to use:**
```
Estoy usando Supabase con PostgreSQL. Tengo las siguientes tablas en mi base de datos:

[BUILDER: reemplaza con las tablas reales del proyecto]

Necesito que configures Row-Level Security (RLS) para que:
1. Cada usuario solo pueda VER sus propios registros
2. Cada usuario solo pueda CREAR registros con su propio user_id
3. Cada usuario solo pueda EDITAR sus propios registros
4. Cada usuario solo pueda BORRAR sus propios registros

Por favor:
- Activa RLS en TODAS las tablas con ALTER TABLE ... ENABLE ROW LEVEL SECURITY
- Crea políticas SEPARADAS para SELECT, INSERT, UPDATE y DELETE (no uses FOR ALL)
- Usa auth.uid() para referenciar al usuario autenticado
- NUNCA uses user_metadata en las políticas (los usuarios pueden modificarlo)
- Agrega índices en las columnas user_id para rendimiento
- Dame el SQL completo listo para pegar en el SQL Editor de Supabase
```

**In the blueprint:** Section 5 (Data Model) must include RLS policies for every table. See example below.

**SQL template to include in every blueprint:**
```sql
-- Enable RLS on all tables
ALTER TABLE {table_name} ENABLE ROW LEVEL SECURITY;

-- SELECT: users see only their own rows
CREATE POLICY "Users can view own {table_name}" ON {table_name}
  FOR SELECT USING (auth.uid() = user_id);

-- INSERT: users can only insert rows with their own user_id
CREATE POLICY "Users can insert own {table_name}" ON {table_name}
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- UPDATE: users can only update their own rows
CREATE POLICY "Users can update own {table_name}" ON {table_name}
  FOR UPDATE USING (auth.uid() = user_id);

-- DELETE: users can only delete their own rows
CREATE POLICY "Users can delete own {table_name}" ON {table_name}
  FOR DELETE USING (auth.uid() = user_id);

-- Performance index
CREATE INDEX IF NOT EXISTS idx_{table_name}_user_id ON {table_name}(user_id);
```

**How to verify:** Create two test users. Log in as User A, create data. Log in as User B — User A's data must be invisible.

---

### 2. CORS (Cross-Origin Resource Sharing)

**What it does:** Prevents malicious websites from making requests to your API on behalf of your users.

**When to include:** Every project with a separate API or backend. Critical for Next.js API routes with custom domains.

**Prompt for builder to use:**
```
Estoy construyendo una aplicación web con [BUILDER: pon tu stack aquí].
Mi frontend está en https://[DOMINIO].com

Necesito que configures CORS correctamente:
1. SOLO acepta requests de mi dominio exacto — NUNCA uses Access-Control-Allow-Origin: *
2. Permite los métodos GET, POST, PUT, DELETE
3. Permite los headers estándar más Authorization y Content-Type
4. Soporta cookies y tokens de autenticación (credentials)
5. Maneja correctamente los preflight requests (OPTIONS)

Reglas importantes:
- NO uses wildcards (*) en ningún header de CORS
- NO copies el header Origin del request al response
- SOLO permite HTTPS, nunca HTTP
- Si usas credentials: true, el origin TIENE que ser exacto

Dame la configuración completa para [BUILDER: next.config.js / Express middleware / etc]
```

**For Next.js** — include this in the blueprint's `next.config.js` section:
```js
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: process.env.NEXT_PUBLIC_URL },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  },
}
```

---

### 3. Security Headers

**What it does:** Prevents clickjacking, XSS attacks, content-type sniffing, and forces HTTPS.

**When to include:** Every web project before production deploy.

**Prompt for builder to use:**
```
Estoy construyendo una aplicación web con [BUILDER: tu stack]. Mi dominio es https://[DOMINIO].com

Agrega TODOS los Security Headers de producción en el archivo correcto de mi framework:

1. X-Frame-Options: SAMEORIGIN (previene clickjacking)
2. Content-Security-Policy: default-src 'self' — solo recursos de mi dominio
3. X-Content-Type-Options: nosniff (evita archivos disfrazados)
4. Strict-Transport-Security: max-age=31536000; includeSubDomains (fuerza HTTPS)
5. Referrer-Policy: strict-origin-when-cross-origin
6. Permissions-Policy: geolocation=(), microphone=(), camera=()

Si el proyecto usa servicios externos (Stripe, Google Analytics, etc.), ajusta el CSP para incluir sus dominios.
Dame el código completo listo para copiar.
```

**For Next.js** — include this block in every SaaS/marketplace blueprint:
```js
// next.config.js — Security Headers
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // adjust for prod
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "object-src 'none'",
      "connect-src 'self' https://api.supabase.co https://api.stripe.com",
    ].join('; ')
  },
]
```

**How to verify:** Go to [securityheaders.com](https://securityheaders.com) with your domain — target grade A or A+.

---

## Where Each Protection Goes in the Blueprint

| Protection | Blueprint Section | Build Step |
|-----------|-------------------|------------|
| RLS | Section 5 (Data Model) — SQL block | Step 2 (Database Setup) |
| CORS | Section 10 (Environment Setup) — config file | Step 1 (Scaffolding) |
| Security Headers | Section 16 (Non-Negotiable Rules) | Step 1 (Scaffolding) |

## Security Checklist for Section 16

Include these rules in EVERY blueprint's Non-Negotiable Rules:

```
Security Rules (Non-Negotiable):
- RLS enabled on ALL Supabase tables — no exceptions
- CORS configured with exact domain — no wildcards
- Security headers in next.config.js before first deploy
- Rate limiting on auth routes: max 10 req/min per IP
- All user inputs validated with Zod before DB operations
- Environment variables in .env.local — never hardcoded
- .env.local in .gitignore — verify before first commit
- Stripe webhook signatures always verified
- Never expose service role key to client-side code
```
