import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Table2, PieChart, TrendingUp, Download, Filter } from "lucide-react";

const demos = [
  {
    id: "query",
    label: "Ask a Question",
    icon: Filter,
    preview: (
      <div className="space-y-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-xs text-slate-400 font-mono mb-3">Natural Language Input</p>
          <div className="bg-slate-50 rounded-lg border border-slate-100 px-4 py-3 text-sm text-slate-700">
            "Show me revenue by product category for the last 6 months, sorted by highest revenue"
          </div>
        </div>
        <div className="bg-[#0F172A] rounded-xl p-5 overflow-hidden">
          <p className="text-[10px] text-emerald-400 font-mono mb-2">AI Generated SQL (auto-validated)</p>
          <pre className="text-[12px] text-slate-300 font-mono leading-relaxed">
{`SELECT 
  p.category_name,
  DATE_TRUNC('month', s.sale_date) AS month,
  SUM(s.total_amount) AS revenue
FROM sales s
JOIN products p ON s.product_id = p.id
WHERE s.sale_date >= NOW() - INTERVAL '6 months'
GROUP BY p.category_name, month
ORDER BY revenue DESC`}
          </pre>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Validated</span>
            <span className="text-[10px] text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">Read-only</span>
            <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">0.8s execution</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "table",
    label: "View Results",
    icon: Table2,
    preview: (
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-800 font-['Outfit']">Revenue by Category</span>
          <div className="flex gap-2">
            <span className="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded">1,247 rows</span>
            <Download size={14} className="text-slate-400 cursor-pointer hover:text-slate-600" />
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50/80 text-left">
              <th className="px-5 py-2.5 text-xs font-semibold text-slate-500 font-['Outfit']">Category</th>
              <th className="px-5 py-2.5 text-xs font-semibold text-slate-500 font-['Outfit']">Month</th>
              <th className="px-5 py-2.5 text-xs font-semibold text-slate-500 font-['Outfit'] text-right">Revenue</th>
              <th className="px-5 py-2.5 text-xs font-semibold text-slate-500 font-['Outfit'] text-right">Change</th>
            </tr>
          </thead>
          <tbody>
            {[
              { cat: "Electronics", month: "Dec 2024", rev: "$847,230", change: "+14.2%", up: true },
              { cat: "Industrial", month: "Dec 2024", rev: "$623,890", change: "+8.7%", up: true },
              { cat: "Automotive", month: "Dec 2024", rev: "$512,445", change: "-3.1%", up: false },
              { cat: "Medical", month: "Dec 2024", rev: "$489,120", change: "+22.5%", up: true },
              { cat: "Consumer", month: "Dec 2024", rev: "$378,910", change: "+5.3%", up: true },
            ].map((row, i) => (
              <tr key={i} className="border-t border-slate-50 hover:bg-blue-50/30 transition-colors">
                <td className="px-5 py-2.5 text-slate-700 font-medium">{row.cat}</td>
                <td className="px-5 py-2.5 text-slate-500">{row.month}</td>
                <td className="px-5 py-2.5 text-slate-700 font-medium text-right font-mono">{row.rev}</td>
                <td className={`px-5 py-2.5 text-right font-mono text-xs font-medium ${row.up ? 'text-emerald-600' : 'text-red-500'}`}>{row.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "chart",
    label: "Visualize",
    icon: BarChart3,
    preview: (
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-semibold text-slate-800 font-['Outfit']">Revenue Trend</span>
          <div className="flex gap-1.5">
            {[BarChart3, PieChart, TrendingUp].map((Icon, i) => (
              <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer transition-all ${i === 0 ? 'bg-[#0055FF] text-white shadow-md shadow-blue-500/20' : 'bg-slate-50 text-slate-400 hover:text-slate-600'}`}>
                <Icon size={13} />
              </div>
            ))}
          </div>
        </div>
        {/* Chart area */}
        <div className="relative h-48">
          <svg viewBox="0 0 400 160" className="w-full h-full">
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0055FF" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0055FF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0055FF" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            {[0, 40, 80, 120].map(y => (
              <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#F1F5F9" strokeWidth="1" />
            ))}
            {/* Area */}
            <path d="M0,120 Q50,100 80,90 T160,70 T240,40 T320,55 T400,30 L400,160 L0,160 Z" fill="url(#areaFill)" />
            {/* Line */}
            <path d="M0,120 Q50,100 80,90 T160,70 T240,40 T320,55 T400,30" fill="none" stroke="url(#lineStroke)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Data points */}
            {[[80,90],[160,70],[240,40],[320,55]].map(([cx,cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="6" fill="#0055FF" opacity="0.1" />
                <circle cx={cx} cy={cy} r="3" fill="white" stroke="#0055FF" strokeWidth="2" />
              </g>
            ))}
          </svg>
          {/* Labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
            {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
              <span key={m} className="text-[9px] text-slate-400 font-mono">{m}</span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0055FF]" />
            <span className="text-[10px] text-slate-500">Revenue</span>
          </div>
          <span className="text-xs font-semibold text-emerald-600">+18.3% vs last period</span>
        </div>
      </div>
    ),
  },
  {
    id: "dashboard",
    label: "Pin to Dashboard",
    icon: PieChart,
    preview: (
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-800 font-['Outfit']">Executive Dashboard</span>
          <span className="text-[10px] text-slate-400">Last updated: 2 min ago</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {/* Widget 1 */}
          <div className="col-span-2 bg-white rounded-xl border border-slate-100 p-4 h-28">
            <p className="text-[10px] text-slate-400 mb-2 font-medium">Revenue Trend</p>
            <div className="flex items-end gap-1 h-14">
              {[30,45,35,55,42,60,52,70,58,75,65,80].map((h,i) => (
                <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-blue-500 to-blue-400" style={{height:`${h}%`, opacity: 0.5 + (i/24)}} />
              ))}
            </div>
          </div>
          {/* Widget 2 */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 h-28 flex flex-col justify-between">
            <p className="text-[10px] text-slate-400 font-medium">Total Revenue</p>
            <p className="text-2xl font-bold text-slate-900 font-['Outfit']">$2.8M</p>
            <span className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded self-start">+12%</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl border border-slate-100 p-4 h-24">
            <p className="text-[10px] text-slate-400 mb-1 font-medium">Active Orders</p>
            <p className="text-xl font-bold text-slate-900 font-['Outfit']">1,847</p>
            <p className="text-[10px] text-blue-500">Processing 89%</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-4 h-24">
            <p className="text-[10px] text-slate-400 mb-1 font-medium">Top Region</p>
            <p className="text-xl font-bold text-slate-900 font-['Outfit']">North</p>
            <p className="text-[10px] text-violet-500">$890K this month</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState("query");
  const active = demos.find((d) => d.id === activeId);

  return (
    <section id="documentation" data-testid="docs-section" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-500/[0.02] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 font-['Outfit'] bg-blue-50 px-3 py-1 rounded-full">
            See It In Action
          </span>
          <h2 className="text-4xl sm:text-5xl tracking-tight font-bold text-slate-900 font-['Outfit'] mt-5 leading-[1.1]">
            From question to dashboard{" "}
            <span className="bg-gradient-to-r from-[#0055FF] to-[#6366F1] bg-clip-text text-transparent">
              in seconds
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/40"
        >
          {/* Tab bar */}
          <div className="border-b border-slate-100 px-4 sm:px-6 bg-slate-50/50" data-testid="docs-sidebar">
            <div className="flex gap-1 overflow-x-auto py-3">
              {demos.map((demo, i) => (
                <button
                  key={demo.id}
                  data-testid={`docs-topic-${demo.id}`}
                  onClick={() => setActiveId(demo.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                    activeId === demo.id
                      ? "bg-white text-[#0055FF] shadow-md shadow-blue-500/[0.08] border border-slate-200/80"
                      : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
                  }`}
                >
                  <demo.icon size={15} />
                  <span className="hidden sm:inline">{demo.label}</span>
                  {activeId === demo.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] ml-1" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-8 min-h-[420px]" data-testid="docs-content-pane">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {active?.preview}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
