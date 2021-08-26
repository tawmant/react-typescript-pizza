import { CartAction, CartActionTypes, CartState } from '../../types/redux/cart';
import { Dispatch } from 'react';
import axios from 'axios';
import { ICardItem } from '../../types/redux/card';

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr: ICardItem[]) =>
  arr.reduce((sum: number, obj: any) => obj.price + sum, 0);

const _get = (obj: any, path: string) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj: object, path: string) => {
  return Object.values(obj).reduce((sum, obj) => {
    console.log(sum, obj);
    
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PIZZA:
      const currentPizzaItems = state.items[action.payload.id]
        ? [...state.items[action.payload.id].items, action.payload]
        : [action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      const totalCount = getTotalSum(newItems, 'items.length');
      return { ...state, items: newItems, totalCount, totalPrice };
    case CartActionTypes.REMOVE_PIZZA:
      return { ...state };
    case CartActionTypes.PLUS_PIZZA:
      return { ...state };
    case CartActionTypes.MINUS_PIZZA:
      return { ...state };
    case CartActionTypes.CLEAR_PIZZA:
      return { ...state };
    default:
      return state;
  }
};

// export const thunkPizzaAction = () => {
//   return async (dispatch: Dispatch<CardAction>) => {
//     dispatch({ type: CardActionTypes.REQUESTED_PIZZA });
//     try {
//       const response = await axios.get('http://localhost:3005/menu');
//       dispatch({ type: CardActionTypes.LOADED_PIZZA, payload: response.data });
//     } catch (e) {
//       dispatch({ type: CardActionTypes.ERROR_PIZZA, payload: false });
//     }
//   };
// };

export default cartReducer;
