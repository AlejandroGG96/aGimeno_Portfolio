import React, { useState } from 'react'
import { TaskList } from "./TaskList";
import { NewTask } from "./NewTask";

const FullTaskApp=()=>{

    const [ tasks, setTasks ] = useState({id:1, task:'Ordenar la casas',completed:false})

    return(
        <section className="h-[100%] w-[100%] gap-20 flex flex-col lg:flex-row justify-center items-center bg-gray-900">
            <h1 className="text-4xl text-white">FullTaskApp</h1>
            <article>
                <TaskList tasks={[
                    {tasks}
                ]} />
            </article>
        </section>

    )
}

export default FullTaskApp;

