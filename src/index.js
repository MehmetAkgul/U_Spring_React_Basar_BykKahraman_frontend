import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap-override.scss'
import App from "./container/App";
import AuthenticationContext from "./shared/AuthenticationContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

        <App />

);

