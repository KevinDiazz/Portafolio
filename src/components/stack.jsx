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

const Dot = () => <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#1e3a5f]" />;

const SKILLS = [
  {
    id: "react",
    name: "React",
    icon: "/assets/react.svg",
    group: "Frontend",
    description:
      "Con React creo interfaces que combinan eficiencia y flexibilidad, usando componentes modulares para experiencias digitales intuitivas y escalables.",
    points: [
      "Uso avanzado de hooks (useState, useEffect, useContext...)",
      "Gestión de estado con Redux y Context API",
      "Manejo de rutas con React Router",
      "Testing con Vitest y React Testing Library",
    ],
  },
  {
    id: "angular",
    name: "Angular",
    icon: "/assets/icons8-angular-48.png",
    group: "Frontend",
    description:
      "Con Angular construyo aplicaciones estructuradas y mantenibles, aprovechando su enfoque opinado y su integración nativa con TypeScript.",
    points: [
      "Standalone components y arquitectura por features",
      "Signals y RxJS para estado y programación reactiva",
      "Formularios reactivos con validación",
      "Testing de componentes con Vitest",
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/assets/javascript-logo-svgrepo-com.svg",
    group: "Frontend",
    description:
      "JavaScript es el lenguaje base que utilizo para dar vida a las aplicaciones web, creando lógica robusta y eficiente para interfaces interactivas y dinámicas.",
    points: [
      "Dominio de ES6+ (arrow functions, destructuring, spread/rest, promesas, async/await)",
      "Manipulación avanzada del DOM y eventos",
      "Programación orientada a objetos y funcional",
      "Consumo y manejo de APIs REST",
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "/assets/icons8-typescript-48.png",
    group: "Frontend",
    description:
      "Añado tipado estático a mis proyectos para detectar errores antes de tiempo de ejecución y hacer el código más mantenible y autodocumentado.",
    points: [
      "Interfaces, tipos genéricos y utility types",
      "Tipado de props, hooks y contextos en React",
      "Configuración de tsconfig y modo estricto",
      "Uso en proyectos Angular y Next.js",
    ],
  },
  {
    id: "html",
    name: "HTML",
    icon: "/assets/html-svgrepo-com.svg",
    group: "Frontend",
    description:
      "Estructuro contenido web accesible y semántico, asegurando una base sólida para cualquier proyecto front-end.",
    points: [
      "Uso correcto de etiquetas semánticas para mejorar accesibilidad y SEO",
      "Estructuración limpia y organizada del contenido",
      "Formularios accesibles y validación básica",
      "Integración con CSS y JavaScript para interfaces dinámicas",
    ],
  },
  {
    id: "css",
    name: "CSS",
    icon: "/assets/css3-logo-svgrepo-com.svg",
    group: "Frontend",
    description:
      "Diseño interfaces atractivas, responsivas y eficientes, asegurando que se adapten y funcionen bien en cualquier dispositivo.",
    points: [
      "Uso avanzado de Flexbox y Grid para layouts modernos",
      "Diseño responsivo mobile-first",
      "Manejo de preprocesadores como SASS",
      "Transiciones y animaciones para experiencias visuales fluidas",
    ],
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: "/assets/tailwind-svgrepo-com.svg",
    group: "Frontend",
    description:
      "Utilizo Tailwind para construir estilos rápidos y consistentes, creando diseños responsivos y personalizados sin salir del flujo de trabajo.",
    points: [
      "Diseño basado en utilidades que agilizan el desarrollo",
      "Layouts flexibles con clases de Flexbox y Grid integradas",
      "Personalización mediante configuración y plugins",
      "Componentes reutilizables con shadcn/ui",
    ],
  },
  {
    id: "node",
    name: "Node.js",
    icon: "/assets/icons8-node-js-48.png",
    group: "Backend",
    description:
      "Construyo APIs con Node.js pensadas para escalar: capa de rutas, controladores y servicios bien separados, con manejo de errores centralizado.",
    points: [
      "APIs REST con autenticación JWT y control de roles",
      "Arquitectura por capas (rutas, controladores, servicios)",
      "Manejo de errores y middlewares centralizados",
      "Variables de entorno y despliegue en Render",
    ],
  },
  {
    id: "express",
    name: "Express",
    icon: "/assets/icons8-express-js-50.png",
    group: "Backend",
    description:
      "Express es mi framework de referencia para levantar APIs rápido, con middlewares propios para auth, validación y CORS entre entornos.",
    points: [
      "Middlewares de autenticación y autorización por rol",
      "Validación de datos de entrada",
      "CORS configurado para local, Vercel y Render",
      "Endpoints CRUD documentados y consistentes",
    ],
  },
  {
    id: "java",
    name: "Java",
    icon: "/assets/icons8-java-48.png",
    group: "Backend",
    description:
      "Java es una de las bases de mi formación en el ciclo de DAW: programación orientada a objetos sólida y buenas prácticas de diseño de software.",
    points: [
      "Programación orientada a objetos (herencia, interfaces, polimorfismo)",
      "Colecciones, streams y programación funcional en Java 8+",
      "Persistencia con JDBC/JPA",
      "Buenas prácticas y patrones de diseño",
    ],
  },
  {
    id: "spring",
    name: "Spring",
    icon: "/assets/icons8-spring-boot-48.png",
    group: "Backend",
    description:
      "Con Spring Boot construyo APIs REST en Java de forma estructurada, aprovechando inyección de dependencias y su ecosistema para persistencia y seguridad.",
    points: [
      "APIs REST con Spring Boot y Spring MVC",
      "Inyección de dependencias e inversión de control",
      "Persistencia con Spring Data JPA / Hibernate",
      "Seguridad y autenticación con Spring Security",
    ],
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: "/assets/icons8-prisma-orm-50.png",
    group: "Backend",
    description:
      "Modelo mis bases de datos con Prisma: schemas claros, migraciones versionadas y queries tipadas de extremo a extremo.",
    points: [
      "Modelado de esquemas y relaciones (1:N, N:N)",
      "Migraciones versionadas y generación automática del cliente",
      "Queries tipadas y transacciones atómicas",
      "Seed de datos para entornos de desarrollo",
    ],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "/assets/icons8-postgresql-48.png",
    group: "Backend",
    description:
      "Diseño el modelo relacional pensando en integridad y rendimiento, usando PostgreSQL en producción sobre Neon.",
    points: [
      "Diseño de esquemas relacionales normalizados",
      "Índices y constraints para integridad de datos",
      "Consultas optimizadas para operaciones concurrentes",
      "Backups y entornos gestionados con Neon",
    ],
  },
  {
    id: "testing",
    name: "Testing",
    icon: null,
    Icon: TestTube2,
    group: "Backend",
    description:
      "Escribo tests para no romper lo que ya funciona: desde componentes en el frontend hasta endpoints completos en el backend.",
    points: [
      "Tests de integración de la API con Jest y Supertest",
      "Tests de componentes con Vitest y React Testing Library",
      "Casos de autenticación, roles y flujos de error",
      "Tests como parte del flujo antes de desplegar",
    ],
  },
];

function SkillTab({ skill, isActive }) {
  return (
    <TabsTrigger
      value={skill.id}
      title={skill.name}
      className={`hover:cursor-pointer border transition-colors duration-200
        ${isActive ? "border-[#1e3a5f] bg-[#e8eef4]" : "border-transparent data-[state=inactive]:bg-transparent"}`}
    >
      {skill.icon ? (
        <img className={`w-6 transition-all ${isActive ? "" : "opacity-50 grayscale"}`} src={skill.icon} />
      ) : (
        <skill.Icon
          className={`w-6 h-6 transition-colors ${isActive ? "text-[#1e3a5f]" : "text-[#8a8782]"}`}
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
      <p className="w-full font-manrope text-xs font-semibold text-[#1e3a5f] uppercase tracking-[0.15em] mb-2">
        {title}
      </p>
      <TabsList className="h-auto z-10 bg-white border border-[#e2e0da] p-2 flex flex-wrap gap-1 w-full rounded-sm">
        {skills.map((skill) => (
          <SkillTab key={skill.id} skill={skill} isActive={activeTab === skill.id} />
        ))}
      </TabsList>

      {skills.map((skill) => (
        <TabsContent key={skill.id} value={skill.id}>
          <Card className="h-86 justify-start w-full p-3 bg-white border-[#e2e0da] rounded-sm">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <CardHeader>
                <CardTitle className="font-lora font-semibold text-[#1a1a1a]">
                  {skill.name}
                </CardTitle>
                <CardDescription className="mb-2 font-lora text-[#3f3f3f]">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="font-lora">
                <ul>
                  {skill.points.map((point) => (
                    <li key={point} className="flex gap-2 mb-2">
                      <Dot />
                      <span className="text-[#3f3f3f]">{point}</span>
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
        <p className="font-lora font-semibold tracking-tight text-[#1a1a1a] text-4xl relative inline-block pb-2">
          Stack
          <span className="absolute bottom-0 left-0 h-[3px] w-10 bg-[#1e3a5f]" />
        </p>
      </div>
      <div className="flex justify-center xl:justify-start px-4">
        <p className="text-sm mt-2 max-w-md font-lora text-[#6b6a67] text-center xl:text-start">
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
