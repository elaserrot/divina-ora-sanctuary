import AnimatedSection from "./AnimatedSection";
import kitProducts from "@/assets/kit-products.png";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const KitSection = () => {
  const { t } = useLanguage();

  const products = [
    { name: t("kit1Name"), desc: t("kit1Desc") },
    { name: t("kit2Name"), desc: t("kit2Desc") },
    { name: t("kit3Name"), desc: t("kit3Desc") },
  ];

  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{t("kitLabel")}</p>
          <h2 className="text-3xl md:text-5xl font-display font-light text-foreground">{t("kitTitle")}</h2>
          <div className="section-divider mt-8" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-gold-light/20 via-transparent to-lilac/20 rounded-3xl blur-3xl" />
              <img src={kitProducts} alt="Kit espiritual Divina Ora" className="relative rounded-2xl w-full object-cover shadow-soft" loading="lazy" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              {products.map((product, i) => (
                <motion.div key={product.name} whileHover={{ x: 4 }} transition={{ duration: 0.3 }} className="group">
                  <div className="flex items-start gap-4">
                    <span className="text-sm text-primary/60 font-body mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="text-lg font-display font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{product.desc}</p>
                    </div>
                  </div>
                  {i < products.length - 1 && <div className="section-divider mt-8 !mx-0 !w-full" />}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default KitSection;
