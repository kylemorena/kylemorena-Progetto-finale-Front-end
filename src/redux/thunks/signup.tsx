import { createAsyncThunk } from '@reduxjs/toolkit';
import Iauth from 'interfaces/Iauth';
import IUserData from 'interfaces/Iuserdata';
import { auth } from 'utils/firebase';

//#region old SignUp Thunk
/* import { AppThunk } from "redux/rootReducer";
import { signup, AuthState } from "redux/slices/auth.slice";
export const SignUp2 = ():AppThunk => (dispatch) => {
      // qui dovrei fare la chiamata axios per poi fare il dispatch
      // dei dati che ottengo come nell'esempio sotto
   dispatch(signup({
      accessToken: "1231312312",
      email: "lasdas@gmail.com",
      password: "lasdas",
   }))
} */
//#endregion

export const SignUpThunk = createAsyncThunk<Iauth | undefined, IUserData>(
  'user/singup',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload?.password
      );
      return { accessToken: response.user?.uid };
    } catch (error) {
      throw rejectWithValue(error)
    }
  }
);
