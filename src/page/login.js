import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';

export default class Login extends Component {
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
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />
        
                  <Button color="blue" fluid size="large">
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
