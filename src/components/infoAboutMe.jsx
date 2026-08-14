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
      <Avatar className="h-28 w-28 shrink-0 border-2 border-[#1e3a5f]/20 bg-white">
        <AvatarImage className="object-contain w-full h-full" src="/assets/foto.png" />
        <AvatarFallback>KD</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
        <p className="font-lora font-semibold text-3xl text-[#1a1a1a]">Kevin Díaz</p>
        <h1 className="font-manrope text-sm uppercase tracking-[0.15em] text-[#1e3a5f] mt-2">
          Desarrollador web full-stack
        </h1>
        <span className="flex items-center gap-1 text-sm text-[#6b6a67] mt-2">
          <MapPin size={14} className="text-[#1e3a5f]" />
          Las Palmas de Gran Canaria
        </span>

        <p className="max-w-xl mt-5 text-[#3f3f3f] leading-relaxed">
          <span className="font-semibold text-[#1a1a1a]">Desarrollador Full Stack</span>, con
          sólida comprensión de lógica de programación, estructuras de datos y arquitectura de
          software. Me adapto con facilidad a distintas herramientas y tecnologías y utilizo la
          IA como apoyo durante el desarrollo, siguiendo un proceso estructurado de análisis,
          generación, revisión, pruebas y validación antes de implementar cualquier solución.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-6 xl:justify-start">
          <button
            onClick={() => handleClick("proyectos")}
            className="flex items-center gap-1.5 rounded-sm bg-[#1a1a1a] px-5 py-2 font-manrope text-sm text-[#fdfcfb] transition hover:bg-[#1e3a5f] cursor-pointer"
          >
            Ver proyectos
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => handleClick("contacto")}
            className="rounded-sm border border-[#1a1a1a]/30 px-5 py-2 font-manrope text-sm text-[#1a1a1a] transition hover:border-[#1e3a5f] hover:text-[#1e3a5f] cursor-pointer"
          >
            Hablemos
          </button>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
