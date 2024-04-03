import React, { useState , useRef } from 'react'
import { TaskList } from "./TaskList";
import { v4 as uuidv4 } from 'uuid'
import { FaTrash , FaPlus } from "react-icons/fa";


const FullTaskApp=()=>{

    const [ tasks, setTasks ] = useState([{
        id:1, task:'Ordenar y limpiar habitación',completed:false
    },]
    )
    
    const taskRef = useRef();


    const handleAddNewTask=()=>{
        const task = taskRef.current.value;
        if(task == '')return;
        
        setTasks((prevTasks)=>{
            return [...prevTasks,{id: uuidv4(),task, completed:false }]})
        }
            
        

    return(
        <section className="h-[100%] w-[100%] flex flex-col lg:flex-row justify-evenly items-center bg-gray-900">
            <article className=' border-[1px] rounded-lg border-gray-800 p-5 h-[85%] w-[85%] flex-col flex items-center justify-between bg-black/30'>
                <h1 className="text-3xl text-neutral-100 font-mono font-semibold">FullTaskApp</h1>
                <TaskList tasks={[{tasks}]} />
                    <div className='w-full flex flex-col gap-5'>
                        <input ref={taskRef} type="text" placeholder='Esto no se me puede olvidar...' 
                        className='px-4 w-full py-3 rounded-lg text-md outline-none bg-blue-950 text-neutral-100 border-neutral-100/60 border'/>

                     <div className='flex justify-center gap-3'>  
                        <button  className='text-2xl border-2 p-3 px-8 rounded-lg bg-neutral-800 border-gray-600 hover:bg-neutral-400 transition-all' onClick={handleAddNewTask}><FaPlus className='text-neutral-100'/></button>
                        <button  className='text-2xl  border-2 p-3 px-8 rounded-lg bg-red-700 border-gray-600 hover:bg-red-400 transition-all' ><FaTrash className='text-neutral-100' /></button>
                    </div>
                    </div>
            </article>
        </section>

    )
}

export default FullTaskApp;
