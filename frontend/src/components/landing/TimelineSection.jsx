import { motion } from "framer-motion";
import { Calendar, Code2, Rocket, TestTube, Users, Layers } from "lucide-react";

const phases = [
  {
    icon: Code2,
    weeks: "Weeks 1-4",
    title: "Foundation & Core Engine",
    items: [
      "Auth + multi-tenant architecture",
      "ERP database connection layer",
      "Schema metadata extraction",
      "NL to SQL AI pipeline (v1)",
    ],
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: Layers,
    weeks: "Weeks 5-10",
    title: "Reporting & Visualization",
    items: [
      "Chat UI for natural language queries",
      "Table report with drag-and-drop columns",
      "One-click chart conversion",
      "AI chart type recommendation",
    ],
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    icon: Rocket,
    weeks: "Weeks 11-16",
    title: "Dashboards & Sharing",
    items: [
      "Dashboard builder (grid layout)",
      "Pin reports to dashboards",
      "Share links with permissions",
      "Report history & re-run",
    ],
    color: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    icon: TestTube,
    weeks: "Weeks 17-20",
    title: "Polish & Beta Launch",
    items: [
      "Error handling & edge cases",
      "Performance optimization",
      "Security audit & penetration testing",
      "Beta launch with 10 customers",
    ],
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    icon: Users,
    weeks: "Weeks 21-24",
    title: "Phase 2 - Anomaly & Tasks",
    items: [
      "Anomaly detection engine",
      "Scheduled monitoring jobs",
      "Task creation (Trello integration)",
      "Workflow automation hooks",
    ],
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    icon: Calendar,
    weeks: "Weeks 25-28",
    title: "Scale & GA Launch",
    items: [
      "SSO / SAML integration",
      "On-premise deployment option",
      "Marketing site & documentation",
      "General availability launch",
    ],
    color: "bg-rose-50 text-rose-600 border-rose-100",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" data-testid="timeline-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 font-['Outfit']">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-slate-900 font-['Outfit'] mt-3">
            Project timeline
          </h2>
          <p className="text-base text-slate-500 mt-3 max-w-md mx-auto">
            28-week development plan from foundation to general availability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.weeks}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-testid={`timeline-phase-${i}`}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,85,255,0.06)] hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${phase.color}`}>
                  <phase.icon size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{phase.weeks}</span>
                  <h3 className="text-sm font-semibold text-slate-900 font-['Outfit'] leading-tight">{phase.title}</h3>
                </div>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-300 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
