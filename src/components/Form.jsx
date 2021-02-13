import React from 'react'
import nextId, { setPrefix } from "react-id-generator"


export default function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
    setPrefix("");

    const inputTextHandler = (e) => {
        setInputText(e.target.value)

    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            { text: inputText, completed: false, id: nextId() }
        ])
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input onChange={ inputTextHandler } type="text" className="todo-input" value={ inputText } />
            <button onClick= { submitTodoHandler } className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={ statusHandler } name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    )
}
