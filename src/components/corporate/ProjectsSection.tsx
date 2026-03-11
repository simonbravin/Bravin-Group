import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectImage from "@/assets/project-render-1.jpg";

const projects = [
  {
    id: "complejo-residencial",
    title: "Complejo Residencial Privado",
    description: "12 unidades funcionales con tecnología VBT, pileta, quincho y espacios verdes en un entorno seguro y familiar.",
    image: projectImage,
    status: "En desarrollo",
    link: "/proyectos/complejo-residencial",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="proyectos" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Proyectos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Nuestros Desarrollos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada proyecto refleja nuestra visión: diseño inteligente, ejecución sólida 
            y compromiso con la calidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Link to={project.link} className="group block">
                <div className="card-elegant overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-secondary/90 text-primary-foreground px-3 py-1.5 rounded-sm">
                      <span className="text-xs font-medium tracking-wide">{project.status}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Ver proyecto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Placeholder for future projects */}
          <motion.div
            className="card-elegant overflow-hidden border-dashed opacity-60"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 0.6, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-64 bg-muted/50 flex items-center justify-center">
              <span className="text-muted-foreground text-sm tracking-wide">Próximamente</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-muted-foreground mb-2">Nuevo proyecto</h3>
              <p className="text-muted-foreground/60 text-sm">En etapa de planificación.</p>
            </div>
          </motion.div>

          <motion.div
            className="card-elegant overflow-hidden border-dashed opacity-40 hidden lg:block"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 0.4, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-full h-64 bg-muted/30 flex items-center justify-center">
              <span className="text-muted-foreground/60 text-sm tracking-wide">Próximamente</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-muted-foreground/60 mb-2">Nuevo proyecto</h3>
              <p className="text-muted-foreground/40 text-sm">En etapa de planificación.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
