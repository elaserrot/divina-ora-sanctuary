import AnimatedSection from "./AnimatedSection";
import ritualTable from "@/assets/ritual-table.png";

const StorySection = () => (
  <section className="py-24 md:py-36 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <AnimatedSection>
        <div className="space-y-8">
          <p className="text-sm tracking-[0.3em] uppercase text-primary">Nuestra historia</p>
          <h2 className="text-3xl md:text-5xl font-display font-light leading-snug text-foreground">
            Un refugio para el alma moderna
          </h2>
          <div className="section-divider !mx-0" />
          <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
            <p>
              Divina Ora nació de la necesidad profunda de crear un espacio donde lo espiritual y lo contemporáneo se encontraran. Un lugar donde la energía pudiera ser comprendida, cuidada y transformada sin dogmas ni juicios.
            </p>
            <p>
              Nuestro propósito es acompañarte en tu proceso personal — con respeto, con ciencia energética, con amor. Cada experiencia que ofrecemos está diseñada para reconectar con tu esencia más pura y auténtica.
            </p>
            <p>
              Porque sanar no es un lujo. Es un derecho.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-lilac/30 via-transparent to-gold-light/20 rounded-3xl blur-2xl" />
          <img
            src={ritualTable}
            alt="Mesa ritual moderna con cristales y agua"
            className="relative rounded-2xl w-full object-cover shadow-soft"
            loading="lazy"
          />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default StorySection;
