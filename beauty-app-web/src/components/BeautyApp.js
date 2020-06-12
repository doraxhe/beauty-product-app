import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' // import BrowserRouter and rename it as Router and Route and Switch
// import './bootstrap.css';
import AuthenticationService from './AuthenticationService'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListComponent from './ListComponent'
import HeaderComponent from './HeaderComponent'
import ProductComponent from './ProductComponent'



class BeautyApp extends Component {
    render() {
        return (
            <div className="beautyapp">
                Beauty Product Organizer

                <Router>
                    <> {/* Router can only return one element, so wrap things up here */}
                        <HeaderComponent/>

                        <Switch> {/* Switch ensures only one of the below routes gets redirected */}
                            <Route path="/" exact component={LoginComponent}/> 
                            {/* when there is no additional path, the browser shows login page by default */}
                            <Route path="/login" component={LoginComponent}/> {/* this also shows login page */}

                            <AuthenticatedRoute path="/users/:username/products/:id" component={ProductComponent}/> 
                            {/* put this above ListComponent, so that path with /:id has higher priority over path without /:id */}
                            <AuthenticatedRoute path="/users/:username/products" component={ListComponent}/> 
                            {/* pass whatever name entered in the login page to the welcome page*/}

                            {/* <Route path="/beautylists" component={ListComponent}/> */}
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            

                            <Route component={ErrorComponent}/> {/* if no path matches the above paths, then redirect to error page */}
                        </Switch>                        
                    </>
                </Router>
            </div>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
            </div>
        )
    }
}

function ErrorComponent() {
    return (
        <div>An Error Occurred. Please Login.</div>
    )
}

export default BeautyApp;