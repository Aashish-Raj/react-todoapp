import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({todo}){

    // for  manage state edotable or not
    const [iseditable,seteditable]=useState(false)
    const [todomsg,setTodomsg]=useState(todo.todo)

    const {updateTodo, deleteTodo, toggleComplete}=useTodo()

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todomsg})
        seteditable(false)
    }

    const togglecompleted=()=>{
        toggleComplete(todo.id)
    }

    return(
        <div className={`flex  border border-black rounded-lg px-3 py-1.5 shadow-sm 
        shadow-white duration-300 text-black  ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]" }`}>

            {/* input foor the  chek box */}
            <input type="checkbox" className="cursor-pointer"
            checked={todo.completed}
            onChange={togglecompleted}
             />
             {/* input for the todo msg */}
             <input type="text" 
            className={`border outline-none w-full bg-transparent rounded-lg 
                ${iseditable ? 'border-black' : 'border-transparent'} ${todo.completed ? "line-through" : ""}` 

            }
            value={todomsg} 
            onChange={(e)=>setTodomsg(e.target.value)}
            readOnly={!iseditable}
            />

            {/* edit  save  button */}
            <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={()=>{
                if (todo.completed) return;
                if (iseditable){
                    editTodo();
                }else seteditable((prev)=>!prev)
            }}
            disabled={todo.completed}
            >
            {iseditable ? "📁" : "✏️"}
            </button>

            {/* delete todo  button */}

            <button 
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={()=>{deleteTodo(todo.id)}}
            >
                ❌
            </button>

        </div>
    )
}

export default TodoItem