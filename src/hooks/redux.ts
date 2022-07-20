import { RootState } from './../store/index';
import { TypedUseSelectorHook, useSelector } from "react-redux";

// забираем д-е из стора
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector