import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function WaitlistSection() {
  const [form, setForm] = useState({ email: "", company: "", erp_system: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      await axios.post(`${API}/waitlist`, form);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="waitlist" data-testid="waitlist-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 font-['Outfit']">
              Early Access
            </span>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-slate-900 font-['Outfit'] mt-3">
              Get early access
            </h2>
            <p className="text-base text-slate-500 mt-3">
              Join the waitlist. Be the first to transform how your team generates ERP reports.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {status === "success" ? (
              <div className="text-center py-8" data-testid="waitlist-success">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-slate-900 font-['Outfit']">You're on the list!</h3>
                <p className="text-sm text-slate-500 mt-2">We'll reach out when early access opens.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="waitlist-form">
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1.5 block">Work Email *</label>
                  <input
                    type="email"
                    required
                    data-testid="waitlist-email-input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1.5 block">Company</label>
                  <input
                    type="text"
                    data-testid="waitlist-company-input"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1.5 block">Current ERP System</label>
                  <select
                    data-testid="waitlist-erp-select"
                    value={form.erp_system}
                    onChange={(e) => setForm({ ...form, erp_system: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select your ERP</option>
                    <option value="SYSPRO">SYSPRO</option>
                    <option value="Acumatica">Acumatica</option>
                    <option value="Sage">Sage</option>
                    <option value="Epicor">Epicor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500" data-testid="waitlist-error">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  data-testid="waitlist-submit-btn"
                  disabled={status === "loading"}
                  className="w-full bg-[#0055FF] text-white hover:bg-[#0044CC] py-3.5 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      Join Waitlist
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center mt-3">
                  No spam. We'll only email you about early access.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
