import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap-override.scss'
import App from "./container/App";
import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";




const root = ReactDOM.createRoot(document.getElementById("root"));

const store =configureStore();
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

