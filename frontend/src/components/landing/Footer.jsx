import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Documentation", href: "#documentation" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
];

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer data-testid="footer" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0055FF] flex items-center justify-center">
                <span className="text-white font-bold text-sm font-['Outfit']">R</span>
              </div>
              <span className="text-lg font-semibold text-slate-900 font-['Outfit'] tracking-tight">
                RepNet
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              AI-powered ERP reporting for non-technical users. Generate reports in seconds, not days.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Twitter, label: "twitter" },
                { icon: Linkedin, label: "linkedin" },
                { icon: Github, label: "github" },
                { icon: Mail, label: "email" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  data-testid={`footer-social-${label}`}
                  className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0055FF] hover:border-blue-200 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 font-['Outfit']">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      data-testid={`footer-link-${link.label.toLowerCase()}`}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} RepNet. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built for SYSPRO, Acumatica, Sage & Epicor
          </p>
        </div>
      </div>
    </footer>
  );
}
