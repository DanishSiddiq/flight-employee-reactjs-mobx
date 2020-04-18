import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

// context providers
import ProfileProvider from './providers/ProfileProvider';
import CountryProvider from './providers/CountryProvider';

// containers
import CountryContainer from './components/country/CountryContainer';
import HomeContainer from './components/home/HomeContainer';
import LoginContainer from './components/login/LoginContainer';
import ProfileContainer from './components/profile/ProfileContainer';

// routes
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';

function App() {
  return (
    <CountryProvider>
      <ProfileProvider>
        <div className="App">
          <BrowserRouter>
            <div>
              <div className="header">
                <NavLink exact activeClassName="active" to="/">Home</NavLink><small> </small>
                <NavLink activeClassName="active" to="/countries">Countries</NavLink><small>(Access without token)</small>
                <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token)</small>
                <NavLink activeClassName="active" to="/profile">Profile</NavLink><small>(Access with token)</small>
              </div>
              <div className="content">
                <Switch>
                  <Route exact path="/" component={HomeContainer} />
                  <Route exact path="/countries" component={CountryContainer} />
                  <PublicRoute path="/login" component={LoginContainer} />
                  <PrivateRoute path="/profile" component={ProfileContainer} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </ProfileProvider>
    </CountryProvider>
  );
}

export default App;
