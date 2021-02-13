import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, setTodos, filterdTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterdTodos.map(todo => (
                    <Todo 
                        setTodos= { setTodos }
                        key={ todo.id } 
                        text={ todo.text }
                        todo={ todo }
                        todos= { todos }
                    />
                ))}
            </ul>
        </div>
    )
}
