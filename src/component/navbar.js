import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'Pendaftaran' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='tiny'>
        <Menu.Item name='Pendaftaran' active={activeItem === 'Pendaftaran'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary>Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
