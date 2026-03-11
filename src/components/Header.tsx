import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoColor from "@/assets/bravin-logo-color.png";
import logoWhite from "@/assets/bravin-logo-white.png";

const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Tecnología", href: "/#tecnologia" },
  { label: "Contacto", href: "/#contacto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (isHome) {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  const showSolid = isScrolled || !isHome;
  const logoSrc = showSolid ? logoColor : logoWhite;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolid
            ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-sm)] border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logoSrc} alt="Bravin Group" className="h-10 md:h-12" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm tracking-wide font-medium transition-colors duration-300 ${
                  showSolid
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/549261415985"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 !py-3 !px-6 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 ${showSolid ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href="https://wa.me/549261415985"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
