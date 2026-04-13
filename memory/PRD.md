# RepNet - AI Copilot for SYSPRO ERP | Landing Page

## Original Problem Statement
Build a landing page / marketing site for "AI Copilot for SYSPRO ERP" — a SaaS product allowing non-technical ERP users to generate reports using natural language. White/blue color scheme.

## User Personas
- **ERP Decision Makers**: CTOs, IT Directors evaluating the product
- **Non-Technical Users**: Business analysts, finance teams
- **Potential Investors/Partners**: Reviewing product capabilities

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion + shadcn/ui
- **Backend**: FastAPI (Python) + MongoDB (Motor async)
- **Design**: Swiss & High-Contrast, white/blue, Outfit + Manrope fonts

## What's Been Implemented

### V1 (2026-04-13) - MVP Landing Page
- [x] 10 sections: Hero, Logos, Features, Architecture, Docs, Timeline, Pricing, Waitlist, Contact, Footer
- [x] Backend APIs for waitlist & contact

### V2 (2026-04-13) - Interactive Upgrade
- [x] Typing animation in hero cycling through query examples
- [x] Scroll progress bar in header
- [x] Active section indicator with animated pill
- [x] Spotlight hover effects on feature cards
- [x] Animated gradient orbs & dot grid backgrounds
- [x] Parallax scrolling in hero
- [x] Animated counter stats
- [x] Monthly/Yearly pricing toggle
- [x] Social proof waitlist counter
- [x] Animated gradient border on Pro pricing card
- [x] All framer-motion entrance animations

### V3 (2026-04-13) - User-Facing Content Overhaul
- [x] **Replaced** technical timeline → "Why RepNet" benefits section (6 user-facing cards)
- [x] **Replaced** technical docs viewer → Product Showcase with REAL product screenshots (3 tabs: Ask a Question, View Analytics, Manage Connections)
- [x] **Replaced** technical architecture → "How It Works" 4 user-facing steps
- [x] Browser chrome frame around screenshots for premium feel
- [x] All content now user-facing (not pitch-deck/technical)

## Testing Status
- V3: 100% pass (Backend 7/7, Frontend 15/15)

## Backlog
### P1
- SEO meta tags and Open Graph images
- Email notifications for waitlist signups
- Analytics tracking (GA / Plausible)

### P2
- FAQ accordion section
- Customer testimonials
- Blog section
- Dark mode toggle
