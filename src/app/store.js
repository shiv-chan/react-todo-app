import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import modeReducer from '../features/mode/modeSlice';

const store = configureStore({
	reducer: {
		todos: todoReducer,
		isLightMode: modeReducer,
	},
});

export default store;
