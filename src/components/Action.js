import React from 'react'

const Action = ({ handlePick, hasTodos }) => (
    <div>
        <button
            className="big-button"
            onClick={handlePick}
            disabled={!hasTodos} //true if there are options, flip to disable
        >
            Pick A Random Todo
        </button>
    </div>
)

export default Action
