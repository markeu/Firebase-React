import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForget from '../PasswordForget'
import Home from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'
import * as Routes from '../../constants/routes'

const {SIGN_IN, HOME, ACCOUNT, ADMIN, LANDING, SIGN_UP, PASSWORD_FORGET} = Routes

const App = () => (
  <Router>
    <Navigation />
    <hr />

    <Route exact path={LANDING} component={LandingPage} />
    <Route path={SIGN_UP} component={SignUpPage} />
    <Route path={SIGN_IN} component={SignInPage} />
    <Route path={PASSWORD_FORGET} component={PasswordForget} />
    <Route path={HOME} component={Home} />
    <Route path={ACCOUNT} component={AccountPage} />
    <Route path={ADMIN} component={AdminPage}/>
  </Router>
);

export default App;