import React from "react";
import LanguageSelector from "../components/LanguageSelector";
import UserSignupPage from "../pages/UserSignupPage";
import UserLoginPage from "../pages/UserLoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import TabBar from "../components/TopBar";
import {connect} from "react-redux";

class App extends React.Component {

    render() {
       const {isLoggedIn}=this.props;
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

const mapStateToProps = (store) => {
  return{
      isLoggedIn:store.isLoggedIn
  }
}
export default connect(mapStateToProps)(App);
