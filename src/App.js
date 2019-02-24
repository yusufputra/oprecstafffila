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
const PrivateRoute = ({ component: Component,status:isLogged, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLogged === true
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
            <Route exact path="/" component={Landing}  />
            <Route path="/login" component={Login} />
<<<<<<< HEAD
             <PrivateRoute path="/form" component={FormPendaftaran} status={isLogged}/>
             <PrivateRoute path="/success" component={Sukses} status={isLogged}/>
=======
            {isLogged && <Route path="/form" component={FormPendaftaran}/>}
            {<Route path="/success" component={Sukses}/>}
>>>>>>> 892b9bb11f2509b911536492ae9f9bcea8c6160b
          </Switch>
          </Container>
        </div>
      )}
        
      </AuthConsumer>
    );
  }
}

export default App;
