# GENEVIEVE Dating — Public V1 Foundation

A polished public dating-platform foundation designed around:
- verified adults
- inclusive gender/orientation handling
- mutual-match messaging
- compatibility-first discovery
- safety-by-design
- privacy-by-design
- optional one-time paid membership plus optional subscription

## What works in this package
- Responsive landing page
- Inclusive onboarding UX
- Verification workflow UX
- Curated discovery demo
- Mutual-match UX
- Safety Centre
- Pricing UX
- Health API
- Neon/Postgres schema
- Matching-engine starter
- Security headers
- Production security and launch-gate documents

## What is intentionally NOT faked
This code does not pretend to verify a licence, process a payment or authenticate a real user without a configured external provider.
Those integrations require contracts, credentials, webhooks, legal/privacy review and production testing.

## Local run
1. Install Node.js 20+
2. Open this folder in a terminal
3. Run:
   npm install
   npm run dev
4. Open http://localhost:3000

## Vercel
- Create a GitHub repository and upload this folder.
- Import the repository into Vercel.
- Framework: Next.js
- Add DATABASE_URL from Neon.
- Keep identity/payment provider secrets out of GitHub.
- Run db/schema.sql against the Neon database after review.

## Pricing built into V1
- Free — A$0
- Verified Member — A$39.99 one-time
- GENEVIEVE Plus — A$12.99/month

Pricing is a launch recommendation, not a legal or market guarantee.

## Core policy
Safety features must stay available to all users regardless of payment status.


## Official logo integration
This version now includes your supplied official logo files:
- `/public/logos/ga-logo.png`
- `/public/logos/tree-roots-logo.png`
These are already wired into the app branding and footer areas.
## Logo status
This package now includes the uploaded official logo files provided in chat:
- GA logo integrated at `/public/logos/ga-logo.png`
- Tree with roots logo integrated at `/public/logos/tree-roots-logo.png`
- App icon created at `/app/icon.png` from the GA logo
