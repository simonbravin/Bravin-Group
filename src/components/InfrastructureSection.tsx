import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Droplets, Flame, Leaf, Sun, Shield } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electricidad",
    description: "Instalación eléctrica completa y moderna",
  },
  {
    icon: Droplets,
    title: "Agua",
    description: "Suministro de agua potable garantizado",
  },
  {
    icon: Flame,
    title: "Gas Natural",
    description: "Conexión a red de gas natural",
  },
  {
    icon: Leaf,
    title: "Biodigestores",
    description: "Sistema de tratamiento de efluentes sustentable",
  },
  {
    icon: Sun,
    title: "Iluminación Solar",
    description: "Calles internas con iluminación fotovoltaica",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Diseño de baja circulación vehicular",
  },
];

const InfrastructureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.3em] text-primary/80 uppercase mb-4 block">
            Infraestructura
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Servicios del Complejo
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Infraestructura y servicios necesarios para garantizar confort, 
            funcionalidad y sustentabilidad.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-sm p-8 hover:bg-primary-foreground/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-serif mb-2">{service.title}</h3>
              <p className="text-primary-foreground/60 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="text-center mt-12 text-primary-foreground/60 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Este enfoque permite un funcionamiento eficiente del conjunto, con menores 
          costos operativos y una propuesta alineada con criterios de sustentabilidad.
        </motion.p>
      </div>
    </section>
  );
};

export default InfrastructureSection;
