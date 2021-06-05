import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'utils/config';


interface AuthState {
  accessToken:string;
  email:string;
  password:string;
}
const initialState:AuthState = {
  accessToken:'',
  email:'',
  password:''
}

const Auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state,action) => {

    },
    login: (state,action) => {
      
    }
  },
  extraReducers: {
  }
})

// Action creators are generated for each case reducer function
// export const { signUp } = signUpSlice.actions;

export default Auth