import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios';
import { AuthConsumer } from '../AuthContext';

const URL_EM = 'https://em.ub.ac.id/auth/css/api.php'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nim: '',
      password: ''
    }
  }

  login() {

    axios('https://backend-bem.herokuapp.com/auth', {
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body: {
        "nim":"175150201111032",
        "pass":"game9898"
      }
    })
    .then(response=>{
      console.log(response);
    }).catch(err=>{
      console.log(err);
    })
  }

  render() {

    return (
      <AuthConsumer>
        {({ pilih }) => (
          <div class="ui middle aligned center aligned grid container">
            <Grid centered columns={2}>
              <Grid.Column>
                <Header as="h2" textAlign="center">
                  {pilih}
                  Login
                </Header>
                <Segment>
                  <Form size="large">
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="NIM"
                      onChange={input => this.setState({ nim: input.target.value })}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      onChange={input => this.setState({ password: input.target.value })}

                    />

                    <Button color="blue" fluid size="large" onClick={this.login.bind(this)}>
                      Login
                     </Button>


                  </Form>
                </Segment>
              </Grid.Column>
            </Grid>
          </div>
        )}

      </AuthConsumer>
    )
  }
}

