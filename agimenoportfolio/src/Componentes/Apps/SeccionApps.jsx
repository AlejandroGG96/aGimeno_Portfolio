import { Route, Routes, Link } from 'react-router-dom'

import tresRayaApp from '../../assets/Imagenes/tresRayaApp.jpg'
import calculadoraApp from '../../assets/Imagenes/CalcTime.jpg'
import proLoveApp from '../../assets/Imagenes/progLoveApp.jpg'
import candleStickMarket from '../../assets/Imagenes/candleStickMarket.jpg'
import fullTasksApp from '../../assets/Imagenes/fullTasksApp.jpg'
import spartanApp from '../../assets/Imagenes/spartanApp.jpg'


import TresEnRaya from './TresEnRaya'
import FullTaskApp from './FullTaskApp/FullTaskApp'
import CalculadoraApp from './CalculadoraApp'
import ProLoveApp from './ProLoveApp'
import CandleStickMarket from './CandleStickMarket'
import SpartanApp from './SpartanApp'

const SeccionApps = ()=>{
    

    return(
            <section className="lg:p-8 lg:px-4 flex flex-col  lg:gap-18 justify-center h-full gap-5">
                <h1 className="text-4xl lg:text-6xl text-neutral-100 font-semibold text-center">Proyectos</h1>
                <p className='text-lg text-neutral-100 text-center border-2 border-neutral-100/30 bg-black/20 w-[90%] rounded-lg self-center py-2'>Toca en cada uno de los iconos para ver pequeños proyectos individuales.</p>
                <article className="h-screen lg:w-screen grid lg:grid-cols-[10%,90%] items-center lg:gap-5">
                    <nav className=" lg:h-[95%] lg:w-[100%] lg:border lg:rounded-xl border-neutral-100/40 flex lg:grid lg:p-4 gap-1 overflow-auto ">
                        
                        <ul className='flex lg:flex-col gap-2 lg:gap-2 px-2 lg:px-0'>
                           <Link to='/'><li className='aspect-square'><img  src={tresRayaApp} className="w-[100%] border-[3px] border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li></Link>
                           <Link to='/calculadoraapp'><li className='aspect-square'><img  src={calculadoraApp} className="w-[100%]  border-[3px]  border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li></Link>
                           <Link to='/proloveapp'> <li className='aspect-square'><img  src={proLoveApp}className="w-[100%]  border-[3px]  border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li></Link>
                           <Link to='/candlestickmarket'> <li className='aspect-square'><img  src={candleStickMarket}className="w-[100%]  border-[3px]  border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li></Link>
                           <Link to='/fulltaskapp'><li className='aspect-square'><img  src={fullTasksApp}className="w-[100%]  border-[3px]  border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li></Link>
                           <Link to='/spartanapp'><li className='aspect-square'><img  src={spartanApp}className="w-[100%]  border-[3px]  border-neutral-100/10  rounded-xl hover:scale-[1.05] cursor-pointer transition-all hover:border-teal-400" /></li></Link>
                        </ul>

                    </nav>
                    {/* APP WINDOW */}
                    <section className=' h-[90vh] lg:h-[95%]  lg:w-[95%] border-[1px] border-neutral-100/10 box-border rounded-xl'>
                        <Routes>
                            <Route path='/' element={<TresEnRaya />} />
                            <Route path='/fulltaskapp' element={<FullTaskApp />} />
                            <Route path='/calculadoraapp' element={<CalculadoraApp />} />
                            <Route path='/proloveapp' element={<ProLoveApp />} />
                            <Route path='/candlestickmarket' element={<CandleStickMarket />} />
                            <Route path='/spartanapp' element={<SpartanApp />} />
                        </Routes>
                    </section> 
                </article>

            </section>
    )


}

export default SeccionApps