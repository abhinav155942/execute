import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@/components/NavLink";

const sections = [
  { id: "hero", label: "Home" },
  { id: "what-we-do", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Tech" },
  { id: "differentiator", label: "Difference" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 100px
      setIsVisible(window.scrollY > 100);

      // Determine active section
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = section.id === "hero" 
          ? document.querySelector("section") 
          : document.getElementById(section.id);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = id === "hero" 
      ? document.querySelector("section") 
      : document.getElementById(id);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = id === "hero" ? 0 : elementPosition - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-4 w-auto"
        >
          <motion.div
            className="glass-card px-6 sm:px-8 py-4 sm:py-5 rounded-full shadow-elegant backdrop-blur-xl border-2 border-border/50 w-auto min-w-fit"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide justify-center">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    activeSection === section.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
