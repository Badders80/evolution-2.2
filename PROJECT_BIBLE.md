# 📖 Evolution-2.2 Project Bible (Final Edition)
#
## ✅ Stage Checklist
- [x] Repo Initialization
- [x] Vercel Production Deploy
- [ ] Design System
- [ ] Auth0 Integration
- [ ] Pages
- [ ] SEO & Metadata
- [ ] Testing & Quality
- [ ] Final QA

This Bible governs the full lifecycle of **Evolution-2.2**, the official build of the Evolution project. It consolidates and supersedes all previous versions (2.0, 2.1). All contributors, agents, and maintainers must adhere to this document. **Non-negotiables must be strictly observed.**

---

## 🚀 Project Overview

**Stack:**
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + shadcn/ui + Framer Motion
- **UI Components:** Modular, theme-driven, reusable, with `cn()` util (`clsx + tailwind-merge`)
- **Auth:** Auth0 integration (via `@auth0/nextjs-auth0@4.9.0`)
- **Fonts:** IBM Plex Sans (body) + Bw Gradual (headings)
- **Brand Palette:** Black / Gold / Gray / White
- **Hosting/CI/CD:** Vercel (account: `baddeley0-2132`)
- **Testing:** Jest + React Testing Library + axe-core/react (accessibility)
- **Accessibility:** WCAG AA compliant, Lighthouse score >90
- **SEO/Meta:** Dynamic metadata, OG & Twitter support, favicon & social images

**Repo:** [Badders80/evolution-2.2](https://github.com/Badders80/evolution-2.2)

**Deployment:** [Vercel Project](https://vercel.com/baddeley0-2132s-projects/evolution-2.2)
- `main` → Production
- PRs → Preview builds

---

## 🔑 Core Requirements

1. **Strict adherence to this Bible.** No shortcuts, no skipping stages.
2. **Commit hygiene.** Each stage must be committed with a clear, descriptive message.
3. **Security.** No secrets are ever committed. `.env.local` stays private. `.env.example` contains placeholders only.
4. **Consistency.** Use the Section layout wrapper, shared components, and brand tokens everywhere.
5. **Tooling hygiene.** Use Husky + lint-staged to enforce linting/prettier on every commit.

---

## 📂 Project Stages

### Stage 1: Repo Initialization ✅
- Scaffolded with `create-next-app@latest`.
- Repo linked to GitHub (`evolution-2.2`).
- Production deploy set up on Vercel.
- Status: **Complete.**

### Stage 2: Design System
- Install and configure **shadcn/ui**.
- Add `cn()` util using `clsx` and `tailwind-merge`.

# 📖 Evolution-2.2 Project Bible (Final Edition)

## ✅ Stage Checklist
- [x] Repo Initialization
- [x] Vercel Production Deploy
- [ ] Design System
- [ ] Auth0 Integration
- [ ] Pages
- [ ] SEO & Metadata
- [ ] Testing & Quality
- [ ] Final QA

This Bible governs the full lifecycle of **Evolution-2.2**, the official build of the Evolution project. It consolidates and supersedes all previous versions (2.0, 2.1). All contributors, agents, and maintainers must adhere to this document. **Non-negotiables must be strictly observed.**

---

## 🚀 Project Overview

**Stack:**
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + shadcn/ui + Framer Motion
- **UI Components:** Modular, theme-driven, reusable, with `cn()` util (`clsx + tailwind-merge`)
- **Auth:** Auth0 integration (via `@auth0/nextjs-auth0@4.9.0`)
- **Fonts:** IBM Plex Sans (body) + Bw Gradual (headings)
- **Brand Palette:** Black / Gold / Gray / White
- **Hosting/CI/CD:** Vercel (account: `baddeley0-2132`)
- **Testing:** Jest + React Testing Library + axe-core/react (accessibility)
- **Accessibility:** WCAG AA compliant, Lighthouse score >90
- **SEO/Meta:** Dynamic metadata, OG & Twitter support, favicon & social images

**Repo:** [Badders80/evolution-2.2](https://github.com/Badders80/evolution-2.2)

**Deployment:** [Vercel Project](https://evolution-2-2.vercel.app)
- `main` → Production
- PRs → Preview builds

---

## 🔑 Core Requirements

1. **Strict adherence to this Bible.** No shortcuts, no skipping stages.
2. **Commit hygiene.** Each stage must be committed with a clear, descriptive message.
3. **Security.** No secrets are ever committed. `.env.local` stays private. `.env.example` contains placeholders only.
4. **Consistency.** Use the Section layout wrapper, shared components, and brand tokens everywhere.
5. **Tooling hygiene.** Use Husky + lint-staged to enforce linting/prettier on every commit.

---

## 📂 Project Stages

### Stage 1: Repo Initialization ✅
- Scaffolded with `create-next-app@latest`.
- Repo linked to GitHub (`evolution-2.2`).
- Production deploy set up on Vercel.
- Status: **Complete.**

### Stage 2: Design System
- Install and configure **shadcn/ui**.
- Add `cn()` util using `clsx` and `tailwind-merge`.
- Extend Tailwind config with brand palette and fonts:
  ```ts
  fontFamily: {
    "bw-gradual": ["Bw Gradual", "sans-serif"],
    "ibm-plex": ["IBM Plex Sans", "sans-serif"],
  },
  colors: {
    gold: "#d4a964",
    gray: "#747474",
    background: "#000000",
    foreground: "#ffffff",
  }
  ```
- Integrate fonts: IBM Plex Sans + Bw Gradual.
- Build base components: `Button`, `Header`, `Footer` (with social links: Instagram @evostables, X @evostables, LinkedIn Alex Baddeley), `Section` wrapper.
- Apply brand theme globally (`globals.css`, layout.tsx).

### Stage 3: Auth System
Auth0 Setup: Use the official Auth0 × Vercel signup link to create the tenant and application. This ensures correct defaults for Next.js + Vercel integration.
  .env hygiene:
    - Always use `.env.example` for placeholders
    - Never commit secrets; `.env.local` is private
    - Example `.env.example`:
      ```env
      AUTH0_SECRET=your-secret-here
      AUTH0_BASE_URL=http://localhost:3000
      AUTH0_ISSUER_BASE_URL=https://your-tenant-region.auth0.com
      AUTH0_CLIENT_ID=your-client-id
      AUTH0_CLIENT_SECRET=your-client-secret
      ```
- Protect **My Stables** route with `withAuth` middleware (`/my-stables/:path*`).
- Use server-side token fetching for API calls.
- Ensure login/logout works locally and in Vercel.

### Stage 4: Feature Buildout
- Implement planned pages with Section wrapper:
  - Home (`/`)
  - About Us (`/about`)
  - Tokinvest (`/tokinvest`)
  - News (`/news`, with dynamic slugs)
  - Events (`/events`, with dynamic slugs)
  - Contact (`/contact`)
  - My Stables (gated, `/my-stables`)
- Footer: must include social links and icons for:
   - X (@evostables)
   - Instagram (@evostables)
   - LinkedIn (Alex Baddeley)
- Place assets (logos, favicon, OG images) in `/public/assets`.

### Stage 5: SEO & Metadata
- Configure `app/layout.tsx` with `generateMetadata()`.
- Add OG and Twitter image support.
- Add favicon + social preview images.
- Ensure per-page dynamic metadata (News + Events slugs).

### Stage 6: Testing & Quality
- Install Jest + React Testing Library + axe-core/react.
- Write tests for:
  - Buttons & key UI components
  - Auth flows (login/logout)
  - Accessibility tests (axe-core/react)
  - Branded error page (`/error`) and not-found page (`/not-found`)
  - Lighthouse audit: >90 in all categories

---

## 🏁 Final QA

- Run Lighthouse audit, ensure >90 in all categories
- Accessibility scan (WCAG AA)
- SEO checks (OG/Twitter images, dynamic metadata)
- Confirm all pages and Auth0 work in production

---