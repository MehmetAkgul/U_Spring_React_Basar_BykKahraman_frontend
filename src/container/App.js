import React from "react";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../pages/UserSignupPage";
import LanguageSelector from "../components/LanguageSelector";
import UserLoginPage from "../pages/UserLoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import TabBar from "../components/TabBar";


function App() {
    return (
        <div className="row">
            <Router>
                <TabBar />
               <Switch>
                   <Route exact path="/" component={HomePage}/>
                   <Route path="/login" component={UserLoginPage}/>
                   <Route path="/signup" component={UserSignupPage}/>
                   <Route path="/user/:username" component={UserPage}/>
                   <Redirect to="/"/>
               </Switch>
            </Router>
            <LanguageSelector/>
        </div>
    );
}

export default App;
