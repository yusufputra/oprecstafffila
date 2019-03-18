import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

export default class Navbar extends Component {
	state = { activeItem: "Pendaftaran" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<AuthConsumer>
				{({ isLogged, logout }) => (
					<Menu size="big">
						<a href="./" ><Menu.Item name="BEM FILKOM 2019" active={activeItem === "Pendaftaran"}></Menu.Item>
						</a>
						<Menu.Menu position="right">
							<Menu.Item>
								{isLogged && (
									<Button
										primary
										onClick={() => {
											logout();
										}}
									>
										Logout
									</Button>
								)}
							</Menu.Item>
						</Menu.Menu>
					</Menu>
				)}
			</AuthConsumer>
		);
	}
}
