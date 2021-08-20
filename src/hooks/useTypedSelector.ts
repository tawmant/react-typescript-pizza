import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/redux-components/root-reducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
