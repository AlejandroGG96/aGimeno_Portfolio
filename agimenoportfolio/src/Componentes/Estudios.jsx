import htmlIcon from '../assets/Imagenes/htmlIcon.png'
import cssIcon from '../assets/Imagenes/cssIcon.png'
import javascriptIcon from '../assets/Imagenes/javascriptIcon.png'
import reactIcon from '../assets/Imagenes/reactIcon.png'
import pythonIcon from '../assets/Imagenes/pythonIcon.png'
import nodejsIcon from '../assets/Imagenes/nodeIconTransparente.png'
import nextIcon from '../assets/Imagenes/nextIcon.jpg'
import sqlIcon from '../assets/Imagenes/sqlIcon.png'
import zustandIcon from '../assets/Imagenes/zustandIcon.png'
import astroIcon from  '../assets/Imagenes/astroIcon.png'

import certificado1 from '../assets/Imagenes/Certificado1.jpg'
import certificado2 from '../assets/Imagenes/Certificado2.jpg'
import certificado3 from '../assets/Imagenes/Certificado3.jpg'
import certificado4 from '../assets/Imagenes/Certificado4.jpg'
import certificado5 from '../assets/Imagenes/Certificado5.jpg'
import certificado6 from '../assets/Imagenes/Certificado6.jpg'
import certificado7 from '../assets/Imagenes/Certificado7.jpg'

const Estudios = ()=>{

    const textoTipo = "text-lg lg:text-2xl text-neutral-100 lg:px-8"
    const estiloIconos = 'w-[40%] lg:w-[14%] border-[1px] p-5 border-neutral-100/20 rounded-[15px] hover:scale-[1.1] transition-all cursor-pointer hover:bg-white/10 aspect-square hover:border-teal-400 '


    return(
        <section className="w-screen lg:px-16 flex flex-col px-6 items-center">
            <div className="flex flex-col lg:gap-3 text-center lg:text-justify">
{/* Conocimientos y aptitudes texto sobre mis estudios */}
            <h3 className="text-4xl lg:text-6xl text-neutral-100 font-semibold ">Conocimientos y Aptitudes</h3>ç
            <p className={textoTipo}>
                    Mis estudios en este sector són rápidos así que empezaré por ahí, a fecha de hoy estoy cerca de terminar un Certificado Profesional de nivel 2 en un curso de Labora sobre Creación y Publicación de Páginas WEB, totalmente válido por el BOE y el Ministerio de Educación.</p>
            
            <p className={textoTipo}>
                    A fecha que estes leyendo esto, no se si ya estaré dentro o no, pero voy a cursar el FP Superior DAW, Desarrollo de Aplicaciones Multiplataforma, porque aunque nunca haya sido un gran fan de las enseñanzas públicas, ya que creo que todo puede aprenderse por uno mismo, creo que es importante, y planeo cursarlo semi-presencial para poder compaginarlo con un trabajo.</p>
                    
            <p className={textoTipo}>
                    Donde más he aprendido es vía Youtube, Libros, freeCodeCamp, y de manera Autodidacta.</p>            
            </div>

{/* Lenguajes que actualmente ya tengo aprendidos */}
            <h3 className="text-4xl lg:text-5xl text-neutral-100 font-semibold mb-5 text-center lg:my-20 my-8">Lo que ya tengo aprendido</h3>
            <div className='flex flex-wrap justify-center w-screen gap-5 lg:gap-20 py-5 lg:py-10'>
                <img className={estiloIconos} src={htmlIcon} alt="" />
                <img className={estiloIconos} src={cssIcon} alt="" />
                <img className={estiloIconos} src={javascriptIcon} alt="" />
                <img className={estiloIconos} src={reactIcon} alt="" />
                <img className={estiloIconos} src={pythonIcon} alt="" />
            </div>
            <p className={`${textoTipo} text-center `}>
                    Mis puntos fuertes son HTML, CSS, JavaScript y React que es donde más he puesto el foco, ya que para empezar en este Sector normalmente se empieza por el Front-End, de Python se la mayoría de conceptos pero como quiza se distancia más de crear Webs, porque para eso ya tenemos a JavaScript es lo que menos he tocado pero claramente esta en mi mente aprender más ya que me encanta la Sintaxis que tiene, la increible variedad de usos y el impulso que tiene a día de hoy para el mercado Laboral.</p>


{/* CERTIFICADOS DE SOLO LEARN */}
            <h3 className=" text-4xl lg:text-5xl text-neutral-100 font-semibold mb-5 text-center py-6 lg:my-20">Certificados Sololearn</h3>
            <div className='w-[100%] lg:py-10 grid lg:grid-cols-4 place-items-center gap-5'>
                <img className='w-[85%] border-[1px] p-5 border-neutral-100/20 rounded-[15px] hover:scale-[1.1] transition-all cursor-pointer hover:bg-white/10 hover:border-teal-400' src={certificado1} alt="" />
                <img className='w-[85%] border-[1px] p-5 border-neutral-100/20 rounded-[15px] hover:scale-[1.1] transition-all cursor-pointer hover:bg-white/10 hover:border-teal-400' src={certificado2} alt="" />
                <img className='w-[85%] border-[1px] p-5 border-neutral-100/20 rounded-[15px] hover:scale-[1.1] transition-all cursor-pointer hover:bg-white/10 hover:border-teal-400' src={certificado3} alt="" />
                <img className='w-[85%] border-[1px] p-5 border-neutral-100/20 rounded-[15px] hover:scale-[1.1] transition-all cursor-pointer hover:bg-white/10 hover:border-teal-400' src={certificado4} alt="" />
              </div>
              <div className='w-[100%] lg:w-[80%] py-5 grid lg:grid-cols-3 self-center place-items-center'>
                <img className='w-[85%] border-[1px] p-5 border-neutral-100/20 rounded-[15px] hover:scale-[1.1] transition-all cursor-pointer hover:bg-white/10 hover:border-teal-400' src={certificado5} alt="" />
                <img className='w-[85%] border-[1px] p-5 border-neutral-100/20 rounded-[15px] hover:scale-[1.1] transition-all cursor-pointer hover:bg-white/10 hover:border-teal-400' src={certificado6} alt="" />            
                <img className='w-[85%] border-[1px] p-5 border-neutral-100/20 rounded-[15px] hover:scale-[1.1] transition-all cursor-pointer hover:bg-white/10 hover:border-teal-400' src={certificado7} alt="" />
              </div>

{/* Lo que quiero seguir aprendiendo */}
              <h3 className="text-4xl lg:text-5xl text-neutral-100 font-semibold lg:mb-5 text-center my-3 lg:my-20">Lo que voy a aprender</h3>
            <div className='flex flex-wrap justify-center w-screen gap-5 lg:gap-20 py-5 lg:py-10'>
                <img className={estiloIconos} src={nodejsIcon} alt="" />
                <img className={estiloIconos} src={nextIcon} alt="" />
                <img className={estiloIconos} src={zustandIcon} alt="" />
                <img className={estiloIconos} src={sqlIcon} alt="" />
                <img className={estiloIconos} src={astroIcon} alt="" />
            </div>
        </section>
    )

}

export default Estudios;