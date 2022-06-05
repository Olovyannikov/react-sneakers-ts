import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '~/assets/styles/styles.scss';
import {BrowserRouter} from "react-router-dom";
import {DrawerContext} from "./context";
import {Provider} from "react-redux";
import {store} from "@/store/index";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <DrawerContext>
                <App/>
            </DrawerContext>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);