import { motion } from "framer-motion";
import logoColor from "@/assets/bravin-logo-color.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-24">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand */}
          <div>
            <img
              src={logoColor}
              alt="Bravin Group"
              className="h-12 mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Desarrolladores de proyectos residenciales de alta calidad, 
              comprometidos con la excelencia y la innovación.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Contacto</h4>
            <div className="space-y-4">
              <a href="mailto:info@bravingroup.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@bravingroup.com</span>
              </a>
              <a href="tel:+5491234567890" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>+54 9 1234 567890</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Argentina</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">¿Interesado?</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Contáctenos para más información sobre el proyecto y disponibilidad de unidades.
            </p>
            <a href="mailto:info@bravingroup.com" className="btn-primary inline-block">
              Solicitar Información
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Bravin Group. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Complejo Residencial Privado
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
