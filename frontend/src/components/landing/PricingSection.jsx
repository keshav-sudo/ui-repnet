import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "For small teams exploring AI-powered reporting.",
    cta: "Start Free Trial",
    highlight: false,
    features: [
      "1 ERP connection",
      "Up to 5 users",
      "500 AI queries/month",
      "Basic chart types",
      "1 shared dashboard",
      "Email support",
      "7-day query history",
    ],
  },
  {
    name: "Pro",
    price: "$299",
    period: "/month",
    description: "For growing teams that need full reporting power.",
    cta: "Start Free Trial",
    highlight: true,
    features: [
      "3 ERP connections",
      "Up to 25 users",
      "5,000 AI queries/month",
      "All chart types + export",
      "Unlimited dashboards",
      "Priority support",
      "90-day query history",
      "Share links & embeds",
      "Column drag & drop",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced security and scale needs.",
    cta: "Contact Sales",
    highlight: false,
    features: [
      "Unlimited ERP connections",
      "Unlimited users",
      "Unlimited AI queries",
      "Anomaly detection (Phase 2)",
      "Task automation (Phase 2)",
      "SSO / SAML integration",
      "Dedicated support manager",
      "Custom SLA & audit logs",
      "On-premise deployment option",
    ],
  },
];

export default function PricingSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" data-testid="pricing-section" className="py-24 md:py-32 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 font-['Outfit']">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-slate-900 font-['Outfit'] mt-3">
            Simple, transparent pricing
          </h2>
          <p className="text-base text-slate-500 mt-3 max-w-md mx-auto">
            Save thousands compared to hiring report writers. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              className={`relative rounded-xl p-7 transition-all duration-300 ${
                plan.highlight
                  ? "bg-white border-2 border-[#0055FF] shadow-lg shadow-blue-500/10 drop-shadow-[0_0_12px_rgba(0,85,255,0.12)] scale-[1.02]"
                  : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0055FF] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-semibold text-slate-900 font-['Outfit']">{plan.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{plan.description}</p>

              <div className="mt-5 mb-6">
                <span className="text-4xl font-semibold text-slate-900 font-['Outfit'] tracking-tight">
                  {plan.price}
                </span>
                <span className="text-sm text-slate-400">{plan.period}</span>
              </div>

              <button
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                onClick={() => scrollTo("#waitlist")}
                className={`w-full py-3 rounded-md text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-[#0055FF] text-white hover:bg-[#0044CC]"
                    : "bg-transparent text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {plan.cta}
              </button>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-[#0055FF]" : "text-slate-400"}`} />
                    <span className="text-sm text-slate-600">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
