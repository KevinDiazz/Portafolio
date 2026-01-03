import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function AboutMe() {
  return (
    <section id="SobreMi">
    <div className="relative z-10 w-1/1 p-3 flex flex-col items-center font-lora xl:items-start xl:justify-start">
      <div className="w-2/3 flex justify-start items-center gap-3 ml-4">
        <Avatar className="w-24 h-24 aspect-square border-2 border-[#ff8e3c] bg-white">
          <AvatarImage
            className="object-contain w-full h-full"
            src="public\assets\foto.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-manrope font-extrabold text-2xl text-[#2a3644]">
            Kevin Díaz
          </p>
          <h1 className="font-semibold font-manrope text-xl text-[#2a3644]">
            Desarrollador web<br></br>
          </h1>
          <span className="text-sm text-[#2a3644]">
            Las Palmas de Gran Canaria
          </span>
        </div>
      </div>
      <p className="w-5/6 lg:w-2/3 ml-4 mt-3 md:max-w-2/3">
        ¡Hola! Soy Kevin, <span className="font-semibold">desarrollador web</span>. Empecé por
        mi cuenta, aprendiendo de forma autodidacta, completé varios
        bootcamps y actualmente curso el ciclo superior de Desarrollo de Aplicaciones Web (DAW).
        <br></br>
        <span className="font-semibold"></span>
      </p>{" "}
      <p className="w-5/6 lg:w-2/3 ml-4 mt-2 md:max-w-2/3">
        Me encanta crear proyectos para{" "}
        <span className="font-semibold">
          aprender haciendo, experimentar con nuevas tecnologías y mejorar en
          cada línea de código
        </span>
        . Busco una oportunidad para trabajar como programador y seguir
        creciendo en el mundo del desarrollo.
      </p>
    </div>
    </section>
  );
}
export default AboutMe;
