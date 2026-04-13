import { motion } from "framer-motion";
import { MessageSquareText, BarChart3, LayoutDashboard, ShieldAlert } from "lucide-react";

const features = [
  {
    icon: MessageSquareText,
    title: "Natural Language to SQL",
    description: "Ask questions in plain English. Our AI understands your ERP schema and generates optimized SQL queries instantly. No coding required.",
    span: "md:col-span-2",
    detail: (
      <div className="mt-4 bg-slate-50 rounded-lg border border-slate-100 p-4 font-mono text-xs text-slate-500 leading-relaxed">
        <span className="text-blue-500">User:</span> "Show me all overdue invoices over $10K from Q3"<br />
        <span className="text-green-600 mt-2 block">AI:</span>
        <code className="text-[11px] block mt-1 text-slate-400">
          SELECT inv_number, customer, amount, due_date<br />
          FROM ar_invoices<br />
          WHERE amount {'>'} 10000 AND due_date {'<'} '2024-10-01'<br />
          AND status = 'OVERDUE'
        </code>
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "One-Click Charts",
    description: "Instantly convert any table result into beautiful, interactive charts. AI recommends the best chart type for your data.",
    span: "md:col-span-1",
    detail: (
      <div className="mt-4 flex items-end gap-2 h-20">
        {[40, 65, 50, 80, 55, 70, 90, 60].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm transition-all duration-300"
            style={{
              height: `${h}%`,
              background: i === 6 ? "#0055FF" : "#E2E8F0",
            }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Builder",
    description: "Pin reports to customizable dashboards. Drag, drop, and resize widgets. Share with your team via secure links.",
    span: "md:col-span-1",
    detail: (
      <div className="mt-4 grid grid-cols-3 gap-1.5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={`rounded bg-slate-100 border border-slate-200/60 ${
              i <= 2 ? "h-10 col-span-1" : i === 3 ? "h-10 col-span-1" : "h-8"
            }`}
          />
        ))}
      </div>
    ),
  },
  {
    icon: ShieldAlert,
    title: "Anomaly Detection",
    description: "AI monitors your data 24/7. Get instant alerts when metrics deviate from normal patterns. Auto-create tasks for your team to investigate.",
    span: "md:col-span-2",
    detail: (
      <div className="mt-4 flex items-center gap-4">
        <div className="flex-1 relative h-16">
          <svg viewBox="0 0 200 60" className="w-full h-full">
            <path d="M0,40 Q25,38 50,35 T100,30 T150,20 T170,45 T200,25" fill="none" stroke="#E2E8F0" strokeWidth="2" />
            <path d="M0,40 Q25,38 50,35 T100,30 T150,20 T170,45 T200,25" fill="none" stroke="#0055FF" strokeWidth="2" strokeDasharray="4" opacity="0.5" />
            <circle cx="170" cy="45" r="4" fill="#EF4444" />
            <text x="170" y="58" textAnchor="middle" fontSize="7" fill="#EF4444" fontFamily="monospace">anomaly</text>
          </svg>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-lg px-3 py-2 text-xs text-red-600">
          <span className="font-semibold">Alert:</span> Revenue dip detected in Region B
        </div>
      </div>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesGrid() {
  return (
    <section id="features" data-testid="features-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 font-['Outfit']">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-slate-900 font-['Outfit'] mt-3">
            Everything you need to<br />master your ERP data
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              data-testid={`feature-card-${feature.title.replace(/\s+/g, '-').toLowerCase()}`}
              className={`${feature.span} bg-white border border-slate-200 rounded-lg p-7 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,85,255,0.06)] hover:border-blue-500/30 transition-all duration-300 group`}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#0055FF] transition-colors duration-300">
                <feature.icon size={20} className="text-[#0055FF] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 font-['Outfit']">{feature.title}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{feature.description}</p>
              {feature.detail}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
