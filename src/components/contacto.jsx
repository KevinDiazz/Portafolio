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
        <p className="font-lora font-semibold tracking-tight text-4xl text-ink relative inline-block pb-2">
          Contacto
          <span className="absolute bottom-0 left-0 h-[3px] w-10 bg-accent" />
        </p>
      </div>
      <p className="font-lora text-muted text-center xl:text-start mt-2 max-w-lg mx-auto xl:mx-0">
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
            className="flex flex-col items-center gap-2 group focus-visible:outline-none"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-accent/15 bg-accent-soft/50 text-accent shadow-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-accent group-focus-visible:ring-offset-2">
              <channel.Icon size={22} />
            </div>
            <p className="text-body text-sm text-center font-medium font-lora">{channel.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
export default Contacto;
