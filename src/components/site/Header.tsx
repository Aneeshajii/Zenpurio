import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Wrench } from "lucide-react";
import logo from "@/assets/pureo-logo.jpeg";
import { serviceCategories } from "@/data/services";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { 
    setOpen(false); 
    setMobileServicesOpen(false);
  }, [path]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-border/50 ${
        scrolled ? "py-2 shadow-soft" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <div className="h-14 sm:h-16 md:h-20 bg-transparent flex items-center justify-start shrink-0 transition-transform duration-300">
              <img src="/images/pureo-logo-cropped.jpg" alt="Pureo Flow Solutions cleaning services logo" className="h-full w-auto object-contain rounded-md scale-[1.15] sm:scale-[1.25] md:scale-[1.35] origin-left mix-blend-multiply contrast-[1.2] brightness-110" fetchPriority="high" decoding="async" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors ${
                path === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown (Desktop) */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                  path.startsWith("/services") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Services
                <ChevronDown className={`size-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </Link>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                  >
                    <Link
                      to="/services"
                      className="block px-4 py-3 text-sm font-bold border-b border-border text-foreground hover:bg-secondary transition-colors"
                    >
                      All Services
                    </Link>
                    {serviceCategories.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-secondary ${path === `/services/${s.id}` ? 'bg-secondary/50 font-bold text-primary' : 'font-medium text-muted-foreground hover:text-foreground'}`}
                      >
                        <s.icon className="size-4 shrink-0" />
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      to="/services/multi-model"
                      className="flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-secondary font-medium text-muted-foreground hover:text-foreground border-t border-border"
                      onClick={() => setServicesOpen(false)}
                    >
                      <Wrench className="size-4 shrink-0" />
                      Multi Model Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {nav.filter(n => n.to !== "/").map((n) => {
              const active = path.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-sm font-semibold transition-colors ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:8330066663"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
            >
              <Phone className="size-4" /> 8330066663
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden size-10 rounded-md bg-secondary flex items-center justify-center text-foreground"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 bg-white border border-border rounded-lg overflow-hidden shadow-soft"
            >
              <div className="p-4 flex flex-col gap-2">
                <Link
                  to="/"
                  className={`block px-4 py-3 rounded-md text-sm font-semibold ${path === "/" ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'}`}
                >
                  Home
                </Link>

                {/* Mobile Services Accordion */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/services"
                      className={`block px-4 py-3 flex-1 rounded-md text-sm font-semibold ${path === "/services" ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'}`}
                    >
                      Services
                    </Link>
                    <button 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-3 text-muted-foreground"
                    >
                      <ChevronDown className={`size-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 pr-2 flex flex-col gap-1 mt-1 border-l-2 border-border ml-4"
                      >
                        {serviceCategories.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.id}`}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm transition-colors ${path === `/services/${s.id}` ? 'bg-primary/10 text-primary font-bold' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'}`}
                          >
                            <s.icon className="size-4 shrink-0" />
                            <span className="line-clamp-1">{s.title}</span>
                          </Link>
                        ))}
                        <Link
                          to="/services/multi-model"
                          className="flex items-center gap-3 px-4 py-2.5 rounded-md text-sm transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary mt-1 border-t border-border pt-3"
                          onClick={() => setOpen(false)}
                        >
                          <Wrench className="size-4 shrink-0" />
                          <span className="line-clamp-1">Multi Model Services</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {nav.filter(n => n.to !== "/").map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`block px-4 py-3 rounded-md text-sm font-semibold ${path.startsWith(n.to) ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'}`}
                  >
                    {n.label}
                  </Link>
                ))}
                
                <a href="tel:8330066663" className="mt-4 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
                  <Phone className="size-4" /> 8330066663
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
