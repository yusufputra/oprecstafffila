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
const PrivateRoute = ({ component: Component,status:isLogged,pilih:pilih, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (pilih==null){
      return <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    }
    else if (isLogged){
      return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    }
    else{
      return <Component {...props}/>
    }
  }} />
)




class App extends Component {
  render() {
    return (
      <AuthConsumer>
      {({ isLogged,pilih }) => (
        <div>
          <Navbar></Navbar>
          <Container>
          <Switch>
            <Route exact path="/" component={Landing}  />
            <PrivateRoute path="/login" component={Login} pilih={pilih}/>
             <PrivateRoute path="/form" component={FormPendaftaran} status={isLogged}/>
             <PrivateRoute path="/success" component={Sukses} status={isLogged}/>
          </Switch>
          </Container>
        </div>
      )}
        
      </AuthConsumer>
    );
  }
}

export default App;
