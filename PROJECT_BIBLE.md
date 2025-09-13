# 📖 Evolution-2.2 Project Bible (Final Edition)

This Bible governs the full lifecycle of **Evolution-2.2**, the official build of the Evolution project. It consolidates and supersedes all previous versions (2.0, 2.1). All contributors, agents, and maintainers must adhere to this document. **Non‑negotiables must be strictly observed.**

---

## 🚀 Project Overview

**Stack:**

* **Framework:** Next.js 15 (App Router, TypeScript)
* **Styling:** Tailwind CSS v4 + shadcn/ui
* **UI Components:** Modular, theme-driven, reusable
* **Auth:** Auth0 integration (with secure `.env.local`, `.env.example` placeholders)
* **Fonts:** IBM Plex Sans (body) + Bw Gradual (headings)
* **Brand Palette:** Black / Gold / Gray
* **Hosting/CI/CD:** Vercel (account: `baddeley0-2132`)
* **Testing:** Jest + React Testing Library
* **Accessibility:** WCAG-compliant, Lighthouse score >90
* **SEO/Meta:** Dynamic metadata, OG & Twitter support, favicon & social images

**Repo:** [Badders80/evolution-2.2](https://github.com/Badders80/evolution-2.2)

**Deployment:** [Vercel Project](https://vercel.com/baddeley0-2132s-projects/evolution-2.2)

* `main` → Production
* PRs → Preview builds

---

## 🔑 Core Requirements

1. **Strict adherence to this Bible.** No shortcuts, no skipping stages.
2. **Commit hygiene.** Each stage must be committed with a clear, descriptive message.
3. **Security.** No secrets are ever committed. `.env.local` stays private. `.env.example` contains placeholders only.
4. **Consistency.** Use the Section layout wrapper, shared components, and brand tokens everywhere.

---

## 📂 Project Stages

### Stage 1: Repo Initialization ✅

* Scaffolded with `create-next-app@latest` using:

  ```bash
  npx create-next-app@latest evolution-2-2 --typescript --tailwind --eslint --app --src-dir --use-npm --import-alias "@/*"
  ```
* Repo linked to GitHub (`evolution-2.2`).
* Production deploy set up on Vercel.
* Status: **Complete.**

### Stage 2: Design System

* Install and configure **shadcn/ui**.
* Extend Tailwind config with brand palette (Black / Gold / Gray).
* Integrate fonts: IBM Plex Sans + Bw Gradual.
* Build base components: `Button`, `Header`, `Footer`, `Section` wrapper.
* Apply brand theme globally (`globals.css`, layout.tsx).

### Stage 3: Auth System

* Install and configure **Auth0** using NextAuth.
* Setup `/api/auth/[...nextauth]/route.ts`.
* Configure `.env.example` with:

  ```env
  AUTH0_SECRET=your-secret-here
  AUTH0_BASE_URL=http://localhost:3000
  AUTH0_ISSUER_BASE_URL=https://your-tenant-region.auth0.com
  AUTH0_CLIENT_ID=your-client-id
  AUTH0_CLIENT_SECRET=your-client-secret
  ```
* Protect **My Stables** route with `useSession()`.
* Ensure login/logout works locally and in Vercel.

### Stage 4: Feature Buildout

* Implement planned pages with Section wrapper:

  * Home (`/`)
  * About Us (`/about`)
  * Tokinvest (`/tokinvest`)
  * News (`/news`)
  * Events (`/events`)
  * Contact (`/contact`)
  * My Stables (gated, `/my-stables`)
* Footer: include X, Instagram, LinkedIn links + icons.
* Place assets (logos, favicon, OG images) in `/public/assets`.

### Stage 5: SEO & Metadata

* Configure `app/layout.tsx` with dynamic metadata.
* Add OG and Twitter image support.
* Add favicon + social preview images.

### Stage 6: Testing & Quality

* Install Jest + React Testing Library.
* Write tests for:

  * Buttons & key UI components
  * Auth flows (login/logout)
* Add branded error page (`/error`) and not-found page (`/not-found`).
* Run Lighthouse audit, ensure >90 in all categories.
* Accessibility check: ensure WCAG compliance.

### Stage 7: Final Verification

* Verify all pages load correctly in production.
* Confirm Auth0 works in production (Vercel env vars set).
* Confirm SEO metadata and OG images render on social previews.
* Review commit history for clean stage-based commits.

---

## ✅ Non-Negotiables

* **Bible-first.** All contributors must follow this document exactly.
* **Env hygiene.** `.env.local` private, `.env.example` public with placeholders.
* **No secrets in repo.** Ever.
* **Commit discipline.** Every stage = one clean commit.
* **Accessibility.** WCAG AA minimum.
* **Performance.** Lighthouse >90 target.

---

## 🏁 Closing Note

Evolution-2.2 is the clean, consolidated build — a disciplined restart after 2.0/2.1. With this Bible, the project moves forward without ambiguity. Every contributor and agent must treat this as the **single source of truth**.

✨ *Built with discipline, designed for scale.*
