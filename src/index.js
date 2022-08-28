import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap-override.scss'
import UserSignupPage from "./pages/UserSignupPage";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserSignupPage />
  </React.StrictMode>
);

