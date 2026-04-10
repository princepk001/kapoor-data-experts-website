import { Phone, Mail, MapPin } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Kapoor Data Experts & Consultancy LLP" className="h-14 w-auto bg-background/90 rounded-lg p-1" />
              <div>
                <p className="font-display font-bold text-background text-sm leading-tight">Kapoor Data Experts</p>
                <p className="text-background/50 text-xs">& Consultancy LLP</p>
              </div>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-4">
              Your Partner in Business Growth. Complete business solutions under one roof.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/kapoordataexperts?igsh=MW8zYmtzOGF6ZzFwdg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-background/70" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587171877083"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-background/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2">
              {["Accounting", "GST Filing", "Company Registration", "Website Design", "Tender Filing"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-background/60 hover:text-background transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-background/60">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" /> 8376957138
              </li>
              <li className="flex gap-3 text-sm text-background/60">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" /> harshkapoorofc@gmail.com
              </li>
              <li className="flex gap-3 text-sm text-background/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Plot No 41, Opp. Commander Hospital, Vikas Nagar, Uttam Nagar, Delhi 110059
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Kapoor Data Experts and Consultancy LLP. All rights reserved.
          </p>
          <p className="text-sm text-background/40">Uttam Nagar, Delhi, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
