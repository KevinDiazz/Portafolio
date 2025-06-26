import "./styles/App.css";
import "./styles/index.css";
import Header from "./components/header";
import AboutMe from "./components/infoAboutMe";
import Stack from "./components/stack";
import Projects from "./components/projects";
import Contacto from "./components/contacto";
import { Separator } from "@/components/ui/separator";
import Footer from "./components/footer";
function App() {
  return (
    <div className="min-h-screen bg-[#fff8f2]">
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <main>
        <AboutMe></AboutMe>
        <Stack></Stack>
        <Separator className="mt-5 bg-[#ff8e3c]"></Separator>
        <Projects></Projects>
        <Separator className="mt-5 bg-[#ff8e3c]"></Separator>
        <Contacto></Contacto>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
