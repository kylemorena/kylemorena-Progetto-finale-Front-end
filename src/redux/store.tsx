import { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>; //RootState mi permette così di accedere a tutte le proprietà dello store
/* esempio
   const a:RootState;
   a."tutte le proprietà di store"
*/
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>; //AppThunk è una funzione.
// Export a hook that can be reused to resolve types
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
