import React from "react";
import Input from "../components/input";
import {withTranslation} from "react-i18next";
import ButtonWithProgress from "../components/ButtonWithProgress";
import {withApiProgress} from "../shared/ApiProgress";
import {connect} from "react-redux";
import {loginHandler} from "../redux/autActions";

class UserLoginPage extends React.Component {
    state = {
        username: null,
        password: null,
        error: null,
    }

    onChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value, error: null});
    }

    onClickLogin = async event => {
        event.preventDefault();
        const {username, password} = this.state;
        const {history, dispatch} = this.props;
        const {push} = history;

        const creds = {// eğer key va value anyı isimde ise sadece key yazılabilir.
            username,
            password
        }
        this.setState({error: null})
        try {
            await dispatch(loginHandler(creds));
            push('/');// yönlendirme yapıyor
        } catch (apiError) {
            if (apiError.response.data.message)
                this.setState({error: apiError.response.data.message});
        }
    }


    render() {
        const {t, pendingApiCall} = this.props;
        const {username, password, error} = this.state;
        const buttonEnabled = username && password;
        return (
            <div className="container">
                <form action="src/pages/UserSignupPage">
                    <h1 className="text-center"> {t('Login')}</h1>
                    <Input type="text" name="username" label={t('User Name')} onChange={this.onChange}/>
                    <Input type="password" name="password" label={t('Password')} onChange={this.onChange}/>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="text-center">
                        <ButtonWithProgress
                            onClick={this.onClickLogin}
                            disabled={!buttonEnabled || pendingApiCall}
                            pendingApiCall={pendingApiCall}
                            text={t('Login')}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

//bu işleme  "higher order component"
const UserSignupPageWithTranslation = withTranslation()(UserLoginPage)
const UserSignupPageWithApiProgress = withApiProgress(UserSignupPageWithTranslation, "/api/1.0/auth")

export default connect()(UserSignupPageWithApiProgress);