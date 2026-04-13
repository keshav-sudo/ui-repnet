import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Code2, Server, Shield, Brain } from "lucide-react";

const topics = [
  {
    id: "overview",
    icon: FileText,
    label: "Executive Summary",
    content: {
      title: "AI Copilot for SYSPRO ERP",
      body: `RepNet is an AI-powered SaaS platform that enables non-technical ERP users to generate complex database reports using natural language. Instead of hiring report writers at $500-2,000 per report, teams can instantly query their ERP data through a conversational interface.

The platform connects to SQL Server and Oracle databases used by SYSPRO, Acumatica, Sage, and Epicor ERPs. It uses advanced language models to translate plain English queries into optimized SQL, automatically visualize results as interactive charts, and organize them into shareable dashboards.

Phase 2 introduces anomaly detection that monitors key metrics 24/7 and automatically creates workflow tasks when deviations are detected, enabling proactive business management.`,
      code: null,
    },
  },
  {
    id: "tech-stack",
    icon: Code2,
    label: "Tech Stack",
    content: {
      title: "Recommended Technology Stack",
      body: "Carefully selected for enterprise reliability, developer velocity, and cost efficiency.",
      code: `// Frontend
Next.js 14 (App Router) + Tailwind CSS + shadcn/ui
Recharts for visualization | React-Grid-Layout for dashboards

// Backend
FastAPI (Python) + SQLAlchemy
Redis for query caching | Celery for async jobs

// Database
PostgreSQL (primary) + Redis (cache + sessions)

// AI Layer
GPT-4o / Claude Sonnet  → NL to SQL (complex reasoning)
GPT-4o-mini             → Chart suggestions (lightweight)
Claude Sonnet           → Anomaly detection (analysis)
GPT-4o-mini             → Report summarization

// Auth & Hosting
NextAuth.js + Vercel + AWS RDS
Est. cost: $150/mo (100 users) → $600/mo (1000 users)`,
    },
  },
  {
    id: "api",
    icon: Server,
    label: "API Endpoints",
    content: {
      title: "Core API Architecture",
      body: "RESTful API with JWT authentication and tenant-scoped data access.",
      code: `# Core Endpoints (Phase 1 MVP)

POST /api/auth/login          # JWT authentication
POST /api/auth/register       # Tenant registration

POST /api/query/generate      # NL → SQL generation
POST /api/query/execute       # Run validated SQL
GET  /api/query/history       # User query history

POST /api/reports/save        # Save report + metadata
GET  /api/reports/:id         # Fetch report by ID
POST /api/reports/:id/share   # Generate share link

POST /api/charts/suggest      # AI chart recommendation
POST /api/charts/render       # Generate chart config

GET  /api/dashboards          # List user dashboards
POST /api/dashboards          # Create dashboard
PUT  /api/dashboards/:id      # Update layout (widgets)
POST /api/dashboards/:id/pin  # Pin report to dashboard

# Phase 2
POST /api/anomalies/configure # Set detection rules
GET  /api/anomalies/alerts    # Fetch anomaly alerts
POST /api/tasks/create        # Create workflow task
GET  /api/tasks               # List team tasks`,
    },
  },
  {
    id: "security",
    icon: Shield,
    label: "Security Model",
    content: {
      title: "Enterprise Security Architecture",
      body: "Multi-layered security designed for enterprise compliance requirements.",
      code: `# Security Implementation

1. ERP Credentials → AES-256 encryption at rest
   - Stored in isolated vault (AWS Secrets Manager)
   - Decrypted only at query execution time

2. SQL Injection Prevention
   - LLM output parsed through AST validator
   - Whitelist of allowed SQL operations (SELECT only)
   - Table/column name validation against schema

3. Multi-Tenant Isolation
   - Row-level security via tenant_id
   - JWT tokens scoped to tenant context
   - Database connection pooling per tenant

4. Rate Limiting
   - 100 queries/hour per user (configurable)
   - Token-based throttling for AI calls
   - DDoS protection via Cloudflare

5. Audit Trail
   - Every query logged with user, timestamp, SQL
   - Immutable audit log (append-only)
   - 90-day retention policy`,
    },
  },
  {
    id: "ai-prompts",
    icon: Brain,
    label: "AI Architecture",
    content: {
      title: "Prompt Engineering & AI Pipeline",
      body: "Each AI feature uses optimized prompts with schema injection and caching.",
      code: `# NL → SQL Prompt Architecture

System Prompt (cached per tenant):
"""
You are a SQL expert for {erp_type} ERP systems.
Available tables and columns:
{schema_context}

Rules:
- Generate SELECT queries only
- Use exact table/column names from schema
- Include WHERE clauses for tenant isolation
- Optimize for {db_type} (SQL Server/Oracle)
"""

User Prompt:
"""
{user_natural_language_query}
"""

# Token Budget: ~2000 input + ~500 output
# Schema caching: Hash tenant schema, reuse for 24hrs
# Cost: ~$0.03 per query (GPT-4o)

# Error Recovery Pipeline:
1. Generate SQL → Validate against schema
2. If invalid → Retry with error context (max 2)
3. If still fails → Return friendly error message
4. Log all attempts for model fine-tuning`,
    },
  },
];

export default function DocsViewer() {
  const [activeId, setActiveId] = useState("overview");
  const active = topics.find((t) => t.id === activeId);

  return (
    <section id="documentation" data-testid="docs-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 font-['Outfit']">
            Documentation
          </span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-slate-900 font-['Outfit'] mt-3">
            Deep technical overview
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
        >
          <div className="flex flex-col md:flex-row min-h-[520px]">
            {/* Sidebar */}
            <div className="md:w-60 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/50 p-3" data-testid="docs-sidebar">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  data-testid={`docs-topic-${topic.id}`}
                  onClick={() => setActiveId(topic.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                    activeId === topic.id
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                      : "text-slate-500 hover:text-slate-700 hover:bg-white/60"
                  }`}
                >
                  <topic.icon size={16} className={activeId === topic.id ? "text-[#0055FF]" : "text-slate-400"} />
                  {topic.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 overflow-auto" data-testid="docs-content-pane">
              {active && (
                <div>
                  <h3 className="text-xl font-medium text-slate-900 font-['Outfit'] mb-3">
                    {active.content.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line mb-5">
                    {active.content.body}
                  </p>
                  {active.content.code && (
                    <div className="bg-[#0F172A] rounded-lg p-5 overflow-x-auto">
                      <pre className="text-[12px] leading-relaxed text-slate-300 font-mono whitespace-pre">
                        {active.content.code}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
