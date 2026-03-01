import { motion } from "framer-motion";
import heroImage from "@/assets/hero-hands.png";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="fixed inset-0 min-h-screen flex items-center justify-center overflow-hidden z-0">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Manos sosteniendo luz espiritual" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-sm tracking-[0.35em] uppercase text-muted-foreground mb-6">
          {t("heroSubtitle")}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-display font-light leading-tight text-foreground mb-8">
          {t("heroTitle1")}
          <span className="text-gradient-gold italic">{t("heroHighlight")}</span>
          {t("heroTitle2")}
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
          <button className="glass-button">{t("heroCta")}</button>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent animate-glow" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
