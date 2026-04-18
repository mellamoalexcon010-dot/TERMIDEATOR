# Phase 2: Archetype-Specific Deep Dive

After classifying the project in Phase 1, use the matching section below. Ask 3-5 questions — adapt based on what the user already told you. Skip questions they've already answered.

---

## SaaS Web App

### Q1: Core Data Model
"What's the main thing users create or manage in your app? (e.g., projects, invoices, tasks, courses)"

### Q2: Auth & Users
"Do users need accounts? Teams/organizations? Role-based permissions (admin, member, viewer)?"

### Q3: Payments
"Is this monetized? Free, freemium, paid subscriptions, one-time purchase, or usage-based?"

### Q4: Real-Time
"Does anything need to update in real-time? (chat, notifications, live collaboration, dashboards)"

### Q5: Integrations
"Any third-party integrations? (email sending, calendar, Stripe, Slack, external APIs)"

**Building blocks to load based on answers:**
- If auth needed → `knowledge/building-blocks/auth-patterns.md`
- If payments → load Stripe patterns from archetype
- If real-time → `knowledge/building-blocks/state-management.md`
- Always load → `knowledge/building-blocks/database-patterns.md`

---

## Marketing Site

### Q1: Pages
"How many pages? Just a single landing page, or multiple pages (about, pricing, features, blog)?"

### Q2: Content Management
"Will you update content frequently? Need a CMS, or is static content fine?"

### Q3: Lead Capture
"Do you need forms? (contact, newsletter signup, waitlist, demo request)"

### Q4: SEO Priority
"How important is SEO? Need to rank for specific keywords?"

### Q5: Multilingual
"Single language or multilingual?"

**Building blocks to load:**
- If CMS needed → `knowledge/building-blocks/frontend-stacks.md` (Astro/Next.js comparison)
- If SEO priority → note `/seo-audit` skill for build phase
- Always load → `knowledge/building-blocks/deployment-patterns.md`

---

## Mobile App

### Q1: Platforms
"iOS only, Android only, or both?"

### Q2: Framework
"Any preference? React Native, Flutter, or native (Swift/Kotlin)?"

### Q3: Offline
"Does the app need to work offline? How critical is offline access?"

### Q4: Device Features
"Do you need access to camera, GPS, Bluetooth, push notifications, or other device features?"

### Q5: Backend
"Does this connect to an existing API, or do we need to design the backend too?"

**Building blocks to load:**
- If needs backend → `knowledge/building-blocks/api-design-patterns.md`
- Always load → `knowledge/building-blocks/auth-patterns.md` (mobile auth patterns)
- If offline → `knowledge/building-blocks/state-management.md`

---

## API / Backend Service

### Q1: API Style
"REST, GraphQL, or tRPC? Any preference?"

### Q2: Consumers
"Who consumes this API? Your own frontend, mobile app, third-party developers, or all of the above?"

### Q3: Auth Method
"How do consumers authenticate? API keys, JWT tokens, OAuth, or session-based?"

### Q4: Background Work
"Are there background jobs? (email sending, file processing, scheduled tasks, webhooks)"

### Q5: Scale & Performance
"Expected request volume? Any caching or rate limiting needs?"

**Building blocks to load:**
- Always → `knowledge/building-blocks/api-design-patterns.md`
- Always → `knowledge/building-blocks/database-patterns.md`
- If background jobs → `knowledge/building-blocks/deployment-patterns.md`
- If auth → `knowledge/building-blocks/auth-patterns.md`

---

## Internal Tool

### Q1: Data Source
"What data does this tool work with? Existing database, spreadsheets, external APIs?"

### Q2: User Count
"How many people will use this? Just you, a small team, or a whole department?"

### Q3: Core Actions
"What do users mainly do? View dashboards, fill forms, approve workflows, manage records?"

### Q4: Access Control
"Does everyone see everything, or do you need roles (admin, editor, viewer)?"

### Q5: Reporting
"Do you need exports (CSV, PDF) or reporting/analytics features?"

**Building blocks to load:**
- If existing database → `knowledge/building-blocks/database-patterns.md`
- If roles → `knowledge/building-blocks/auth-patterns.md`
- Always → `knowledge/building-blocks/frontend-stacks.md`

---

## Content Platform

### Q1: Content Type
"What kind of content? Blog posts, documentation, courses, user-generated content, multimedia?"

### Q2: Content Source
"Who creates content? Editorial team, users, or both?"

### Q3: Discovery
"How do users find content? Search, categories, recommendations, feeds?"

### Q4: Social Features
"Do you need comments, likes, sharing, user profiles, or following?"

### Q5: Monetization
"How is this monetized? Ads, subscriptions, gated content, sponsorships, or free?"

**Building blocks to load:**
- If user-generated → `knowledge/building-blocks/auth-patterns.md`
- If search → `knowledge/building-blocks/database-patterns.md` (full-text search)
- If monetization → load payment patterns
- Always → `knowledge/building-blocks/frontend-stacks.md`

---

## Marketplace / Platform

### Q1: Sides
"Who are the two sides of your marketplace? (e.g., buyers + sellers, clients + freelancers, renters + hosts) Which side is harder to acquire?"

### Q2: Transaction Type
"What's being exchanged? Physical products, digital products, services, time, access? Is it one-time or recurring?"

### Q3: Fee Model
"How does the platform make money? Percentage of each transaction? Seller subscription? Buyer premium? Listing fees?"

### Q4: Trust & Safety
"What's the biggest trust problem? (e.g., quality of service, fake listings, no-shows, payment disputes) How do established competitors solve it?"

### Q5: Cold Start Strategy
"Which side do you acquire first — supply or demand? How will you get the first 10 sellers/providers to join before any buyers exist?"

**Building blocks to load:**
- Always → `knowledge/building-blocks/auth-patterns.md` (multi-role auth)
- Always → `knowledge/building-blocks/database-patterns.md`
- For payments → Stripe Connect details in archetype file

---

## AI-Powered Product

### Q1: Core AI Action
"What's the main thing the AI does for the user? Generate text, analyze data, answer questions, automate a task, create media — what specifically?"

### Q2: Data Input
"What does the user give the AI to work with? Free text, uploaded files (PDF/CSV/image), pasted content, form inputs, data from an integration?"

### Q3: Output Format
"What does the AI produce? Text response, structured data, code, a document, an image, a summary — what format does the user receive?"

### Q4: Usage Pattern
"Is this used once for a big task, or many times per day for small tasks? Real-time interaction (chat) or batch processing (upload → wait → download)?"

### Q5: Model & Cost
"Any LLM preference (Claude, GPT-4, open source)? Do you have a cost-per-user ceiling in mind for your pricing to be profitable?"

**Building blocks to load:**
- Always → `knowledge/building-blocks/auth-patterns.md`
- If RAG/documents → note pgvector setup in archetype file
- If usage-based billing → Stripe Meter docs

