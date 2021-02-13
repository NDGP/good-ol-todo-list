import { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList"

function App() {
  // state
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterdTodos, setFilterdTodos] = useState([])
 
  //run once when app starts
  useEffect(() => {
    getLocalTodos()
  },[])

  // useEffect
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilterdTodos(todos.filter((todo) => todo.completed === true))
          break;
        case 'uncompleted':
          setFilterdTodos(todos.filter((todo) => todo.completed === false))
          break;
        default:
          setFilterdTodos(todos)
          break;
      }
    }
    filterHandler()

    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    
    saveLocalTodos()
  }, [todos, status])



  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoFromLocal)
    }
  }

  return (
    <div className="App">
      <header>Good ol todo List</header>  
      <Form 
        inputText={ inputText } 
        todos= { todos } 
        setTodos= { setTodos } 
        setInputText= { setInputText } 
        setStatus= { setStatus }
      />
      <TodoList 
        setTodos={ setTodos } 
        todos= { todos }
        setFilterdTodos= { setFilterdTodos }
        filterdTodos= { filterdTodos }
      />
    </div>
  );
}

export default App;
