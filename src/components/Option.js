import React from 'react'

const Option = ({ count, optionText, handleDeleteOption }) => (
    <div className="option">
        <p className="option__text">
            {count}. {optionText}
        </p>

        <button
            className="button button--link"
            onClick={() => {
                handleDeleteOption(optionText)
            }}
        >
            Remove
        </button>
    </div>
)

export default Option

//Remove remove button and replace with checkbox