import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios';

const URL_EM='https://em.ub.ac.id/auth/css/api.php'

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      nim:'',
      password:''
    }
    }

    login(){
      
      axios.get('https://em.ub.ac.id/auth/css/api.php', {
        params: {
          nim:175150201111032,
          pass:'game9898'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
  render() {
    
    return (
      <div class="ui middle aligned center aligned grid container">
          <Grid centered columns={2}>
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
                    onChange={input=>this.setState({nim:input.target.value})}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    onChange={input=>this.setState({password:input.target.value})}

                  />
        
                  <Button color="blue" fluid size="large" onClick={this.login.bind(this)}>
                    Login
                  </Button>


                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
      </div>
    )
  }
}

