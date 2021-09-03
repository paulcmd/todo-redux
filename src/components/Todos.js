import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    console.log('Todos props : ', props)
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title"> Your Options</h3>
                <button
                    className="button button--link"
                    onClick={props.handleDeleteTodos}
                >
                    Remove All
                </button>
            </div>

            {props.todos.length === 0 && (
                <p className="widget__message">
                    Please add an option to get started!
                </p>
            )}

            {props.todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    count={index + 1}
                    markComplete={props.markComplete}
                />
            ))}
        </div>
    )
    
}

export default Todos
