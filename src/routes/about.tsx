import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Section } from "@/components/site/PageShell";
import { CheckCircle2, Target, Eye, Users, ShieldCheck, BadgeCheck, Clock, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pureo Flow Solutions | Professional Purologists in Kerala" },
      { name: "description", content: "Learn about Pureo Flow Solutions, a top-rated cleaning company in Trivandrum offering dependable, premium quality cleaning by trained 'purologists'." },
      { name: "keywords", content: "about Pureo, purologists, professional cleaning contractors Kerala, Zenpurio housekeeping, cleaning company profile" }
    ]
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      {/* Premium Hero Header */}
      <div className="relative bg-primary pt-32 pb-32 overflow-hidden shadow-xl">
        <div className="absolute inset-0 z-0 bg-black">
           <img src="/images/about_team_cleaning_1779133633950.png" alt="Pureo professional cleaning team in uniform" className="w-full h-full object-cover opacity-40 mix-blend-overlay" loading="lazy" />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/40" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight drop-shadow-md">
              About Pureo
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
              We are a regiment of fully-equipped 'purologists' delivering premium cleaning services safely, professionally, and harmoniously.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges / Stat Cards */}
      <div className="container mx-auto px-4 relative z-20 -mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Users, t: "Professional Team", v: "Trained Purologists" },
            { icon: BadgeCheck, t: "Affordable Service", v: "Premium Value" },
            { icon: Clock, t: "48h Quality Check", v: "Supervisor Verified" },
            { icon: Building2, t: "Expertise", v: "Res / Com / Ind" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-border text-center flex flex-col items-center hover:-translate-y-1 transition-transform"
            >
              <div className="size-12 rounded-full bg-secondary flex items-center justify-center text-primary mb-3">
                <stat.icon className="size-6" />
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base">{stat.t}</h3>
              <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wider">{stat.v}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Section className="bg-background">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Company Introduction */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                Established Cleaning Company
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground mb-6 leading-tight">
                Why Choose Pureo Flow Solutions?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Pureo is a premier service company that offers dependable, high-tier cleaning services at an affordable rate. We have a dedicated regiment of <strong>'purologists'</strong> at our disposal who are hardworking, fully equipped, and meticulously managed.
                </p>
                <p>
                  As a swiftly expanding cleaning service provider, we offer top-quality services carefully tailored for perfection to residential, commercial, and industrial clientele.
                </p>
                <p>
                  From day-to-day mopping in luxurious homes to advanced deep cleaning of massive industrial establishments, we are geared up for the task. We proudly serve educational institutions, multispecialty hospitals, hotels, malls, banks, and corporate offices.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-border relative z-10 group">
                <img src="/images/about_team_cleaning_1779133633950.png" alt="Professional purologists team ready for cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -inset-4 bg-secondary/50 rounded-[2.5rem] -z-10 -rotate-3 transition-transform group-hover:-rotate-6 duration-500" />
            </motion.div>
          </div>

          {/* Quality Assurance Highlight */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-border relative z-10 group">
                <img src="/images/about_quality_1779134471222.png" alt="Quality assurance supervisor checking office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10 rotate-3 transition-transform group-hover:rotate-6 duration-500" />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="size-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground mb-6 leading-tight">
                Uncompromising Quality Assurance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We don't just clean; we verify. Every major project is subjected to a strict <strong>supervisor-level quality check within 48 hours</strong> of completion to ensure our impeccable standards are met.
              </p>
              <ul className="space-y-4">
                {["Rigorous 48-Hour Supervisor Check", "Trained & Uniformed Staff", "Eco-Friendly Cleaning Agents", "100% Satisfaction Guarantee"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm">
                    <CheckCircle2 className="size-6 text-primary shrink-0" />
                    <span className="font-semibold text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Vision & Approach */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}
              className="bg-white border border-border p-10 md:p-12 rounded-[2rem] shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="size-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <Eye className="size-8" />
              </div>
              <h2 className="text-3xl font-extrabold font-display mb-6 text-foreground">Our Vision</h2>
              <blockquote className="text-muted-foreground italic text-xl border-l-4 border-primary pl-6 py-2 leading-relaxed font-medium">
                "To be the professional cleaning contractor of choice in our operating areas for clients, our supply chain and employees."
              </blockquote>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-border p-10 md:p-12 rounded-[2rem] shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="size-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <Target className="size-8" />
              </div>
              <h2 className="text-3xl font-extrabold font-display mb-6 text-foreground">Our Approach</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="size-6 text-primary shrink-0" /></div>
                  <span className="text-muted-foreground font-medium text-lg leading-snug">Provide our clients with premium quality cleaning services delivered safely and professionally.</span>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="size-6 text-primary shrink-0" /></div>
                  <span className="text-muted-foreground font-medium text-lg leading-snug">Provide a secure working environment and strictly monitor workforce health.</span>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="size-6 text-primary shrink-0" /></div>
                  <span className="text-muted-foreground font-medium text-lg leading-snug">Carry out all activities in a sustainable, environmentally conscientious manner.</span>
                </li>
              </ul>
            </motion.div>
          </div>

        </div>
      </Section>
      
      {/* Final CTA */}
      <Section className="bg-secondary/30 border-t border-border !py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-foreground mb-6">
              Experience the Pureo Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied clients in Kerala who trust Pureo for their residential, commercial, and industrial cleaning needs.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-10 py-5 text-base font-bold text-white shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all">
              Contact Us Today <ArrowRight className="size-5" />
            </Link>
          </motion.div>
        </div>
      </Section>

    </PageShell>
  );
}

// Ensure Building2 is correctly imported for the stat cards above, I added it locally to the loop below or ensure it's in the import list.
import { Building2 } from "lucide-react";
