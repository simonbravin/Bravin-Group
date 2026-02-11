import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import duplexImage from "@/assets/duplex-render.jpg";
import singleFloorImage from "@/assets/single-floor-render.jpg";

const typologies = [
  {
    id: "duplex",
    title: "Tipología A",
    subtitle: "Unidades Dúplex",
    description:
      "Viviendas desarrolladas en dos plantas, ideales para quienes priorizan una clara separación entre área social y área privada.",
    image: duplexImage,
    features: [
      "2 habitaciones",
      "1 baño principal",
      "1 baño de servicio",
      "Living – cocina – comedor integrados",
      "Lavadero",
      "Cochera pergolada para 1 vehículo",
      "Diseño contemporáneo, líneas rectas y materiales modernos",
    ],
  },
  {
    id: "single",
    title: "Tipología B",
    subtitle: "Unidades de 1 Planta",
    description:
      "Viviendas desarrolladas completamente en planta baja, pensadas para quienes buscan practicidad, accesibilidad y confort en un solo nivel.",
    image: singleFloorImage,
    features: [
      "2 habitaciones",
      "1 baño principal",
      "1 baño de servicio",
      "Living – cocina – comedor integrados",
      "Lavadero",
      "Cochera pergolada para 1 vehículo",
      "Excelente conexión interior–exterior",
    ],
  },
];

const TypologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="tipologias" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Tipologías
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Dos Estilos de Vida
          </h2>
        </motion.div>

        {/* Typologies */}
        <div className="space-y-24">
          {typologies.map((typology, index) => (
            <motion.div
              key={typology.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-sm shadow-elegant">
                  <img
                    src={typology.image}
                    alt={typology.subtitle}
                    className="w-full h-[350px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-secondary/90 text-primary-foreground px-4 py-2 rounded-sm">
                    <span className="text-sm font-medium tracking-wide">
                      {typology.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                  {typology.subtitle}
                </h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {typology.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
                    Características
                  </h4>
                  {typology.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypologiesSection;
