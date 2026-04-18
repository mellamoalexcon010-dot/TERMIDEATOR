# Credentials Guide

This file maps every service to exactly what credentials are needed, where to get them, and which env var names to use. The Architect reads this during Phase 3.5 to present only the services in the confirmed stack.

---

## SERVICE CATALOG

---

### 🗄️ Supabase
**Used for:** Database (PostgreSQL), Auth, Storage, Realtime
**Cost:** Free tier available (generous limits)
**Priority:** ESSENTIAL — project won't start without this

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` | [supabase.com/dashboard](https://supabase.com/dashboard) → Your Project → Settings → API → Project URL |
| Anon/Public Key | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Same page → `anon` `public` key |
| Service Role Key | `SUPABASE_SERVICE_ROLE_KEY` | Same page → `service_role` key (keep secret — server only) |
| DB Password | `DATABASE_URL` | Settings → Database → Connection string (for Prisma/Drizzle) |

**Setup steps for Claude Code:**
1. Create project at supabase.com
2. Wait ~2 min for provisioning
3. Copy all 3 keys from Settings → API
4. Run migrations with `supabase db push` or paste SQL in SQL Editor

---

### ▲ Vercel
**Used for:** Frontend hosting, serverless functions, edge network
**Cost:** Free tier available (Hobby plan)
**Priority:** ESSENTIAL for deploy

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| Auth Token | `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) → Create Token |
| Org ID | `VERCEL_ORG_ID` | vercel.com/account → Settings → General → Vercel ID |
| Project ID | `VERCEL_PROJECT_ID` | Auto-generated on first deploy OR Project → Settings → General |

**Note:** Claude Code can deploy using `vercel --token $VERCEL_TOKEN` in CLI. Alternatively, GitHub auto-deploy is simpler — just connect repo in Vercel dashboard.

---

### 💳 Stripe
**Used for:** Payments, subscriptions, invoicing
**Cost:** 2.9% + $0.30 per transaction (no monthly fee)
**Priority:** IMPORTANT — needed before any paid features

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| Secret Key | `STRIPE_SECRET_KEY` | [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys) → Secret key |
| Publishable Key | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Same page → Publishable key |
| Webhook Secret | `STRIPE_WEBHOOK_SECRET` | dashboard.stripe.com/webhooks → Add endpoint → Signing secret |
| Price ID (Pro) | `STRIPE_PRO_PRICE_ID` | dashboard.stripe.com/products → Create product → Copy price ID |
| Price ID (Enterprise) | `STRIPE_ENTERPRISE_PRICE_ID` | Same — create second price |

**Test vs Live:** Use `sk_test_...` keys during development. Switch to `sk_live_...` for production.
**Webhook URL:** `https://yourdomain.com/api/webhooks/stripe`

---

### 💳 Stripe Connect (Marketplaces only)
**Used for:** Split payments between platform and sellers
**Cost:** Same as Stripe + 0.25% Connect fee
**Priority:** ESSENTIAL for marketplace payment flows

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| Same as Stripe above | — | Same as above |
| Connect Client ID | `STRIPE_CONNECT_CLIENT_ID` | [dashboard.stripe.com/settings/connect](https://dashboard.stripe.com/settings/connect) → Get your client_id |

**Note:** Must enable Connect in Stripe Dashboard → Settings → Connect settings → Activate

---

### 📧 Resend
**Used for:** Transactional email (welcome, notifications, billing)
**Cost:** Free up to 3,000 emails/month
**Priority:** IMPORTANT — needed for auth flows and notifications

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| API Key | `RESEND_API_KEY` | [resend.com/api-keys](https://resend.com/api-keys) → Create API Key |
| From Email | `RESEND_FROM_EMAIL` | Must be a verified domain email: `hello@yourdomain.com` |

**Domain verification:** resend.com/domains → Add domain → Add DNS records

---

### 🔐 Clerk
**Used for:** Authentication (sign up, sign in, user management)
**Cost:** Free up to 10,000 MAU
**Priority:** ESSENTIAL if using Clerk for auth

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| Publishable Key | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | [dashboard.clerk.com](https://dashboard.clerk.com) → API Keys |
| Secret Key | `CLERK_SECRET_KEY` | Same page → Secret key |
| Webhook Secret | `CLERK_WEBHOOK_SECRET` | Clerk Dashboard → Webhooks → Add endpoint → Signing secret |

**Webhook URL:** `https://yourdomain.com/api/webhooks/clerk`

---

### 🤖 Anthropic (Claude API)
**Used for:** AI features, LLM calls
**Cost:** Pay-per-token (Haiku ~$0.25/1M, Sonnet ~$3/1M, Opus ~$15/1M)
**Priority:** ESSENTIAL for AI products

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| API Key | `ANTHROPIC_API_KEY` | [console.anthropic.com/api-keys](https://console.anthropic.com/api-keys) → Create Key |

---

### 🤖 OpenAI
**Used for:** GPT models, embeddings (text-embedding-3-small)
**Cost:** Pay-per-token
**Priority:** ESSENTIAL for AI products using OpenAI

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| API Key | `OPENAI_API_KEY` | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) → Create new secret key |

---

### 🔍 Algolia
**Used for:** Search (fast, typo-tolerant, faceted filters)
**Cost:** Free up to 10,000 records + 10,000 searches/month
**Priority:** IMPORTANT for marketplaces and content platforms

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| App ID | `NEXT_PUBLIC_ALGOLIA_APP_ID` | [dashboard.algolia.com](https://dashboard.algolia.com) → Settings → API Keys → Application ID |
| Search API Key | `NEXT_PUBLIC_ALGOLIA_SEARCH_KEY` | Same page → Search-Only API Key |
| Admin API Key | `ALGOLIA_ADMIN_KEY` | Same page → Admin API Key (server only — never expose) |

---

### 📊 PostHog
**Used for:** Product analytics, session recordings, feature flags
**Cost:** Free up to 1M events/month
**Priority:** IMPORTANT — set up before launch to track from day 1

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| API Key | `NEXT_PUBLIC_POSTHOG_KEY` | [app.posthog.com](https://app.posthog.com) → Project Settings → Project API Key |
| Host | `NEXT_PUBLIC_POSTHOG_HOST` | `https://app.posthog.com` (US) or `https://eu.posthog.com` (EU) |

---

### 🐛 Sentry
**Used for:** Error monitoring and performance tracking
**Cost:** Free up to 5,000 errors/month
**Priority:** OPTIONAL (add after MVP)

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| DSN | `NEXT_PUBLIC_SENTRY_DSN` | [sentry.io](https://sentry.io) → Project → Settings → SDK Setup → DSN |
| Auth Token | `SENTRY_AUTH_TOKEN` | sentry.io → Settings → Auth Tokens → Create New Token |

---

### 🗺️ Google Maps
**Used for:** Maps display, geocoding, location search
**Cost:** $200 free credit/month (usually enough for MVPs)
**Priority:** IMPORTANT for location-based apps/marketplaces

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| API Key | `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | [console.cloud.google.com](https://console.cloud.google.com) → APIs & Services → Credentials → Create API Key |

**Required APIs to enable:** Maps JavaScript API, Places API, Geocoding API

---

### ☁️ Cloudinary
**Used for:** Image/video upload, optimization, transformations
**Cost:** Free up to 25 credits/month
**Priority:** OPTIONAL — Supabase Storage works for basic cases

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| Cloud Name | `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | [cloudinary.com/console](https://cloudinary.com/console) → Dashboard |
| API Key | `CLOUDINARY_API_KEY` | Same page → API Keys |
| API Secret | `CLOUDINARY_API_SECRET` | Same page → API Secret |

---

### ⚡ Upstash Redis
**Used for:** Caching, rate limiting, session storage
**Cost:** Free up to 10,000 commands/day
**Priority:** OPTIONAL for MVP, important for scale

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| Redis URL | `UPSTASH_REDIS_REST_URL` | [console.upstash.com](https://console.upstash.com) → Create Database → REST API → URL |
| Redis Token | `UPSTASH_REDIS_REST_TOKEN` | Same page → Token |

---

### ⚙️ Trigger.dev
**Used for:** Background jobs, scheduled tasks, async processing
**Cost:** Free up to 50,000 runs/month
**Priority:** OPTIONAL for MVP — use when you need background processing

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| API Key | `TRIGGER_API_KEY` | [cloud.trigger.dev](https://cloud.trigger.dev) → Project → API Keys |
| API URL | `TRIGGER_API_URL` | `https://api.trigger.dev` |

---

### 📱 Expo (Mobile Apps)
**Used for:** React Native builds, OTA updates, push notifications
**Cost:** Free tier available
**Priority:** ESSENTIAL for mobile apps using Expo

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| Access Token | `EXPO_TOKEN` | [expo.dev/accounts/[account]/settings/access-tokens](https://expo.dev) → Create Token |

---

### 💰 RevenueCat (Mobile In-App Purchases)
**Used for:** iOS/Android subscriptions and one-time purchases
**Cost:** Free up to $10k monthly tracked revenue
**Priority:** ESSENTIAL for monetized mobile apps

| Credential | Env Var | Where to Get |
|-----------|---------|-------------|
| iOS API Key | `EXPO_PUBLIC_RC_IOS_KEY` | [app.revenuecat.com](https://app.revenuecat.com) → Project → API Keys → Public Apple API key |
| Android API Key | `EXPO_PUBLIC_RC_ANDROID_KEY` | Same page → Public Google API key |

---

## STACK-TO-CREDENTIALS MAP

Quick reference: which services to ask for per archetype.

| Service | SaaS | Marketing | Mobile | API | Internal | Content | Marketplace | AI Product |
|---------|------|-----------|--------|-----|----------|---------|-------------|------------|
| Supabase | ✅ E | — | ✅ E | ✅ E | ✅ E | ✅ E | ✅ E | ✅ E |
| Vercel | ✅ E | ✅ E | — | ✅ E | ✅ E | ✅ E | ✅ E | ✅ E |
| Stripe | ✅ I | — | — | — | — | — | ✅ E | ✅ I |
| Stripe Connect | — | — | — | — | — | — | ✅ E | — |
| Resend | ✅ I | ✅ I | — | — | — | ✅ I | ✅ I | ✅ I |
| Clerk | ✅ I | — | — | — | ✅ I | — | ✅ I | ✅ I |
| Anthropic | — | — | — | — | — | — | — | ✅ E |
| OpenAI | — | — | — | — | — | — | — | ✅ I |
| Algolia | — | — | — | — | — | ✅ I | ✅ I | — |
| PostHog | ✅ I | ✅ O | ✅ I | — | ✅ I | ✅ I | ✅ I | ✅ I |
| Sentry | ✅ O | — | ✅ O | ✅ O | ✅ O | ✅ O | ✅ O | ✅ O |
| Google Maps | — | — | — | — | — | — | ✅ I | — |
| Cloudinary | — | — | — | — | — | ✅ O | ✅ O | — |
| Upstash Redis | — | — | — | ✅ O | — | — | ✅ O | ✅ I |
| Trigger.dev | — | — | — | ✅ O | — | — | ✅ O | ✅ I |
| Expo | — | — | ✅ E | — | — | — | — | — |
| RevenueCat | — | — | ✅ E | — | — | — | — | — |

**Legend:** E = Essential, I = Important, O = Optional
