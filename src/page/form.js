import React, {Component} from "react";
import {Form, Button} from "semantic-ui-react";
import axios from "axios";
import {AuthConsumer} from "../AuthContext";

// const URL = 'http://localhost/api/postdata.php';
const URL = "https://backend-bem.herokuapp.com/sendOprecStaffpk2fila";

const divisi = [
	{
		key: 1,
		text: "Kestari",
		value: "Kestari"
	},
	{
		key: 2,
		text: "Acara (Acara)",
		value: "Acara (Acara)"
	},
	{
		key: 3,
		text: "Acara (Kreatif)",
		value: "Acara (Kreatif)"
	},
	{
		key: 4,
		text: "Humas",
		value: "Humas"
	},
	{
		key: 5,
		text: "Transkoper",
		value: "Transkoper"
	},
	{
		key: 6,
		text: "DDM",
		value: "DDM"
	},
	{
		key: 7,
		text: "Kemankes",
		value: "Kemankes"
	},
	{
		key: 8,
		text: "Kodanus",
		value: "Kodanus"
	},
	{
		key: 9,
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
			divisi1: "",
			divisi2: "",
			saran: "",
			loading: false
		};
	}

	handleChange = (e, {value}) => this.setState({value});

	daftar = async (nama, nim, prodi) => {
		const body = {
			nim: nim,
			nama: nama,
			prodi: prodi,
			contact: this.state.contact,
			pilihan: "Filafest",
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


	render() {
		return (
			<AuthConsumer>
				{({nama, nim, prodi}) => (
					<Form onSubmit={()=>{
						this.setState({loading: true})
						this.daftar(nama,nim,prodi)
					}}> 
						<Form.Input fluid label="NIM" placeholder="NIM" value={nim} readOnly />
						<Form.Input fluid label="Nama" placeholder="Nama" value={nama} readOnly />
						<Form.Input fluid label="Program Studi" placeholder="Program Studi" value={prodi} readOnly />
						<Form.Input fluid label="Kontak LINE/WA" required placeholder="ID LINE/WA" onChange={val => this.setState({contact: val.target.value})} />
						<Form.Dropdown fluid required label="Pilihan Divisi 1" selection placeholder="Pilihan Divisi 1" options={divisi} onChange={(e,{value})=> this.setState({divisi1: value})} />
						<Form.Dropdown fluid required label="Pilihan Divisi 2" selection placeholder="Pilihan Divisi 2" options={divisi} onChange={(e,{value})=> this.setState({divisi2: value})} />
						<Form.TextArea label="Saran untuk Filafest 2019" required placeholder="Berikan saranmu untuk konsep acara ini" onChange={val => this.setState({saran: val.target.value})} />
						{this.state.loading === false && (
							<Button
								color="blue"
								fluid

								// onClick={() => {
									
								// 	this.setState({loading: true});
								// 	// this.daftar(nama, nim, prodi);
								// }}
								>
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
