import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    text: "Sentí paz desde el primer momento. Mi energía cambió completamente. Divina Ora me ayudó a encontrar un espacio de calma que no sabía que necesitaba.",
    initials: "CM",
  },
  {
    name: "Valentina R.",
    text: "La limpieza energética fue una experiencia transformadora. Salí sintiéndome ligera, renovada y con una claridad que hacía mucho no tenía.",
    initials: "VR",
  },
  {
    name: "Isabella G.",
    text: "El kit espiritual es hermoso y poderoso. Lo uso cada noche antes de dormir y mi descanso ha mejorado profundamente.",
    initials: "IG",
  },
  {
    name: "Mariana L.",
    text: "Encontré en Divina Ora un acompañamiento real, sin juicios. Me siento comprendida y guiada en mi camino de sanación personal.",
    initials: "ML",
  },
];

// Duplicate for seamless infinite loop
const duplicated = [...testimonials, ...testimonials];

const TestimonialCard = ({ name, text, initials }: { name: string; text: string; initials: string }) => (
  <div className="glass-card p-8 md:p-10 flex flex-col min-w-[320px] max-w-[400px] shrink-0">
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, j) => (
        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-muted-foreground font-body leading-relaxed italic flex-1 mb-8">
      "{text}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
        <span className="text-xs font-body font-medium text-accent-foreground">
          {initials}
        </span>
      </div>
      <span className="text-sm font-body font-medium text-foreground">{name}</span>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <section className="py-24 md:py-36 px-6 bg-secondary/30 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Testimonios</p>
        <h2 className="text-3xl md:text-5xl font-display font-light text-foreground">
          Voces que inspiran
        </h2>
        <div className="section-divider mt-8" />
      </AnimatedSection>
    </div>

    <div className="relative">
      <div className="flex gap-8 animate-carousel">
        {duplicated.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
