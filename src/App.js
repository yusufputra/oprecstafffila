import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './page/login';
import Landing from './page/landing';
import { Route, Switch,Redirect } from 'react-router';
const test = false;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    test === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
      
      </Switch>
    );
  }
}

export default App;
