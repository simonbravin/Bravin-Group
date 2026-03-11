import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="nosotros" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
              Quiénes Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8 leading-tight">
              Una mirada contemporánea
              <span className="text-primary block">del desarrollo y la construcción</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bravin Group nace con una visión contemporánea del desarrollo y la construcción, 
              combinando planificación, diseño, ejecución y tecnología para impulsar proyectos 
              con valor real.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Trabajamos con foco en la calidad, la eficiencia y la integración de soluciones 
              innovadoras en cada etapa del proceso constructivo. Nuestra mirada es moderna, 
              orientada al futuro y comprometida con cada proyecto que emprendemos.
            </p>
            <div className="bg-muted/50 rounded-sm p-6 border-l-4 border-primary">
              <p className="text-foreground leading-relaxed text-sm italic">
                El apellido Bravin tiene una presencia reconocida y respetada en el ámbito de 
                la construcción en Mendoza. Con identidad propia, Bravin Group recoge esos 
                valores asociados al trabajo serio, el compromiso y la cultura del hacer, 
                proyectándolos con una mirada renovada hacia el futuro.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-sm shadow-elegant">
              <img
                src={aboutImage}
                alt="Desarrollo arquitectónico Bravin Group"
                className="w-full h-[400px] lg:h-[550px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
