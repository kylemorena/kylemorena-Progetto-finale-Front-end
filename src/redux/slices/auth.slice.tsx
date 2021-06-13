import { createSlice } from '@reduxjs/toolkit';
import Iauth from 'interfaces/Iauth';
import { SignUpThunk } from 'redux/thunks/signup';
export interface AuthState {
  pending: boolean;
  error: boolean;
  auth: Iauth | undefined;
}

const initialState: AuthState = {
  pending: false,
  error: false,
  auth: {
    accessToken: '',
  },
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // signup: (state, action: PayloadAction<AuthState>) => {
    // 	return action.payload;
    // },
    // login: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(SignUpThunk.pending, (state, action) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(SignUpThunk.fulfilled, (state, action) => {
      state.pending= false;
      state.auth= action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { signup, login } = AuthSlice.actions;
export default AuthSlice;
