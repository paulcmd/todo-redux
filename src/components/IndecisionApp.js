import React, { useState, useEffect } from 'react'

import AddTodo from './AddTodo'
import Header from './Header'
import Action from './Action'
import Todos from './Todos'
import TodoModal from './TodoModal'

const IndecisionApp = () => {
    
    const [todos, setTodos] = useState([])
    const [selectedTodo, setSelectedTodo] = useState(null)
    const [incompleteTodo, setIncompleteTodo] = useState(null)
    console.log('Todos from Indecision : ', todos)

    const handleDeleteTodos = () => {
        setTodos([])
    }

    const markComplete = (clickedTodoIndex) => {
        const updatedTodos = todos.map((todo, index) => {
            if (index === clickedTodoIndex) {
                todo.completed = !todo.completed
            }
            // console.log('completedOPtion : ', option)
            return todo
        })
        console.log('updatedOptions : ', updatedTodos)
        setTodos(updatedTodos)

        /* 
        NB: After todo is flipped to completed, it is returned to todos array, else if todo was untouched, return it
        */
    }

    const handlePick = () => {
        const randomNum = Math.floor(Math.random() * todos.length) //has to be same length as array
        console.log('random number : ', randomNum)
        const selectedTodo = incompleteTodo[randomNum] // From todos array, we are picking a random index of an item equivalent to a random number generated

        /* 
        create state of incomplete todos
        map thru incomplete todos and set them in a state
        */
        console.log('handlePick Option : ', selectedTodo)

        setSelectedTodo(selectedTodo)
    }

    const handleDeleteModalTodo = () => {
        setSelectedTodo(undefined)
    }

    const handleAddTodo = (todo) => {
        if (!todo) {
            return 'Enter valid value to return item'
        } else if (todos.indexOf(todo) > -1) {
            //checks for a duplicate
            return 'This item already exists'
        }

        setTodos([...todos, todo])
    }

    useEffect(() => {
        try {
            const jsonTodos = localStorage.getItem('todos')
            const todos = JSON.parse(jsonTodos)
            if (todos) {
                setTodos(todos)
            }
        } catch (err) {
            //if error, do nothing at all. fall back to default values
        }
    }, [])

    useEffect(() => {
        const jsonTodos = JSON.stringify(todos)
        localStorage.setItem('options', jsonTodos)
    }, [todos])

    useEffect(() => {
        const incompleteTodo = todos.filter((todo) => todo.complete === false)
        setIncompleteTodo(incompleteTodo)
    },[todos])
    /* 
    use useeffect to listen to changes in todos. filter out incomplete todos and send to Action
    */

    const subtitle = 'What would you like to do today?'

    return (
        <div>
            <Header subtitle={subtitle} />
            <div className="container">
                <Action hasTodos={todos.length > 1} handlePick={handlePick} />
                <div className="widget">
                    <Todos
                        todos={todos}
                        handleDeleteTodos={handleDeleteTodos}
                        markComplete={markComplete}
                    />
                    <AddTodo handleAddTodo={handleAddTodo} />
                </div>
            </div>
            <TodoModal
                selectedTodo={selectedTodo}
                handleDeleteModalTodo={handleDeleteModalTodo}
            />
        </div>
    )
}

export default IndecisionApp
