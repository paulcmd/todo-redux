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

    //if completed, use option__text__line-through
    const className = `${option.completed ? 'option__text__line-through' : 'option__text'}`
    return (
        <div className="option">
            <p className={className}>
                {count}. {option.title}
            </p>

            <input type="checkbox" onChange={() => markComplete(count - 1)} checked={option.completed}/>

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