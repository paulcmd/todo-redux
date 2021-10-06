import { createSlice } from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newTodo)
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
            //    state.length = 0
        }
    }
})

export const { addTodo, toggleComplete, deleteTodos, addLocalTodos } = todoSlice.actions

export default todoSlice.reducer
