import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { AuthConsumer } from '../AuthContext'

export default class Navbar extends Component {
  state = { activeItem: 'Pendaftaran' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <AuthConsumer>
      {({ isLogged, logout }) => (
        <Menu size='tiny'>
        <Menu.Item name='Pendaftaran' active={activeItem === 'Pendaftaran'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item>
            {isLogged && <Button primary onClick={()=>{logout()}}>Logout</Button>}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      )}
      </AuthConsumer>
    )
  }
}
