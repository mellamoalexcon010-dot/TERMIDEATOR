# Dev Quality Skills — obra/superpowers

**Instalar:** `npx skills add obra/superpowers`
**Skills.sh:** https://skills.sh/obra/superpowers
**Total installs del paquete:** 500k+

Este building block documenta los skills de calidad de desarrollo que entran en el Build Order y el CLAUDE.md del target project.

---

## Los 10 Skills Clave

### 1. `subagent-driven-development` — 46.5k installs
**Qué hace:** Enseña a Claude Code a orquestar múltiples sub-agentes para tareas complejas en paralelo.

**Por qué importa para TERMIDEATOR:** Complementa directamente nuestro `agent-teams.md`. En vez de que Claude Code trabaje linealmente, despacha sub-agentes simultáneos para diferentes partes del build.

**Cuándo activar:** En el CLAUDE.md del target project, para cualquier tarea que involucre más de 3 archivos simultáneos.

```
Uso: "Use subagent-driven-development to implement the auth + payments flow in parallel"
```

---

### 2. `systematic-debugging` — 64.2k installs
**Qué hace:** Claude Code debuggea con método científico: hipótesis → test → conclusión. No adivina.

**Por qué importa:** Sin este skill, Claude Code modifica código al azar cuando algo no funciona. Con el skill, hace diagnóstico estructurado.

**Cuándo activar:** En el CLAUDE.md del target project como regla default. Activar explícitamente cuando hay un bug difícil.

```
Uso: "Use systematic-debugging to find why the Stripe webhook isn't firing"
```

**Framework que aplica:**
1. Reproduce el bug de forma consistente
2. Identifica el último estado conocido donde funcionaba
3. Lista hipótesis de mayor a menor probabilidad
4. Testea una hipótesis a la vez
5. Documenta qué aprendió

---

### 3. `verification-before-completion` — 44.6k installs
**Qué hace:** Antes de marcar cualquier tarea como completa, verifica que funciona correctamente.

**Por qué importa para el Build Order:** TERMIDEATOR genera un Build Order con steps. Este skill asegura que Claude Code NO avanza al siguiente step hasta que el anterior esté verificado.

**Cuándo activar:** En el CLAUDE.md del target project como regla obligatoria.

```
Regla en CLAUDE.md: "Before marking any step complete, run verification-before-completion"
```

**Checklist que aplica:**
- ¿El código compila sin errores?
- ¿Los tests pasan?
- ¿La feature funciona en el navegador?
- ¿Los edge cases están cubiertos?
- ¿No hay console.log olvidados?

---

### 4. `test-driven-development` — 54.9k installs
**Qué hace:** Implementa TDD: escribe el test primero, luego el código que lo hace pasar.

**Por qué importa:** Los blueprints de TERMIDEATOR incluyen Section 13 (Testing Strategy). Este skill ejecuta esa sección correctamente.

**Cuándo activar:** Para cualquier feature crítica: auth, payments, API endpoints.

```
Uso: "Use test-driven-development to implement the subscription upgrade flow"
```

---

### 5. `dispatching-parallel-agents` — 41.5k installs
**Qué hace:** Técnica avanzada para despachar agentes en paralelo de forma eficiente.

**Por qué importa:** Complementa `subagent-driven-development` para builds más complejos. Ideal para el Build Order cuando hay múltiples features independientes.

```
Uso: "Use dispatching-parallel-agents to build the dashboard and onboarding simultaneously"
```

---

### 6. `requesting-code-review` — 54.1k installs
**Qué hace:** Estructura cómo pedir y dar code reviews de forma efectiva.

**Cuándo activar:** Antes de cada deploy. Claude Code hace auto-review usando este skill.

```
Uso: "Use requesting-code-review on the payment integration before deploying"
```

---

### 7. `finishing-a-development-branch` — 39.2k installs
**Qué hace:** Checklist completo para cerrar un branch antes de hacer merge.

**Por qué importa para TERMIDEATOR:** Cada step del Build Order termina con un branch. Este skill asegura que el branch esté limpio antes de avanzar.

**Checklist que aplica:**
- Tests pasando
- Tipos TypeScript correctos (sin `any`)
- Sin `console.log` ni código comentado
- PR description completa
- Changelog actualizado

---

### 8. `using-git-worktrees` — 41.4k installs
**Qué hace:** Usa git worktrees para trabajar en múltiples branches en paralelo sin hacer stash.

**Cuándo activar:** Cuando el Build Order tiene 2+ features independientes que pueden construirse en paralelo.

---

### 9. `writing-plans` — 63.3k installs
**Qué hace:** Antes de ejecutar, escribe un plan detallado. Claude Code no toca código hasta que el plan está aprobado.

**Por qué importa:** Complementa el flujo de TERMIDEATOR. El blueprint es el plan macro. Este skill genera el plan micro para cada feature.

```
Uso: "Use writing-plans before implementing the marketplace two-sided flow"
```

---

### 10. `brainstorming` — 111.4k installs
**Qué hace:** Genera ideas estructuradas antes de tomar decisiones técnicas.

**Cuándo activar:** Phase 2 cuando el usuario está validando ideas, o cuando hay una decisión de arquitectura difícil.

---

## Dónde Entra Cada Skill en TERMIDEATOR

| Skill | Dónde Entra | Cuándo |
|-------|-------------|--------|
| `subagent-driven-development` | CLAUDE.md del target project | Default siempre |
| `systematic-debugging` | CLAUDE.md del target project | Default siempre |
| `verification-before-completion` | CLAUDE.md + Build Order | Cada step |
| `test-driven-development` | Section 13 + Build Order | Features críticas |
| `dispatching-parallel-agents` | Build Order pasos independientes | Build complejo |
| `requesting-code-review` | Build Order pre-deploy | Antes de cada deploy |
| `finishing-a-development-branch` | Build Order cierre de branch | Fin de cada feature |
| `writing-plans` | Build Order inicio de feature | Antes de código |
| `brainstorming` | Phase 2 + decisiones difíciles | Cuando hay duda |

---

## Instalar

```bash
npx skills add obra/superpowers

# O individuales
npx skills add obra/superpowers/subagent-driven-development
npx skills add obra/superpowers/systematic-debugging
npx skills add obra/superpowers/verification-before-completion
npx skills add obra/superpowers/test-driven-development
npx skills add obra/superpowers/dispatching-parallel-agents
```

---

## Lo que va en el CLAUDE.md del Target Project

```markdown
### Dev Quality Rules (obra/superpowers)
Install: `npx skills add obra/superpowers`

- Before any task > 3 files: use subagent-driven-development
- When a bug appears: use systematic-debugging (no guessing)
- Before marking step complete: run verification-before-completion
- For critical features (auth, payments, API): use test-driven-development
- Before every deploy: use requesting-code-review
- Before closing any branch: use finishing-a-development-branch
```
