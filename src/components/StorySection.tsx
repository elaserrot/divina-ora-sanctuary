import AnimatedSection from "./AnimatedSection";
import ritualTable from "@/assets/ritual-table.png";
import { useLanguage } from "@/contexts/LanguageContext";

const StorySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="space-y-8">
            <p className="text-sm tracking-[0.3em] uppercase text-primary">{t("storyLabel")}</p>
            <h2 className="text-3xl md:text-5xl font-display font-light leading-snug text-foreground">{t("storyTitle")}</h2>
            <div className="section-divider !mx-0" />
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>{t("storyP1")}</p>
              <p>{t("storyP2")}</p>
              <p>{t("storyP3")}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-lilac/30 via-transparent to-gold-light/20 rounded-3xl blur-2xl" />
            <img src={ritualTable} alt="Mesa ritual moderna con cristales y agua" className="relative rounded-2xl w-full object-cover shadow-soft" loading="lazy" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StorySection;
