import React, { useState } from 'react'

const AddOption = ({ handleAddOption }) => {
    const [error, setError] = useState(undefined)

    const handleOptionInput = (e) => {
        //functions in components are declared without const and without the arrow. this 1st handleAddOption is preventing default. it belongs to this component
        e.preventDefault()

        const option = e.target.elements.option.value.trim() //trim spaces before and after text. also doesn't display empty strings
        console.log('Added option : ', option)
        const error = handleAddOption(option)
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
            <form className="add-option" onSubmit={handleOptionInput}>
                <input
                    className="add-option__input"
                    type="text"
                    name="option"
                    placeholder="Add Todo..."
                />
                <button className="button">Add Todo</button>
            </form>
        </div>
    )
}

export default AddOption
