import { createSlice } from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            if (action.payload.title !== '') {
                const newTodo = {
                    id: Date.now(),
                    title: action.payload.title,
                    completed: false
                }
                state.push(newTodo)
            }
        },
        addLocalTodos: (state, action) => {
            state.push(action.payload)
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            )

            state[index].completed = action.payload.completed
        },
        deleteTodos: (state, action) => {
            //if action.type is deleteTodos, reset state to initialState
            if (action.type === 'todos/deleteTodos') {
                state.length = 0
            }
        }
    }
})

export const { addTodo, toggleComplete, deleteTodos, addLocalTodos } =
    todoSlice.actions

export default todoSlice.reducer
