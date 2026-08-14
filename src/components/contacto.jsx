import { Github, Linkedin, Mail } from "lucide-react";

const CHANNELS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevindiazsuarez",
    Icon: Linkedin,
  },
  {
    label: "Gmail",
    href: "mailto:kevinds1895@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/KevinDiazz",
    Icon: Github,
  },
];

function Contacto() {
  return (
    <section id="contacto" className="px-4 pb-8">
      <div className="flex justify-center xl:justify-start mt-3">
        <p className="font-lora font-semibold tracking-tight text-4xl text-[#1a1a1a] relative inline-block pb-2">
          Contacto
          <span className="absolute bottom-0 left-0 h-[3px] w-10 bg-[#1e3a5f]" />
        </p>
      </div>
      <p className="font-lora text-[#6b6a67] text-center xl:text-start mt-2 max-w-lg mx-auto xl:mx-0">
        ¿Tienes una oportunidad, un proyecto o simplemente quieres saludar? Escríbeme por
        cualquiera de estos canales.
      </p>

      <div className="flex justify-center flex-wrap gap-8 mt-6 mb-8 xl:justify-start">
        {CHANNELS.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#1e3a5f]/15 bg-[#e8eef4]/50 text-[#1e3a5f] transition duration-300 group-hover:border-[#1e3a5f] group-hover:bg-[#1e3a5f] group-hover:text-white group-hover:-translate-y-1">
              <channel.Icon size={22} />
            </div>
            <p className="text-[#3f3f3f] text-sm text-center font-medium font-lora">{channel.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
export default Contacto;
