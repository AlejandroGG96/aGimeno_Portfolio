
import tresRayaApp from '../../assets/Imagenes/tresRayaApp.jpg'
import calculadoraApp from '../../assets/Imagenes/CalcTime.jpg'
import progLoveApp from '../../assets/Imagenes/progLoveApp.jpg'
import candleStickMarket from '../../assets/Imagenes/candleStickMarket.jpg'
import fullTasksApp from '../../assets/Imagenes/fullTasksApp.jpg'
import spartanApp from '../../assets/Imagenes/spartanApp.jpg'


import TresEnRaya from './TresEnRaya'

const SeccionApps = ()=>{
    

    return(
            <section className="p-8 px-4 flex flex-col gap-24 justify-center item">
                <h1 className="text-6xl text-neutral-100 font-semibold text-center">Proyectos</h1>
                <article className="h-screen w-screen grid grid-cols-[10%,90%] items-center gap-5">
                    <nav className="h-[90%] w-[100%] border rounded-xl border-neutral-100/10  grid p-4 gap-2  overflow-auto">
                        
                        <ul className='flex flex-col gap-2'>
                            <li><img  src={tresRayaApp} className="border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li><img  src={calculadoraApp} className="border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li><img  src={progLoveApp}className="border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li><img  src={candleStickMarket}className="border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li><img  src={fullTasksApp}className="border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                            <li><img  src={spartanApp}className="border-[1px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li>
                        </ul>

                    </nav>
                    <section className='h-[95%] w-[95%] border-[1px] border-neutral-100/10 box-border rounded-xl'>
                        <TresEnRaya />
                    </section> 
                </article>

            </section>
    )


}

export default SeccionApps