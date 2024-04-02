import alejandro from '../assets/Imagenes/alejandro.jpg'

const Hero=()=>{

    const imagenHero = {
        backgroundImage: 'url(' + alejandro + ')',
        backgroundPosition: 'center',
        boxShadow: '0px 0px 40px teal',
    }

    const estiloTitulo ={
        textShadow: '0px 0px 8px black',
        boxShadow: '0px 0px 15px teal'
    }

    return(
        <section className="w-screen h-screen flex flex-col font-[Arial] font-semibold justify-center items-center">
            <div 
            style={imagenHero}
            className=" w-[70%] rounded-xl p-5 h-[80%] flex flex-col gap-5 bg-no-repeat bg-cover justify-center ">
                <h1 
                style={estiloTitulo}
                className=" relative bottom-28 text-7xl drop-shadow-xl bg-teal-400/80  p-10 w-fit px-24 rounded-2xl right-40 text-neutral-100  ">{}BIENVENIDO A<br/> MI PORTFOLIO</h1>
            </div>
        </section>
    )

}

export default Hero;