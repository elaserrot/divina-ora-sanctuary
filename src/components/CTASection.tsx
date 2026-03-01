import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-36 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <div className="relative">
            <div className="absolute -inset-20 bg-gradient-to-r from-lilac/20 via-gold-light/15 to-lilac/20 rounded-full blur-3xl animate-glow" />
            <div className="relative space-y-8">
              <p className="text-sm tracking-[0.3em] uppercase text-primary">{t("ctaLabel")}</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-light leading-tight text-foreground">
                {t("ctaTitle1")}
                <span className="text-gradient-gold italic">{t("ctaHighlight")}</span>.
              </h2>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <button className="glass-button mt-4">{t("ctaCta")}</button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
