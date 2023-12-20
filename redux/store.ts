import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import menu from "./menu";
import skills from "./skills";
import projectDetails from "./projectDetails";
import cv from "./cv";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  menu,
  skills,
  projectDetails,
  cv,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (
    getDefaultMiddleware: (arg0: { serializableCheck: boolean }) => any
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
