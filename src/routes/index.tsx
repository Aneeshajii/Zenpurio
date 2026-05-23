import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight, Phone,
  Home as HomeIcon, Building2, Factory, ShieldCheck, Leaf, Users, Award, HardHat, HeartHandshake
} from "lucide-react";
import { PageShell, Section, SectionHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pureo Flow Solutions | Best Professional Cleaning Services in Trivandrum, Kerala" },
      { name: "description", content: "Top-rated housekeeping, residential, commercial, and industrial cleaning services in Thiruvananthapuram. Book Wonder Maids, Deep Cleaning, & Facility Management with Pureo." },
      { name: "keywords", content: "cleaning services Trivandrum, house cleaning Kerala, commercial cleaning Thiruvananthapuram, facility management, Pureo Flow Solutions, Zenpurio housekeeping, wonder maids, sofa cleaning, industrial cleaning" },
      { property: "og:title", content: "Pureo Flow Solutions | Professional Cleaning Services" },
      { property: "og:description", content: "Kerala's most trusted name in housekeeping and deep cleaning services." },
      { property: "og:image", content: "https://pureo.in/images/hero_residential_1779124093252.png" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Pureo Flow Solutions",
          "image": "https://pureo.in/images/hero_residential_1779124093252.png",
          "description": "Professional housekeeping, residential, commercial, and industrial cleaning services based in Thiruvananthapuram, Kerala.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, PTC Tower, SS Kovil Rd, Thampanoor",
            "addressLocality": "Thiruvananthapuram",
            "addressRegion": "Kerala",
            "postalCode": "695001",
            "addressCountry": "IN"
          },
          "telephone": "+914712336662",
          "url": "https://pureo.in"
        })
      }
    ]
  }),
  component: Home,
});

const HERO_IMAGES = [
  "/images/hero_residential_1779124093252.png",
  "/images/hero_commercial_1779124110819.png",
  "/images/hero_industrial_1779124128556.png"
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-background min-h-[95vh] flex items-center pt-20">
      {/* Background Carousel with increased opacity and subtle gradient */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            src={HERO_IMAGES[index]}
            alt="Professional cleaning service background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </AnimatePresence>
        {/* Adjusted gradient to let images show through beautifully but keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-border/50 text-foreground rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            A division of Zenpurio Housekeeping Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground"
          >
            Quality Housekeeping,<br/><span className="text-primary">Redefined.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-foreground font-medium leading-relaxed max-w-2xl drop-shadow-md"
          >
            Pureo is Kerala's fastest-growing name in professional cleaning. Our well-trained, task-oriented staff guarantee the highest level of hygiene and reliability for your homes, offices, and industries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="tel:8330066663" className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 transition-all">
              <Phone className="size-5" /> Call a Pureologist
            </a>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-white text-foreground px-8 py-4 text-sm font-bold shadow-md hover:bg-gray-50 border border-border transition-all">
              Explore Our Services <ArrowRight className="size-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const trustFactors = [
  { icon: ShieldCheck, title: "100% Insured", desc: "Fully verified and insured professional cleaners." },
  { icon: Award, title: "Quality Assured", desc: "48-hour supervisor quality check after service." },
  { icon: Users, title: "Trained Staff", desc: "A dedicated regiment of highly trained 'purologists'." },
  { icon: Leaf, title: "Eco-Friendly", desc: "Using safe, sustainable, and non-toxic materials." },
];

function TrustBanner() {
  return (
    <div className="border-y border-border bg-secondary/50 py-10 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustFactors.map((t, i) => (
            <motion.div 
              key={t.title}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                <t.icon className="size-6" />
              </div>
              <h4 className="font-bold text-foreground text-sm md:text-base">{t.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const partners = [
  { name: "L'école Chempaka", logo: "/images/partner_1.jpg" },
  { name: "Sree Vivekananda Memorial Public School", logo: "/images/partner_2.jpg" }
];

function OurPartners() {
  return (
    <Section className="bg-white border-b border-border py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold font-display text-foreground tracking-tight"
          >
            Our Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground font-medium"
          >
            Trusted by the region's top educational and corporate institutions.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative flex flex-col items-center"
            >
              <div className="h-36 w-48 md:h-48 md:w-64 p-6 rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center">
                <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const services = [
  { icon: HeartHandshake, title: "Housemaid Services (Wonder Maids)", to: "/services/housemaid", desc: "Meeting the rising demand for reliable domestic help, Pureo provides premium quality housemaid services. Our dedicated staff handle kitchen cleaning, dish washing, cloth washing, and daily chores with expert care.", img: "/images/service_housemaid_1779134456643.png", highlight: true },
  { icon: HomeIcon, title: "Residential Cleaning", to: "/services/residential", desc: "Comprehensive house cleaning, Carpet & Sofa washing, Bathroom sanitation, and dedicated Servant Maid Services.", img: "/images/home_residential_new.jpg" },
  { icon: Building2, title: "Commercial Cleaning", to: "/services/commercial", desc: "Corporate offices, Shopping Malls, Hotels, Hospitals, Banks, and educational institutions maintained flawlessly.", img: "/images/home_commercial_new.png" },
  { icon: Factory, title: "Industrial Cleaning", to: "/services/industrial", desc: "Heavy-duty factory floor cleaning, Storage tank maintenance, Turnaround services, and Non-Toxic waste removal.", img: "/images/home_industrial.png" },
  { icon: HardHat, title: "Construction & Maintenance", to: "/services/construction", desc: "Specialized deep cleaning and turnaround services for massive industrial setups, factories, and construction sites.", img: "/images/home_construction.png" },
];

function ServicesOverview() {
  return (
    <Section className="relative">
      <SectionHeader eyebrow="What we do" title="Comprehensive Cleaning Solutions" subtitle="From residential apartments to massive industrial complexes, Pureo offers a complete package for all your surroundings." center />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className={s.highlight ? "md:col-span-2 lg:col-span-4" : ""}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Link to={s.to} className={`group relative flex flex-col h-[400px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all ${s.highlight ? 'border-2 border-primary ring-4 ring-primary/20' : ''}`}>
              <div className="absolute inset-0 z-0 bg-slate-900">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out text-transparent" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-t ${s.highlight ? 'from-black/95 via-black/70 to-transparent' : 'from-black/90 via-black/50 to-black/20'}`} />
              </div>
              
              {s.highlight && (
                <div className="absolute top-6 right-6 z-20 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg flex items-center gap-2">
                  <span className="relative flex size-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-2 bg-white"></span>
                  </span>
                  Main Focus
                </div>
              )}

              <div className={`relative z-10 p-8 flex flex-col h-full justify-end ${s.highlight ? 'lg:w-2/3' : ''}`}>
                <div className="size-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/30 group-hover:bg-primary group-hover:border-primary transition-colors">
                  <s.icon className="size-7" />
                </div>
                <h3 className={`font-display font-extrabold mb-3 text-white drop-shadow-md ${s.highlight ? 'text-3xl md:text-5xl' : 'text-2xl'}`}>{s.title}</h3>
                <p className={`text-white/90 leading-relaxed drop-shadow-sm font-medium ${s.highlight ? 'text-base md:text-lg line-clamp-4' : 'text-sm line-clamp-3'}`}>{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all uppercase tracking-widest">
                  View Details <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section className="!pt-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] bg-primary p-10 md:p-16 shadow-2xl"
      >
        <div className="absolute inset-0 opacity-20 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-90" />
        
        <div className="relative grid md:grid-cols-2 gap-8 items-center text-white z-10">
          <div>
            <h3 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">Need a spotless space?</h3>
            <p className="mt-4 text-white/90 text-lg md:text-xl max-w-md font-medium">Contact Pureo Flow Solutions today and experience premium, reliable cleaning services across Kerala.</p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a href="tel:8330066663" className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-8 py-4 text-sm font-bold shadow-lg hover:bg-gray-50 hover:scale-[1.02] transition-transform">
              <Phone className="size-5" /> 8330066663
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border-2 border-white text-white px-8 py-4 text-sm font-bold hover:bg-white/10 transition-colors">
              Get a Free Quote <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustBanner />
      <OurPartners />
      <ServicesOverview />
      <CTA />
    </PageShell>
  );
}
