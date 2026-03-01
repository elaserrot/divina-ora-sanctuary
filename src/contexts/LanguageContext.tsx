import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "es" | "en";

const translations = {
  es: {
    // Hero
    heroSubtitle: "Divina Ora",
    heroTitle1: "Tu energía merece un espacio seguro para ",
    heroHighlight: "sanar, crecer",
    heroTitle2: " y transformarse.",
    heroCta: "Descubre tu camino espiritual",
    // Story
    storyLabel: "Nuestra historia",
    storyTitle: "Un refugio para el alma moderna",
    storyP1: "Divina Ora nació de la necesidad profunda de crear un espacio donde lo espiritual y lo contemporáneo se encontraran. Un lugar donde la energía pudiera ser comprendida, cuidada y transformada sin dogmas ni juicios.",
    storyP2: "Nuestro propósito es acompañarte en tu proceso personal — con respeto, con ciencia energética, con amor. Cada experiencia que ofrecemos está diseñada para reconectar con tu esencia más pura y auténtica.",
    storyP3: "Porque sanar no es un lujo. Es un derecho.",
    // Services
    servicesLabel: "Experiencias",
    servicesTitle: "Caminos de transformación",
    service1Title: "Limpieza Energética",
    service1Desc: "Libera bloqueos, renueva tu campo energético y recupera tu equilibrio interior con rituales diseñados a tu medida.",
    service2Title: "Guía Espiritual",
    service2Desc: "Un acompañamiento personalizado para comprender tu camino, tus ciclos y las señales que el universo te envía.",
    service3Title: "Ritualización Consciente",
    service3Desc: "Ceremonias modernas que honran tu intención. Cada ritual es un acto de amor propio y transformación real.",
    service4Title: "Acompañamiento Personal",
    service4Desc: "Sesiones íntimas donde exploramos juntas tu mundo interior, sin juicios, con presencia y profundidad.",
    // Kit
    kitLabel: "Kit Espiritual",
    kitTitle: "Herramientas para tu bienestar",
    kit1Name: "Agua Espiritual",
    kit1Desc: "Purificada con intención y cristales de cuarzo. Para limpiar tu espacio y tu energía.",
    kit2Name: "Alcohol Energético",
    kit2Desc: "Infusionado con hierbas sagradas. Para rituales de protección y renovación.",
    kit3Name: "Sal Ritual",
    kit3Desc: "Sal marina del Himalaya activada. Para sellar tu campo áurico después de cada limpieza.",
    // Testimonials
    testimonialsLabel: "Testimonios",
    testimonialsTitle: "Voces que inspiran",
    testimonial1: "Sentí paz desde el primer momento. Mi energía cambió completamente. Divina Ora me ayudó a encontrar un espacio de calma que no sabía que necesitaba.",
    testimonial2: "La limpieza energética fue una experiencia transformadora. Salí sintiéndome ligera, renovada y con una claridad que hacía mucho no tenía.",
    testimonial3: "El kit espiritual es hermoso y poderoso. Lo uso cada noche antes de dormir y mi descanso ha mejorado profundamente.",
    testimonial4: "Encontré en Divina Ora un acompañamiento real, sin juicios. Me siento comprendida y guiada en mi camino de sanación personal.",
    // CTA
    ctaLabel: "Tu momento",
    ctaTitle1: "Tu transformación comienza cuando decides ",
    ctaHighlight: "escucharte",
    ctaCta: "Agenda tu experiencia",
    // Footer
    footerQuote: '"La luz que buscas afuera siempre estuvo dentro de ti."',
    footerRights: "Todos los derechos reservados.",
  },
  en: {
    heroSubtitle: "Divina Ora",
    heroTitle1: "Your energy deserves a safe space to ",
    heroHighlight: "heal, grow",
    heroTitle2: " and transform.",
    heroCta: "Discover your spiritual path",
    storyLabel: "Our story",
    storyTitle: "A refuge for the modern soul",
    storyP1: "Divina Ora was born from a deep need to create a space where the spiritual and the contemporary could meet. A place where energy could be understood, cared for and transformed without dogma or judgment.",
    storyP2: "Our purpose is to accompany you on your personal journey — with respect, energy science, and love. Each experience we offer is designed to reconnect with your purest and most authentic essence.",
    storyP3: "Because healing is not a luxury. It is a right.",
    servicesLabel: "Experiences",
    servicesTitle: "Paths of transformation",
    service1Title: "Energy Cleansing",
    service1Desc: "Release blockages, renew your energy field and restore your inner balance with rituals tailored to you.",
    service2Title: "Spiritual Guidance",
    service2Desc: "Personalized guidance to understand your path, your cycles and the signs the universe sends you.",
    service3Title: "Conscious Ritualization",
    service3Desc: "Modern ceremonies that honor your intention. Each ritual is an act of self-love and real transformation.",
    service4Title: "Personal Accompaniment",
    service4Desc: "Intimate sessions where we explore your inner world together, without judgment, with presence and depth.",
    kitLabel: "Spiritual Kit",
    kitTitle: "Tools for your well-being",
    kit1Name: "Spiritual Water",
    kit1Desc: "Purified with intention and quartz crystals. To cleanse your space and your energy.",
    kit2Name: "Energetic Alcohol",
    kit2Desc: "Infused with sacred herbs. For rituals of protection and renewal.",
    kit3Name: "Ritual Salt",
    kit3Desc: "Activated Himalayan sea salt. To seal your auric field after each cleansing.",
    testimonialsLabel: "Testimonials",
    testimonialsTitle: "Voices that inspire",
    testimonial1: "I felt peace from the very first moment. My energy changed completely. Divina Ora helped me find a space of calm I didn't know I needed.",
    testimonial2: "The energy cleansing was a transformative experience. I left feeling light, renewed and with a clarity I hadn't had in a long time.",
    testimonial3: "The spiritual kit is beautiful and powerful. I use it every night before bed and my rest has improved deeply.",
    testimonial4: "I found in Divina Ora a real accompaniment, without judgment. I feel understood and guided on my personal healing path.",
    ctaLabel: "Your moment",
    ctaTitle1: "Your transformation begins when you decide to ",
    ctaHighlight: "listen to yourself",
    ctaCta: "Book your experience",
    footerQuote: '"The light you seek outside was always within you."',
    footerRights: "All rights reserved.",
  },
} as const;

type TranslationKey = keyof typeof translations.es;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("divina-ora-lang");
    return (saved === "en" ? "en" : "es") as Lang;
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("divina-ora-lang", l);
  }, []);

  const t = useCallback((key: TranslationKey) => translations[lang][key], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Fallback for HMR edge cases
const fallback: LanguageContextType = {
  lang: "es",
  setLang: () => {},
  t: (key: TranslationKey) => translations.es[key],
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  return ctx ?? fallback;
};
