import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/pureo-logo.jpeg";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-white">
      <div className="container mx-auto px-4 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-auto h-16 md:h-20 bg-transparent flex items-center justify-start shrink-0">
              <img src="/images/pureo-logo-cropped.jpg" alt="Pureo Flow Solutions cleaning services logo" className="h-full w-auto object-contain mix-blend-multiply contrast-[1.2] brightness-110 origin-left" loading="lazy" />
            </div>
            <div className="hidden lg:block">
              <p className="font-display font-bold text-xl text-foreground">PUREO</p>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Zenpurio Housekeeping</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A division of Zenpurio Housekeeping Services (OPC) Pvt Ltd. Trivandrum's trusted name in premium cleaning and facility management.
          </p>
          <p className="mt-4 text-xs font-semibold text-muted-foreground">CIN: U74999KL2018OPC054270</p>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">Core Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/services/manpower" className="hover:text-primary transition-colors font-semibold text-primary">Manpower Services</Link></li>
            <li><Link to="/services/residential" className="hover:text-primary transition-colors">Residential Cleaning</Link></li>
            <li><Link to="/services/commercial" className="hover:text-primary transition-colors">Commercial Cleaning</Link></li>
            <li><Link to="/services/industrial" className="hover:text-primary transition-colors">Industrial Cleaning</Link></li>
            <li><Link to="/services/multi-model" className="hover:text-primary transition-colors">Multi-Model Services</Link></li>
            <li><Link to="/services/housemaid" className="hover:text-primary transition-colors">Housemaid Services</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold text-foreground mb-6 font-display">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground text-sm leading-relaxed">
                1st Floor, PTC Tower, SS Kovil Rd,<br />
                Thampanoor, Thiruvananthapuram<br />
                Kerala - 695001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 text-primary shrink-0" />
              <span className="text-muted-foreground text-sm flex flex-col">
                <span>8330066662</span>
                <span>0471-2336662</span>
              </span>
            </li>
            <li className="flex items-center gap-3 group">
              <MessageCircle className="size-5 text-[#25D366] shrink-0" />
              <a href="https://wa.me/918330066663" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm group-hover:text-[#25D366] transition-colors">
                WhatsApp: +91 8330066663
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail className="size-5 text-primary shrink-0" />
              <a href="mailto:info@pureomail.com" className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                info@pureomail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 bg-secondary/30">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pureo Flow Solutions · A division of Zenpurio Housekeeping Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
