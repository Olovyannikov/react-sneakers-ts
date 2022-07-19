import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {getFavService, getCartService, getSneakersService} from "@/services";

const rootReducer = combineReducers({
    [getSneakersService.reducerPath]: getSneakersService.reducer,
    [getCartService.reducerPath]: getCartService.reducer,
    [getFavService.reducerPath]: getFavService.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([getSneakersService.middleware, getFavService.middleware, getCartService.middleware])
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];