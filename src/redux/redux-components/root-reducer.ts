import { combineReducers } from 'redux';
import cardReducer from './card';
import cartReducer from './cart';
import filterReducer from './filter';

const rootReducer = combineReducers({
  card: cardReducer,
  cart: cartReducer,
  filter: filterReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
