import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Dot = () => <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent" />;

const PROJECTS = [
  {
    title: "CarRent",
    tagline: "Reserva de vehículos con gestor CRM para el administrador.",
    description:
      "Plataforma de alquiler de vehículos con backend en Spring Boot y frontend en Angular, incluyendo un panel de administración tipo CRM.",
    features: [
      "Autenticación JWT y autorización por roles (usuario/admin) con Spring Security",
      "Modelado de entidades con JPA/Hibernate siguiendo el patrón MVC",
      "Panel de administración con rutas protegidas por rol (route guards)",
      "Gestión de vehículos, oficinas y reservas con formularios reactivos y validaciones de dominio",
      "Arquitectura frontend por features con standalone components y Signals",
      "Testing de componentes con Vitest y de servicios backend con JUnit 5 + Mockito",
    ],
    badges: ["Angular", "Spring Boot", "Spring Security", "JPA/Hibernate", "Tailwind CSS", "JUnit 5 + Mockito"],
    demo: "https://carrent-frontend.vercel.app",
    repo: "https://github.com/KevinDiazz/carrent-frontend",
    monogram: "CR",
    image: "/assets/Captura de pantalla-carrent.png",
    featured: true,
  },
  {
    title: "PideON",
    tagline: "Pide, cocina, entrega: una app de pedidos a domicilio, en producción.",
    description:
      "Plataforma de pedidos para restaurantes con un panel propio para cada rol del negocio, desplegada y funcionando en producción.",
    features: [
      "Backend por capas (controller-service-repository) con autenticación JWT y roles: cliente, cocina, repartidor y admin",
      "Cocina y repartidor gestionan el estado del pedido en tiempo real; admin controla el negocio completo",
      "Autoasignación atómica de repartos para evitar conflictos entre repartidores",
      "Frontend con gestión de estado combinando TanStack Query (server-state) y Zustand (client-state)",
      "Panel de admin con CRUD de categorías/productos y subida de imágenes a Cloudinary",
      "Facturación simplificada descargable en PDF",
      "Backend cubierto con tests unitarios e integración (Jest + Supertest)",
    ],
    badges: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "TanStack Query", "Zustand", "Jest + Supertest"],
    demo: "https://pideon.vercel.app",
    repo: "https://github.com/KevinDiazz/pideon",
    monogram: "PN",
    image: "/assets/pideon.png",
    featured: true,
  },
  {
    title: "CanaryRoutes",
    tagline: "Guía de turismo en Canarias, con mapa y contenido en tres idiomas.",
    description:
      "Web de turismo dedicada solo a Canarias, con mapa interactivo de sitios de interés y contenido pensado para buscadores.",
    features: [
      "Mapa interactivo con filtros por categoría",
      "Más de 190 sitios con detalles como dificultad y duración",
      "Contenido en español, inglés y alemán",
      "Optimizada para SEO multi-idioma",
      "Enlaces de afiliados para reservar actividades y coches",
    ],
    badges: ["Next.js 15", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://canary-routes.com",
    repo: "https://github.com/KevinDiazz/canaryroutes",
    monogram: "CR",
    image: "/assets/canaryroutes.png",
  },
];

function ProjectCard({ project }) {
  return (
    <Card
      className={`w-full max-w-3xl mx-auto flex-col overflow-hidden bg-white rounded-sm border border-line mb-6 py-0 gap-0 shadow-sm transition-shadow duration-300 hover:shadow-md
        ${project.featured ? "border-t-2 border-t-accent" : ""}`}
    >
      <div className="w-full aspect-[21/9] flex items-center justify-center overflow-hidden bg-surface border-b border-line">
        {project.image ? (
          <img
            className="w-full h-full object-contain"
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
          />
        ) : (
          <span className="font-lora text-5xl text-accent/30">{project.monogram}</span>
        )}
      </div>
      <div className="flex-1 p-4 flex flex-col">
        {project.featured && (
          <span className="w-fit mb-1 font-manrope text-[10px] uppercase tracking-[0.15em] text-accent">
            Proyecto destacado
          </span>
        )}
        <CardTitle className="font-lora text-xl font-semibold text-ink">
          {project.title}
        </CardTitle>
        <p className="font-lora italic text-sm text-body mt-1">{project.tagline}</p>
        <CardDescription className="font-lora mt-1.5 text-sm text-body">
          {project.description}
        </CardDescription>
        <ul className="mt-2 flex flex-col gap-1">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2 pl-1 font-lora text-xs text-body">
              <Dot />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex w-full flex-wrap gap-1.5 mt-3">
          {project.badges.map((b) => (
            <span
              key={b}
              className="rounded-sm border border-accent/15 bg-accent-soft/50 px-2 py-0.5 font-manrope text-[10px] text-accent"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-sm bg-ink px-4 py-1.5 font-manrope text-xs text-white transition-colors duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <ExternalLink size={13} />
              Ver demo
            </a>
          ) : null}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 rounded-sm px-4 py-1.5 font-manrope text-xs transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
              ${
                project.demo
                  ? "border border-ink text-ink hover:border-accent hover:text-accent"
                  : "bg-ink text-white hover:bg-accent"
              }`}
          >
            <Github size={13} />
            Repositorio
          </a>
        </div>
      </div>
    </Card>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="px-4 pt-4">
      <div className="flex justify-center lg:justify-start mb-6">
        <p className="font-lora font-semibold tracking-tight text-ink text-4xl relative inline-block pb-2">
          Proyectos
          <span className="absolute bottom-0 left-0 h-[3px] w-10 bg-accent" />
        </p>
      </div>

      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}

      <div className="max-w-5xl mx-auto flex flex-col gap-2 items-start border border-dashed border-line rounded-sm p-6">
        <p className="font-lora text-2xl text-ink">¿Quieres ver más?</p>
        <p className="text-sm text-muted font-lora">
          Explora más proyectos y contribuciones en mi perfil de GitHub.
        </p>
        <a
          href="https://github.com/KevinDiazz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-ink font-manrope text-sm border-b border-ink hover:text-accent hover:border-accent"
        >
          Visitar GitHub
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
export default Projects;
