export interface CardState {
  items: ICardItem[];
  loading: boolean;
  error: boolean;
}

export interface ICardItem {
  id: number;
  url: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: string;
  rating: number;
}

export enum CardActionTypes {
  REQUESTED_PIZZA = 'GET_PIZZA',
  LOADED_PIZZA = 'LOADED_PIZZA',
  ERROR_PIZZA = 'ERROR_PIZZA',
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

export type CardAction =
  | FetchRequestedPizzaAction
  | FetchLoadedPizzaAction
  | FetchErrorPizzaAction;
