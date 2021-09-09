export interface CartState {
  // items: ICartItem[][];
  items: any;
  totalPrice: number;
  totalCount: number;
}

interface ICartItem {
  id: number;
  title: string
  url: string
  price: number;
  size: number;
  type: string
}

export enum CartActionTypes {
  ADD_PIZZA = 'ADD_PIZZA',
  REMOVE_PIZZA = 'REMOVE_PIZZA',
  PLUS_PIZZA = 'PLUS_PIZZA',
  MINUS_PIZZA = 'MINUS_PIZZA',
  CLEAR_PIZZA = 'CLEAR_PIZZA',
}

interface FetchCardsAddAction {
  type: CartActionTypes.ADD_PIZZA;
  payload: ICartItem;
}

interface FetchCardsRemoveAction {
  type: CartActionTypes.REMOVE_PIZZA;
  payload: number;
}

interface FetchCardsPlusAction {
  type: CartActionTypes.PLUS_PIZZA;
  payload: number;
}

interface FetchCartMinusAction {
  type: CartActionTypes.MINUS_PIZZA;
  payload: number;
}

interface FetchCartClearAction {
  type: CartActionTypes.CLEAR_PIZZA;
}

export type CartAction =
  | FetchCartMinusAction
  | FetchCardsAddAction
  | FetchCardsRemoveAction
  | FetchCardsPlusAction
  | FetchCartClearAction;
