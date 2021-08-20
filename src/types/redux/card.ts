export interface CardState {
  items: ICardItem[];
  loading: boolean;
  error: boolean;
  totalPrice: number;
  totalCount: number;
}

export interface ICardItem {
  title: string;
  price: number;
  url: string;
  category: string;
  id: number;
}

export enum CardActionTypes {
  REQUESTED_PIZZA = 'GET_PIZZA',
  LOADED_PIZZA = 'LOADED_PIZZA',
  ERROR_PIZZA = 'ERROR_PIZZA',
  ADD_CARD = 'ADD_CARD',
  REMOVE_CARD = 'REMOVE_CARD',
  CLEAN_CARD = 'CLEAN_CARD',
}

interface FetchRequestedPizzaAction {
  type: CardActionTypes.REQUESTED_PIZZA;
}

interface FetchLoadedPizzaAction {
  type: CardActionTypes.LOADED_PIZZA;
  payload: ICardItem[];
}

interface FetchErrorPizzaAction {
  type: CardActionTypes.ERROR_PIZZA;
  payload: boolean;
}

interface FetchCardsAddAction {
  type: CardActionTypes.ADD_CARD;
  payload: object;
}

interface FetchCardsRemoveAction {
  type: CardActionTypes.REMOVE_CARD;
  payload: number;
}

interface FetchCardsCleanAction {
  type: CardActionTypes.CLEAN_CARD;
}

export type CardAction =
  | FetchCardsAddAction
  | FetchCardsRemoveAction
  | FetchCardsCleanAction
  | FetchRequestedPizzaAction
  | FetchLoadedPizzaAction
  | FetchErrorPizzaAction;
