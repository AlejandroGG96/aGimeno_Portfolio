import { useState } from "react";
import curriculumImagen from '../assets/Imagenes/Curriculum.jpg'


const Header =()=>{

    const [curriculum, setCurriculum] = useState(false)
    const [posicionCurriculum, setPosicionCurriculum] = useState(window.innerWidth * 2 )

    const mostrarCurriculum=()=>{
    setCurriculum(!curriculum);
    setPosicionCurriculum(curriculum ? window.innerWidth * 5 : (window.innerWidth * 0))
    }



    

    return(

        <header className=" justify-between fixed lg:absolute top-0 h-[8vh] w-[100vw] border-b bg-black/75 border-teal-400  z-50 flex items-center font-mono p-3 px-4 lg:px-12">
                    <h1 className="text-neutral-100 text-lg lg:text-2xl">Alejandro Gimeno</h1>
                    <button 
                    onClick={mostrarCurriculum}
                    className="lg:text-3xl text-xl flex items-center  border-[2px] p-2 h-[6vh] rounded-lg border-neutral-100/40 hover:bg-white/40
                     hover:border-teal-400 z-50">{ curriculum ? '❌' : '📋'}</button>
                     <article 
                     style={{
                    left: `${posicionCurriculum}px`
                     }}
                     className={` ${curriculum ? 'opacity-100':'opacity-0'} transition-all fixed lg:w-[100vw] lg:h-[100vh] left-0 bottom-0 h-screen my-auto bg-black/80 flex flex-col justify-center items-center z-20`}>
                        <img  src={curriculumImagen} className="lg:w-[30vw] w-[90%]" alt="" />
                        
                        <div className="text-center flex lg:flex-row gap-3 lg:gap-6 relative top-6">
                            <button className="bg-blue-600 text-md border-2 text-neutral-100 py-3 px-6 rounded-lg  hover:bg-blue-400 hover:scale-[1.1] transition-all"><a href="https://www.linkedin.com/in/alejandro-gimeno-garc%C3%ADa-6b8910200/">Ir a LinkdIn</a>
                            </button>
                            <button className="bg-neutral-600 text-md border-2 text-neutral-100 py-3 px-6 rounded-lg  hover:bg-neutral-300 hover:scale-[1.1] transition-all"><a href="https://github.com/AlejandroGG96/aGimeno_Portfolio">Ir a GitHub</a></button>
                        </div>
                     </article>
        </header>


    )

}

export default Header;