import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>; //RootState mi permette così di accedere a tutte le proprietà dello store

/* esempio
  const a:RootState;
  a."tutte le proprietà di store"
*/

export default store;
