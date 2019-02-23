import React, { Component } from 'react';
import FormPendaftaran from './page/form';
import './App.css';
import Login from './page/login';
import { Container } from 'semantic-ui-react'

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
      <Container>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/form" component={FormPendaftaran}/>
      </Switch>
      </Container>
    );
  }
}

export default App;
