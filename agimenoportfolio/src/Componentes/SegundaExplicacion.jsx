//
import programacion from '../assets/Imagenes/programacion.jpg'

const SegundaExplicacion = ()=>{

    const shadowImagen = {
        boxShadow: '0px 0px 50px black'
    }

    const textoTipo = "text-lg lg:text-2xl text-neutral-100 text-center lg:px-8"

    const estiloTitulo ={
        textShadow: '0px 0px 20px black'

    }

    return(
        
        <section className="w-screen grid lg:grid-cols-2 px-6 lg:px-14 lg:mb-28 gap-10">
            <h1 className=" lg:col-span-2 text-4xl lg:text-7xl text-neutral-100 font-semibold text-center lg:mb-8">Llega la Programación y Desarrollo...</h1>
            <img 
                style={shadowImagen}
                src={programacion} alt="Cocentrate de Cal Newport" 
                className='rounded-2xl w-[90%] lg:w-[55%] mx-auto self-center' />
            <div className="flex flex-col gap-5 text-justify justify-start">
                <p className={textoTipo}>
                    Aquí es donde entra la Programación y el Desarrollo Web, en este libro contaban que era un trabajo no complicado si no delicado, que te obligaba a sumirte en un estado de profundidad, fue ahí cuando sin tener ni idea, y sin saber que me iba a encontrar, empecé a investigar...</p>
                <p className={textoTipo}>No se cuando estés leyendo esto, pero cuando escribo estas líneas estamos en Marzo de 2024, y la información que llevo acumulada y aprendida en tres meses y medio que llevo estudiando no tiene ni sentido, simplemente me ha enamorado este Mundo.</p>
                <p className={textoTipo}>No se si al final podré imprimir en este Portfolio todos mis conocimientos pero lo voy a intentar, además de actualizarlo constantemente, porque voy aprendiendo cosas nuevas cada día, como si de ir al Gimnasio o hacer una dieta se tratase, además de practicar y subir contenido Gratuito en las redes sociales de Youtube y Twitch las cuales puedes ojear también por si quieres saber un poco más de mi.</p>
                <p className={textoTipo}>Debajo de estas líneas te hablare un poco sobre mis conocimientos actuales, lo que me planteo aprender, lo que me planteo reforzar, hablaremos sobre mis estudios o títulos, y intentaré expresar que es lo que me gustaría hacer o que tipo de puesto me gustaría desarrollar.</p>
                <p className='text-3xl lg:text-4xl font-semibold text-teal-300 text-center px-8'
                style={estiloTitulo}
                >Sigue leyendo para ver los Proyectos</p>
                <div className='mt-10 border-[1px] lg:hidden border-neutral-100/30' />
            </div>
               
        </section>




    )

}

export default SegundaExplicacion;