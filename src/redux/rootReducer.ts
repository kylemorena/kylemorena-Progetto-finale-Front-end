import { combineReducers } from "redux";
import SignUpSlice from './slices/signUpSlice'

const rootReducer = combineReducers({
   singup: SignUpSlice.reducer
}) 

export default rootReducer