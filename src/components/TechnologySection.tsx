import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import vbtLogo from "@/assets/vbt-logo-white.png";

const benefits = [
  "Estructura monolítica, sólida y durable",
  "Tiempos de ejecución acelerados",
  "Mejor control de calidad",
  "Viviendas más eficientes",
  "Precisión constructiva",
  "Bajo mantenimiento a largo plazo",
];

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
              Tecnología Constructiva
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              VBT – Vision Building Technologies
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              El complejo será construido utilizando el sistema VBT, una tecnología 
              constructiva innovadora basada en un sistema de encofrado perdido de 
              perfiles de PVC producidos en Canadá.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Los perfiles se ensamblan en obra y luego se rellenan con hormigón armado, 
              dando como resultado una estructura de alta calidad y durabilidad.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card rounded-sm p-12 shadow-elegant">
              <div className="text-center">
                <a
                  href="https://www.visionlatam.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mb-6 inline-flex rounded-sm bg-black px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label="Vision Building Technologies — sitio oficial"
                >
                  <img
                    src={vbtLogo}
                    alt="Vision Building Technologies"
                    className="mx-auto h-14 w-auto max-w-[200px] object-contain"
                  />
                </a>
                <h3 className="text-xl font-serif text-foreground mb-4">
                  Vision Building Technologies
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Combina la fuerza del hormigón armado con la versatilidad y 
                  eficiencia del PVC canadiense, asegurando construcciones de 
                  primera calidad.
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
