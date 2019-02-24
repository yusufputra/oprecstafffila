import React, { Component } from 'react';
import FormPendaftaran from './page/form';
import './App.css';
import Login from './page/login';
import { Container } from 'semantic-ui-react';
import { AuthConsumer } from './AuthContext';

import Landing from './page/landing';
import { Route, Switch,Redirect } from 'react-router';
import Navbar from './component/navbar';
import Sukses from './component/sukses';
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
      <AuthConsumer>
      {({ isLogged }) => (
        <div>
          <Navbar></Navbar>
          <Container>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            {isLogged && <Route path="/form" component={FormPendaftaran}/>}
            {isLogged && <Route path="/success" component={Sukses}/>}
          </Switch>
          </Container>
        </div>
      )}
        
      </AuthConsumer>
    );
  }
}

export default App;
