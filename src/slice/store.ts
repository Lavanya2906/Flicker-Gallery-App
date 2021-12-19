import AppReducer from "./gallerySlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  gallery: AppReducer,
});
export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
