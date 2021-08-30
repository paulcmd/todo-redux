import React from 'react'

const Option = ({ index, count, optionText, markComplete }) => (
    <div className="option">
        <p className="option__text">
            {count}. {optionText}
        </p>

        <button
            className="button button--link"
            onClick={() => {
                markComplete(index)
            }}
        >
            Remove
        </button>
    </div>
)

export default Option

//Remove remove button and replace with checkbox