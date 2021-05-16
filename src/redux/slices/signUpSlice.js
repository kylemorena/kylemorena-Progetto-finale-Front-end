import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import {firebase} from '../../components/utils/firebase.js';

export const signUpAuth = createAsyncThunk("user/createAccount", (userData) => {
  firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    console.log(error);
    // ..
  });
  return userData;
}) 

export const signUpSlice = createSlice({
  name: 'user',
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
    [signUpAuth.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    [signUpAuth.pending]: (state) => {
      state.isFetching = true;
    },
    [signUpAuth.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload.message;
    }
  }
})

// Action creators are generated for each case reducer function
// export const { signUp } = signUpSlice.actions;

export const signUpSelecter = state => state.user;

export default signUpSlice.reducer;