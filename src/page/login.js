import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import { AuthConsumer } from '../AuthContext';
import { isContext } from 'vm';

const URL_EM = 'https://em.ub.ac.id/auth/css/api.php'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nim: '',
      password: '',
      nama: '',
      prodi: '',
      loading: false,
      message: false,
      notseven: false
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
                      onClick={async () => {
                        this.setState({ loading: true });
                        await login(this.state.nim, this.state.password).then(ress => {
                          let a = ress;
                          console.log(ress);
                          if (!a) {
                            this.setState({ message: true });
                            this.setState({loading:false});
                          }
                          else {
                              this.setState({ loading: false });
                              this.props.history.replace('/form');
                            

                          }
                        });


                      }
                      }>
                      Login
                   </Button>}



                  </Form>
                </Segment>
              </Grid.Column>

              {this.state.loading == true && <div class="ui icon message">
                <i class="notched circle loading icon"></i>
                <div class="content">
                  <div class="header">
                    Just one second
                   </div>
                  <p>We're fetching that content for you.</p>
                </div>
              </div>
              }
              {this.state.message === true && <div class="ui negative message">
                <i class="close icon"></i>
                <div class="header">
                  Anda Bukan Angkatan 2017
                </div>
                <p>Silahkan Login Kembali
              </p></div>}
              {this.state.message === true && <div class="ui negative message">
                <i class="close icon"></i>
                <div class="header">
                  Password atau Nim salah
                </div>
                <p>Silahkan Login Kembali
              </p></div>}
            </Grid>

          </div>
        )}

      </AuthConsumer>
    )
  }
}

