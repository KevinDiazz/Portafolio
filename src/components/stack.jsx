import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// eslint-disable-next-line no-unused-vars -- used via JSX (<motion.div>), not detected by this config
import { motion } from "motion/react";
import { useState } from "react";
import { TestTube2 } from "lucide-react";

const Dot = () => <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent" />;

const SKILLS = [
  {
    id: "react",
    name: "React",
    icon: "/assets/react.svg",
    group: "Frontend",
    description:
      "Con React construí la interfaz de PideON (pedidos con paneles diferenciados por rol) y las páginas de CanaryRoutes sobre Next.js.",
    points: [
      "Hooks y componentes funcionales para UI modular",
      "Enrutamiento con React Router (PideON) y App Router (CanaryRoutes)",
      "Gestión de estado combinando TanStack Query (server-state) y Zustand (client-state)",
      "Consumo de API REST con Axios y manejo de estados de carga/error",
    ],
  },
  {
    id: "angular",
    name: "Angular",
    icon: "/assets/icons8-angular-48.png",
    group: "Frontend",
    description:
      "Con Angular construí CarRent: una SPA de reserva de vehículos con panel de administración, usando el enfoque moderno de Angular 22 sin NgModules.",
    points: [
      "Standalone components y arquitectura por features",
      "Gestión de estado con Signals, sin librerías externas",
      "Formularios reactivos con validaciones de dominio (matrícula, precios)",
      "Rutas protegidas por rol con route guards en el panel admin",
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/assets/javascript-logo-svgrepo-com.svg",
    group: "Frontend",
    description:
      "JavaScript es la base del backend de PideON (Node/Express) y de la lógica de cliente en mis proyectos con React.",
    points: [
      "ES6+: async/await, destructuring, módulos",
      "Lógica de negocio en controladores y servicios Express",
      "Manejo de promesas y control de errores asíncronos",
      "Consumo y construcción de APIs REST",
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "/assets/icons8-typescript-48.png",
    group: "Frontend",
    description:
      "Uso TypeScript en Angular (CarRent) y Next.js (CanaryRoutes) para tipar componentes, servicios y respuestas de la API.",
    points: [
      "Tipado de modelos y DTOs consumidos desde el backend",
      "Interfaces y tipos genéricos en servicios Angular",
      "Configuración de tsconfig en modo estricto",
      "Props y componentes tipados en Next.js",
    ],
  },
  {
    id: "html",
    name: "HTML",
    icon: "/assets/html-svgrepo-com.svg",
    group: "Frontend",
    description:
      "Estructuro cada interfaz de forma semántica y accesible, desde formularios de reserva hasta paneles de administración.",
    points: [
      "Etiquetas semánticas para accesibilidad y SEO",
      "Formularios accesibles con validación nativa",
      "Estructuración clara del contenido por secciones",
      "Integración con componentes dinámicos de Angular/React",
    ],
  },
  {
    id: "css",
    name: "CSS",
    icon: "/assets/css3-logo-svgrepo-com.svg",
    group: "Frontend",
    description:
      "Antes de aplicar Tailwind, maqueto la estructura con CSS: Flexbox y Grid para los layouts de mis proyectos.",
    points: [
      "Flexbox y Grid para layouts responsivos",
      "Diseño mobile-first",
      "Transiciones y estados hover/focus",
      "Variables CSS para temas de color consistentes",
    ],
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: "/assets/tailwind-svgrepo-com.svg",
    group: "Frontend",
    description:
      "Tailwind es el framework de estilos que uso en todos mis proyectos: CarRent, PideON, CanaryRoutes y este portafolio.",
    points: [
      "Diseño mobile-first en los cuatro proyectos",
      "Sistema de color y espaciado consistente por proyecto",
      "Componentes reutilizables con shadcn/ui (este portafolio)",
      "Configuración y extensión del tema (tailwind.config)",
    ],
  },
  {
    id: "node",
    name: "Node.js",
    icon: "/assets/icons8-node-js-48.png",
    group: "Backend",
    description:
      "Con Node.js construí la API REST de PideON: capas de rutas, controladores, servicios y repositorios.",
    points: [
      "Arquitectura por capas (controller-service-repository)",
      "Autenticación JWT y roles: cliente, cocina, repartidor, admin",
      "Subida de imágenes con Multer + Cloudinary",
      "Despliegue en Render con variables de entorno",
    ],
  },
  {
    id: "express",
    name: "Express",
    icon: "/assets/icons8-express-js-50.png",
    group: "Backend",
    description:
      "Express expone los endpoints de PideON, con middlewares propios de autenticación, autorización y validación.",
    points: [
      "Middlewares de autenticación (JWT) y autorización por rol",
      "Validación de entrada con express-validator",
      "CORS configurado para entornos local, Vercel y Render",
      "Generación de facturas en PDF en streaming con PDFKit",
    ],
  },
  {
    id: "java",
    name: "Java",
    icon: "/assets/icons8-java-48.png",
    group: "Backend",
    description:
      "Java es la base de CarRent: programación orientada a objetos aplicada a un backend Spring Boot en capas.",
    points: [
      "POO aplicada a entidades, servicios y controladores",
      "Colecciones y Streams en la lógica de disponibilidad de coches",
      "Persistencia con JPA/Hibernate",
      "Patrón DTO con mapeo automático vía MapStruct",
    ],
  },
  {
    id: "spring",
    name: "Spring",
    icon: "/assets/icons8-spring-boot-48.png",
    group: "Backend",
    description:
      "Con Spring Boot construí la API REST de CarRent: autenticación JWT, roles con Spring Security y persistencia con Spring Data JPA.",
    points: [
      "Arquitectura MVC con controladores, servicios y repositorios",
      "Autenticación JWT y autorización por roles con Spring Security",
      "Persistencia con Spring Data JPA/Hibernate sobre MySQL",
      "DTOs y mapeo de entidades con MapStruct",
    ],
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: "/assets/icons8-prisma-orm-50.png",
    group: "Backend",
    description:
      "Modelé la base de datos de PideON con Prisma: 9 entidades relacionadas (usuarios, pedidos, productos, pagos) sobre PostgreSQL.",
    points: [
      "Modelado de esquemas y relaciones 1:N",
      "Migraciones versionadas",
      "Queries tipadas de extremo a extremo",
      "Generación automática del cliente (prisma generate)",
    ],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "/assets/icons8-postgresql-48.png",
    group: "Backend",
    description:
      "PostgreSQL es la base de datos de PideON en producción, gestionada con Neon (serverless) e integrada vía Prisma.",
    points: [
      "Diseño de esquema relacional (usuarios, pedidos, pagos, cupones)",
      "Actualización condicionada para evitar condiciones de carrera en la autoasignación de repartos",
      "Despliegue gestionado con Neon",
      "Migraciones aplicadas en el pipeline de despliegue (Render)",
    ],
  },
  {
    id: "testing",
    name: "Testing",
    icon: null,
    Icon: TestTube2,
    group: "Backend",
    description:
      "Escribo tests en cada backend que construyo: JUnit 5 + Mockito en CarRent, y Jest + Supertest en PideON.",
    points: [
      "Tests unitarios de servicios con mocks (Mockito) en CarRent",
      "Tests de integración con Supertest sobre endpoints reales en PideON",
      "Casos de autenticación, roles y errores de negocio",
      "Tests de componentes con Vitest en Angular",
    ],
  },
];

function SkillTab({ skill, isActive }) {
  return (
    <TabsTrigger
      value={skill.id}
      title={skill.name}
      className={`hover:cursor-pointer border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
        ${isActive ? "border-accent bg-accent-soft" : "border-transparent data-[state=inactive]:bg-transparent"}`}
    >
      {skill.icon ? (
        <img className={`w-6 transition-all ${isActive ? "" : "opacity-50 grayscale"}`} src={skill.icon} />
      ) : (
        <skill.Icon
          className={`w-6 h-6 transition-colors ${isActive ? "text-accent" : "text-muted"}`}
        />
      )}
    </TabsTrigger>
  );
}

function StackGroup({ title, skills, activeTab, setActiveTab }) {
  return (
    <Tabs
      defaultValue={skills[0].id}
      className="w-full items-center"
      onValueChange={setActiveTab}
    >
      <p className="w-full font-manrope text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-2">
        {title}
      </p>
      <TabsList className="h-auto z-10 bg-white border border-line p-2 flex flex-wrap gap-1 w-full rounded-sm">
        {skills.map((skill) => (
          <SkillTab key={skill.id} skill={skill} isActive={activeTab === skill.id} />
        ))}
      </TabsList>

      {skills.map((skill) => (
        <TabsContent key={skill.id} value={skill.id}>
          <Card className="h-86 justify-start w-full p-3 bg-white border-line rounded-sm shadow-sm">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <CardHeader>
                <CardTitle className="font-lora font-semibold text-ink">
                  {skill.name}
                </CardTitle>
                <CardDescription className="mb-2 font-lora text-body">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="font-lora">
                <ul>
                  {skill.points.map((point) => (
                    <li key={point} className="flex gap-2 mb-2">
                      <Dot />
                      <span className="text-body">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </motion.div>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}

function Stack() {
  const frontend = SKILLS.filter((s) => s.group === "Frontend");
  const backend = SKILLS.filter((s) => s.group === "Backend");
  const [activeFront, setActiveFront] = useState(frontend[0].id);
  const [activeBack, setActiveBack] = useState(backend[0].id);

  return (
    <section id="stack" className="pt-6">
      <div className="flex justify-center xl:justify-start px-4 mb-2">
        <p className="font-lora font-semibold tracking-tight text-ink text-4xl relative inline-block pb-2">
          Stack
          <span className="absolute bottom-0 left-0 h-[3px] w-10 bg-accent" />
        </p>
      </div>
      <div className="flex justify-center xl:justify-start px-4">
        <p className="text-sm mt-2 max-w-md font-lora text-muted text-center xl:text-start">
          Haz <span className="italic">click</span> en cada tecnología para ver más
          detalles sobre mis conocimientos.
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-6 px-4 lg:flex-row lg:items-start">
        <div className="flex-1">
          <StackGroup
            title="Frontend"
            skills={frontend}
            activeTab={activeFront}
            setActiveTab={setActiveFront}
          />
        </div>
        <div className="flex-1">
          <StackGroup
            title="Backend & Testing"
            skills={backend}
            activeTab={activeBack}
            setActiveTab={setActiveBack}
          />
        </div>
      </div>
    </section>
  );
}
export default Stack;
