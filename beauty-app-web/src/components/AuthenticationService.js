class AuthenticationService {
    // register for a successful login and put a value into session storage
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    // check if user is logged in or not
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')

        if(user === null) return false;
        return true;
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) return ''
        return user
    }
}
// For React Component we export the class directly. For Helper Services, we export an instance of the class - an object.
export default new AuthenticationService()

// Data stored in sessionStorage gets cleared when the page session ends. It's more secured than local storage which does not have a expiration time and user has to manually delete the key in storage.