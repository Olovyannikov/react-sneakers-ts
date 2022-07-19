import React from 'react';
import {createRoot} from "react-dom/client";
import App from './App';
import '~/assets/styles/styles.scss';
import {BrowserRouter} from "react-router-dom";
import {DrawerContext} from "./context";
import {Provider} from "react-redux";
import {store} from "@/store/index";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <DrawerContext>
                <App/>
            </DrawerContext>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);