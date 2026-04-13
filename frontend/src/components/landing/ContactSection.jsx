import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 font-['Outfit']">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-slate-900 font-['Outfit'] mt-3">
              Have questions?
            </h2>
            <p className="text-base text-slate-500 mt-3">
              Reach out and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {status === "success" ? (
              <div className="text-center py-8" data-testid="contact-success">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-slate-900 font-['Outfit']">Message sent!</h3>
                <p className="text-sm text-slate-500 mt-2">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-600 mb-1.5 block">Name *</label>
                    <input
                      type="text"
                      required
                      data-testid="contact-name-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-600 mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      required
                      data-testid="contact-email-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1.5 block">Company</label>
                  <input
                    type="text"
                    data-testid="contact-company-input"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1.5 block">Message *</label>
                  <textarea
                    required
                    rows={4}
                    data-testid="contact-message-input"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your ERP reporting needs..."
                    className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500" data-testid="contact-error">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  data-testid="contact-submit-btn"
                  disabled={status === "loading"}
                  className="w-full bg-[#0055FF] text-white hover:bg-[#0044CC] py-3.5 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
