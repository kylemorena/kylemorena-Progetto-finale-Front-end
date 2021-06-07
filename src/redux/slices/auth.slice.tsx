import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
	accessToken: string;
	email: string;
	password: string;
}

const initialState: AuthState = {
	accessToken: "",
	email: "",
	password: "",
};

const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signup: (state, action: PayloadAction<AuthState>) => {
			return action.payload;
		},
		login: (state, action) => {},
	},
	extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { signup, login } = AuthSlice.actions;
export default AuthSlice;
