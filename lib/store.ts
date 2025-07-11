import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from './features/favoriteSlices';
import historyReducer from './features/historySlices';

export const makeStore = () => {
  return configureStore({
    reducer: { favoriteReducer, historyReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
