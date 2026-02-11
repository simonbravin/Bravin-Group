import { motion } from "framer-motion";
import logoWhite from "@/assets/bravin-logo-white.png";
import heroImage from "@/assets/project-render-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Complejo Residencial Bravin Group"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.img
          src={logoWhite}
          alt="Bravin Group"
          className="h-16 md:h-20 mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Complejo Residencial
          <span className="block text-primary mt-2">Privado</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Viviendas modernas, funcionales y de excelente relación precio–calidad, 
          en un entorno seguro y familiar.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#tipologias" className="btn-primary">
            Ver Tipologías
          </a>
          <a href="#contacto" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-all duration-300">
            Contactar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
