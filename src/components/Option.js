import React from 'react'

const Option = ({ count, option, markComplete }) => {

    // getStyle = () => {
    //     return {
    //         background: 'f4f4f4',
    //         padding: '10px',
    //         borderBottom: '1px #ccc dotted',
    //         textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    //     }
    // }
const className = {option.completed &&}
    return (
        <div className="option">
            <p className="option__text">
                {count}. {option.title}
            </p>

            <input type="checkbox" onChange={() => markComplete(count - 1)} />

            {/* <button
            className="button button--link"
            onClick={() => {
                markComplete(count-1)
            }}
        >
            Remove
        </button> */}
        </div>
    )
    
}

export default Option

//Remove remove button and replace with checkbox