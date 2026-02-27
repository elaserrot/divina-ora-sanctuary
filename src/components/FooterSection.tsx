import AnimatedSection from "./AnimatedSection";
import { Instagram, MessageCircle, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="py-16 px-6 border-t border-border/30">
    <AnimatedSection>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h3 className="text-2xl md:text-3xl font-display font-light text-foreground">
          Divina Ora
        </h3>
        <p className="text-muted-foreground font-body text-sm italic max-w-md mx-auto">
          "La luz que buscas afuera siempre estuvo dentro de ti."
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Email"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="section-divider" />

        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Divina Ora. Todos los derechos reservados.
        </p>
      </div>
    </AnimatedSection>
  </footer>
);

export default FooterSection;
