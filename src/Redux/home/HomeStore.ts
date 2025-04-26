import { configureStore } from "@reduxjs/toolkit";

import homeReducer  from './HomeSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';



const Store = configureStore({
  reducer: {
    homeState: homeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



export default Store;