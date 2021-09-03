import React from 'react'

const Action = (props) => (
    <div>
        <button
            className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasTodos} //true if there are options, flip to disable
        >
            Pick A Random Todo
        </button>
    </div>
)

export default Action
