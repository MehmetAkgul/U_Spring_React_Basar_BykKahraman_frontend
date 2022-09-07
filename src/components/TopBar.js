import React, {Component} from 'react';
import logo from '../assets/logo192.png'
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import {Authentication} from "../shared/AuthenticationContext";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {logoutSuccess} from "../redux/autActions";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";

class TopBar extends Component {
    render() {
        console.log(this.props)
        const {t, username, isLoggedIn, onLogoutSuccess} = this.props;


        let links = (
            <ul className="navbar-nav ">
                <li className="nav-item"><Link className="nav-link" to="/login">{t('Login')}</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">{t('Sign Up')}</Link>
                </li>
            </ul>
        );
        if (isLoggedIn)
            links = (
                <ul className="navbar-nav ">
                    <li className="nav-item"><Link className="nav-link" to={`/user/${username}`}>{username}</Link></li>
                    <li className="nav-item nav-link" onClick={onLogoutSuccess}
                        style={{cursor: "pointer"}}>{t('Logout')} </li>
                </ul>
            );
        return (
            <div className="shadow-sm bg-light mb-2">
                <nav className="navbar navbar-light container navbar-expand">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" width="60"/>
                            Hoaxify
                        </Link>
                        {links}
                    </div>
                </nav>
            </div>
        );
    }
}

const TopBarWithTranslation = withTranslation()(TopBar)

const mapStateToProps = (store) => {
    return {
        username: store.username,
        isLoggedIn: store.isLoggedIn
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutSuccess: () => dispatch(logoutSuccess())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarWithTranslation);