import {
  FilterActionTypes,
  IFilterState,
  TFilterAction,
} from '../../types/redux/IFilter';

const initialState: IFilterState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
};

const filterReducer = (
  state = initialState,
  { type, payload }: TFilterAction
) => {
  switch (type) {
    case FilterActionTypes.SETCATEGORY:
      return { ...state, category: payload };
    case FilterActionTypes.SETSORTBY:
      return { ...state, sortBy: payload };
    default:
      return state;
  }
};

export const setCategory = (catIndex: number | null) => ({
  type: FilterActionTypes.SETCATEGORY,
  payload: catIndex,
});

export const setSortBy = ({ type, order }: any) => ({
  type: FilterActionTypes.SETSORTBY,
  payload: { type, order },
});

export default filterReducer;
