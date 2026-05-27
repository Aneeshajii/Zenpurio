import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell, Section } from "@/components/site/PageShell";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pureo Flow Solutions | Cleaning Services Trivandrum" },
      { name: "description", content: "Get in touch with Pureo Flow Solutions for premium residential, commercial, and industrial cleaning services in Kerala. Call a purologist today." }
    ]
  }),
  component: ContactPage,
});

function ContactPage() {
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
    <PageShell>
      {/* Premium Hero Header */}
      <div className="relative bg-primary pt-32 pb-32 overflow-hidden shadow-xl">
        <div className="absolute inset-0 z-0 bg-black">
           <img src="/images/hero_commercial_1779124110819.png" alt="Corporate office background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" loading="lazy" />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/40" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight drop-shadow-md">
              Contact Us
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
              Ready to experience a spotless space? Call a Pureologist today or drop us a message to schedule your premium cleaning service.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Contact Cards */}
      <div className="container mx-auto px-4 relative z-20 -mt-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, t: "Call Us", v: "8330066662\n0471-2336662", link: "tel:8330066662" },
            { icon: Mail, t: "Email Us", v: "info@pureomail.com\nSupport available 24/7", link: "mailto:info@pureomail.com" },
            { icon: MapPin, t: "Corporate Office", v: "PTC Tower, SS Kovil Rd\nThampanoor, Trivandrum", link: "#map" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}
            >
              <a href={stat.link} className="block h-full bg-white rounded-[2rem] p-8 shadow-xl border border-border text-center flex flex-col items-center hover:-translate-y-2 transition-all group">
                <div className="size-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <stat.icon className="size-8" />
                </div>
                <h3 className="font-extrabold text-foreground text-xl mb-3">{stat.t}</h3>
                <p className="text-muted-foreground font-medium whitespace-pre-line leading-relaxed">{stat.v}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <Section className="bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form Container */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <div className="bg-white border border-border rounded-[2rem] p-8 md:p-10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <MessageSquare className="size-32" />
                </div>
                <div className="mb-8">
                  <h2 className="text-3xl font-extrabold font-display text-foreground">Get a Free Quote</h2>
                  <p className="text-muted-foreground mt-2">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>
                
                <form id="contact-page-form" className="space-y-5" onSubmit={handleSubmit}>
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
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="size-4" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map and Office Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex flex-col gap-8" id="map">
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
    </PageShell>
  );
}
