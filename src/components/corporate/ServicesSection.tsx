import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, HardHat, ClipboardList, Lightbulb, BarChart3, Compass } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Desarrollo de proyectos inmobiliarios",
    description: "Concebimos y ejecutamos desarrollos residenciales y comerciales, desde la planificación estratégica hasta la entrega final.",
  },
  {
    icon: HardHat,
    title: "Construcción de obras",
    description: "Ejecución integral de obras con altos estándares de calidad, seguridad y cumplimiento de plazos.",
  },
  {
    icon: ClipboardList,
    title: "Gerenciamiento de proyectos",
    description: "Coordinación y supervisión técnica de cada etapa del proyecto, asegurando eficiencia y resultados.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones constructivas innovadoras",
    description: "Incorporamos tecnologías y sistemas constructivos de última generación para optimizar procesos y calidad.",
  },
  {
    icon: BarChart3,
    title: "Asesoramiento técnico y comercial",
    description: "Acompañamos a inversores y propietarios con análisis de viabilidad, presupuestos y estrategia comercial.",
  },
  {
    icon: Compass,
    title: "Evaluación y planificación de desarrollos",
    description: "Estudio de terrenos, factibilidad técnica, diseño de masterplan y definición de producto.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="servicios" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Lo Que Hacemos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos un enfoque integral para el desarrollo y la construcción, 
            abarcando cada etapa con profesionalismo y compromiso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-elegant p-8 group hover:bg-card transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * index }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
