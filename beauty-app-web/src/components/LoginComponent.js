import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import { Route, Redirect } from 'react-router-dom'


class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            isLoginSuccessful: false
        }
    }

    handleChange = e => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
            // use a variable "e.target.name" to represent username and password at the same time, so that both input fields can be submitted at the same time. Use [] to wrap around the variable. 
            // The values of "name" should match the names of state elements, so that "name" represents the correct things.
        })
    }

    loginClicked = e => {
        if (this.state.username === 'doraxhe' && this.state.password === '123') {
            // once click login button, an authentication service is created, and username and password of current user are put into session storage
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            // if input correctly, redirect to welcome page
            this.props.history.push(`/users/${this.state.username}/products`)
            // history API is a dependency for ReactRouter
            // `${}` is the way to pass parameters. Here whatever name entered in login page will be passed into the route/path, so that welcome page url can show that name.
        }
        else {
            // if input incorrectly, show error message
            this.setState({
                isLoginSuccessful: false,
                hasLoginFailed: true
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div>Invalid Credentials</div>}

                    {/* <ShowLoginSuccessfully isLoginSuccessful={this.state.isLoginSuccessful}/> */}
                    {this.state.isLoginSuccessful && <div>Login Successfully</div>}

                    <div>
                        Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <button onClick={this.loginClicked}>Login</button>
                    </div>
                </div>                
            </div>
        )
    }
}

export default LoginComponent