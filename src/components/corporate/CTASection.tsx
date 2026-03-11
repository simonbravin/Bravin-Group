import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            Conversemos sobre cómo desarrollarlo. Nuestro equipo está listo para 
            escucharte y asesorarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/549261415985"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-primary/90 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Escribinos por WhatsApp
            </a>
            <a
              href="#proyectos"
              onClick={(e) => { e.preventDefault(); document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Ver Proyectos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
