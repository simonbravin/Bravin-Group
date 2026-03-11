import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, soy ${formData.nombre}. ${formData.mensaje} — Email: ${formData.email}, Tel: ${formData.telefono}`;
    window.open(`https://wa.me/549261415985?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section ref={ref} id="contacto" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Hablemos
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Estamos disponibles para conversar sobre tu próximo proyecto, resolver 
              consultas o coordinar una reunión.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/549261415985"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-sm bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">+54 9 261 415 985</p>
                </div>
              </a>

              <a
                href="mailto:info@bravingroup.com"
                className="flex items-center gap-4 p-4 rounded-sm bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">Email</p>
                  <p className="text-muted-foreground text-sm">info@bravingroup.com</p>
                </div>
              </a>

              <a
                href="tel:+549261415985"
                className="flex items-center gap-4 p-4 rounded-sm bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">Teléfono</p>
                  <p className="text-muted-foreground text-sm">+54 9 261 415 985</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-sm bg-muted/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Ubicación</p>
                  <p className="text-muted-foreground text-sm">Mendoza, Argentina</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card-elegant p-8 space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Nombre</label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Teléfono</label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="+54 9..."
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
