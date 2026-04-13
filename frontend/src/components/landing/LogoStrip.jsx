import { motion } from "framer-motion";

const logos = [
  { name: "SYSPRO", url: "https://static.prod-images.emergentagent.com/jobs/1b50ded6-5f6b-43ec-bb6e-1400db92ec24/images/b16d6877fe2259ae1d4af680ca188324ad844820c6ea81cfc164ca44c0b35135.png" },
  { name: "Acumatica", url: "https://static.prod-images.emergentagent.com/jobs/1b50ded6-5f6b-43ec-bb6e-1400db92ec24/images/c90756a8c1d8fa29735ab682462ed4bbf6c2e74d516f345882229d52e4a00977.png" },
  { name: "Sage", url: "https://static.prod-images.emergentagent.com/jobs/1b50ded6-5f6b-43ec-bb6e-1400db92ec24/images/33b51baf0cc935a455b244bba0ab023f847b9c0c046a8f83742865cc8526e56a.png" },
  { name: "Epicor", url: "https://static.prod-images.emergentagent.com/jobs/1b50ded6-5f6b-43ec-bb6e-1400db92ec24/images/c0c22824ff18de96d590750ea816b69f88f1d2db0b652e1af24fa1500570f614.png" },
];

export default function LogoStrip() {
  return (
    <section data-testid="logo-strip" className="py-16 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-10"
        >
          Works with leading ERP systems
        </motion.p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />
          <div className="flex animate-marquee items-center gap-20">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                data-testid={`logo-${logo.name.toLowerCase()}-${i}`}
              >
                <img src={logo.url} alt={logo.name} className="h-10 w-auto object-contain" />
                <span className="text-sm font-semibold text-slate-600 font-['Outfit'] whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
