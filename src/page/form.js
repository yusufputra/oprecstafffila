import React, {Component} from "react";
import {Form, Button, Dropdown} from "semantic-ui-react";
import axios from "axios";
import {AuthConsumer} from "../AuthContext";

// const URL = 'http://localhost/api/postdata.php';
const URL = "https://backend-bem.herokuapp.com/sendOprecStaffpk2fila";

const divisiFila = [
	{
		text: "Kestari",
		value: "Kestari"
	},
	{
		text: "Acara (Acara)",
		value: "Acara (Acara)"
	},
	{
		text: "Acara (Kreatif)",
		value: "Acara (Kreatif)"
	},
	{
		text: "Humas",
		value: "Humas"
	},
	{
		text: "Transkoper",
		value: "Transkoper"
	},
	{
		text: "DDM",
		value: "DDM"
	},
	{
		text: "Kemankes",
		value: "Kemankes"
	},
	{
		text: "Kodanus",
		value: "Kodanus"
	},
	{
		text: "Sponsor",
		value: "Sponsor"
	}
];

export default class FormPendaftaran extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: "",
			nama: "",
			prodi: "",
			contact: "",
			pilih: "",
			divisi1: "",
			divisi2: "",
			saran: "",
			loading: false
		};
	}

	handleChange = (e, {value}) => this.setState({value});

	daftar = async (nama, nim, prodi, pilih) => {
		const body = {
			nim: nim,
			nama: nama,
			prodi: prodi,
			contact: this.state.contact,
			pilihan: pilih,
			divisi1: this.state.divisi1,
			divisi2: this.state.divisi2,
			saran: this.state.saran
		};
		console.log(body);
		await fetch(URL, {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(body)
		})
			.then(response => {
				if (response.ok) {
					console.log("sukses");
					return response.json();
				}
				return response.json().then(error => {
					throw new Error(error.message);
				});
			})
			.then(ress => {
				// console.log(ress)
				this.props.history.replace("/success");
			});
	};
	componentDidMount() {}

	render() {
		return (
			<AuthConsumer>
				{({nama, nim, prodi, pilih}) => (
					<Form>
						<Form.Input fluid label="Nim" placeholder="NIM" value={nim} readOnly />
						<Form.Input fluid label="Nama" placeholder="Nama" value={nama} readOnly />
						<Form.Input fluid label="Program Studi" placeholder="Program Studi" value={prodi} readOnly />
						<Form.Input fluid label="Kontak LINE/WA" required placeholder="ID LINE/WA" onChange={val => this.setState({contact: val.target.value})} />
						<Form.Input fluid label="Pilihan Event" placeholder="Pilihan Event" value={pilih} readOnly />
						<Form.Dropdown fluid required label="Pilihan Divisi 1" selection placeholder="Pilihan Divisi 1" options={divisiFila} onChange={(e,{value})=> this.setState({divisi1: value})} />
						<Form.Dropdown fluid required label="Pilihan Divisi 2" selection placeholder="Pilihan Divisi 2" options={divisiFila} onChange={(e,{value})=> this.setState({divisi2: value})} />
						<Form.TextArea label="Saran" required placeholder="Berikan saranmu untuk konsep acara ini" onChange={val => this.setState({saran: val.target.value})} />
						{this.state.loading === false && (
							<Button
								color="blue"
								fluid
								onClick={() => {
									console.log(this.state.divisi1);
									console.log(this.state.divisi2);
									this.setState({loading: true});
									this.daftar(nama, nim, prodi, pilih);
								}}>
								Submit
							</Button>
						)}
						{this.state.loading === true && (
							<Button color="blue" loading fluid>
								Login
							</Button>
						)}
					</Form>
				)}
			</AuthConsumer>
		);
	}
}
