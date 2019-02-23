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

  login = () =>{
    this.setState({loading:true})
    const body = {
      "nim": this.state.nim,
      "pass":this.state.password
    }
    fetch('https://backend-bem.herokuapp.com/auth', {
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(body),
    })
    .then(response=>{
      if(response.ok){
        return response.json();
        
      }
      this.setState({loading:false})
      return response.json().then(error=>{
        throw new Error(error.message);
      });
    }).then(ress=>{
      console.log(ress);
      this.setState({nama:ress.nama});
      this.setState({prodi:ress.prodi});
      this.setState({loading:false})
    })
  }

  render() {

    return (
      <AuthConsumer>
        {({ setInfo }) => (
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
                    {this.state.loading === false && <Button color="blue" fluid size="large" onClick={()=>{
                      this.login.bind(this);
                      console.log(this.state)
                      setInfo(this.state.nama,this.state.nim,this.state.prodi);
                      this.props.history.replace('/form')
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

