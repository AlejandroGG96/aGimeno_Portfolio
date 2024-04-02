
import Hero from "./Hero";
import Explicacion from "./Explicacion";
import SegundaExplicacion from "./SegundaExplicacion";
import Estudios from "./Estudios";
import SeccionApps from "./Apps/SeccionApps";

const HomePage=()=>{

   
    
    return(
        <main className="flex flex-col gap-16 box-border font-[Arial] overflow-hidden bg-gradient-to-b from-gray-950 via-gray-950 to-teal-800">
            <Hero />
            <Explicacion />
            <SegundaExplicacion />
            <Estudios />
            <SeccionApps />
        </main>



    )
}

export default HomePage;