export interface CartState {
  // items: ICartItem[][];
  items: any;
  totalPrice: number;
  totalCount: number;
}

export interface ICartItem {}

export enum CartActionTypes {
  ADD_PIZZA = 'ADD_PIZZA',
  REMOVE_PIZZA = 'REMOVE_PIZZA',
  PLUS_PIZZA = 'PLUS_PIZZA',
  MINUS_PIZZA = 'MINUS_PIZZA',
  CLEAR_PIZZA = 'CLEAR_PIZZA',
}

interface FetchCardsAddAction {
  type: CartActionTypes.ADD_PIZZA;
  payload: any;
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
