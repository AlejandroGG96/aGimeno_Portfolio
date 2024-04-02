import { NewTask } from "./NewTask"

export const TaskList=({tasks})=>{

    return(
        <>
            {tasks.map((task)=>(
                <li>Tarea</li>
            ))}
        </>
    )

}