import { combineReducers } from 'redux';
import Auth from './slices/auth.slice';

const rootReducer = combineReducers({
  authReducer: Auth.reducer,
  anotherReducer: () => ({}),
});

export default rootReducer;
