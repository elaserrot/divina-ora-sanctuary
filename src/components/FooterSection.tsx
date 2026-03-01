import AnimatedSection from "./AnimatedSection";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
   <footer className="relative py-16 px-6 border-t border-border/30 overflow-x-hidden">

  {/* Frase gigante de fondo */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <h2 className="text-[20vw] md:text-[8rem] font-display font-light text-[#FFC400] opacity-[0.04] tracking-wider whitespace-nowrap">{t("footerText")}

    </h2>
  </div>

  <AnimatedSection>
    <div className="relative max-w-4xl mx-auto text-center space-y-8">
      <h3 className="text-2xl md:text-3xl font-display font-light text-foreground">
        Divina Obra
      </h3>

      <p className="text-muted-foreground font-body text-lg italic max-w-lg mx-auto leading-relaxed">
        {t("footerQuote")}
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="https://www.instagram.com/divina_obra1111/"
          aria-label="Instagram"
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          <Instagram className="w-6 h-6" />
        </a>

        <a
          href="https://wa.me/19294262161"
          aria-label="WhatsApp"
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <a
          href="mailto:divinaobra1111@gmail.com?subject=Solicitud%20de%20información&body=Gracias%20por%20comunicarte%20con%20nosotros%20🤍.%20Tu%20mensaje%20ha%20sido%20recibido%20con%20amor%20y%20atención.%20Muy%20pronto%20nuestro%20equipo%20te%20respondera%20para%20acompañarte%20y%20brindarte%20la%20orientación%20que%20necesitas%20en%20tu%20proceso%20espiritual%20✨."
          aria-label="Email"
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      <div className="section-divider" />

      <p className="text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Divina Obra. {t("footerRights")}
      </p>
    </div>
  </AnimatedSection>
</footer>
  );
};

export default FooterSection;
