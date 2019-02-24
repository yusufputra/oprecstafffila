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
      password: '',
      nama: '',
      prodi: '',
      loading: false
    }
  }

   
  render() {

    return (
      <AuthConsumer>
        {({ login }) => (
          <div class="ui middle aligned center aligned grid">
            <Grid centered columns={1}>
              <Grid.Column>
                <Header as="h2" textAlign="center">
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
                    {this.state.loading && <Button fluid size="large" loading primary>
                      Loading
                    </Button>}
                    {this.state.loading === false && <Button color="blue" fluid size="large" 
                    onClick={async ()=>{
                      await login(this.state.nim,this.state.password);
                      this.props.history.replace('/form');
                    }
                  }>
                    Login
                   </Button>}
                    


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

