const allies: { src: string; alt: string }[] = [
  { src: "/aliados/acortex.png", alt: "Acortex" },
  { src: "/aliados/aluma.png", alt: "Aluma" },
  { src: "/aliados/grupo-iron-punch.png", alt: "Grupo Iron Punch" },
  { src: "/aliados/grupo-ltn.png", alt: "Grupo LTN" },
  { src: "/aliados/hiperceramicos.jpg", alt: "Hipercerámicos" },
  { src: "/aliados/hormiserv.png", alt: "Hormiserv" },
  { src: "/aliados/friolatina.png", alt: "Friolatina" },
  { src: "/aliados/saldana.png", alt: "Saldaña" },
  { src: "/aliados/ultratex.png", alt: "Ultratex" },
  { src: "/aliados/santiago-monteverdi.png", alt: "Santiago Monteverdi" },
  { src: "/aliados/suri.jpg", alt: "Suri" },
  { src: "/aliados/bravin-hnos.jpg", alt: "Bravin Hermanos" },
];

const AlliesSection = () => {
  return (
    <section
      className="section-padding bg-white border-y border-border/40"
      aria-labelledby="aliados-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 md:mb-12 text-center">
        <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
          Confían en nosotros
        </span>
        <h2
          id="aliados-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground"
        >
          Aliados
        </h2>
      </div>

      <div
        className="hidden motion-reduce:flex flex-wrap items-center justify-center gap-x-10 gap-y-8 px-6 md:px-12"
        role="list"
        aria-label="Logos de empresas aliadas"
      >
        {allies.map((ally) => (
          <div key={ally.src} className="flex items-center justify-center" role="listitem">
            <img
              src={ally.src}
              alt={ally.alt}
              loading="lazy"
              decoding="async"
              className="h-10 w-auto max-w-[140px] md:h-12 md:max-w-[160px] object-contain grayscale opacity-70 contrast-[0.92]"
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden motion-reduce:hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-white to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-white to-transparent"
          aria-hidden
        />

        <div
          className="flex w-max animate-marquee will-change-transform"
          role="list"
          aria-label="Logos de empresas aliadas en movimiento"
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center gap-12 md:gap-16 lg:gap-20 px-6 md:px-10"
              aria-hidden={copy === 1}
            >
              {allies.map((ally) => (
                <li key={`${copy}-${ally.src}`} className="flex shrink-0 items-center justify-center">
                  <img
                    src={ally.src}
                    alt={copy === 0 ? ally.alt : ""}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto max-w-[140px] md:h-12 md:max-w-[160px] object-contain grayscale opacity-60 contrast-[0.92] transition duration-300 hover:grayscale-0 hover:opacity-90"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlliesSection;
