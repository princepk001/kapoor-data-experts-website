import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Simplifying Compliance & Digital Growth
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kapoor Data Experts and Consultancy LLP is a trusted professional firm that provides businesses with complete financial, compliance, and digital solutions. Our goal is to deliver all business services to our clients in one place — efficiently, professionally, and at an affordable cost.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">To simplify businesses with reliable accounting, taxation, and compliance services.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">To become India's leading consultancy firm offering complete digital & financial solutions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, number: "500+", label: "Happy Clients", color: "bg-primary/10 text-primary" },
              { icon: Award, number: "10+", label: "Years Experience", color: "bg-secondary/10 text-secondary" },
              { icon: Target, number: "1000+", label: "Projects Done", color: "bg-accent/10 text-accent" },
              { icon: Eye, number: "50+", label: "Team Members", color: "bg-primary/10 text-primary" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${stat.color.split(" ")[0]} flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color.split(" ")[1]}`} />
                </div>
                <p className="font-display text-3xl font-bold text-foreground">{stat.number}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
