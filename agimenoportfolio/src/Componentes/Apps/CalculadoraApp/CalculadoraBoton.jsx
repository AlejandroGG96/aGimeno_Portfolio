
 const CalculadoraBoton=(props)=>{

    return(
        <div 
        onClick={props.onClick} className={` text-neutral-100  border-[2px] text-3xl place-content-center text-center rounded-lg ${props.children == 0 ? 'col-span-2' : ''} hover:bg-yellow-500/60 active:bg-red-600/80 cursor-pointer select-none 
        ${props.bgColor}`}>
            {props.children}
        </div>
        
    )

}
export default CalculadoraBoton;