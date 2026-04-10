import { motion } from "framer-motion";
import {
  BarChart3, Receipt, Building2, ShieldCheck,
  FileText, ShoppingCart, Globe, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Accounting & Finance",
    items: ["Bookkeeping Services", "Account Management", "Financial Reporting"],
    color: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Receipt,
    title: "Taxation & Audit",
    items: ["GST Registration & Filing", "Income Tax Return Filing", "Audit Services"],
    color: "from-secondary/10 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    icon: Building2,
    title: "MCA & Compliance",
    items: ["Company Registration", "MCA Compliance", "ROC Filing"],
    color: "from-accent/10 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: ShieldCheck,
    title: "Certification & Licenses",
    items: ["DSC (Digital Signature)", "MSME Registration", "ISO Certification"],
    color: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: FileText,
    title: "Tender Services",
    items: ["GeM Tender Filing", "Govt Tender Filing", "Portal Tender Assistance"],
    color: "from-secondary/10 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Services",
    items: ["Flipkart Seller Account", "Amazon Seller Account", "Marketplace Management"],
    color: "from-accent/10 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Globe,
    title: "Digital Services",
    items: ["Website Designing", "Logo Designing", "Branding Solutions"],
    color: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Complete Business Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From Accounting to Digital Services — we professionally handle every need of your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-3">{service.title}</h3>
              <ul className="space-y-2 mb-4">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
