import React from "react";
import {signup} from "../api/apiCals";
import Input from "../components/input";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
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
    onClickSignUp = async event => {
        event.preventDefault();
        const {username, displayName, password} = this.state;

        const body = {// eğer key va value anyı isimde ise sadece key yazılabilir.
            username,
            displayName,
            password,
        }

        this.setState({pendingApiCall: true});
        try {
            await signup(body);
        } catch (error) {
            if (error.response.data.validationErrors)
                this.setState({errors: error.response.data.validationErrors});

        }
        this.setState({pendingApiCall: false});


    }

    render() {
        const {pendingApiCall, errors} = this.state;
        const {username, displayName,password,passwordRepeat} = errors;
        return (
            <div className="container">
                <form action="src/pages/UserSignupPage">
                    <h1 className="text-center"> Sign Up </h1>

                    <Input type="text" name="username" label="User Name" error={username} onChange={this.onChange}/>
                    <Input type="text"  name="displayName" label="Display Name" error={displayName} onChange={this.onChange}/>
                    <Input type="password"  name="password" label="Password" error={password} onChange={this.onChange}/>
                    <Input type="password"  name="passwordRepeat" label="Password Repeat" error={passwordRepeat} onChange={this.onChange}/>

                    <div className="text-center">
                        <button
                            className="btn btn-primary mt-3"
                            onClick={this.onClickSignUp}
                            disabled={pendingApiCall}
                        >
                            {pendingApiCall && <span className="spinner-grow spinner-grow-sm"></span>}
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSignupPage