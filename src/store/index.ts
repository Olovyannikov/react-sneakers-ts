import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {models} from "./models";

const rootReducer = combineReducers({
    ...models,
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];