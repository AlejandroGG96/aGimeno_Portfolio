import { evaluate } from 'mathjs';
import CalculadoraBoton from './CalculadoraBoton'
import { useState, useRef } from 'react';

const CalculadoraApp=()=>{
    const [pantalla, setPantalla] = useState('Pruébame...')
    const calculatorWindow = useRef()
    const handleClick=(e)=>{
        if(e.target.textContent == 'AC'){
            setPantalla('Borrando...')
            setTimeout(()=>setPantalla(''),800)
        }else if(e.target.textContent == 'e2'){
            setPantalla(pantalla * pantalla)
        } else if (e.target.textContent == '='){
            const resultado = evaluate(pantalla).toFixed(2);
            (resultado.endsWith('00')) ? setPantalla(Math.round(resultado)) : setPantalla(resultado) 
        }else{
        setPantalla(pantalla + e.target.textContent)}
    }
        

    return(
        <section className='h-full w-full flex items-center bg-gray-900'>
        <div className=" bg-gray-950 w-[100%] lg:w-[40%] lg:h-[90%] alig lg:mx-auto border-[3px] border-teal-300 h-[100%] p-5 grid grid-cols-4 gap-2 py-16">
            <input readOnly ref={calculatorWindow} value={pantalla} type="text" className=' select-none text-end text-2xl px-5 text-neutral-100 outline-none col-span-4 border-[2px] border-neutral-100 rounded-lg h-[70%] bg-green-950/70 mb-5' />
            <CalculadoraBoton bgColor='bg-orange-400' onClick={handleClick}>AC</CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-orange-400' onClick={handleClick}>e<sup>2</sup></CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-orange-400' onClick={handleClick}> % </CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-orange-400' onClick={handleClick}> / </CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>7</CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>8</CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>9</CalculadoraBoton>
            <CalculadoraBoton bgColor={'bg-purple-500'} onClick={handleClick}> * </CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>4</CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>5</CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>6</CalculadoraBoton>
            <CalculadoraBoton bgColor={'bg-purple-500'} onClick={handleClick}> - </CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>1</CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>2</CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>3</CalculadoraBoton>
            <CalculadoraBoton bgColor={'bg-purple-500'} onClick={handleClick}> + </CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>0</CalculadoraBoton>
            <CalculadoraBoton bgColor='bg-blue-950/80' onClick={handleClick}>.</CalculadoraBoton>
            <CalculadoraBoton bgColor={'bg-purple-500'} onClick={handleClick}>=</CalculadoraBoton>

        </div>
        </section>


    )
}

export default CalculadoraApp;