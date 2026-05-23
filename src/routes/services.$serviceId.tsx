import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Section, SectionHeader } from "@/components/site/PageShell";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { serviceCategories } from "@/data/services";

export const Route = createFileRoute("/services/$serviceId")({
  head: ({ params }) => {
    const service = serviceCategories.find(s => s.id === params.serviceId);
    return {
      meta: [
        { title: `${service ? service.title : 'Service'} | Pureo Flow Solutions` },
        { name: "description", content: service ? service.description : "Premium cleaning services" }
      ]
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { serviceId } = Route.useParams();
  const service = serviceCategories.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <PageShell>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you are looking for does not exist.</p>
          <Link to="/services" className="text-primary hover:underline font-semibold">
            &larr; Back to Services
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      {/* Breadcrumb */}
      <div className="bg-secondary/50 py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex text-sm text-muted-foreground font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
        </div>
      </div>

      <Section className="relative bg-white pt-12 md:pt-20 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:opacity-80 transition-opacity">
            <ArrowLeft className="size-4" /> Back to All Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-10"
          >
            <div className="inline-flex items-center justify-center size-14 md:size-16 rounded-2xl bg-secondary text-primary mb-6">
              <service.icon className="size-7 md:size-8" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              {service.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full relative rounded-3xl md:rounded-[2rem] overflow-hidden shadow-xl mb-12 h-[300px] md:h-[450px] lg:h-[600px]"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover" 
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-20 max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
              {service.description}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-8 text-center md:text-left">What's Included:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl md:rounded-3xl border border-border/50 shadow-sm hover:shadow-md flex flex-col items-center text-center transition-all group h-full overflow-hidden"
                >
                  <div className="w-full aspect-[4/3] bg-secondary/30 relative overflow-hidden flex items-center justify-center">
                    {/* @ts-ignore - Temporary ignore while we migrate from icons to images */}
                    {feature.image ? (
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                    ) : (
                      <feature.icon className="size-8 md:size-12 text-muted-foreground/30 group-hover:scale-110 transition-transform duration-500" />
                    )}
                  </div>
                  <div className="p-4 md:p-5 flex flex-col items-center justify-center min-h-[5rem] md:min-h-[6rem] w-full bg-white text-center">
                    <span className="text-sm md:text-base font-bold text-foreground leading-tight px-1 line-clamp-2">{feature.title}</span>
                    {/* @ts-ignore */}
                    {feature.description && (
                      <p className="text-xs md:text-sm text-muted-foreground mt-2 line-clamp-3 leading-snug hidden sm:block">{feature.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="mt-20 text-center">
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto rounded-full bg-primary px-10 py-4 md:py-5 text-base md:text-lg font-bold text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 text-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
