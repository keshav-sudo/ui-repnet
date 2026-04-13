import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Docs", href: "#documentation" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      data-testid="header-nav"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" data-testid="header-logo" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#0055FF] flex items-center justify-center">
              <span className="text-white font-bold text-sm font-['Outfit']">R</span>
            </div>
            <span className="text-lg font-semibold text-slate-900 font-['Outfit'] tracking-tight">
              RepNet
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              data-testid="nav-waitlist-btn"
              onClick={() => scrollTo("#waitlist")}
              className="bg-[#0055FF] text-white hover:bg-[#0044CC] px-5 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-sm font-medium text-slate-600 hover:text-slate-900 py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#waitlist")}
                className="w-full bg-[#0055FF] text-white hover:bg-[#0044CC] px-5 py-2.5 rounded-md text-sm font-medium transition-colors mt-2"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
