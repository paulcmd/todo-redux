import React from 'react'

const Todo = ({ count, todo, markComplete }) => {
    

    //if completed, use option__text__line-through
    const className = `${todo.completed ? 'option__text__line-through' : 'option__text'}`
    return (
        <div className="option">
            <p className={className}>
                {count}. {todo.title}
            </p>

            <input type="checkbox" onChange={() => markComplete(count - 1)} checked={todo.completed} />
            {/* count - 1 is the index */}
        </div>
    )
}

export default Todo