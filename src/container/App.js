import React from "react";
import LanguageSelector from "../components/LanguageSelector";
import UserSignupPage from "../pages/UserSignupPage";
import UserLoginPage from "../pages/UserLoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import TabBar from "../components/TopBar";

class App extends React.Component {

    render() {
       let isLoggedIn=false;
        return (
            <div >
                <Router>
                    <TabBar/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        { !isLoggedIn &&  <Route path="/login" component={ UserLoginPage}/>  }
                        <Route path="/signup" component={UserSignupPage}/>
                        <Route path="/user/:username"  component={UserPage}/>
                        <Redirect to="/"/>
                    </Switch>
                </Router>
                <LanguageSelector/>
            </div>
        );
    }
}

export default App;
