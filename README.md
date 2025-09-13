## 🚀 Deployment

CI/CD via GitHub → Vercel (production = main, previews = PRs).

Framework preset: Next.js
Root directory: ./
Secrets in .env.local (never committed)
Example values are stored in .env.example

---

## 🌱 Environment Variables

⚠️ For Auth0 setup, use the official Vercel × Auth0 signup link when creating your Auth0 account.

# Evolution-2.2

A **Next.js 15 + Tailwind v4 + shadcn/ui** application with **Auth0 authentication**, modular components, and brand styling — built following the **Evolution-2.2 Project Bible**.

🚀 Live Deployment: [evolution-2-2.vercel.app](https://evolution-2-2.vercel.app)

---

## 📖 Project Bible

All requirements, stack decisions, and execution steps are documented in [PROJECT_BIBLE.md](./PROJECT_BIBLE.md).
This is the **single source of truth** — follow it strictly, no deviations.

---

## ⚡ Quick Start

```bash
# Clone the repo
git clone https://github.com/Badders80/evolution-2.2.git
cd evolution-2.2

# Install dependencies
npm install

# Run dev server
npm run dev
```

Visit http://localhost:3000

---

## 🚀 Deployment

CI/CD via GitHub → Vercel (production = main, previews = PRs).

Framework preset: Next.js.
Root directory: ./.
Secrets in .env.local (never committed).
Example values are stored in .env.example.

---

## 🔑 Environment Variables

Use .env.local for real secrets (never commit).
Use .env.example to share placeholders with the team.

⚠️ For Auth0 setup, use the official Vercel × Auth0 signup link when creating your Auth0 account.

Example:

AUTH0_SECRET=your-secret-here
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-tenant-region.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret

---

## 🤝 Contributing

Follow Conventional Commits (e.g., feat:, fix:, docs:).

Branch naming:

- feature/<name> for new features
- fix/<name> for bug fixes
- docs/<name> for documentation changes

Keep commits clean and scoped per stage (Repo init, Design System, Auth, etc.).

---

## ✅ Status

- Repo + Vercel setup
- Design system (shadcn/ui, colors, fonts)
- Auth0 integration
- Feature buildout (Home, About, Tokinvest, News, Events, Contact, My Stables gated area)
- SEO & metadata
- Testing + Lighthouse QA

---

---
