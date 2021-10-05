import { createSlice } from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {
            id: 1,
            title: 'Make Breakfast',
            completed: false
        },
        {
            id: 2,
            title: 'Make Bed',
            completed: false
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newTodo)
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

export const { addTodo, toggleComplete, deleteTodos } = todoSlice.actions

export default todoSlice.reducer
