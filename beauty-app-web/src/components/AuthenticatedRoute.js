import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import { Route, Redirect } from 'react-router-dom'


class AuthenticatedRoute extends Component {
    render() {
        // if user is logged in, go to product list page
        if(AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props}/>
            // In BeautyApp Component, props of <AuthenticatedRoute/> are included in the spread operator {...this.props}
        }
        else {
            return <Redirect to="/login"/>
        }
    }
}

export default AuthenticatedRoute