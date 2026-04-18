# Archetype: AI-Powered Product

## What Makes AI Products Different
AI products have unique challenges: inference costs, latency, prompt management, hallucination handling, and streaming UX. The architecture must account for these from day one — retrofitting AI into a non-AI architecture is painful.

## Default Stack Recommendation

| Layer | Default | Alternative | When to Switch |
|-------|---------|-------------|----------------|
| Framework | Next.js 15 (App Router) | — | — |
| Language | TypeScript (strict) | — | Never |
| Styling | Tailwind CSS v4 + shadcn/ui | — | — |
| Database | Supabase (Postgres) | — | — |
| AI SDK | Vercel AI SDK | LangChain | Complex agent pipelines |
| LLM Primary | Claude claude-sonnet-4-20250514 | GPT-4o | User preference / cost |
| LLM Cheap | Claude Haiku | GPT-4o-mini | High-volume, simple tasks |
| Vector DB | pgvector (Supabase) | Pinecone | Scale > 1M vectors |
| Embeddings | text-embedding-3-small (OpenAI) | — | — |
| File Processing | Unstructured.io | LlamaParse | PDF/doc extraction |
| Queue | Trigger.dev | Inngest | Background AI jobs |
| Caching | Redis (Upstash) | — | LLM response caching |
| Auth | Clerk | Supabase Auth | — |
| Payments | Stripe (usage-based) | — | — |
| Hosting | Vercel | Railway | Persistent WebSockets |

## AI Cost Architecture
This is the most critical decision in AI products. Without cost control, you'll burn money fast.

### Tiered Model Strategy
```
Simple/fast tasks → Claude Haiku (~$0.25/1M tokens)
Complex reasoning → Claude Sonnet (~$3/1M tokens)
Most capable → Claude Opus (~$15/1M tokens)
```

### Cost Control Patterns
1. **Cache aggressively** — Same prompt = same response. Cache with Redis (TTL 24h)
2. **Prompt optimization** — Shorter prompts = lower cost. Remove boilerplate.
3. **Streaming** — Always stream to improve perceived performance
4. **Usage limits** — Track tokens per user. Enforce plan limits.
5. **Background processing** — Move heavy AI tasks to queue (Trigger.dev)

### Pricing Models for AI Products
- **Credit-based**: Users buy X credits, each AI action costs Y credits
- **Usage-based Stripe Meter**: Charge per 1000 tokens or per AI call
- **Subscription with limits**: Pro = 100 AI generations/month
- **Freemium**: 5 free generations, then upgrade

## Directory Structure

```
src/
  app/
    (marketing)/
      page.tsx                    # Landing with AI demo/preview
      pricing/page.tsx
    (app)/
      dashboard/page.tsx
      [feature]/
        page.tsx                  # Main AI feature page
        [id]/page.tsx             # Individual session/result
      history/page.tsx            # Past generations/sessions
      settings/
        page.tsx
        billing/page.tsx          # Usage stats + upgrade
      layout.tsx
    api/
      ai/
        chat/route.ts             # Streaming chat endpoint
        generate/route.ts         # Generation endpoint
        analyze/route.ts          # Analysis endpoint
      webhooks/stripe/route.ts
      webhooks/trigger/route.ts   # Background job webhooks
  components/
    ui/                           # shadcn primitives
    ai/
      ChatInterface.tsx           # Streaming chat UI
      GenerationResult.tsx        # AI output display
      PromptInput.tsx             # Input with templates
      StreamingText.tsx           # Animated streaming text
      UsageMeter.tsx              # Credits/usage display
    shared/
  lib/
    ai/
      client.ts                   # Anthropic/OpenAI client setup
      prompts/                    # Prompt templates (versioned)
        system-prompts.ts
        user-prompts.ts
      streaming.ts                # Stream handling utilities
      usage.ts                    # Token counting + cost tracking
    supabase/
    stripe/
      usage.ts                    # Stripe Meter for usage-based billing
    cache/
      redis.ts                    # Upstash Redis client
    queue/
      trigger.ts                  # Trigger.dev job definitions
  types/
    ai.ts                         # AI-specific types
```

## Data Model

```sql
-- AI Sessions (chat conversations or generation sessions)
CREATE TABLE ai_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  type TEXT NOT NULL,  -- chat, generation, analysis
  title TEXT,          -- auto-generated from first message
  model TEXT NOT NULL,
  total_tokens INTEGER DEFAULT 0,
  total_cost DECIMAL(10,6) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages in a session
CREATE TABLE ai_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES ai_sessions(id) ON DELETE CASCADE,
  role TEXT NOT NULL,  -- user, assistant, system
  content TEXT NOT NULL,
  tokens_used INTEGER,
  model TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Generation results (for non-chat AI products)
CREATE TABLE generations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  type TEXT NOT NULL,  -- image-caption, summary, code, etc.
  input TEXT NOT NULL,
  output TEXT NOT NULL,
  model TEXT NOT NULL,
  tokens_used INTEGER,
  cost DECIMAL(10,6),
  metadata JSONB,  -- extra params, quality settings, etc.
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Usage tracking per user per period
CREATE TABLE usage_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  period TEXT NOT NULL,  -- YYYY-MM
  tokens_used BIGINT DEFAULT 0,
  ai_calls INTEGER DEFAULT 0,
  cost_usd DECIMAL(10,4) DEFAULT 0,
  plan_limit_tokens BIGINT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, period)
);

-- Prompt templates (versioned)
CREATE TABLE prompt_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  system_prompt TEXT NOT NULL,
  version INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Streaming API Route Pattern

```typescript
// app/api/ai/chat/route.ts
import { streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'edge';  // Edge runtime for lowest latency

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response('Unauthorized', { status: 401 });

  // Check usage limits
  const usage = await checkUserUsageLimits(user.id);
  if (usage.exceeded) {
    return new Response(JSON.stringify({ error: 'Usage limit exceeded', upgrade: true }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const { messages, sessionId } = await req.json();

  const result = await streamText({
    model: anthropic('claude-sonnet-4-20250514'),
    system: SYSTEM_PROMPT,
    messages,
    onFinish: async ({ usage, text }) => {
      // Track usage in background
      await trackUsage(user.id, usage.totalTokens, sessionId);
      await saveMessage(sessionId, 'assistant', text, usage.totalTokens);
    },
  });

  return result.toDataStreamResponse();
}
```

## Prompt Management Best Practices
1. **Version your prompts** — Store in DB with version numbers. Never hardcode in components.
2. **Separate system + user prompts** — System prompt is static, user prompt is dynamic.
3. **Test prompt changes** — Treat prompt updates like code changes. Have eval examples.
4. **Log all inputs/outputs** — You'll need this to debug and improve.
5. **Rate limit per user** — Prevent abuse. 10 req/min for free, 100 for pro.

## Build Order

1. **Scaffolding + Auth** (4h) — Next.js + Clerk/Supabase Auth
2. **Database Schema** (2h) — Supabase + pgvector if using RAG
3. **AI Client Setup** (2h) — Anthropic SDK + Vercel AI SDK, env vars
4. **Core AI API Route** (4h) — Streaming endpoint with auth check and usage tracking
5. **Chat/Generation UI** (5h) — Streaming text display, input, session management
6. **Usage Tracking** (3h) — Token counting, cost calculation, per-user tracking
7. **Plan Limits + Paywall** (4h) — Enforce limits, show upgrade prompts
8. **Stripe Billing** (5h) — Subscription or usage-based billing with Stripe Meter
9. **History + Sessions** (3h) — List past generations/conversations
10. **Prompt Templates** (3h) — Template library if applicable to product
11. **Redis Caching** (2h) — Cache repeated AI calls, reduce costs
12. **Background Jobs** (3h) — Trigger.dev for heavy async AI processing
13. **Landing Page** (4h) — Live demo, use cases, pricing
14. **Polish + Deploy** (3h) — Error boundaries, loading states, Vercel deploy

**Total estimated: ~47 hours solo developer**

## Common Pitfalls
- **No usage limits = bankruptcy.** A single abusive user can rack up $1000+ in AI costs overnight.
- **Blocking UI.** Always stream. Non-streaming AI feels broken to users.
- **Prompt injection.** Never concatenate user input directly into system prompts.
- **No cost tracking.** If you don't know what each user costs you, you can't price correctly.
- **Using the most expensive model everywhere.** Haiku for classification, Sonnet for generation.
- **No error handling for AI failures.** LLMs timeout, rate limit, fail. Always have fallback UI.

## Skills for Build Phase

| Skill | When |
|-------|------|
| `/frontend-design` | Building the AI result display and chat UI |
| `/shadcn-ui` | Component setup |
| `/deep-research` | Comparing AI SDKs and vector DB options |
