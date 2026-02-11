import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Layers, TreePine, Car } from "lucide-react";

const stats = [
  { icon: Home, value: "12", label: "Unidades Funcionales" },
  { icon: Layers, value: "6+6", label: "Dúplex + 1 Planta" },
  { icon: TreePine, value: "75m²", label: "Superficie Cubierta" },
  { icon: Car, value: "140m²", label: "Lote por Unidad" },
];

const features = [
  "Circulación interna privada",
  "Entorno verde y diseño urbano moderno",
  "Pileta y quincho comunitario",
  "Plaza de juegos para niños",
  "Espacios verdes integrados",
  "Diseño seguro y de baja circulación vehicular",
];

const CompositionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Composición
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            El Complejo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un desarrollo pensado para ofrecer el equilibrio perfecto entre privacidad, 
            comunidad y confort.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="card-elegant p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-serif text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="bg-card rounded-sm p-8 md:p-12 shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-serif text-foreground mb-8 text-center">
            Amenities y Espacios Comunes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 p-4 rounded-sm bg-muted/50"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompositionSection;
