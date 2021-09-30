import { createSlice } from '@reduxjs/toolkit';
const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		title: 'Make Breakfast',
		completed: false
	},
	reducers: {
		handleAddTodo: (state, action) => {
			const newTodo = {
				title: action.payload.title,
				completed: action.payload.completed
			}
			state.push(newTodo)
		}
	}
})

export const { handleAddTodo } = todoSlice.actions

export default todoSlice.reducer