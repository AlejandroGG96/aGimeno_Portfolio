import { FaRegCircle , FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const handleState=()=>setState(!state);


export const TaskList=({ tasks })=>{
    const { id, task , completed } = tasks ;
    const [ state, setState ] = useState(false)

     console.log(tasks[0].tasks[0].task)
    return(
        <ul className="border-[2px] border-gray-700 h-full w-full my-4 rounded-lg p-3 bg-slate-100">
            {tasks.map((tasktodo,index)=>(
                 <li className="w-full border-b border-dotted border-gray-600 text-neutral-950 flex justify-between p-1">
                    <div>
                        <span className="text-red-500">#  </span>
                        <span>{tasktodo.tasks[index].task}</span>
                    </div>
                    <button className="text-lg">{ state  ? <FaCheckCircle /> : <FaRegCircle />}</button>
                </li>            // <NewTask  tasktodo={tasktodo} />
            ))}
        </ul>
    )

}