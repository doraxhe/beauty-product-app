import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import { withRouter } from 'react-router'

class HeaderComponent extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <div className="navbar-link"><a href="/login">Login</a></div>}
                        {isUserLoggedIn && <div className="navbar-link" onClick={AuthenticationService.logout}><a href="/logout">Logout</a></div>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)

// To ensure that header menus are updated whenever the router is called we need to wrap HeaderComponent with a call to withRouter.