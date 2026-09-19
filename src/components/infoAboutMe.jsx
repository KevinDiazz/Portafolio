import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, ArrowRight } from "lucide-react";

function AboutMe() {
  const handleClick = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="SobreMi"
      className="relative z-10 flex flex-col items-center gap-6 px-4 pt-14 pb-8 font-lora xl:flex-row xl:items-start xl:gap-10"
    >
      <Avatar className="h-28 w-28 shrink-0 border-2 border-accent/20 bg-white shadow-sm">
        <AvatarImage className="object-contain w-full h-full" src="/assets/foto.png" />
        <AvatarFallback>KD</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
        <p className="font-lora font-semibold text-3xl text-ink">Kevin Díaz</p>
        <h1 className="font-manrope text-sm uppercase tracking-[0.15em] text-accent mt-2">
          Desarrollador web full-stack
        </h1>
        <span className="flex items-center gap-1 text-sm text-muted mt-2">
          <MapPin size={14} className="text-accent" />
          Las Palmas de Gran Canaria
        </span>

        <div className="max-w-xl mt-5 flex flex-col gap-3 text-body leading-relaxed">
          <p>
            <span className="font-semibold text-ink">Desarrollador web junior</span>, con
            experiencia práctica en el desarrollo de aplicaciones full-stack a través de proyectos
            personales, utilizando tecnologías como Angular y Spring Boot.
          </p>
          <p>
            Cuento con conocimientos sólidos de los fundamentos de la programación y del ciclo de
            desarrollo de software, desde la planificación y el análisis hasta la implementación,
            las pruebas y el despliegue.
          </p>
          <p>
            Utilizo herramientas de inteligencia artificial como apoyo durante el desarrollo para
            mejorar la productividad, facilitar la toma de decisiones técnicas e implementar
            soluciones siguiendo buenas prácticas de programación.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6 xl:justify-start">
          <button
            onClick={() => handleClick("proyectos")}
            className="flex items-center gap-1.5 rounded-sm bg-ink px-5 py-2 font-manrope text-sm text-paper shadow-sm transition-all duration-300 hover:bg-accent hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Ver proyectos
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => handleClick("contacto")}
            className="rounded-sm border border-ink/30 px-5 py-2 font-manrope text-sm text-ink transition-colors duration-300 hover:border-accent hover:text-accent cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Hablemos
          </button>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
