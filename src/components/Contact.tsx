import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We will contact you soon." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have any questions or need a business solution? Contact us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, title: "Phone", value: "8376957138", href: "tel:8376957138" },
              { icon: Mail, title: "Email", value: "harshkapoorofc@gmail.com", href: "mailto:harshkapoorofc@gmail.com" },
              { icon: MapPin, title: "Address", value: "Plot No 41, Opposite Commander Hospital, Vikas Nagar, Uttam Nagar, Delhi 110059", href: "https://www.google.com/maps/search/Plot+No+41+Opposite+Commander+Hospital+Vikas+Nagar+Uttam+Nagar+Delhi+110059" },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "Address" ? "_blank" : undefined}
                rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                className="flex gap-4 p-5 bg-card rounded-2xl border border-border hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="bg-card rounded-2xl border border-border overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.045!3d28.625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVXR0YW0gTmFnYXI!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=Plot+No+41+Opposite+Commander+Hospital+Vikas+Nagar+Uttam+Nagar+Delhi+110059"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 lg:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                  <Input placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                <Input placeholder="Your phone number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea placeholder="Write your message..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
