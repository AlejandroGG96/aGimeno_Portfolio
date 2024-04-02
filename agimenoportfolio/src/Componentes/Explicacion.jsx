//
import libro from '../assets/Imagenes/deepWork.jpg'

const Explicacion = ()=>{

    const shadowImagen = {
        boxShadow: '0px 0px 50px black'
    }

    const textoTipo = "text-2xl text-neutral-100 text-center px-8"

    return(
        <section className="w-screen p-10 grid grid-cols-2 px-14">
            <div>
                <h1 className="text-7xl text-neutral-100 font-semibold">Me presento...</h1>
                <img src={libro} style={shadowImagen} alt="Concentrate de CalNewport" 
                className='w-[60%] mx-auto mt-20 rounded-2xl' />
            </div>
            <div className="flex flex-col gap-5 text-justify pt-20">
                <p className={textoTipo}>
                    Hola y gracias por dedicar tu tiempo a conocer un poco sobre mí, mis capacidades y conocimientos...</p>

                <p className={textoTipo}>Me llamo Alejandro Gimeno y tengo 27 años. Es increible porque yo era electricista, durante cuatro años y medio, y vendedor durante otro año y medio, siempre me gustarón las ventas, la electricidad no.</p>

                <p className={textoTipo}>
                    Pero había algo que necesitaba descubrir todavía, y era una profesión, probablemente complicada y desafiante, donde poder pasar los días aprendiendo, desarrollandome, entrenando, enseñando a otros conforme mis conocimientos aumentasen, y que realmente me llenase por dentro.
                </p>

                <p className={textoTipo}
                >Es ahí cuando entra mi compañero de piso Samuel de mi misma edad, amigo del colegio, me regaló un libro por mi último cumpleños, y dirás... De programación? NO, jeje... De concentración.</p>
    
                <p className={textoTipo}
                >En este libro, se hablaba de los estados Profundos de concentración y todos los beneficios que eso conlleva, tanto en la mejora laboral, como en la productividad, la capacidad imaginativa, la velocidad de trabajo y una gran sensación de satisfación personal, que sinceramente, es lo que más valor tiene...</p>
            </div>


        </section>




    )

}

export default Explicacion;