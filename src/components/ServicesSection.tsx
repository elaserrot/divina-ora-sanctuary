import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, Heart, Flame, Users } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Energética",
    description: "Libera bloqueos, renueva tu campo energético y recupera tu equilibrio interior con rituales diseñados a tu medida.",
  },
  {
    icon: Heart,
    title: "Guía Espiritual",
    description: "Un acompañamiento personalizado para comprender tu camino, tus ciclos y las señales que el universo te envía.",
  },
  {
    icon: Flame,
    title: "Ritualización Consciente",
    description: "Ceremonias modernas que honran tu intención. Cada ritual es un acto de amor propio y transformación real.",
  },
  {
    icon: Users,
    title: "Acompañamiento Personal",
    description: "Sesiones íntimas donde exploramos juntas tu mundo interior, sin juicios, con presencia y profundidad.",
  },
];

const ServicesSection = () => (
  <section className="py-24 md:py-36 px-6 bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Experiencias</p>
        <h2 className="text-3xl md:text-5xl font-display font-light text-foreground">
          Caminos de transformación
        </h2>
        <div className="section-divider mt-8" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 md:p-10 h-full"
            >
              <service.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.2} />
              <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
