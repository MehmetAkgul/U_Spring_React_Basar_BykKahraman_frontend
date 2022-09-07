import React from "react";
import {signup} from "../api/apiCals";
import Input from "../components/input";
import {withTranslation} from "react-i18next";
import ButtonWithProgress from "../components/ButtonWithProgress";
import {withApiProgress} from "../shared/ApiProgress";


class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
         errors: {},
    }

    onChange = (event) => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const {name, value} = event.target; // Destructuring assignment
        const {t} = this.props;
        const errors = {...this.state.errors}
        errors[name] = undefined;

        if (name === 'password' || name === 'passwordRepeat') {
            if (name === 'password' && value !== this.state.passwordRepeat) {
                errors.passwordRepeat = t('Password mismatch');
            } else if (name === 'passwordRepeat' && value !== this.state.password) {
                errors.passwordRepeat = t('Password mismatch');
            } else {
                errors.passwordRepeat = undefined;
            }
        }

        this.setState({
            [name]: value,
            errors
        })
    }
    onClickSignUp = async event => {
        event.preventDefault();
        const {username, displayName, password} = this.state;

        const body = {// eğer key va value anyı isimde ise sadece key yazılabilir.
            username,
            displayName,
            password,
        }
        try {
            await signup(body);
        } catch (error) {
            if (error.response.data.validationErrors)
                this.setState({errors: error.response.data.validationErrors});
        }
    }


    render() {
        const {pendingApiCall, t} = this.props;
        const {errors} = this.state;
        const {username, displayName, password, passwordRepeat} = errors;
        return (
            <div className="container">
                <form action="src/pages/UserSignupPage">
                    <h1 className="text-center"> {t('Sign Up')}</h1>

                    <Input type="text" name="username" label={t('User Name')} error={username}
                           onChange={this.onChange}/>
                    <Input type="text" name="displayName" label={t('Display Name')} error={displayName}
                           onChange={this.onChange}/>
                    <Input type="password" name="password" label={t('Password')} error={password}
                           onChange={this.onChange}/>
                    <Input type="password" name="passwordRepeat" label={t('Password Repeat')} error={passwordRepeat}
                           onChange={this.onChange}/>

                    <div className="text-center">
                        <ButtonWithProgress
                            onClick={this.onClickSignUp}
                            disabled={pendingApiCall || passwordRepeat !== undefined}
                            pendingApiCall={pendingApiCall}
                            text={t('Sign Up')}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

// "higher order component"
const UserSignupPageWithApiProgress = withApiProgress(UserSignupPage,"/api/1.0/user")

const UserSignupPageWithTranslation = withTranslation()(UserSignupPageWithApiProgress)
export default UserSignupPageWithTranslation;