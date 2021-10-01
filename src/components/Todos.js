import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const Todos = () => {

    const todos = useSelector((state) => state.todos)
    console.log('Todos from Selector! : ', todos)
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title"> Your Options</h3>
                <button
                    className="button button--link"
                    // onClick={props.handleDeleteTodos}
                >
                    Remove All
                </button>
            </div>

            {todos.length === 0 && (
                <p className="widget__message">
                    Please add an option to get started!
                </p>
            )}

            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    count={index + 1}
                   
                />
            ))}
        </div>
    )
    
}

export default Todos
