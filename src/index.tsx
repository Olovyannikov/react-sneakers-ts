import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '~/assets/styles/styles.scss';
import {BrowserRouter} from "react-router-dom";
import {DrawerContext} from "./context";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <DrawerContext>
                <App/>
            </DrawerContext>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);