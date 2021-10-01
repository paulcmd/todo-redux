import React, { useState, useEffect } from 'react'

import AddTodo from './AddTodo'
import Header from './Header'
import Action from './Action'
import Todos from './Todos'
import TodoModal from './TodoModal'
import { handleAddTodos } from '../redux/todoSlice'

import { useSelector, useDispatch } from 'react-redux'

const IndecisionApp = () => {
    const [todos, setTodos] = useState([])
    const [selectedTodo, setSelectedTodo] = useState(null)
    const [incompleteTodos, setIncompleteTodos] = useState([])
    console.log('Todos from Indecision : ', todos)

    
    const dispatch = useDispatch()
    console.log(dispatch(handleAddTodos(todos))) 

    const handleDeleteTodos = () => {
        setTodos([])
    }

    const markComplete = (clickedTodoIndex) => {
        const updatedTodos = todos.map((todo, index) => {
            if (index === clickedTodoIndex) {
                todo.completed = !todo.completed
            }

            return todo
        })
        console.log('updatedTodos : ', updatedTodos)
        setTodos(updatedTodos)

        /* 
        NB: After todo is flipped to completed, it is returned to todos array, else if todo was untouched, return it
        */
    }

    const handlePick = () => {
        const randomNum = Math.floor(Math.random() * incompleteTodos.length) //has to be same length as array
        console.log('random number : ', randomNum)
        const selectedTodo = incompleteTodos[randomNum] // From todos array, we are picking a random index of an item equivalent to a random number generated

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

    // useEffect(() => {
    //     try {
    //         const jsonTodos = localStorage.getItem('todos')
    //         const todos = JSON.parse(jsonTodos)
    //         if (todos) {
    //             setTodos(todos)
    //         }
    //     } catch (err) {
    //         //if error, do nothing at all. fall back to default values
    //     }
    // }, [])

    // useEffect(() => {
    //     const jsonTodos = JSON.stringify(todos)
    //     localStorage.setItem('options', jsonTodos)
    // }, [todos])

    // const handleIncompleteTodos = () => {
    //     const incompleteTodos = todos.filter((todo) => todo.completed === false)
    //     setIncompleteTodos(incompleteTodos)
    //     console.log(
    //         'Incomplete todo from handleIncompleteTodos : ',
    //         incompleteTodos
    //     )
    // }
    // useEffect(() => {
    //     handleIncompleteTodos()
    // }, [todos])
    /* 
    use useeffect to listen to changes in todos. filter out incomplete todos and send to Action
    */

    const subtitle = 'What would you like to do today?'

    return (
        <div>
            <Header subtitle={subtitle} />
            <div className="container">
                <Action
                    hasIncompleteTodos={incompleteTodos.length > 1}
                    handlePick={handlePick}
                />
                <div className="widget">
                    <Todos
                        
                        // handleDeleteTodos={handleDeleteTodos}
                        // markComplete={markComplete}
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
