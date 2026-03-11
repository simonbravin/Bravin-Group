import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";
import techImage from "@/assets/technology-image.jpg";

const benefits = [
  "Mayor eficiencia en tiempos de obra",
  "Calidad constructiva superior",
  "Resultados más predecibles y controlados",
  "Reducción de costos operativos",
  "Sustentabilidad y menor impacto ambiental",
];

const CorporateTechnology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="tecnologia" className="section-padding bg-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] text-primary/80 uppercase mb-4 block">
              Tecnología
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Innovación aplicada a
              <span className="text-primary block">cada proyecto</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              Incorporamos sistemas y soluciones constructivas de última generación para 
              mejorar eficiencia, tiempos, calidad y resultados en cada obra que ejecutamos.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              Trabajamos con <strong className="text-primary">Vision Building Technologies (VBT)</strong>, 
              una tecnología constructiva innovadora que nos permite ofrecer estándares 
              superiores de calidad y rendimiento.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-primary-foreground/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.visionlatam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-primary/90 transition-colors duration-300"
            >
              Conocé más sobre VBT
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-sm shadow-elegant">
              <img
                src={techImage}
                alt="Tecnología constructiva Vision Building Technologies"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-secondary/80 backdrop-blur-sm rounded-sm p-6 border border-primary-foreground/10">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-serif text-primary">VBT</span>
                  </div>
                  <h3 className="text-lg font-serif mb-2">Vision Building Technologies</h3>
                  <p className="text-primary-foreground/60 text-sm">
                    Tecnología constructiva de avanzada integrada a nuestra propuesta de valor.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTechnology;
