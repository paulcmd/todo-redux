import React, { useState } from 'react'

const AddTodo = ({ handleAddTodo }) => {
    const [error, setError] = useState(undefined)

    const handleTodoInput = (e) => {
        //functions in components are declared without const and without the arrow. this 1st handleAddOption is preventing default. it belongs to this component
        e.preventDefault()

        const todo = {
            title: e.target.elements.todo.value.trim(),
            completed: false
        } //trim spaces before and after text. also doesn't display empty strings
        

        console.log('Added todo : ', todo)
        const error = handleAddTodo(todo)
        //we are passing todo to the handleAddTodo in the parent component(Indecision). The only return expected is the error, else option was concatenated well.

        setError(error)

        if (!error) {
            e.target.elements.todo.value = ''
        }
    }

    return (
        <div>
            {error && <p className="add-option-error">{error}</p>}
            <form className="add-option" onSubmit={handleTodoInput}>
                <input
                    className="add-option__input"
                    type="text"
                    name="todo"
                    placeholder="Add Todo..."
                />
                <button className="button">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
