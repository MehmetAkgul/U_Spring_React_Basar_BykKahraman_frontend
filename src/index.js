import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap-override.scss'
import App from "./container/App";
import {Provider} from "react-redux";
import {createStore} from "redux";

const loggedInState = {
    isLoggedIn: true,
    username: "user1",
    displayName: "display1",
    image: null,
    password: "P4ssword",
};

const defaultState = {
    isLoggedIn: false,
    username: undefined,
    displayName: undefined,
    image: undefined,
    password: undefined,
};


const root = ReactDOM.createRoot(document.getElementById("root"));
const reducer = (state={...defaultState}, action) => {
    if (action.type === "logout-success")
        return defaultState;
    return state;
}
const store = createStore(reducer,loggedInState);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

