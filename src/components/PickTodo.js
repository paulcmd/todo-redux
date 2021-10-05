import React from 'react'

const PickTodo = ({ handlePick, hasIncompleteTodos }) => (
    <div>
        <button
            className="big-button"
            onClick={handlePick}
            disabled={!hasIncompleteTodos} //true if there are options, flip to disable
        >
            Pick A Random Todo
        </button>
    </div>
)

export default PickTodo
