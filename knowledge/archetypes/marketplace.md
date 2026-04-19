# Archetype: Marketplace / Platform

## What Makes Marketplaces Different
Marketplaces are dual-sided: you have **suppliers** (sellers, providers, creators) and **consumers** (buyers, clients, subscribers). Both sides must be acquired and retained. The core challenge is the cold-start problem — the marketplace has no value until both sides exist.

## Default Stack Recommendation

| Layer | Default | Alternative | When to Switch |
|-------|---------|-------------|----------------|
| Framework | Next.js 15 (App Router) | — | Never for this archetype |
| Language | TypeScript (strict) | — | Never |
| Styling | Tailwind CSS v4 + shadcn/ui | — | — |
| Database | Supabase (Postgres) | PlanetScale | Team knows MySQL |
| ORM | Prisma | Drizzle | Performance-critical |
| Auth | Clerk (multi-role) | NextAuth v5 | Budget-constrained |
| Payments | Stripe Connect | — | Never. Stripe Connect is THE standard for marketplace payments |
| Search | Algolia | Supabase Full-Text | Simple search needs |
| Storage | Supabase Storage + Cloudinary | — | Cloudinary for media-heavy |
| Maps | Google Maps API | Mapbox | Budget/style preference |
| Email | Resend + React Email | — | — |
| Hosting | Vercel | Railway | Need persistent servers |

## Stripe Connect Setup
This is the most critical technical decision for marketplaces.

**Connect account types:**
- **Standard** — Sellers manage their own Stripe account. Best for: freelance/service marketplaces
- **Express** — Stripe-hosted onboarding. Best for: most marketplaces. Recommended.
- **Custom** — Full control, white-labeled. Best for: enterprise, high-volume. Complex to implement.

**Payment flows:**
1. Buyer pays platform → Platform splits to seller (minus fee) → Instant or delayed payout
2. Escrow: Hold funds until service delivered → Release on confirmation
3. Subscription: Platform charges buyer recurring → Pays seller portion monthly

**Fee structures:**
- Platform takes X% per transaction (10-30% typical)
- Seller subscription + transaction fee hybrid
- Buyer service fee on top of seller price

## Directory Structure

```
src/
  app/
    (marketing)/
      page.tsx                    # Landing page (value prop for BOTH sides)
      how-it-works/page.tsx
      for-sellers/page.tsx        # Seller acquisition page
      pricing/page.tsx
    (buyer)/                      # Buyer-facing app
      dashboard/page.tsx
      browse/page.tsx             # Discovery / search
      browse/[category]/page.tsx
      listing/[id]/page.tsx       # Listing detail + booking/purchase
      orders/page.tsx
      messages/page.tsx
      layout.tsx
    (seller)/                     # Seller-facing app
      seller/dashboard/page.tsx
      seller/listings/page.tsx
      seller/listings/new/page.tsx
      seller/orders/page.tsx
      seller/payouts/page.tsx     # Stripe Connect payout management
      seller/analytics/page.tsx
      layout.tsx
    (shared)/
      messages/[conversationId]/page.tsx
      profile/[username]/page.tsx
      settings/page.tsx
    api/
      webhooks/stripe/route.ts    # Stripe Connect webhooks
      listings/route.ts
      orders/route.ts
      reviews/route.ts
      messages/route.ts
      search/route.ts
  components/
    ui/                           # shadcn primitives
    buyer/                        # Buyer-specific components
    seller/                       # Seller-specific components
    shared/                       # Listings cards, reviews, profiles
    search/                       # Search bar, filters, sort
  lib/
    supabase/
    stripe/
      connect.ts                  # Stripe Connect utilities
      payments.ts                 # Payment intent / checkout
    search/
      algolia.ts
    utils.ts
  types/
```

## Data Model

```sql
-- Users (unified — role determines buyer vs seller)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'buyer',  -- buyer, seller, both, admin
  stripe_customer_id TEXT,
  stripe_connect_account_id TEXT,  -- for sellers
  stripe_connect_onboarded BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Listings
CREATE TABLE listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  images TEXT[],  -- array of storage URLs
  status TEXT DEFAULT 'draft',  -- draft, active, paused, deleted
  location POINT,  -- for geo-based marketplaces
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders / Bookings
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id UUID REFERENCES users(id),
  seller_id UUID REFERENCES users(id),
  listing_id UUID REFERENCES listings(id),
  amount DECIMAL(10,2) NOT NULL,
  platform_fee DECIMAL(10,2) NOT NULL,
  seller_payout DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',  -- pending, paid, in_progress, completed, disputed, refunded
  stripe_payment_intent_id TEXT,
  stripe_transfer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id),
  reviewer_id UUID REFERENCES users(id),
  reviewed_id UUID REFERENCES users(id),
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id UUID REFERENCES users(id),
  seller_id UUID REFERENCES users(id),
  listing_id UUID REFERENCES listings(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES conversations(id),
  sender_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Critical User Flows

### Seller Onboarding (Stripe Connect)
1. User selects "Become a Seller"
2. Fill basic profile (name, bio, photo)
3. Click "Connect Stripe" → `stripe.accounts.create({ type: 'express' })`
4. Redirect to Stripe-hosted onboarding
5. Stripe redirects back → verify `charges_enabled` on account
6. Update `stripe_connect_onboarded = true`
7. Allow listing creation

### Buyer Purchase Flow
1. Buyer views listing → clicks "Buy" or "Book"
2. Create `PaymentIntent` with `transfer_data.destination` = seller's Stripe account
3. Stripe Checkout or custom payment form
4. On success → create `order` record
5. Trigger transfer to seller (immediate or after delivery)
6. Send confirmation emails to both parties

### Dispute Resolution
- Buyer opens dispute within X days of order completion
- Platform holds payout to seller
- Admin reviews evidence
- Resolution: release to seller OR refund to buyer

## Build Order

1. **Scaffolding + Auth** (4h) — Next.js + Clerk with buyer/seller roles
2. **Database + RLS** (3h) — Supabase schema with proper row-level security per role
3. **Seller Onboarding** (6h) — Stripe Connect Express, account creation, onboarding flow
4. **Listing CRUD** (5h) — Create, edit, delete listings with image upload
5. **Browse + Search** (5h) — Category browsing, Algolia search, filters, map view if geo
6. **Listing Detail Page** (3h) — Photos, description, seller profile, CTA
7. **Checkout Flow** (6h) — PaymentIntent creation, Stripe Checkout, order creation
8. **Order Management** (4h) — Buyer orders, seller orders, status updates
9. **Reviews System** (3h) — Post-completion review prompts, star ratings, display
10. **Messaging** (5h) — Buyer-seller conversations, Supabase Realtime
11. **Seller Dashboard** (4h) — Revenue, orders, payout history, listings management
12. **Payouts** (3h) — Stripe Connect payout management, instant vs standard
13. **Admin Panel** (4h) — Flag listings, manage disputes, user management
14. **Landing Page** (4h) — Dual-sided value prop, how it works, trust signals
15. **Email Notifications** (3h) — Transactional emails for all key events (Resend)
16. **Polish + Deploy** (4h) — Loading states, error handling, mobile responsive, Vercel

**Total estimated: ~66 hours solo developer**

## Trust & Safety Checklist
- [ ] ID verification option for sellers (Stripe Identity or Persona)
- [ ] Listing moderation queue for admin
- [ ] Report listing / report user flows
- [ ] Dispute resolution process defined
- [ ] Terms of Service + Seller Agreement pages
- [ ] Fraud detection signals (unusual order patterns)
- [ ] Escrow / payout delay for new sellers (first 7 days)

## Common Pitfalls
- **Don't let buyers and sellers message before a listing interaction.** Prevents off-platform payments.
- **Payout delays for new sellers.** Reduces fraud. Increase trust limits over time.
- **Double-sided reviews.** Both buyer and seller review each other. Creates accountability.
- **Never hardcode platform fee.** Store it in DB. You'll change it.
- **Webhook idempotency.** Stripe can send the same event twice. Always check if already processed.

## Skills for Build Phase

| Skill | When |
|-------|------|
| `/frontend-design` | Building the browse page and listing cards |
| `/shadcn-ui` | Component library setup |
| `/ui-ux-pro-max` | Search/filter UX design |
| `/seo-audit` | Listing pages need SEO (category + individual listing URLs) |

## Required Stack Skills

```bash
npx skills add vercel-labs/agent-skills/vercel-react-best-practices
npx skills add supabase/agent-skills/supabase-postgres-best-practices
npx skills add shadcn/ui/shadcn
npx skills add firecrawl/cli/firecrawl
npx skills add obra/superpowers
```
