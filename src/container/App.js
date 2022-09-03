import React from "react";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../pages/UserSignupPage";
import LanguageSelector from "../components/LanguageSelector";
import UserLoginPage from "../pages/UserLoginPage";


function App() {
    return (
        <div className="row">
            <div className="col">
                <UserSignupPage/>
            </div>
            <div className="col">
                <UserLoginPage/>
            </div>
            <LanguageSelector/>
        </div>
    );
}

export default App;
