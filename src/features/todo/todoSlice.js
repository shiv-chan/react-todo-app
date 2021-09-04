import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
	{
		id: nanoid(),
		title: 'Complete online JavaScript course',
		isDone: true,
	},
	{
		id: nanoid(),
		title: 'Jog around the park 3x',
		isDone: false,
	},
	{
		id: nanoid(),
		title: '10 minites meditation',
		isDone: false,
	},
	{
		id: nanoid(),
		title: 'Read for 1 hour',
		isDone: false,
	},
	{
		id: nanoid(),
		title: 'Pick up groceries',
		isDone: false,
	},
	{
		id: nanoid(),
		title: 'Complete Todo App on Frontend Mentor',
		isDone: false,
	},
];

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		add: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(title) {
				return {
					payload: {
						id: nanoid(),
						title,
						isDone: false,
					},
				};
			},
		},
		toggleCheckbox: (state, action) => {
			const targetIndex = state.findIndex(
				(todo) => todo.id === action.payload.id
			);
			state[targetIndex].isDone = !state[targetIndex].isDone;
		},
		remove: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		clearCompleted: (state) => {
			return state.filter((todo) => todo.isDone === false);
		},
		changeOrder: (state, action) => {
			const [reorderedItem] = state.splice(action.payload.prevIndex, 1);
			state.splice(action.payload.newIndex, 0, reorderedItem);
		},
	},
});

export const { add, toggleCheckbox, remove, clearCompleted, changeOrder } =
	todoSlice.actions;

export default todoSlice.reducer;
