import React, {Component} from 'react';
import logo from '../assets/logo192.png'
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import {Authentication} from "../shared/AuthenticationContext";

class TabBar extends Component {
//static contextType=Authentication;

    render() {
        const {t} = this.props;
        const  onLogoutSuccess=()=>{}
        const isLoggedIn = false;
        const username = false;
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

export default withTranslation()(TabBar);