import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
//   let todos=[
    // 'Code an app Crodie',
    // 'Draw a drawing Crodie',
    // 'Apologise for the trump edit Crodie'
// ]

const [todos,setTodos]= useState([])
const [todoValue, setTodoValue]=useState('')

function persitData(newList){
  localStorage.setItem('todos',JSON.stringify({todos:
    newList}))
}

    function handleAddTodos(newTodo){
      if(newTodo==''){
        return
      }
      const newTodoList=[...todos, newTodo]
      persitData(newTodoList)
      setTodos(newTodoList)
    }

    function handleDeleteTodos(index){

      const newTodoList=todos.filter((tofo, todoIndex)=>{
        return todoIndex!==index
      })
      persitData(newTodoList)
      setTodos(newTodoList)
 
    }

    function handleEditTodos(index){
    const valueToBeEdited=todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)

    }

    useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos =localStorage.getItem('todos')
    if(!localTodos){
    }
    localTodos=JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  return (
    <>
     <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
     <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos}/>

    </>
  )
}

export default App
