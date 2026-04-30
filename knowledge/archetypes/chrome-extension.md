# Archetype: Chrome Extension / Browser Extension

## When to Use
El usuario quiere construir una extensión para Chrome, Firefox, o Edge. Keywords: extensión, plugin del browser, popup, content script, background worker, injección en páginas web.

## Stack Recomendado
| Layer | Tech | Por qué |
|-------|------|---------|
| Framework | React + Vite + CRXJS | Hot reload en desarrollo, build optimizado |
| Language | TypeScript | Manifest v3 requiere tipos explícitos |
| Styling | Tailwind CSS | Funciona perfecto en popups |
| Storage | chrome.storage.sync / local | Nativo del browser |
| Auth | Supabase Auth | JWT tokens en background service worker |
| Backend (si aplica) | Next.js API routes | Para features que necesitan server |
| Payments | Stripe (via web) | Las extensiones no pueden hacer pagos directos |
| Build | WXT framework | Abstrae manifest v3 complexity |

## Required Stack Skills
```bash
npx skills add vercel-labs/agent-skills/vercel-react-best-practices
npx skills add wshobson/agents/typescript-advanced-types
npx skills add obra/superpowers
```

## Estructura Específica
```
extension/
├── manifest.json          ← v3 obligatorio para nuevas extensiones
├── src/
│   ├── popup/             ← UI que aparece al clickear el icono
│   ├── content/           ← Scripts inyectados en páginas web
│   ├── background/        ← Service worker (no DOM access)
│   ├── options/           ← Página de configuración
│   └── sidepanel/         ← Side panel (Chrome 114+)
```

## Manifest v3 Rules (No Negociables)
- Service workers en vez de background pages
- No código remoto (no eval, no remote scripts)
- Permisos declarados explícitamente
- Content Security Policy estricta
- host_permissions separadas de permissions

## Monetization Models
| Modelo | Implementación |
|--------|----------------|
| Freemium | Free tier en extensión, Pro via Stripe en web |
| One-time | Pago único via Gumroad/Stripe, unlock con licencia |
| Subscription | Stripe via landing page externa, check token en extensión |
| Enterprise | Licencias para equipos, billing via invoices |

**Importante:** Chrome Web Store toma 30% de compras in-store. La mayoría usa Stripe directamente via landing page + license key verification.

## Build Order Específico
1. Setup con WXT framework + React + TypeScript
2. Manifest v3 con permisos mínimos necesarios
3. Popup UI (React)
4. Content script para inyección en páginas
5. Background service worker
6. chrome.storage para persistencia
7. Auth flow (si necesario)
8. Stripe payments via landing page externa
9. Chrome Web Store listing

## Riesgos Específicos
- **Chrome Web Store rejection** → revisar políticas ANTES de build
- **Manifest v3 breaking changes** → APIs cambian, mantener actualizado
- **Content script conflicts** → otras extensiones pueden interferir
- **Performance** → el popup debe cargar en < 300ms o el usuario lo cierra
- **Privacy policy** → obligatoria para publicar en Chrome Web Store
- **Update delays** → Chrome Web Store review toma 1-7 días

## Non-Negotiables
- Solicitar solo los permisos estrictamente necesarios
- Privacy policy antes de publicar
- Popup carga en < 300ms
- Funciona offline (si aplica)
- Testar en Chrome + Firefox + Edge
- Icono en todos los tamaños: 16, 32, 48, 128px
