# RepNet - AI Copilot for SYSPRO ERP | Landing Page

## Original Problem Statement
Build a landing page / marketing site for "AI Copilot for SYSPRO ERP" — a SaaS web application that allows non-technical ERP users to generate reports using natural language, visualize them as charts, pin them to dashboards, and auto-detect anomalies. Target ERPs: SYSPRO, Acumatica, Sage, Epicor.

## User Personas
- **ERP Decision Makers**: CTOs, IT Directors evaluating the product
- **Non-Technical Users**: Business analysts, finance teams who will use the product
- **Potential Investors/Partners**: Reviewing product capabilities

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion + shadcn/ui components
- **Backend**: FastAPI (Python) + MongoDB (Motor async driver)
- **Design**: Swiss & High-Contrast archetype, white/blue color scheme, Outfit + Manrope fonts

## Core Requirements (Static)
1. Hero section with product demo preview
2. ERP partner logo strip (SYSPRO, Acumatica, Sage, Epicor)
3. Features bento grid (NL to SQL, Charts, Dashboard Builder, Anomaly Detection)
4. Architecture/How It Works section
5. Interactive Documentation Viewer (5 topics with code snippets)
6. Project Timeline/Roadmap (6 phases, 28 weeks)
7. Pricing table (Starter $99, Pro $299, Enterprise Custom)
8. Waitlist signup form (stored in MongoDB)
9. Contact form (stored in MongoDB)
10. Responsive footer with social links

## What's Been Implemented (2026-04-13)
- [x] Full landing page with all 10 sections
- [x] Backend APIs: /api/waitlist (POST, GET count), /api/contact (POST)
- [x] Crystal glass header with smooth scroll navigation
- [x] Hero section with animated demo preview card
- [x] Logo strip with marquee animation
- [x] Bento grid features with code/chart previews
- [x] Architecture diagram with data flow visualization
- [x] Interactive docs viewer with 5 topics (Overview, Tech Stack, API, Security, AI)
- [x] 6-phase project timeline
- [x] 3-tier pricing with highlighted Pro plan
- [x] Waitlist form with success state + duplicate detection
- [x] Contact form with success state
- [x] Mobile responsive with hamburger menu
- [x] Framer Motion animations throughout
- [x] All elements have data-testid attributes

## Testing Status
- All 18 tests passing (backend API + frontend UI + mobile responsive + E2E form submission)

## Prioritized Backlog
### P0 (Critical)
- None remaining for landing page MVP

### P1 (High)
- Email notifications for new waitlist signups
- Analytics tracking (Google Analytics / Plausible)
- SEO meta tags and Open Graph images
- Performance optimization (lazy loading images)

### P2 (Medium)
- Blog/content section
- Customer testimonial carousel
- FAQ accordion section
- Dark mode toggle
- Cookie consent banner

## Next Tasks
1. Add SEO meta tags and OG images for social sharing
2. Integrate email notifications for waitlist entries
3. Add analytics tracking
4. Create a blog section for content marketing
