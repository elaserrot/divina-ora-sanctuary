import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

import kit1Img from "@/assets/kit1.png";
import kit2Img from "@/assets/kit2.png";
import kit3Img from "@/assets/kit3.jpg";

const KitSection = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    { name: t("kit1Name"), desc: t("kit1Desc"), img: kit1Img },
    { name: t("kit2Name"), desc: t("kit2Desc"), img: kit2Img },
    { name: t("kit3Name"), desc: t("kit3Desc"), img: kit3Img },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

        {/* LEFT SIDE - TEXT VERTICAL */}
        <div className="space-y-40">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6 }}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => setActiveIndex(i)}
              className="min-h-[60vh] flex flex-col justify-center"
            >
              <span className="text-sm text-primary/60 mb-4">
                0{i + 1}
              </span>

              <h3 className="text-2xl md:text-3xl font-display mb-6">
                {product.name}
              </h3>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE - STICKY IMAGE */}
        <div className="relative hidden md:block">
          <div className="sticky top-32">
            <motion.img
              key={activeIndex}
              src={products[activeIndex].img}
              alt="kit"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default KitSection;