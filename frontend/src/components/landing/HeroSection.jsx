import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/1b50ded6-5f6b-43ec-bb6e-1400db92ec24/images/2e505fba189137fd9c570f2ce59e906eb741c9704edbc47a95a8902ce38dc051.png";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background image with mask */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#0055FF 1px, transparent 1px), linear-gradient(90deg, #0055FF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#0055FF] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 font-['Outfit']">
              AI-Powered ERP Analytics
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-semibold text-slate-900 font-['Outfit'] leading-[1.05]"
          >
            Turn plain English into{" "}
            <span className="text-[#0055FF]">ERP reports</span>{" "}
            in seconds.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl font-['Manrope']"
          >
            Connect your SYSPRO, Acumatica, Sage, or Epicor database. Ask questions in natural language. Get instant charts, dashboards, and anomaly alerts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              data-testid="hero-waitlist-btn"
              onClick={() => scrollTo("#waitlist")}
              className="group bg-[#0055FF] text-white hover:bg-[#0044CC] px-7 py-3.5 rounded-md font-medium transition-all flex items-center gap-2 text-sm shadow-lg shadow-blue-500/20"
            >
              Join the Waitlist
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              data-testid="hero-demo-btn"
              onClick={() => scrollTo("#features")}
              className="group bg-transparent text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 px-7 py-3.5 rounded-md font-medium transition-all flex items-center gap-2 text-sm"
            >
              <Play size={14} className="text-[#0055FF]" />
              See How It Works
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 flex gap-12"
          >
            {[
              { value: "$500-2K", label: "Saved per report" },
              { value: "< 30s", label: "Report generation" },
              { value: "4+", label: "ERPs supported" },
            ].map((stat) => (
              <div key={stat.label} data-testid={`hero-stat-${stat.label.replace(/\s/g, '-').toLowerCase()}`}>
                <div className="text-2xl font-semibold text-slate-900 font-['Outfit']">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Demo Preview Card */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[440px]"
        >
          <div className="bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-200/50 overflow-hidden">
            {/* Terminal header */}
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-[10px] text-slate-400 ml-2 font-mono">repnet-ai-copilot</span>
            </div>
            {/* Chat simulation */}
            <div className="p-5 space-y-4" data-testid="hero-demo-preview">
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-slate-500">You</span>
                </div>
                <div className="bg-slate-50 rounded-lg px-4 py-2.5 text-sm text-slate-700 border border-slate-100">
                  Show me total revenue by product category for Q4 2024
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#0055FF] flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] text-white font-bold">AI</span>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="bg-blue-50/50 rounded-lg px-4 py-2.5 text-sm text-slate-600 border border-blue-100/50">
                    <p className="text-xs text-blue-500 font-mono mb-2">Generated SQL:</p>
                    <code className="text-[11px] text-slate-500 font-mono leading-relaxed block">
                      SELECT category, SUM(amount)<br />
                      FROM sales WHERE quarter = 'Q4'<br />
                      GROUP BY category ORDER BY 2 DESC
                    </code>
                  </div>
                  {/* Mini chart */}
                  <div className="bg-white rounded-lg border border-slate-100 p-3">
                    <div className="flex items-end gap-1.5 h-16">
                      {[75, 60, 90, 45, 80, 55, 70].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                          className="flex-1 bg-[#0055FF] rounded-sm opacity-80"
                          style={{ minHeight: 4 }}
                        />
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">Revenue by Category - Q4 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
