import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Section } from "@/components/site/PageShell";
import { Wrench, ArrowRight } from "lucide-react";
import { multiModelServices } from "@/data/services";

export const Route = createFileRoute("/services/multi-model")({
  head: () => ({
    meta: [
      { title: "Multi Model Services - Pureo Flow Solutions" },
      { name: "description", content: "Pureo provides a comprehensive suite of multi-model facility management services, including advanced carpentry, plumbing, electrical maintenance, and pest control." }
    ]
  }),
  component: MultiModelPage,
});

function MultiModelPage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-800" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md">
              <Wrench className="size-4" />
              <span>Multi Model Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display leading-tight mb-6 drop-shadow-lg">
              Multi Model Services
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
              Pureo offers a complete package of all your surroundings. Pureo is proud to present its Outsourced Multi Model Services, which is a one of its kind feature in a Housekeeping Company.
            </p>
          </motion.div>
        </div>
      </div>

      <Section className="bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multiModelServices.map((service, i) => (
              <motion.div
                key={service.t}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="relative rounded-[2rem] overflow-hidden shadow-lg group flex flex-col min-h-[300px] bg-white border border-border"
              >
                <div className="absolute inset-0 z-0 bg-slate-900">
                  <img src={service.img} alt={service.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out text-transparent" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                </div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                  <h3 className="text-2xl font-extrabold text-white mb-4 flex items-center gap-3 drop-shadow-md font-display">
                    <div className="w-1.5 h-8 bg-primary rounded-full group-hover:h-10 transition-all duration-300"></div>
                    {service.t}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-sm font-medium">
                    {service.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-primary text-primary px-10 py-4 text-sm font-bold shadow-md hover:bg-primary hover:text-white hover:-translate-y-1 transition-all">
              Inquire About Maintenance <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
