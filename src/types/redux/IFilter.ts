export interface IFilterState {
  category: null | number;
  sortBy: { [key: string]: string };
}

export enum FilterActionTypes {
  SETCATEGORY = 'SETCATEGORY',
  SETSORTBY = 'SETSORTBY',
}

interface IFilterCategory {
  type: FilterActionTypes.SETCATEGORY;
  payload: number;
}

interface IFilterSortBy {
  type: FilterActionTypes.SETSORTBY;
  payload: { [key: string]: string };
}

export type TFilterAction = IFilterSortBy | IFilterCategory;
