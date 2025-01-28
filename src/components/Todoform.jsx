import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";


function TodoForm(){

    const [todo, setTodo]=useState([])
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()

        if(!todo) return

        addTodo({
            todo,
            completed: false
        })
        setTodo('')
        
    }


    return(
        <form onSubmit={add} className="flex">
            {/* input  field */}
            <input type="text"
            className='bg-white w-sm rounded-xl text-black px-3 h-7'
            placeholder='Add todo'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}/>

            {/* button to addd the  todo */}
            <button type="submit" className='bg-black px-2 mx-2 rounded-xl'>
              Add todo
            </button>
        </form>
        
    )

}

export default TodoForm