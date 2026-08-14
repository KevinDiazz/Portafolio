import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "stack", label: "Stack" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("SobreMi");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["SobreMi", ...LINKS.map((l) => l.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#fdfcfb]/95 backdrop-blur-sm border-b transition-shadow duration-300
        ${scrolled ? "border-[#e2e0da] shadow-sm" : "border-transparent"}`}
    >
      <nav className="flex items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => handleClick("SobreMi")}
          className="font-lora font-semibold text-lg text-[#1a1a1a] tracking-tight cursor-pointer"
        >
          Kevin Díaz<span className="text-[#1e3a5f]">.</span>
        </button>

        <div className="hidden sm:flex items-center gap-8">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`font-manrope text-sm tracking-wide transition-colors duration-300 cursor-pointer border-b pb-0.5
                ${
                  activeSection === link.id
                    ? "text-[#1e3a5f] border-[#1e3a5f]"
                    : "text-[#44403c] border-transparent hover:text-[#1e3a5f]"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="sm:hidden text-[#1a1a1a]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col items-center gap-4 pb-5 sm:hidden border-t border-[#e2e0da] pt-4">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="font-manrope text-sm text-[#1a1a1a]"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
export default Header;
