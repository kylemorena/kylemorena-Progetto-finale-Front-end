import { createSlice } from '@reduxjs/toolkit'

export const signUpSlice = createSlice({
  name: 'singUp',
  initialState: {
    username:'',
    email:'',
    password:'',
    verified: false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
  },
  extraReducers: {
    
  }
})

// Action creators are generated for each case reducer function
export const { signUp } = signUpSlice.actions;

export const signUpSelecter = state => state.singUp;

export default signUpSlice.reducer;