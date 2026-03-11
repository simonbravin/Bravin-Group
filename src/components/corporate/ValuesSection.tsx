import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Shield, Lightbulb, Heart, Target } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Visión integral",
    description: "Abordamos cada proyecto con una perspectiva completa, desde la concepción hasta la entrega.",
  },
  {
    icon: Shield,
    title: "Calidad constructiva",
    description: "Estándares exigentes en materiales, procesos y terminaciones para resultados que perduran.",
  },
  {
    icon: Lightbulb,
    title: "Innovación aplicada",
    description: "Incorporamos tecnología y métodos modernos que optimizan costos, tiempos y calidad.",
  },
  {
    icon: Heart,
    title: "Compromiso con cada proyecto",
    description: "Nos involucramos con seriedad y dedicación en cada desarrollo que emprendemos.",
  },
  {
    icon: Target,
    title: "Planificación y ejecución",
    description: "Procesos ordenados, plazos realistas y resultados predecibles en cada etapa.",
  },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Diferenciales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Por Qué Bravin Group
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * index }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
