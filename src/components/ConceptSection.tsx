import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import projectImage from "@/assets/project-render-2.jpg";

const ConceptSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
              Concepto
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8 leading-tight">
              Un nuevo estándar en
              <span className="text-primary block">vida residencial</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Proyecto de complejo residencial privado, diseñado para ofrecer viviendas 
              modernas, funcionales y de excelente relación precio–calidad, en un entorno 
              seguro y familiar.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              El desarrollo combina dos tipologías de vivienda dentro de un mismo conjunto, 
              permitiendo evaluar preferencias reales de los compradores según estilo de vida.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-sm shadow-elegant">
              <img
                src={projectImage}
                alt="Vista del complejo residencial"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
