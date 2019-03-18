import React, {Component} from "react";
import {Button, Form, Grid, Header, Segment} from "semantic-ui-react";
import {AuthConsumer} from "../AuthContext";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: "",
			password: "",
			nama: "",
			prodi: "",
			loading: false,
			message: false
		};
	}

	render() {
		return (
			<AuthConsumer>
				{({login, setStatus, setLoading}) => (
					<div class="ui middle aligned center aligned grid">
						<Grid centered columns={1}>
							<Grid.Column>
								<Header as="h2" textAlign="center">
									Login
								</Header>
								<Segment>
									<Form size="large">
										<Form.Input fluid icon="user" iconPosition="left" placeholder="NIM" onChange={input => this.setState({nim: input.target.value})} />
										<Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" onChange={input => this.setState({password: input.target.value})} />
										{this.state.loading && (
											<Button fluid size="large" loading primary>
												Loading
											</Button>
										)}
										{this.state.loading === false && (
											<Button
												color="blue"
												fluid
												size="large"
												onClick={async () => {
													this.setState({loading: true});
													//cek nim
													if (this.state.nim.startsWith("17") || this.state.nim.startsWith("18")) {
														await login(this.state.nim, this.state.password).then(ress => {
															let a = ress;
															console.log(ress);
															if (!a) {
																this.setState({message: true});
																this.setState({loading: false});
															} else {
																const body = {
																	nim : this.state.nim
																}
																fetch("https://backend-bem.herokuapp.com/checkstaffpk2fila", {
																	method: "POST",
																	headers: {
																		"content-type": "application/json"
																	},
																	body: JSON.stringify(body)
																}).then(ress=>{
																	return ress.json()
																	// console.log(ress)
																	// if(ress.ok){
																	// 	this.setState({loading: false});
																	// 	this.props.history.replace("/success");
																	// }
																}).then(data=>{
																	setStatus(data.value);
																	console.log(data)
																	if(data.status === true){
																		this.setState({loading: false});
																		if(data.value === null){
																			setLoading(false);
																			this.props.history.replace("/success");
																		}else{
																			setLoading(false);
																			this.props.history.replace("/notif");
																		}
																	}else{
																		setLoading(false);
																	}
																	
																}).catch(error=>{
																	console.log(error)
																})
																this.setState({loading: false});
																this.props.history.replace("/form");
															}
														});
													} else {
														this.setState({loading: false});
														this.setState({message: true});
													}
												}}>
												Login
											</Button>
										)}
									</Form>
								</Segment>
							</Grid.Column>

							{this.state.loading === true && (
								<div class="ui icon message">
									<i class="notched circle loading icon" />
									<div class="content">
										<div class="header">Just one second</div>
										<p>We're fetching that content for you.</p>
									</div>
								</div>
							)}
							{this.state.message === true && (
								<div class="ui negative message">
									<i class="close icon" />
									<div class="header">Anda Bukan Angkatan 2017 atau 2018!</div>
									<p>Hanya angkatan 17 dan 18 yang diperkenankan mendaftar</p>
								</div>
							)}
							{this.state.message === true && (
								<div class="ui negative message">
									<i class="close icon" />
									<div class="header">Password atau Nim salah</div>
									<p>Silahkan Login Kembali</p>
								</div>
							)}
						</Grid>
					</div>
				)}
			</AuthConsumer>
		);
	}
}
