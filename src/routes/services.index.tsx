import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Section } from "@/components/site/PageShell";
import { CheckCircle2, Home, Building2, Factory, Wrench, ShieldCheck, ArrowRight, HeartHandshake, HardHat, Settings2 } from "lucide-react";
import { serviceCategories, multiModelServices } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Cleaning, Plumbing & Maid Services in Trivandrum | Pureo" },
      { name: "description", content: "Explore our premium cleaning, housemaid, plumbing, electrical, and facility management services. Specializing in Residential, Commercial, and Industrial maintenance in Kerala." },
      { name: "keywords", content: "cleaning services Trivandrum, office cleaning Kerala, industrial cleaning, maid services Thiruvananthapuram, plumbing services Trivandrum, carpentry Kerala, electrical works" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Housemaid Services (Wonder Maids)",
            "provider": { "@type": "LocalBusiness", "name": "Pureo Flow Solutions" },
            "areaServed": [ { "@type": "City", "name": "Thiruvananthapuram" }, { "@type": "City", "name": "Kochi" }, { "@type": "City", "name": "Kozhikode" }, { "@type": "City", "name": "Kollam" } ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Works",
            "provider": { "@type": "LocalBusiness", "name": "Pureo Flow Solutions" },
            "areaServed": [ { "@type": "City", "name": "Thiruvananthapuram" }, { "@type": "City", "name": "Kochi" }, { "@type": "City", "name": "Kozhikode" }, { "@type": "City", "name": "Kollam" } ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Carpentry Works",
            "provider": { "@type": "LocalBusiness", "name": "Pureo Flow Solutions" },
            "areaServed": [ { "@type": "City", "name": "Thiruvananthapuram" }, { "@type": "City", "name": "Kochi" }, { "@type": "City", "name": "Kozhikode" }, { "@type": "City", "name": "Kollam" } ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Electrical Works",
            "provider": { "@type": "LocalBusiness", "name": "Pureo Flow Solutions" },
            "areaServed": [ { "@type": "City", "name": "Thiruvananthapuram" }, { "@type": "City", "name": "Kochi" }, { "@type": "City", "name": "Kozhikode" }, { "@type": "City", "name": "Kollam" } ]
          }
        ])
      }
    ]
  }),
  component: ServicesPage,
});



function ServicesPage() {
  return (
    <PageShell>
      {/* Premium Hero Banner */}
      <div className="relative bg-primary pt-32 pb-24 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0 bg-black">
           <img src="/images/hero_commercial_1779124110819.png" alt="Premium commercial cleaning" className="w-full h-full object-cover opacity-40 mix-blend-overlay" fetchPriority="high" decoding="async" />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <SparkleIcon className="size-4" /> Comprehensive Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight drop-shadow-md">
              Our Premium Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
              From luxurious apartments to massive industrial complexes, Pureo provides high-assurance, professional cleaning and facility management tailored to your exact needs.
            </p>
          </motion.div>
        </div>
      </div>

      <Section className="bg-background">
        <div className="space-y-32">
          {serviceCategories.map((category, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={category.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={isEven ? "order-2 lg:order-1" : "order-2"}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-16 rounded-2xl bg-secondary flex items-center justify-center text-primary shadow-sm border border-border">
                      <category.icon className="size-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">{category.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-justify">
                    {category.description}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-3 md:gap-x-4 mb-10">
                    {category.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 bg-white p-2 md:p-2.5 rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-default overflow-hidden">
                        {/* @ts-ignore */}
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="size-8 md:size-10 rounded-md object-cover shrink-0" loading="lazy" decoding="async" />
                        ) : (
                          <div className="bg-secondary/50 p-1.5 md:p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                            <item.icon className="size-4 md:size-5" />
                          </div>
                        )}
                        <span className="font-bold text-foreground text-xs leading-snug line-clamp-2 px-1">{item.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center lg:justify-start w-full">
                    <Link to={`/services/${category.id}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all">
                      View Details <ArrowRight className="size-5" />
                    </Link>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative ${isEven ? "order-1 lg:order-2" : "order-1"}`}
                >
                  <div className="h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-border relative z-10 group bg-slate-50 flex items-center justify-center p-4">
                    <img src={category.image} alt={category.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  <div className="absolute -inset-4 bg-secondary/50 rounded-[2.5rem] -z-10 rotate-3 transition-transform group-hover:rotate-6 duration-500" />
                </motion.div>

              </div>
            );
          })}
        </div>
      </Section>

      {/* MULTI-MODEL SERVICES SECTION */}
      <Section className="bg-secondary/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-border mb-6 text-primary">
              <Settings2 className="size-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground mb-6">
              Multi-Model Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify md:text-center">
              In addition to our core cleaning services, we offer specialized facility management and maintenance solutions to keep your property in perfect condition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multiModelServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="h-56 relative overflow-hidden shrink-0">
                  <img 
                    src={service.img} 
                    alt={service.t} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{service.t}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-1 text-justify">
                    {service.d}
                  </p>
                  <Link to="/contact" className="mt-6 inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors group/link w-fit">
                    Request Service <ArrowRight className="size-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SPECIAL OFFER BANNER */}
      <Section className="!py-0">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <svg width="400" height="400" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="text-white relative z-10 text-center md:text-left max-w-2xl">
              <span className="inline-block bg-white text-blue-600 font-extrabold px-4 py-1 rounded-full text-sm tracking-widest uppercase mb-4 shadow-sm">
                Pureo Wonder Maids Special
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-tight mb-4">
                2 HOURS &ndash; 2 MAIDS
              </h2>
              <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">
                Experience an intensive, top-to-bottom power clean! Two of our professionally trained Wonder Maids will dedicate 2 full hours to rapidly sanitize, dust, and mop your living spaces, kitchen, and bathrooms. The perfect quick-refresh for your home.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-2xl relative z-10 shrink-0 transform md:rotate-3 hover:rotate-0 transition-transform w-full md:w-auto">
              <div className="text-blue-600 font-bold text-lg uppercase tracking-wide">Only At</div>
              <div className="text-5xl md:text-6xl font-extrabold text-foreground mt-1">₹649</div>
              <p className="text-sm text-muted-foreground mt-2 font-medium">No hidden charges</p>
              <a href="tel:8078866663" className="mt-5 block w-full bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-md hover:bg-blue-600 transition-colors text-lg">
                Book Now
              </a>
            </div>
          </motion.div>
        </div>
      </Section>



    </PageShell>
  );
}

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  );
}
