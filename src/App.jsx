import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { todoProvider } from './context/TodoContext'

function App() {

  // for store the  todo
  const [todos,setTodos]=useState([])

  // // function  for addtodo
  // const addTodo=()=>{

  // }

  return (
    // <todoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
    <>
      <div className='bg-gray-400 min-h-screen py-8'>
        <div className='w-full max max-w-2xl mx-auto shadow-xl  rounded-lg px-4 py-3 text-white '>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2 bg-red-500'>
            Manage Your Todos
          </h1>

          <div className='mb-4'>
            {/* input  field */}
            <input type="text"
            className='bg-white w-sm rounded-xl text-black px-3 h-7'
            placeholder='Add todo' />

            {/* button to addd the  todo */}
            <button className='bg-black px-2 mx-2 rounded-xl'>
              Add todo
            </button>
          </div>

          <div className='flex flex-wrap gap-y-3'> 
            {/* display all  todo */}
          </div>
        </div>
      </div>
    {/* </todoProvider> */}
    </>
  )
}

export default App
