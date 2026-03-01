import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialCard = ({ name, text, initials }: { name: string; text: string; initials: string }) => (
  <div className="glass-card p-8 md:p-10 flex flex-col min-w-[320px] max-w-[400px] shrink-0">
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, j) => (
        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-muted-foreground font-body leading-relaxed italic flex-1 mb-8">"{text}"</p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
        <span className="text-xs font-body font-medium text-accent-foreground">{initials}</span>
      </div>
      <span className="text-sm font-body font-medium text-foreground">{name}</span>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    { name: "Carolina M.", text: t("testimonial1"), initials: "CM" },
    { name: "Valentina R.", text: t("testimonial2"), initials: "VR" },
    { name: "Isabella G.", text: t("testimonial3"), initials: "IG" },
    { name: "Mariana L.", text: t("testimonial4"), initials: "ML" },
  ];

  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-36 px-6 bg-secondary/30 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{t("testimonialsLabel")}</p>
          <h2 className="text-3xl md:text-5xl font-display font-light text-foreground">{t("testimonialsTitle")}</h2>
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
};

export default TestimonialsSection;
