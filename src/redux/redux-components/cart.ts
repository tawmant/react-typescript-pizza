import { CartAction, CartActionTypes, CartState } from '../../types/redux/cart';
import { Dispatch } from 'react';
import axios from 'axios';
import { ICardItem } from '../../types/redux/card';

const initialState: CartState = {
  items: {},
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
      const newObj = {
        ...state.items,
      };
      const currentTotalPrice = newObj[action.payload].totalPrice;
      const currentTotalCount = newObj[action.payload].items.length;
      delete newObj[action.payload];
      return {
        ...state,
        items: newObj,
        totalCount: state.totalCount - currentTotalCount,
        totalPrice: state.totalPrice - currentTotalPrice,
      };
    case CartActionTypes.PLUS_PIZZA: {
      const newObjPlus = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItemsPlus = {
        ...state.items,
        [action.payload]: {
          items: newObjPlus,
          totalPrice: getTotalPrice(newObjPlus),
        },
      };
      const totalPrice = getTotalSum(newItemsPlus, 'totalPrice');
      const totalCount = getTotalSum(newItemsPlus, 'items.length');
      return {
        ...state,
        items: newItemsPlus,
        totalPrice,
        totalCount,
      };
    }
    case CartActionTypes.MINUS_PIZZA: {
      const oldItems = state.items[action.payload].items;
      const newPizzaItem =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newPizzaItem,
          totalPrice: getTotalPrice(newPizzaItem),
        },
      };
      if (oldItems.length <= 1) {
        delete newItems[action.payload];
      }

      const totalPrice = getTotalSum(newItems, 'totalPrice');
      const totalCount = getTotalSum(newItems, 'items.length');

      return { ...state, items: newItems, totalCount, totalPrice };
    }
    case CartActionTypes.CLEAR_PIZZA:
      return { items: {}, totalCount: 0, totalPrice: 0 };
    default:
      return state;
  }
};

export default cartReducer;
