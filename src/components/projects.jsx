import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
function Projects() {
  return (
    <section id="proyectos">
      <p className="mb-5 mt-3 font-manrope font-extrabold tracking-tight text-[#2a3644] text-center text-5xl lg:ml-12 xl:text-start lg:text-center">
        PROYECTOS
      </p>
      <div className="mt-4 ml-4 flex flex-wrap gap-8 md:justify-evenly justify-center ">
        <Card className="w-80 flex justify-between order-1 bg-[#fdf6ef] transition duration-300 ease-in-out transform rounded-xl hover:border-[#d95d39] hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="font-manrope">
              Rueda de Emociones con D3.js
            </CardTitle>
            <CardDescription className="h-20 font-lora">
              La Rueda de Emociones es un proyecto web interactivo diseñado para
              ayudar a los usuarios a identificar y comprender mejor sus
              emociones.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <img
              className="w-full h-48 scale-150 object-cover"
              src="\assets\21d99311-eb75-48ee-a78d-10a83beb91bb.png"
            ></img>
          </CardContent>
          <CardFooter className="flex gap-2 justify-between">
            <a href="https://rueda-de-emociones.vercel.app/" target="_blank">
              <Button className="font-lora  p-5 text-md text-black bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer">
                <img
                  className="w-4 object-contain"
                  src="\assets\enlace.png"
                ></img>
                Preview
              </Button>
            </a>
            <a
              href="https://github.com/KevinDiazz/ruedaDeEmociones"
              target="_blank"
            >
              <Button className="w-24 p-5 text-black text-md overflow-hidden font-lora bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer">
                <img
                  className="w-6 rounded-full object-contain"
                  src="/assets/icons8-github-96.png"
                ></img>
                Code
              </Button>
            </a>
          </CardFooter>
        </Card>
         <Card className="w-80 flex justify-between order-2 bg-[#fdf6ef] transition duration-300 ease-in-out transform rounded-xl hover:border-[#d95d39] hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="font-manrope">Web Videojuegos</CardTitle>
            <CardDescription className="h-20 font-lora">
              Aplicación web de videojuegos desarrollada con React y la API de RAWG, que permite explorar, filtrar y gestionar juegos favoritos.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <img
              className="w-full h-48 scale-135 object-cover"
              src="\assets\Captura de pantalla 2025-06-25 190334.png"
            ></img>
          </CardContent>
          <CardFooter className="flex gap-2 justify-between">
            <a
              href="https://ggames-psi.vercel.app/"
              target="_blank"
            >
              <Button className="font-lora p-5 text-md text-black bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer">
              <img
                  className="w-4 object-contain"
                  src="\assets\enlace.png"
                ></img>
                Preview
              </Button>
            </a>
            <a
              href="https://github.com/KevinDiazz/ggames"
              target="_blank"
            >
              <Button className="w-24 p-5 text-black font-lora bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer">
              <img
                  className="w-6 rounded-full object-contain"
                  src="/assets/icons8-github-96.png"
                ></img>
                Code
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="w-80 flex justify-between order-3 bg-[#fdf6ef] transition duration-300 ease-in-out transform rounded-xl hover:border-[#d95d39] hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="font-manrope">
              Registro de Datos + PDF
            </CardTitle>
            <CardDescription className="h-20 font-lora">
              Software enfocado para llevar un registro de la recolección de
              frutas, registra información a traves de un formulario y genera un
              archivo PDF con los datos.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <img
              className="w-full h-48 scale-135 object-cover"
              src="\assets\Captura de pantalla 2023-09-03 003015.png"
            ></img>
          </CardContent>
          <CardFooter className="flex gap-2 justify-between">
            <a
              href="https://registrador-de-datos-bjebnubuu-kevin-diazs-projects-0a2b1ac2.vercel.app/"
              target="_blank"
            >
              <Button className="font-lora  p-5 text-md text-black bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer">
                <img
                  className="w-4 object-contain"
                  src="\assets\enlace.png"
                ></img>
                Preview
              </Button>
            </a>
            <a
              href="https://github.com/KevinDiazz/RegistradorDeDatos"
              target="_blank"
            >
              <Button className="w-24 p-5 text-black font-lora bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer">
                <img
                  className="w-6 rounded-full object-contain"
                  src="/assets/icons8-github-96.png"
                ></img>
                Code
              </Button>
            </a>
          </CardFooter>
        </Card>
       <Card className="w-80 flex justify-between order-6 bg-[#fdf6ef] transition duration-300 ease-in-out transform rounded-xl hover:border-[#d95d39] hover:-translate-y-1">
  <CardHeader>
    <CardTitle className="font-manrope">La Pizzería</CardTitle>
    <CardDescription className="h-32 font-lora overflow-hidden">
      🍕 Mi primer proyecto Full Stack: una aplicación web interactiva que
      simula una pizzería. Personaliza pizzas visualmente, agrégalas a una lista
      y explora un backend con endpoints CRUD en Node.js.
    </CardDescription>
  </CardHeader>

  <CardContent className="overflow-hidden">
    <img
      className="w-full h-48 scale-135 object-cover"
      src="/assets/lapizzeria-preview.png"
      alt="Vista previa del proyecto La Pizzería"
    />
  </CardContent>

  <CardFooter className="flex gap-2 justify-between items-end">
    <a
      href="https://lnkd.in/dP22V7Hk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="font-lora p-5 text-md text-black bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer flex items-center gap-2">
        <img
          className="w-4 object-contain"
          src="/assets/enlace.png"
          alt="Icono de enlace"
        />
        Demo
      </Button>
    </a>

    <a
      href="https://github.com/KevinDiazz/La-Pizzeria"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="w-24 p-5 text-black font-lora bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer flex items-center gap-2">
        <img
          className="w-6 rounded-full object-contain"
          src="/assets/icons8-github-96.png"
          alt="Icono de GitHub"
        />
        Code
      </Button>
    </a>
  </CardFooter>
</Card>
        <div className="w-80 flex flex-col gap-3 justify-center order-6 md:order-5 bg-[#fff8f2]">
          <h2 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-start ml-7 lg:text-5xl font-manrope text-[#fea564]">
            ¿QUIERES<br></br> <span className="ml-20 text-[#de495a]">VER</span>
            <br></br>
            <span className="ml-30 text-[#2a3644]"> MÁS?</span>
          </h2>
          <p className="text-md text-muted-foreground text-center mb-3 font-lora">
            Explora más proyectos y contribuciones en mi perfil de GitHub.
          </p>
          <a
            href="https://github.com/KevinDiazz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2a3644] font-medium hover:text-[#d9376e] font-lora"
          >
            <div className="flex flex-col items-center  gap-2">
              <img
                className="w-16 rounded-full"
                src="\assets\icons8-github-96.png"
                alt=""
              />
              Visitar GitHub
            </div>
          </a>
        </div>
        <Card className="w-80 flex font-lora justify-between order-4 bg-[#fdf6ef] transition duration-300 ease-in-out transform rounded-xl hover:border-[#d95d39] hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="font-manrope">
              Web restaurante + sistema reservas
            </CardTitle>
            <CardDescription>
              Este proyecto es una aplicación web construida con React para
              gestionar reservas de mesas en el restaurante. La aplicación es
              responsiva y utiliza diferentes características de React
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <img
              className="w-full h-48  object-cover"
              src="/assets/Captura de pantalla 2023-10-24 182556.png"
            ></img>
          </CardContent>
          <CardFooter className="flex gap-2 justify-between">
            <a href="https://litle-lemon-amber.vercel.app/" target="_blank">
              <Button className="font-lora  p-5 text-md text-black bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer">
                <img
                  className="w-4 object-contain"
                  src="\assets\enlace.png"
                ></img>
                Preview
              </Button>
            </a>
            <a href="https://github.com/KevinDiazz/LitleLemon" target="_blank">
              <Button className="w-24 p-5 text-black font-lora bg-[#ff8e3c] hover:bg-[#fea564] hover:shadow-black/25 hover:cursor-pointer">
                <img
                  className="w-6 rounded-full object-contain"
                  src="/assets/icons8-github-96.png"
                ></img>
                Code
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
export default Projects;
