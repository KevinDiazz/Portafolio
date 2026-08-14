import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Dot = () => <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#1e3a5f]" />;

const PROJECTS = [
  {
    title: "PideON",
    tagline: "Del cliente al repartidor: el ciclo completo de un pedido, en producción.",
    description:
      "Plataforma full-stack de pedidos para restaurantes que cubre los cuatro roles del flujo: cliente, cocina, repartidor y administrador.",
    features: [
      "Autenticación JWT con control de acceso por rol",
      "Checkout con dirección de entrega a domicilio o recogida en tienda",
      "Panel de cocina con transición de estado de pedidos en un click",
      "Autoasignación atómica de repartos para evitar conflictos entre repartidores",
      "Panel de admin con CRUD de categorías/productos y subida de imágenes a Cloudinary",
      "Facturación simplificada descargable en PDF",
      "Backend cubierto con tests de integración (Jest + Supertest)",
    ],
    badges: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Jest + Supertest"],
    demo: "https://pideon.vercel.app",
    repo: "https://github.com/KevinDiazz/pideon",
    monogram: "PN",
    image: "/assets/pideon.png",
    featured: true,
  },
  {
    title: "CanaryRoutes",
    tagline: "Turismo por Canarias sin depender de Google Travel ni GetYourGuide.",
    description:
      "Plataforma editorial de turismo centrada exclusivamente en Canarias, con mapa interactivo y contenido optimizado para SEO.",
    features: [
      "Mapa interactivo con clustering y filtros por categoría",
      "Más de 190 puntos de interés con datos enriquecidos (dificultad, duración, coordenadas)",
      "Guías editoriales en tres idiomas (español, inglés, alemán)",
      "Slugs localizados y hreflang para SEO multi-idioma",
      "Integración de afiliados (GetYourGuide, DiscoverCars)",
      "Consentimiento de cookies y cumplimiento GDPR",
    ],
    badges: ["Next.js 15", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://canary-routes.com",
    repo: "https://github.com/KevinDiazz/canaryroutes",
    monogram: "CR",
    image: "/assets/canaryroutes.png",
  },
  {
    title: "FootballScout",
    tagline: "Ligas, equipos y jugadores en tiempo real con Angular moderno.",
    description:
      "Proyecto de aprendizaje que explora patrones avanzados de Angular 22 consumiendo la API pública de TheSportsDB.",
    features: [
      "Exploración de ligas, equipos y jugadores en tiempo real",
      "Búsqueda en tiempo real de ligas y equipos",
      "Favoritos persistentes con localStorage",
      "Gestión de estado con Signals y arquitectura standalone",
      "Orquestación de peticiones HTTP con forkJoin",
      "Manejo de errores y estados de carga con reintento",
    ],
    badges: ["Angular 22", "TypeScript", "Vitest", "RxJS"],
    demo: null,
    repo: "https://github.com/KevinDiazz/footballScout",
    monogram: "FS",
    image: "/assets/footballScout.png",
  },
  {
    title: "Angular CRM Comercial",
    tagline: "CRUD de clientes y dashboard de métricas con formularios reactivos.",
    description:
      "CRM de aprendizaje con gestión completa de clientes y arquitectura basada en componentes reutilizables.",
    features: [
      "CRUD completo de clientes (crear, ver, editar, eliminar)",
      "Dashboard con métricas: clientes totales, leads, contactos, propuestas y perdidos",
      "Formularios reactivos con validación (email, DNI, teléfono)",
      "Feedback visual en tiempo real ante cambios de estado",
      "Comunicación entre componentes y reutilización de UI",
    ],
    badges: ["Angular", "TypeScript", "Vitest", "RxJS"],
    demo: null,
    repo: "https://github.com/KevinDiazz/angular-crm-comercial",
    monogram: "CRM",
    image: "/assets/angularCrm.png",
  },
];

function ProjectCard({ project }) {
  return (
    <Card
      className={`w-full max-w-5xl mx-auto flex-row flex-wrap md:flex-nowrap overflow-hidden bg-white rounded-sm border border-[#e2e0da] mb-8 py-0 gap-0
        ${project.featured ? "border-t-2 border-t-[#1e3a5f]" : ""}`}
    >
      <div className="w-full md:w-2/5 min-h-48 flex items-center justify-center overflow-hidden bg-[#faf9f7] border-b md:border-b-0 md:border-r border-[#e2e0da]">
        {project.image ? (
          <img
            className="w-full h-full min-h-48 object-cover"
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
          />
        ) : (
          <span className="font-lora text-6xl text-[#1e3a5f]/30">{project.monogram}</span>
        )}
      </div>
      <div className="flex-1 p-6 flex flex-col">
        {project.featured && (
          <span className="w-fit mb-2 font-manrope text-[11px] uppercase tracking-[0.15em] text-[#1e3a5f]">
            Proyecto destacado
          </span>
        )}
        <CardTitle className="font-lora text-2xl font-semibold text-[#1a1a1a]">
          {project.title}
        </CardTitle>
        <p className="font-lora italic text-[#3f3f3f] mt-1">{project.tagline}</p>
        <CardDescription className="font-lora mt-2 text-[#3f3f3f]">
          {project.description}
        </CardDescription>
        <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2 font-lora text-sm text-[#3f3f3f]">
              <Dot />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex w-full flex-wrap gap-2 mt-4">
          {project.badges.map((b) => (
            <span
              key={b}
              className="rounded-sm border border-[#1e3a5f]/15 bg-[#e8eef4]/50 px-2 py-0.5 font-manrope text-[11px] text-[#1e3a5f]"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-5">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-sm bg-[#1a1a1a] px-5 py-2 font-manrope text-sm text-white transition hover:bg-[#1e3a5f]"
            >
              <ExternalLink size={14} />
              Ver demo
            </a>
          ) : null}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 rounded-sm px-5 py-2 font-manrope text-sm transition
              ${
                project.demo
                  ? "border border-[#1a1a1a] text-[#1a1a1a] hover:border-[#1e3a5f] hover:text-[#1e3a5f]"
                  : "bg-[#1a1a1a] text-white hover:bg-[#1e3a5f]"
              }`}
          >
            <Github size={14} />
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
        <p className="font-lora font-semibold tracking-tight text-[#1a1a1a] text-4xl relative inline-block pb-2">
          Proyectos
          <span className="absolute bottom-0 left-0 h-[3px] w-10 bg-[#1e3a5f]" />
        </p>
      </div>

      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}

      <div className="max-w-5xl mx-auto flex flex-col gap-2 items-start border border-dashed border-[#e2e0da] rounded-sm p-6">
        <p className="font-lora text-2xl text-[#1a1a1a]">¿Quieres ver más?</p>
        <p className="text-sm text-[#6b6a67] font-lora">
          Explora más proyectos y contribuciones en mi perfil de GitHub.
        </p>
        <a
          href="https://github.com/KevinDiazz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#1a1a1a] font-manrope text-sm border-b border-[#1a1a1a] hover:text-[#1e3a5f] hover:border-[#1e3a5f]"
        >
          Visitar GitHub
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
export default Projects;
