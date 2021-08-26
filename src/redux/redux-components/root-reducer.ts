import { combineReducers } from 'redux';
import cardReducer from './card';
import cartReducer from './cart';

const rootReducer = combineReducers({
  card: cardReducer,
  cart: cartReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
