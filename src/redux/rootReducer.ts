import { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import Auth from "./slices/auth.slice";

const rootReducer = combineReducers({
	authReducer: Auth.reducer,
   anotherReducer: ()=>({})
});
export type RootState = ReturnType<typeof rootReducer>; //RootState mi permette così di accedere a tutte le proprietà dello store
/* esempio
   const a:RootState;
   a."tutte le proprietà di store"
*/

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>; //AppThunk è una funzione.

export default rootReducer;
