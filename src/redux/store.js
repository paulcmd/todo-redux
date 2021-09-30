import { configureStore } from '@reduxjs/toolkit'
import todoSliceReducer from './todoSlice'

export default configureStore({
	reducer: {
		todos: todoSliceReducer
	}
})