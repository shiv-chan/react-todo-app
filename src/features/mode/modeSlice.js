import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const modeSlice = createSlice({
	name: 'isLightMode',
	initialState,
	reducers: {
		toggleMode: (state) => {
			return !state;
		},
	},
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
