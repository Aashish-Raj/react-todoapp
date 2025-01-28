import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/Todoform'
import TodoItem from './components/TodoItem'

function App() {

  // for store the  todo
  const [todos,setTodos]=useState([])

  // // function  for addtodo
  const addTodo=(todo)=>{
    setTodos((prev)=>{
      console.log('todo---->>>',todo);
      
      return [{id: Date.now(), ...todo},...prev]})

  }

  // function  for update teh  todo
  const updateTodo=(id, todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo: prevTodo)))

  }

  // functionality to  delete the todo
  const deleteTodo=(id)=>{
    setTodos((prev)=>{
      console.log("delete todo--->>>",id,prev)
      
      const updatedtodos=prev.filter((prev)=>
        {
          console.log(id,'>>>>>>>>>>>>>>>prev',prev.id!=id);
          
          return prev.id!=id
        })
          return updatedtodos
      
    })

  }

  // fucntionality to  toggle the  todo
  const toggleComplete=(id)=>{
    setTodos((prev)=>
      prev.map((prev)=>prev.id===id? {...prev, completed: !prev.completed}: prev)
    )
  }

  // get the  todos from the  local storage
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos'))
    console.log('get local  funtion callef',todos);
    if (todos){
      setTodos(todos)
    }
  },[])

  // set the todos in the local storage
  useEffect(()=>{
    console.log('set local  funtion callef',typeof todos,todos)
    
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className='bg-gray-400 min-h-screen py-8'>
        <div className='w-full max max-w-2xl mx-auto shadow-xl  rounded-lg px-4 py-3 text-white '>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2 bg-red-500'>
            Manage Your Todos
          </h1>

          <div className='mb-4'>
            {/* to add the  todo */}
            <TodoForm />
          </div>

          <div className='flex flex-wrap gap-y-3'> 
            {/* display all  todo */}
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>

              </div>
                ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  
  )
}

export default App
