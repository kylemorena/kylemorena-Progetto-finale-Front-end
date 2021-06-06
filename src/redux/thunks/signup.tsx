import { AppThunk } from "redux/rootReducer"
import { signup } from "redux/slices/auth.slice"

export const SignUp = ():AppThunk => (dispatch) => {
   dispatch(signup({
      accessToken: "1231312312",
      email: "lasdas@gmail.com",
      password: "lasdas",
   }))
}