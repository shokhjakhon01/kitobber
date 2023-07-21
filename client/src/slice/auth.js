import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	loggedIn: false,
	user: null,
	error: null,
};

export const counterSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		registerUserStart: state => {
			state.isLoading = true;
		},
		registerUserSucces: (state, action) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = action.payload;
		},
		registerUserFailore: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { registerUserFailore, registerUserStart, registerUserSucces } = counterSlice.actions;
export default counterSlice.reducer;
