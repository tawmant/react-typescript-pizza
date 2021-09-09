import {
  CardAction,
  CardActionTypes,
  CardState,
} from '../../types/redux/ICard';
import { Dispatch } from 'react';
import axios from 'axios';

const initialState: CardState = {
  items: [],
  loading: true,
  error: false,
};

const cardReducer = (state = initialState, action: CardAction): CardState => {
  switch (action.type) {
    case CardActionTypes.REQUESTED_PIZZA:
      return { ...state, loading: true };
    case CardActionTypes.LOADED_PIZZA:
      return { ...state, items: action.payload, loading: false };
    case CardActionTypes.ERROR_PIZZA:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const thunkPizzaAction = (
  category: string,
  sortBy: { type: string; order: string }
) => {
  return async (dispatch: Dispatch<CardAction>) => {
    dispatch({ type: CardActionTypes.REQUESTED_PIZZA });
    try {
      const response = await axios.get(
        `http://localhost:3005/menu?${
          category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`
      );
      dispatch({ type: CardActionTypes.LOADED_PIZZA, payload: response.data });
    } catch (e) {
      dispatch({ type: CardActionTypes.ERROR_PIZZA, payload: false });
    }
  };
};

export default cardReducer;
