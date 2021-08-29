import React, { useState } from 'react'

const AddOption = ({ handleAddOption }) => {
    const [error, setError] = useState(undefined)

    const handleAddOption = (e) => {
        //functions in components are declared without const and without the arrow. this 1st handleAddOption is preventing default. it belongs to this component
        e.preventDefault()

        const option = e.target.elements.option.value.trim() //trim spaces before and after text. also doesn't display empty strings
        const error = props.handleAddOption(option)
        //we are passing option to the handleAddOption in the parent component(Indecision). The only return expected is the error, else option was concatenated well.

        setError(error)

        if (!error) {
            e.target.elements.option.value = ''
        }
    }

    return (
        <div>
            {error && (
                <p className="add-option-error">{error}</p>
            )}
            <form className="add-option" onSubmit={handleAddOption()}>
                <input
                    className="add-option__input"
                    type="text"
                    name="option"
                />
                <button className="button">Add Option</button>
            </form>
        </div>
    )
}

export default AddOption
