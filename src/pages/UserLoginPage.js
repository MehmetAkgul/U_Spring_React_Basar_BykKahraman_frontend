import React from "react";
import {login} from "../api/apiCals";
import Input from "../components/input";
import {withTranslation} from "react-i18next";


class UserLoginPage extends React.Component {

    state = {
        username: null,
        password: null,
        pendingApiCall: false,
        errors: {},
    }

    onChange = (event) => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const {name, value} = event.target; // Destructuring assignment
        const errors = {...this.state.errors}
        errors[name] = undefined;

        this.setState({
            [name]: value,
            errors
        })
    }
    onClickLogin = async event => {
        event.preventDefault();
        const {username, password} = this.state;

        const creds = {// eğer key va value anyı isimde ise sadece key yazılabilir.
            username,
            password
        }

        this.setState({pendingApiCall: true});
        try {
            await login(creds);
        } catch (error) {
            if (error.response.data.validationErrors)
                this.setState({errors: error.response.data.validationErrors});
        }
        this.setState({pendingApiCall: false});
    }


    render() {
        const {t} = this.props;
        const {pendingApiCall, errors} = this.state;
        const {username, password} = errors;
        return (
            <div className="container">
                <form action="src/pages/UserSignupPage">
                    <h1 className="text-center"> {t('Login')}</h1>

                    <Input type="text" name="username" label={t('User Name')} error={username}
                           onChange={this.onChange}/>
                    <Input type="password" name="password" label={t('Password')} error={password}
                           onChange={this.onChange}/>

                    <div className="text-center">
                        <button
                            className="btn btn-primary mt-3"
                            onClick={this.onClickLogin}
                            disabled={pendingApiCall}
                        >
                            {pendingApiCall && <span className="spinner-grow spinner-grow-sm"></span>}
                            {t('Login')}
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

//bu işleme  "higher order component"
const UserSignupPageWithTranslation = withTranslation()(UserLoginPage)

export default UserSignupPageWithTranslation;