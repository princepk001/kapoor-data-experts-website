import { motion } from "framer-motion";
import { Users, Layers, IndianRupee, Zap, Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: Users, title: "Experienced Team", desc: "We have a team of trained and experienced professionals who understand your business." },
  { icon: Layers, title: "One-Stop Business Solution", desc: "Accounting, taxation, compliance, digital — everything is available in one place." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality services at affordable rates — for every small and large business." },
  { icon: Zap, title: "Fast & Reliable Service", desc: "On-time delivery and reliable support — your work will always be completed on time." },
  { icon: Heart, title: "Client Satisfaction Focus", desc: "Client satisfaction is our top priority — 100% satisfaction guarantee." },
];

const faqs = [
  { q: "What services do you provide?", a: "We provide accounting, taxation, GST filing, company registration, MCA compliance, MSME/ISO certification, tender filing, e-commerce management, and digital services." },
  { q: "Do you also work with small businesses?", a: "Absolutely! We offer affordable solutions for everyone from startups to established businesses." },
  { q: "How long does GST registration take?", a: "Usually GST registration is completed within 3-7 working days, provided the documents are ready." },
  { q: "Do you offer online services?", a: "Yes, all our services are available online. You can get your work done from the comfort of your home." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-10">
              Your Business, Our Responsibility
            </h2>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">FAQs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-10">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5 data-[state=open]:shadow-sm">
                  <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
