import React, { useState, useEffect } from 'react'

import AddTodoForm from './AddTodoForm'
import Header from './Header'
import PickTodo from './PickTodo'
import TodoList from './TodoList'
import TodoModal from './TodoModal'
import { addLocalTodos } from '../redux/todoSlice'

import { useSelector, useDispatch } from 'react-redux'

const TodoApp = () => {

    const stateTodos = useSelector((state) => state.todos)
    
    const dispatch = useDispatch()

    const [todos, setTodos] = useState(stateTodos)
    const [selectedTodo, setSelectedTodo] = useState(null)
    const [incompleteTodos, setIncompleteTodos] = useState([])
    console.log('Todos from TodoApp : ', stateTodos)


    // const handleDeleteTodos = () => {
    //     setTodos([])
    // }

    const handleIncompleteTodos = () => {
        const incompleteTodos = stateTodos.filter((todo) => todo.completed === false)
        setIncompleteTodos(incompleteTodos)
        console.log(
            'Incomplete todo from handleIncompleteTodos : ',
            incompleteTodos
        )
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

    useEffect(() => {
        try {
            const getTodos = window.localStorage.getItem('todos')
            
            const localTodos = JSON.parse(getTodos)
            console.log('Parsed todos : ', localTodos)
            // if (localTodos) {
            //     console.log(dispatch(addLocalTodos(localTodos)))
            // }
        } catch (err) {
            console.log('Local storage error : ', err)
        }
    }, [])

    useEffect(() => {
        const jsonTodos = JSON.stringify(stateTodos)
        console.log('Stringified todos : ', jsonTodos)
        window.localStorage.setItem('todos', jsonTodos)
    }, [stateTodos])

    useEffect(() => {
        handleIncompleteTodos()
    }, [stateTodos])
    /* 
    use useeffect to listen to changes in todos. filter out incomplete todos and send to Action
    */

    const subtitle = 'What would you like to do today?'

    return (
        <div>
            <Header subtitle={subtitle} />
            <div className="container">
                <PickTodo
                    hasIncompleteTodos={incompleteTodos.length > 1}
                    handlePick={handlePick}
                />
                <div className="widget">
                    <TodoList />
                    <AddTodoForm />
                </div>
            </div>
            <TodoModal
                selectedTodo={selectedTodo}
                handleDeleteModalTodo={handleDeleteModalTodo}
            />
        </div>
    )
}

export default TodoApp
