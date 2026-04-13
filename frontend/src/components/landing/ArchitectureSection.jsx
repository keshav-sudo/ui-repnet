import { motion } from "framer-motion";
import { Database, ShieldCheck, Zap, ArrowRight } from "lucide-react";

const ARCH_IMG = "https://static.prod-images.emergentagent.com/jobs/1b50ded6-5f6b-43ec-bb6e-1400db92ec24/images/75804f15bdc7f64f5f28511fff32b0f6c8db34ccbec3f7f6af3f4efb455ebeee.png";

const steps = [
  { icon: Database, label: "Connect ERP", desc: "Securely link your SQL Server or Oracle database with encrypted credentials." },
  { icon: Zap, label: "AI Processes", desc: "Our engine maps your schema, injects context into prompts, and generates optimized SQL." },
  { icon: ShieldCheck, label: "Validated Output", desc: "Every query is sanitized, validated against your schema, and run in read-only mode." },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" data-testid="architecture-section" className="py-24 md:py-32 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 font-['Outfit']">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-slate-900 font-['Outfit'] mt-3 mb-6">
              Built for enterprise-grade<br />security and speed
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-10 max-w-md">
              RepNet connects to your existing ERP database through secure, read-only connections. 
              Your data never leaves your infrastructure. Our AI layer processes schema metadata to 
              generate accurate SQL without ever seeing raw data.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="flex gap-4 items-start"
                  data-testid={`arch-step-${i}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                    <step.icon size={18} className="text-[#0055FF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 font-['Outfit']">{step.label}</h4>
                    <p className="text-sm text-slate-500 mt-0.5">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Flow diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center gap-3 flex-wrap"
            >
              {["User Chat", "NL Engine", "SQL Gen", "ERP DB", "Report", "Dashboard"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-xs font-mono text-slate-600 whitespace-nowrap">
                    {step}
                  </span>
                  {i < arr.length - 1 && <ArrowRight size={12} className="text-slate-300" />}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl shadow-slate-200/40">
              <img
                src={ARCH_IMG}
                alt="System Architecture"
                className="w-full h-auto"
                data-testid="architecture-image"
              />
            </div>
            {/* Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
