import React from 'react'
import Todo from './Todo'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodos } from '../redux/todoSlice'

const TodoList = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    console.log('Todos from TodoList! : ', todos)
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title"> Your Options</h3>
                <button
                    className="button button--link"
                    onClick={() => dispatch(deleteTodos())}
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
                <Todo key={index} todo={todo} count={index + 1} />
            ))}
        </div>
    )
    
}

export default TodoList
