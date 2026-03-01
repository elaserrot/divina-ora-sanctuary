import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-lg font-display font-medium text-foreground tracking-wider">
          Divina Obra
        </span>

        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/50 text-sm font-body text-foreground hover:bg-card/80 transition-all duration-300"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === "es" ? "🇪🇸" : "🇺🇸"}</span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-soft overflow-hidden"
                >
                  <button
                    onClick={() => { setLang("es"); setLangOpen(false); }}
                    className={`w-full px-4 py-2.5 text-left text-sm font-body flex items-center gap-2 transition-colors duration-200 ${lang === "es" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary/50"}`}
                  >
                    <span>🇪🇸</span> Español
                  </button>
                  <button
                    onClick={() => { setLang("en"); setLangOpen(false); }}
                    className={`w-full px-4 py-2.5 text-left text-sm font-body flex items-center gap-2 transition-colors duration-200 ${lang === "en" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary/50"}`}
                  >
                    <span>🇺🇸</span> English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-card/60 backdrop-blur-md border border-border/50 text-foreground hover:bg-card/80 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
