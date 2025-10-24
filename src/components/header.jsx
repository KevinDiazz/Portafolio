import { useEffect, useState } from "react";
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      setScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (seccion) => {
    const sectionProyectos = document.getElementById("proyectos");
    const sectionContacto = document.getElementById("contacto");

    if (seccion === "proyectos" && sectionProyectos) {
      sectionProyectos.scrollIntoView({ behavior: "smooth" });
    } else if (seccion === "contacto" && sectionContacto) {
      sectionContacto.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Sección no encontrada o identificador incorrecto.");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full p-3 rounded-b-lg transition-all duration-300
        ${scrolled ? "bg-[#d95d39]/50 backdrop-blur-md" : "bg-[#d95d39]"}`}
    >
      <nav className="flex flex-col justify-center items-center sm:flex-row">
        <div className="font-lora flex justify-center items-center gap-4 sm:justify-end">
          <a
            onClick={() => handleClick("contacto")}
            className="font-manrope font-bold text-[#fff8f2] hover:text-[#2a3644] cursor-pointer transition-colors duration-300"
          >
            Contacto
          </a>

          <a
            onClick={() => handleClick("proyectos")}
            className="font-manrope font-bold text-[#fff8f2] hover:text-[#2a3644] cursor-pointer transition-colors duration-300"
          >
            Proyectos
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1PeINOddhs71RpOG7afLZPvJ0EYLVZcHv"
            download
            className="font-manrope font-bold text-[#fff8f2] hover:text-[#2a3644] cursor-pointer transition-colors duration-300"
          >
            Cv
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;
