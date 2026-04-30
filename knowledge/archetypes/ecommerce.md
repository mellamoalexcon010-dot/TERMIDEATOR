# Archetype: E-Commerce

## When to Use
El usuario quiere vender productos físicos o digitales online. Keywords: tienda, productos, carrito, checkout, inventario, Shopify, WooCommerce, pedidos, envíos.

## Stack Recomendado

| Layer | Opción A (Hosted) | Opción B (Custom) |
|-------|------------------|------------------|
| Frontend | Next.js + Shopify Storefront API | Next.js + custom |
| Cart/Checkout | Shopify | Stripe + custom cart |
| Products/Inventory | Shopify Admin | Supabase |
| Payments | Shopify Payments / Stripe | Stripe |
| Search | Shopify Search / Algolia | Algolia / Typesense |
| Email | Klaviyo (ecomm-specific) | Resend |
| Analytics | Google Analytics 4 + Meta Pixel | PostHog |

**Cuándo elegir Opción A:** Productos físicos, envíos, variantes, inventario complejo
**Cuándo elegir Opción B:** Productos digitales, SaaS + tienda, control total

## Required Stack Skills
```bash
npx skills add vercel-labs/agent-skills/vercel-react-best-practices
npx skills add vercel-labs/agent-skills/vercel-react-best-practices
npx skills add shadcn/ui/shadcn
npx skills add coreyhaines31/marketingskills/page-cro
npx skills add coreyhaines31/marketingskills/copywriting
npx skills add obra/superpowers
```

## Unit Economics Específicos
- **AOV** (Average Order Value): métrica principal
- **CAC** por canal (Meta Ads, Google Shopping, orgánico)
- **LTV** = AOV × frecuencia de compra × vida del cliente
- **Gross margin** = (precio - COGS - envío - fees) / precio
- **Cart abandonment rate** target: < 70% (industria: 75%)
- **Conversion rate** target: 2-4% (industria: 1.5-3%)

## Build Order Específico
1. Setup Next.js + Shopify/Stripe
2. Product catalog (PDP, PLP, search)
3. Cart + checkout flow
4. Payments + order confirmation
5. Inventory management
6. Email: order confirmation + abandoned cart
7. Admin dashboard (orders, inventory)
8. Analytics: GA4 + Meta Pixel + conversion tracking
9. SEO: product schemas, sitemap, hreflang

## Riesgos Específicos
- **Inventory sync failure** → mostrar stock incorrecto → overselling
- **Payment fraud** → Stripe Radar + address verification
- **Shipping cost miscalculation** → pérdida en cada orden
- **Cart abandonment** (75% industria) → email sequences son obligatorias
- **Mobile checkout** → 60%+ del tráfico es mobile, checkout debe funcionar perfectamente
- **Chargebacks** → política de devolución clara, comunicación rápida

## Monetization Models
| Modelo | Ejemplo | Cuándo |
|--------|---------|--------|
| Venta directa | Precio por producto | Siempre |
| Suscripción (replenishment) | Café mensual | Productos consumibles |
| Bundle / pack | 3x al precio de 2 | Aumentar AOV |
| Digital downloads | Cursos, templates | Margen 100% |
| Marketplace fee | % de ventas de terceros | Escalar sin inventario |

## Non-Negotiables
- Mobile-first checkout (no mobile = -60% conversión)
- SSL y trust signals visibles (candado, logos de pago)
- Política de devolución clara y visible
- Confirmación de orden por email inmediata
- Stripe Radar activado para fraud prevention
- Abandoned cart email en < 1 hora
