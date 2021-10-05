import React from 'react'
import { toggleComplete } from '../redux/todoSlice'
import { useDispatch } from 'react-redux'

const Todo = ({ count, todo }) => {
    const dispatch = useDispatch()
    const onToggleComplete = () => {
        console.log('Dispatch from toggle complete : ',
            dispatch(
                toggleComplete({
                    id: todo.id,
                    completed: !todo.completed
                })
            )
        )
    }

    //if completed, use option__text__line-through
    const className = `${
        todo.completed ? 'option__text__line-through' : 'option__text'
    }`
    return (
        <div className="option">
            <p className={className}>
                {count}. {todo.title}
            </p>

            <input
                type="checkbox"
                onChange={onToggleComplete}
                checked={todo.completed}
            />

            {/* count - 1 is the index */}
        </div>
    )
}

export default Todo
