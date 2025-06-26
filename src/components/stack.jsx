import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";
import { useState } from "react";

function Stack() {
  const [activeTab, setActiveTab] = useState("react");
  return (
    <section id="stack">
      <div className="flex justify-center xl:justify-start xl:w-1/1 lg:justify-center lg:w-1/2">
        <p className="text-sm mt-5 w-1/2 ml-7 font-lora text-center xl:w-1/3">
          Haz <span className="italic">click</span> en cada una de las
          tecnologías para ver más detalles sobre mis conocimientos.
        </p>
      </div>
      <div className="flex flex-col max-w-6xl xl:justify-start lg:flex-row lg:justify-center md:w-screen items-center">
        <Tabs
          defaultValue="react"
          className="w-5/6 items-center mt-1 ml-4 lg:w-2/6"
          onValueChange={(val) => setActiveTab(val)}
        >
          <TabsList className="h-16 z-10 bg-[#ff8e3c] p-2 flex gap-2">
            <motion.div
              animate={{
                scale: activeTab === "react" ? 1.1 : 1,
                opacity: activeTab === "react" ? 1 : 0.5,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <TabsTrigger
                value="react"
                className="hover:cursor-pointer data-[state=inactive]:bg-[#eff0f3]"
              >
                <motion.img
                  className="w-10"
                  src="src/assets/react.svg"
                  initial={{ scale: 0, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                ></motion.img>
              </TabsTrigger>
            </motion.div>
            <motion.div
              animate={{
               scale: activeTab === "javascript" ? 1.1 : 1,
                opacity: activeTab === "javascript" ? 1 : 0.5,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <TabsTrigger
                value="javascript"
                className="hover:cursor-pointer data-[state=inactive]:bg-[#eff0f3]"
              >
                <motion.img
                  className="w-10"
                  src="src/assets/javascript-logo-svgrepo-com.svg"
                  initial={{ scale: 0, rotate: 0, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                ></motion.img>
              </TabsTrigger>
            </motion.div>
            <motion.div
              animate={{
               scale: activeTab === "html" ? 1.1 : 1,
                opacity: activeTab === "html" ? 1 : 0.5,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <TabsTrigger
                value="html"
                className="hover:cursor-pointer data-[state=inactive]:bg-[#eff0f3]"
              >
                <motion.img
                  className="w-10"
                  src="src/assets/html-svgrepo-com.svg"
                  initial={{ scale: 0, rotate: 0, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                ></motion.img>
              </TabsTrigger>
            </motion.div>
            <motion.div
              animate={{
               scale: activeTab === "css" ? 1.1 : 1,
                opacity: activeTab === "css" ? 1 : 0.5,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <TabsTrigger
                value="css"
                className="hover:cursor-pointer data-[state=inactive]:bg-[#eff0f3]"
              >
                <motion.img
                  className="w-10"
                  src="src/assets/css3-logo-svgrepo-com.svg"
                  initial={{ scale: 0, rotate: 0, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                ></motion.img>
              </TabsTrigger>
            </motion.div>
            <motion.div
              animate={{
               scale: activeTab === "tailwind" ? 1.1 : 1,
                opacity: activeTab === "tailwind" ? 1 : 0.5,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <TabsTrigger
                value="tailwind"
                className="hover:cursor-pointer data-[state=inactive]:bg-[#eff0f3]"
              >
                <motion.img
                  className="w-10"
                  src="src/assets/tailwind-svgrepo-com.svg"
                  initial={{ scale: 0, rotate: 0, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                ></motion.img>
              </TabsTrigger>
            </motion.div>
          </TabsList>
          <TabsContent value="react">
            <Card className="h-86 justify-start w-96 p-3 text-ju bg-[#fdf6ef]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              >
                <CardHeader>
                  <CardTitle className="font-manrope">React</CardTitle>
                  <CardDescription className="mb-2 font-lora">
                    Con React creo interfaces de usuario que combinan eficiencia
                    y flexibilidad, usando componentes modulares para diseñar
                    experiencias digitales intuitivas y escalables.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="font-lora">
                    <li className="flex gap-2 mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Uso avanzado de hooks (useState, useEffect,
                        useContext...)
                      </span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>Gestión de estado con Redux y Context API</span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>Manejo de rutas con React Router</span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>Testing con Vitest y React Testing Library</span>
                    </li>
                  </ul>
                </CardContent>
              </motion.div>
            </Card>
          </TabsContent>
          <TabsContent value="javascript">
            <Card className="h-86 justify-start w-96 p-3 bg-[#fdf6ef]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              >
                <CardHeader>
                  <CardTitle className="font-manrope">JavaScript</CardTitle>

                  <CardDescription className="mb-2 font-lora">
                    JavaScript es el lenguaje base que utilizo para dar vida a
                    las aplicaciones web, creando lógica robusta y eficiente que
                    hace que las interfaces sean interactivas y dinámicas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-lora">
                  <ul>
                    <li className="flex gap-2 mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Dominio de ES6+ (arrow functions, destructuring,
                        spread/rest, promesas, async/await)
                      </span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>Manipulación avanzada del DOM y eventos</span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>Programación orientada a objetos y funcional</span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>Consumo y manejo de APIs REST</span>
                    </li>
                  </ul>
                </CardContent>
              </motion.div>
            </Card>
          </TabsContent>
          <TabsContent value="html">
            <Card className="h-86 justify-start w-96 p-3 bg-[#fdf6ef]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              >
                <CardHeader>
                  <CardTitle className="font-manrope">HTML</CardTitle>
                  <CardDescription className="mb-2 font-lora">
                    Tengo conocimiento solido de HTML para estructurar contenido
                    web accesible y semántico, asegurando una base sólida para
                    cualquier proyecto front-end.
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-lora">
                  <ul>
                    <li className="flex gap-2 mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Uso correcto de etiquetas semánticas para mejorar
                        accesibilidad y SEO
                      </span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Estructuración limpia y organizada del contenido
                      </span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Implementación de formularios accesibles y validación
                        básica
                      </span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Integración con CSS y JavaScript para interfaces
                        dinámicas
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </motion.div>
            </Card>
          </TabsContent>
          <TabsContent value="css">
            <Card className="h-86 justify-start w-96 p-3 bg-[#fdf6ef]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              >
                <CardHeader>
                  <CardTitle className="font-manrope">CSS</CardTitle>
                  <CardDescription className="mb-2 font-lora">
                    Diseño interfaces atractivas, responsivas y eficientes,
                    asegurando que se adapten y funcionen bien en cualquier
                    dispositivo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-lora">
                  <ul>
                    <li className="flex gap-2 mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Uso avanzado de Flexbox y Grid para layouts modernos y
                        flexibles
                      </span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>Diseño responsivo</span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>Manejo de preprocesadores como SASS</span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Domino transiciones y animaciones en CSS para crear
                        experiencias visuales fluidas y atractivas.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </motion.div>
            </Card>
          </TabsContent>
          <TabsContent value="tailwind">
            <Card className="h-86 justify-start w-96 p-3 bg-[#fdf6ef]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              >
                <CardHeader>
                  <CardTitle className="font-manrope">Tailwind</CardTitle>
                  <CardDescription className="mb-2 font-lora">
                    Utilizo Tailwind para construir estilos rápidos y
                    consistentes, creando diseños responsivos y personalizados
                    sin salir del flujo de trabajo de desarrollo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-lora">
                  <ul>
                    <li className="flex gap-2 mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Diseño basado en utilidades que agilizan el desarrollo
                      </span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Creación de layouts flexibles con clases de Flexbox y
                        Grid integradas
                      </span>
                    </li>
                    <li className="flex gap-2  mb-1">
                      <img
                        className="w-5 object-contain"
                        src="src/assets/icons8-punto-central-50.png"
                      />
                      <span>
                        Personalización fácil mediante configuración y plugins
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </motion.div>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="w-1/1 flex justify-center  lg:w-1/2 lg:justify-end">
          <motion.img
            className="p-2 w-md object-contain"
            src="src\assets\Untitled design (2) (1).png"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1, type: "tween" }}
          ></motion.img>
        </div>
      </div>
    </section>
  );
}
export default Stack;
