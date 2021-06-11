import { createAsyncThunk } from "@reduxjs/toolkit";
import IUserData from "interfaces/Iuserdata";
// import { AppThunk } from "redux/rootReducer";
// import { signup, AuthState } from "redux/slices/auth.slice";
import { auth } from "utils/firebase";

// export const SignUp2 = ():AppThunk => (dispatch) => {
//    /*
//       qui dovrei fare la chiamata axios per poi fare il dispatch
//       dei dati che ottengo come nell'esempio sotto
//    */
//    dispatch(signup({
//       accessToken: "1231312312",
//       email: "lasdas@gmail.com",
//       password: "lasdas",
//    }))
// }

export const SignUp = createAsyncThunk<
   void,
   IUserData
>("user/singup", async (payload, { rejectWithValue }) => {
   try {
      await auth
         .createUserWithEmailAndPassword(payload.email, payload?.password)
         .then((userCred) => {
            console.log(userCred.user?.email);
         });
   } catch (error) {
      return rejectWithValue(error);
   }
});
