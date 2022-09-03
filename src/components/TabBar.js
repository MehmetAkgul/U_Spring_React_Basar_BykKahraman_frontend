import React, {Component} from 'react';
import logo from '../assets/logo192.png'
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
class TabBar extends Component {
    render() {
        const {t}=this.props;
        return (
          <div className="shadow-sm bg-light mb-2">
              <nav className="navbar navbar-light container navbar-expand">
                  <div className="container-fluid">
                      <Link className="navbar-brand" to="/">
                          <img src={logo} alt="logo" width="60"/>
                          Hoaxify
                      </Link>
                      <ul className="navbar-nav ">
                          <li className="nav-item" > <Link className="nav-link" to="/login">{t('Login')}</Link>  </li>
                          <li className="nav-item" > <Link className="nav-link" to="/signup">{t('Sign Up')}</Link>  </li>

                      </ul>
                  </div>
              </nav>
          </div>
        );
    }
}

export default withTranslation()(TabBar);