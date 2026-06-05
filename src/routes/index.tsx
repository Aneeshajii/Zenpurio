"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight, Phone,
  Home as HomeIcon, Building2, Factory, ShieldCheck, Leaf, Users, Award, HardHat, HeartHandshake, CheckCircle2, Settings2,
  MapPin, Mail, Clock, Send, MessageSquare
} from "lucide-react";
import { PageShell, Section, SectionHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pureo Flow Solutions | Cleaning Service Near Me in Trivandrum, Kerala" },
      { name: "description", content: "Top-rated cleaning services in Trivandrum, Kochi, Kozhikode, and Kollam. Expert housemaid services (Wonder Maids), plumbing, carpentry, and electrical works." },
      { name: "keywords", content: "cleaning service near me, cleaning service in Trivandrum, cleaning service in Kerala, maid services Kerala, plumbing services Trivandrum, carpentry works Kerala, electrical works near me, Pureo Flow Solutions, Zenpurio housekeeping, wonder maids" },
      { property: "og:title", content: "Pureo Flow Solutions | Best Cleaning & Maid Services in Kerala" },
      { property: "og:description", content: "Kerala's most trusted name in housekeeping, housemaid services, and facility management." },
      { property: "og:image", content: "https://pureo.in/images/hero_residential_1779124093252.png" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Pureo Flow Solutions",
          "image": "https://pureo.in/images/hero_residential_1779124093252.png",
          "description": "Professional housekeeping, housemaid services, plumbing, carpentry, electrical works, and deep cleaning services across Kerala.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, PTC Tower, SS Kovil Rd, Thampanoor",
            "addressLocality": "Thiruvananthapuram",
            "addressRegion": "Kerala",
            "postalCode": "695001",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "City", "name": "Thiruvananthapuram" },
            { "@type": "City", "name": "Kochi" },
            { "@type": "City", "name": "Kozhikode" },
            { "@type": "City", "name": "Kollam" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cleaning and Maintenance Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Housemaid Services (Wonder Maids)" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Works" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carpentry Works" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Works" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Cleaning Service" } }
            ]
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
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-border/50 text-foreground rounded-full px-3 py-1.5 text-[9px] sm:text-xs font-bold uppercase tracking-wider shadow-sm whitespace-nowrap"
          >
            <span className="size-1.5 sm:size-2 rounded-full bg-primary animate-pulse shrink-0" />
            A division of Zenpurio Housekeeping Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground"
          >
            Quality Housekeeping,<br/><span className="text-primary">Redefined.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-relaxed max-w-2xl drop-shadow-md text-justify md:text-left"
          >
            Pureo is Kerala's fastest-growing name in professional cleaning. Our well-trained, task-oriented staff guarantee the highest level of hygiene and reliability for your homes, offices, and industries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="tel:8330066662" className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 transition-all">
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
  { name: "L'école Chempaka", logo: "/images/partner_1.jpg", imageClassName: "!max-h-[65%] !max-w-[65%]" },
  { name: "Sree Vivekananda Memorial Public School", logo: "/images/partner_2.jpg" },
  { name: "Kasavumaalika", logo: "/images/kasavumaalika.jpg", showName: true },
  { name: "Hotel Geethu International & Sreevisakh Hotel", logo: "/images/hotel_geethu.jpg", showName: true }
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
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-12 justify-items-center max-w-5xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative flex flex-col items-center w-full"
            >
              <div className="w-full max-w-[260px] aspect-[4/3] p-4 md:p-6 rounded-2xl md:rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center bg-white/50">
                {/* @ts-ignore */}
                <img src={p.logo} alt={p.name} className={`max-h-full max-w-full object-contain mix-blend-multiply ${p.imageClassName || ""}`} />
              </div>
              {/* @ts-ignore */}
              {p.showName && (
                <p className="mt-3 text-center font-bold text-foreground text-xs sm:text-sm md:text-base max-w-[240px] leading-snug px-1">
                  {p.name}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const services = [
  { icon: Users, title: "Manpower Services", to: "/services/manpower", desc: "Professional manpower solutions with a dedicated team of 350+ trained professionals.", img: "/images/service_manpower.jpg", highlight: true },
  { icon: HomeIcon, title: "Residential Cleaning", to: "/services/residential", desc: "Comprehensive house cleaning, Carpet & Sofa washing, Bathroom sanitation, and dedicated Servant Maid Services.", img: "/images/home_residential_new.jpg" },
  { icon: Building2, title: "Commercial Cleaning", to: "/services/commercial", desc: "Corporate offices, Shopping Malls, Hotels, Hospitals, Banks, and educational institutions maintained flawlessly.", img: "/images/home_commercial_new.png" },
  { icon: Factory, title: "Industrial Cleaning", to: "/services/industrial", desc: "Heavy-duty factory floor cleaning, Storage tank maintenance, Turnaround services, and Non-Toxic waste removal.", img: "/images/home_industrial.png" },
  { icon: HardHat, title: "Construction & Maintenance", to: "/services/construction", desc: "Specialized deep cleaning and turnaround services for massive industrial setups, factories, and construction sites.", img: "/images/home_construction.png" },
  { icon: Settings2, title: "Multi-Model Services", to: "/services", desc: "Comprehensive facility management including carpentry, plumbing, pest control, electrical works, painting, and A/C maintenance.", img: "/images/multi_electrical.png", highlight: true },
];

function ServicesOverview() {
  return (
    <Section className="relative bg-secondary/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="What we do" title="Comprehensive Cleaning Solutions" subtitle="From residential apartments to massive industrial complexes, Pureo offers a complete package for all your surroundings." center />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={s.highlight ? "md:col-span-2 xl:col-span-4" : ""}
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

                <div className={`relative z-10 p-8 flex flex-col h-full justify-end ${s.highlight ? 'lg:w-2/3' : ''}`}>
                  <div className="size-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/30 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <s.icon className="size-7" />
                  </div>
                  <h3 className={`font-display font-extrabold mb-3 text-white drop-shadow-md ${s.highlight ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>{s.title}</h3>
                  <p className={`text-white/90 leading-relaxed drop-shadow-sm font-medium ${s.highlight ? 'text-base md:text-lg line-clamp-4' : 'text-sm md:text-base line-clamp-3'}`}>{s.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all uppercase tracking-widest">
                    View Details <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    const formElement = e.target as HTMLFormElement;

    try {
      const formData = new FormData(formElement);
      const object = Object.fromEntries(formData);
      object.access_key = "f8297350-0a8e-4c6b-94ac-4a40e43e92f0";
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus("success");
        formElement.reset();
      } else {
        throw new Error(data.message || "API Error");
      }
    } catch (err) {
      // Cloudflare or Network Error occurred! Fallback to Native HTML submission
      console.warn("Background fetch failed (likely Cloudflare block). Falling back to native submission.");
      
      // Inject access key directly into the form DOM if not present
      if (!formElement.querySelector('input[name="access_key"]')) {
        const keyInput = document.createElement("input");
        keyInput.type = "hidden";
        keyInput.name = "access_key";
        keyInput.value = "f8297350-0a8e-4c6b-94ac-4a40e43e92f0";
        formElement.appendChild(keyInput);
      }

      formElement.action = "https://api.web3forms.com/submit";
      formElement.method = "POST";
      formElement.submit(); // Force native browser submission
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="bg-background py-20 md:py-32" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience a spotless space? Call a Pureologist today or drop us a message to schedule your premium cleaning service.
          </p>
        </div>

        {/* Floating Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Phone, t: "Call Us", v: "8330066662\n0471-2336662", link: "tel:8330066662" },
            { icon: Mail, t: "Email Us", v: "info@pureomail.com\nSupport available 24/7", link: "mailto:info@pureomail.com" },
            { icon: MapPin, t: "Corporate Office", v: "PTC Tower, SS Kovil Rd\nThampanoor, Trivandrum", link: "#map" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            >
              <a href={stat.link} className="block h-full bg-white rounded-[2rem] p-8 shadow-md border border-border text-center flex flex-col items-center hover:-translate-y-2 transition-all group">
                <div className="size-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <stat.icon className="size-8" />
                </div>
                <h3 className="font-extrabold text-foreground text-xl mb-3">{stat.t}</h3>
                <p className="text-muted-foreground font-medium whitespace-pre-line leading-relaxed">{stat.v}</p>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Form and Map Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form Container */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-white border border-border rounded-[2rem] p-8 md:p-10 shadow-lg relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <MessageSquare className="size-32" />
              </div>
              <div className="mb-8 relative z-10">
                <h2 className="text-3xl font-extrabold font-display text-foreground">Get a Free Quote</h2>
                <p className="text-muted-foreground mt-2">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              
              <form id="contact-form" className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">First Name</label>
                    <input type="text" name="first_name" required className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Last Name</label>
                    <input type="text" name="last_name" required className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Service Required</label>
                  <select name="service_required" className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none">
                    <option value="Manpower Services">Manpower Services</option>
                    <option value="Housemaid Services (Wonder Maids)">Housemaid Services (Wonder Maids)</option>
                    <option value="Residential Cleaning">Residential Cleaning</option>
                    <option value="Commercial Cleaning">Commercial Cleaning</option>
                    <option value="Industrial Cleaning">Industrial Cleaning</option>
                    <option value="Facility Management">Facility Management</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Tell us about your cleaning needs..."></textarea>
                </div>
                
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-sm font-medium">
                    Message sent successfully! We will contact you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm font-medium">
                    Oops! Something went wrong. Please try calling us instead.
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-6 py-4 font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send className="size-4" />}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map and Office Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-8 h-full" id="map">
            <div className="bg-white border border-border rounded-[2rem] p-8 shadow-lg">
              <h3 className="text-xl font-extrabold font-display mb-6">Zenpurio Housekeeping Services (OPC) PVT LTD.</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="size-5 text-primary shrink-0" />
                  <span>1st Floor, PTC Tower Building, SS Kovil Road, Thampanoor, Thiruvananthapuram - 695001</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="size-5 text-primary shrink-0" />
                  <span>Mon - Sat: 8:00 AM - 6:00 PM<br/>Sun: Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-semibold text-muted-foreground">CIN: U74999KL2018OPC054270</p>
              </div>
            </div>

            <div className="flex-grow bg-muted rounded-[2rem] overflow-hidden shadow-lg border border-border relative min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.037466824647!2d76.94998797405232!3d8.495758291544795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb77457492f%3A0xc3c5ab1eeb49a882!2sThampanoor%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716301385493!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}

function ManpowerVIP() {
  return (
    <Section className="bg-gradient-to-bl from-blue-900 via-slate-900 to-black py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('/images/service_manpower.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 rounded-full px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2.5 bg-blue-500"></span>
              </span>
              Our Primary Service
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Professional <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Manpower Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl text-justify">
              At Pureo Zenpurio Services Private Limited, we believe that a strong workforce is the foundation of every successful organization. We provide businesses with skilled, disciplined, and dependable professionals to support daily operations.
            </p>
            
            <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/services/manpower" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-900/50 hover:bg-blue-500 hover:-translate-y-1 transition-all">
                Learn More
              </Link>
              <a href="tel:8330066662" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-base font-bold shadow-sm hover:bg-white/20 hover:-translate-y-1 transition-all">
                <Phone className="size-5 text-blue-300" /> Contact Us
              </a>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 text-left mx-auto lg:mx-0 w-full max-w-sm">
              {[
                "350+ Trained Professionals", "Operational Excellence", "Disciplined Workforce", "Trusted Partnerships"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                   <CheckCircle2 className="size-5 text-blue-400 shrink-0" />
                   <span className="font-bold text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="relative px-4 md:px-0"
          >
             <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-800 relative z-10 bg-slate-900 w-full flex items-center justify-center">
               <img src="/images/service_manpower.jpg" alt="Professional Manpower Services with 350+ people" className="w-full h-auto object-contain" loading="lazy" />
             </div>
             <div className="absolute -bottom-2 md:-bottom-4 left-2 md:-left-8 z-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-2.5 md:p-6 rounded-xl md:rounded-3xl shadow-xl md:shadow-2xl rotate-[-5deg] border-2 md:border-4 border-slate-800 flex flex-col items-center md:items-start transform hover:rotate-0 transition-transform">
                <p className="text-[7px] md:text-xs font-bold uppercase tracking-widest mb-0.5 md:mb-1 opacity-90 text-center md:text-left">Our Strength</p>
                <p className="text-xs md:text-3xl font-extrabold leading-tight text-center md:text-left">350+</p>
                <p className="text-xs md:text-3xl font-extrabold mb-1 md:mb-2 leading-tight text-center md:text-left">People</p>
                <p className="text-[8px] md:text-sm font-bold bg-white text-blue-900 inline-block px-1.5 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg">Trained & Reliable</p>
             </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

function WonderMaidsVIP() {
  return (
    <Section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 border-y border-border py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2.5 bg-primary"></span>
              </span>
              Our Signature Service
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-foreground mb-6 leading-[1.1]">
              Housemaid Services <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                (Wonder Maids)
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl text-justify">
              Meeting the rising demand for reliable domestic help, Pureo provides premium quality housemaid services. Our dedicated staff expertly handle kitchen cleaning, dish washing, cloth washing, and daily chores.
            </p>
            
            <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/services/housemaid" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all">
                Book Wonder Maids
              </Link>
              <a href="tel:8330066662" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-border text-foreground px-8 py-4 text-base font-bold shadow-sm hover:bg-gray-50 hover:-translate-y-1 transition-all">
                <Phone className="size-5 text-primary" /> Call Now
              </a>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 text-left mx-auto lg:mx-0 w-full max-w-sm">
              {[
                "Kitchen & Bathroom Cleaning", "Dusting & Floor Cleaning", "Disinfect & Sanitize", "Cook & Caretaker Services"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                   <CheckCircle2 className="size-5 text-primary shrink-0" />
                   <span className="font-bold text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 px-4 md:px-0"
          >
             <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-white flex items-center justify-center w-full">
               <img src="/images/service_housemaid_new.jpg" alt="Wonder Maids Professional Housemaid Service" className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-contain" loading="lazy" />
             </div>
             {/* 2 HOURS 2 MAIDS BADGE */}
             <div className="absolute -bottom-2 md:-bottom-4 left-2 md:-left-8 z-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-2.5 md:p-6 rounded-xl md:rounded-3xl shadow-xl md:shadow-2xl rotate-[-5deg] border-2 md:border-4 border-white flex flex-col items-center md:items-start transform hover:rotate-0 transition-transform">
                <p className="text-[7px] md:text-xs font-bold uppercase tracking-widest mb-0.5 md:mb-1 opacity-90 text-center md:text-left">Special Offer</p>
                <p className="text-xs md:text-3xl font-extrabold leading-tight text-center md:text-left">2 Hours</p>
                <p className="text-xs md:text-3xl font-extrabold mb-1 md:mb-2 leading-tight text-center md:text-left">2 Maids</p>
                <p className="text-[10px] md:text-xl font-bold bg-white text-blue-600 inline-block px-1.5 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg">₹649</p>
             </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

function AboutSection() {
  return (
    <Section className="bg-background py-20 md:py-32 border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl space-y-24 md:space-y-32">
        {/* Company Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center md:text-left order-2 lg:order-1 flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
              Established Cleaning Company
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground mb-6 leading-tight">
              Why Choose Pureo Flow Solutions?
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              <p>
                Pureo is a premier service company that offers dependable, high-tier cleaning services at an affordable rate. We have a dedicated regiment of <strong>'purologists'</strong> at our disposal who are hardworking, fully equipped, and meticulously managed.
              </p>
              <p>
                From day-to-day mopping in luxurious homes to advanced deep cleaning of massive industrial establishments, we are geared up for the task. We proudly serve educational institutions, multispecialty hospitals, hotels, malls, banks, and corporate offices.
              </p>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="relative order-1 lg:order-2 px-4 md:px-0">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 group bg-white">
              <img src="/images/about_team_cleaning_1779133633950.png" alt="Professional purologists team ready for cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="absolute -inset-2 md:-inset-4 bg-secondary/80 rounded-[2.5rem] -z-10 rotate-3 transition-transform group-hover:rotate-6 duration-500 hidden md:block" />
          </motion.div>
        </div>

        {/* Quality Assurance Highlight */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="relative order-1 lg:order-1 px-4 md:px-0">
            <div className="aspect-[4/3] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 group bg-white">
              <img src="/images/about_quality_1779134471222.png" alt="Quality assurance supervisor checking office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="absolute -inset-2 md:-inset-4 bg-primary/10 rounded-[2.5rem] -z-10 -rotate-3 transition-transform group-hover:-rotate-6 duration-500 hidden md:block" />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center md:text-left order-2 lg:order-2 flex flex-col items-center md:items-start">
            <div className="size-14 md:size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <ShieldCheck className="size-7 md:size-8" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground mb-6 leading-tight">
              Uncompromising Quality Assurance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
              We don't just clean; we verify. Every major project is subjected to a strict <strong>supervisor-level quality check within 48 hours</strong> of completion to ensure our impeccable standards are met.
            </p>
            <ul className="space-y-4 max-w-md w-full text-left">
              {["Rigorous 48-Hour Supervisor Check", "Trained & Uniformed Staff", "Eco-Friendly Cleaning Agents", "100% Satisfaction Guarantee"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm">
                  <CheckCircle2 className="size-6 text-primary shrink-0" />
                  <span className="font-semibold text-sm md:text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustBanner />
      <OurPartners />
      <ManpowerVIP />
      <WonderMaidsVIP />
      <ServicesOverview />
      <AboutSection />
      <ContactSection />
    </PageShell>
  );
}
