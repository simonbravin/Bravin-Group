import logoWhite from "@/assets/bravin-logo-white.png";
import { MessageCircle } from "lucide-react";

const CorporateFooter = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoWhite} alt="Bravin Group" className="h-10 mb-6" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Desarrollo y construcción de proyectos con visión, solidez y diseño. 
              Mendoza, Argentina.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-serif text-lg mb-6">Navegación</h4>
            <div className="space-y-3">
              {["Inicio", "Nosotros", "Servicios", "Proyectos"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase() === "inicio" ? "inicio" : item.toLowerCase())}
                  className="block text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Más</h4>
            <div className="space-y-3">
              <button onClick={() => scrollTo("tecnologia")} className="block text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Tecnología
              </button>
              <button onClick={() => scrollTo("contacto")} className="block text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Contacto
              </button>
              <a href="https://www.visionlatam.com/" target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Vision Building Technologies
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contacto</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <p>Mendoza, Argentina</p>
              <p>info@bravingroup.com</p>
              <p>+54 9 261 418 5985</p>
              <a
                href="https://wa.me/5492614185985"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-primary hover:text-primary/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/40 text-sm text-center">
            © {new Date().getFullYear()} Bravin Group. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CorporateFooter;
