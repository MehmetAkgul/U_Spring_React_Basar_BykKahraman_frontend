import React from "react";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../pages/UserSignupPage";
import LanguageSelector from "../components/LanguageSelector";
import UserLoginPage from "../pages/UserLoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import TabBar from "../components/TabBar";

class App extends React.Component {
    state = {
        isLoggedIn: false,
        username: undefined,
    };
    onLoginSuccess = (username) => {
        this.setState({
            username,
            isLoggedIn: true,
        })
    };
    onLogoutSuccess = () => {
        this.setState(
            {
                isLoggedIn: false,
                username: undefined,
            }
        )
    }

    render() {

        const {isLoggedIn, username} = this.state;

        return (

            <div >
                <Router>
                    <TabBar isLoggedIn={isLoggedIn} username={username} onLogoutSuccess={this.onLogoutSuccess}/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        {
                            !isLoggedIn &&
                            <Route path="/login" component={(props) => {
                                return <UserLoginPage {...props} onLoginSuccess={this.onLoginSuccess}/>
                            }}/>
                        }
                        <Route path="/signup" component={UserSignupPage}/>
                        <Route path="/user/:username"
                               component={(props) => {
                                   return <UserPage {...props} username={username}/>
                               }}/>
                        <Redirect to="/"/>
                    </Switch>
                </Router>
                <LanguageSelector/>
            </div>
        );
    }
}

export default App;
