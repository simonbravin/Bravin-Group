import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const valuePoints = [
  { label: "Precio competitivo", description: "Excelente valor de mercado" },
  { label: "Metros construidos", description: "75m² de superficie cubierta" },
  { label: "Amenities incluidos", description: "Pileta, quincho y espacios verdes" },
  { label: "Calidad del conjunto", description: "Tecnología VBT de última generación" },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Inversión
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
            Valor Estimado por Unidad
          </h2>
          
          {/* Price Display */}
          <div className="bg-card rounded-sm p-10 md:p-14 shadow-elegant mb-12">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl text-muted-foreground">USD</span>
              <span className="text-5xl md:text-7xl font-serif text-foreground">80.000</span>
              <span className="text-3xl text-muted-foreground mx-2">/</span>
              <span className="text-5xl md:text-7xl font-serif text-foreground">90.000</span>
            </div>
            <p className="text-muted-foreground mt-4">Por unidad funcional</p>
          </div>

          {/* Value Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-serif text-foreground mb-8">
              Excelente relación entre:
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {valuePoints.map((point, index) => (
                <motion.div
                  key={point.label}
                  className="bg-muted/50 rounded-sm p-6 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <h4 className="font-medium text-foreground mb-1">{point.label}</h4>
                  <p className="text-muted-foreground text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
