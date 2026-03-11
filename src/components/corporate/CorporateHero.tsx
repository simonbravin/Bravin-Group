import { motion } from "framer-motion";
import heroImage from "@/assets/hero-corporate.jpg";
import logoWhite from "@/assets/bravin-logo-white.png";

const CorporateHero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Desarrollo inmobiliario Bravin Group" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.img
          src={logoWhite}
          alt="Bravin Group"
          className="h-14 md:h-16 mx-auto mb-10"
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
          Desarrollamos y construimos
          <span className="block text-primary mt-2">con visión y solidez</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Somos una empresa enfocada en el desarrollo y ejecución de proyectos inmobiliarios 
          y constructivos, combinando experiencia, innovación y tecnología para crear 
          espacios con valor real.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#proyectos" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Ver Proyectos
          </a>
          <a
            href="https://wa.me/549261415985"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>

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

export default CorporateHero;
