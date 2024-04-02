import alejandro from '../assets/Imagenes/alejandro.jpg'
import Header from './Header'

const Hero=()=>{

    const imagenHero = {
        backgroundImage: 'url(' + alejandro + ')',
        backgroundPosition: 'center',
        boxShadow: '0px 0px 40px teal'
    }

    const estiloTitulo ={
        textShadow: '0px 0px 8px black',
        boxShadow: '0px 0px 15px teal'
    }

    return(
        <section className="w-screen h-[50vh] lg:h-screen flex flex-col font-[Arial] font-semibold lg:justify-center items-center">
            <Header />
            <div 
            style={imagenHero}
            className="w-[100%] bg-contain lg:w-[70%] rounded-xl p-5 h-full lg:h-[80%] flex flex-col gap-5 bg-no-repeat lg:bg-cover justify-center ">
                <h1 
                style={estiloTitulo}
                className=" relative  lg:bottom-28  lg:text-7xl drop-shadow-xl bg-teal-400/80 px-10 py-2 rounded-md  lg:p-10 w-fit lg:px-24 lg:rounded-2xl lg:right-40 right-6 bottom-6  text-neutral-100  ">{}BIENVENIDO A<br/> MI PORTFOLIO</h1>
            </div>
        </section>
    )

}

export default Hero;