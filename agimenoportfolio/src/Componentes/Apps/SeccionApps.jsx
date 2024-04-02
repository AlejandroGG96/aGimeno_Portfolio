
import tresRayaApp from '../../assets/Imagenes/tresRayaApp.jpg'
import calculadoraApp from '../../assets/Imagenes/CalcTime.jpg'
import progLoveApp from '../../assets/Imagenes/progLoveApp.jpg'
import candleStickMarket from '../../assets/Imagenes/candleStickMarket.jpg'
import fullTasksApp from '../../assets/Imagenes/fullTasksApp.jpg'
import spartanApp from '../../assets/Imagenes/spartanApp.jpg'


import TresEnRaya from './TresEnRaya'

const SeccionApps = ()=>{
    

    return(
            <section className="lg:p-8 lg:px-4 flex flex-col  lg:gap-18 justify-center h-full gap-5">
                <h1 className="text-4xl lg:text-6xl text-neutral-100 font-semibold text-center">Proyectos</h1>
                <article className="h-screen lg:w-screen grid lg:grid-cols-[10%,90%] items-center lg:gap-5">
                    <nav className="h-[15vh] lg:h-[90%] lg:w-[100%] border lg:rounded-xl lg:border-neutral-100/10 flex lg:grid p-2 lg:p-4 gap-2 overflow-auto ">
                        
                        <ul className='flex lg:flex-col gap-4 lg:gap-2 px-5 lg:px-0'>
                            <li className='aspect-square'><img  src={tresRayaApp} className="w-[100%] border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li className='aspect-square'><img  src={calculadoraApp} className="w-[100%]  border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li className='aspect-square'><img  src={progLoveApp}className="w-[100%]  border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li className='aspect-square'><img  src={candleStickMarket}className="w-[100%]  border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li className='aspect-square'><img  src={fullTasksApp}className="w-[100%]  border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li className='aspect-square'><img  src={spartanApp}className="w-[100%]  border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                        </ul>

                    </nav>
                    <section className=' h-[90vh] lg:h-[95%]  lg:w-[95%] border-[1px] border-neutral-100/10 box-border rounded-xl'>
                        <TresEnRaya />
                    </section> 
                </article>

            </section>
    )


}

export default SeccionApps