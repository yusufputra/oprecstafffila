import React from "react";
import {Redirect} from "react-router-dom";
const AuthContext = React.createContext();

class AuthProvider extends React.Component {
	state = {
		isLogged: false,
		dataUser: undefined,
		pilih: null,
		nama: undefined,
		nim: undefined,
		prodi: undefined,
		link: undefined
	};
	constructor() {
		super();
		this.setPilih = this.setPilih.bind(this);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}
	//   setInfo(){
	//       this.setState({nama:nama});
	//       this.setState({nim:nim});
	//       this.setState({prodi:prodi});
	//       console.log(this.state)
	//   }

	logout() {
		this.setState({isLogged: false});
		this.setState({dataUser: undefined});
		this.setState({pilih: null});
		this.setState({nim: undefined});
		this.setState({prodi: undefined});
		this.setState({link: undefined});
	}
	setPilih(ad) {
		this.setState({pilih: ad});
		if (ad === "PK2 Maba") {
			this.setState({link: "https://drive.google.com/file/d/1n2NA27bBNV22N66VB-ihsZ-w4IxdfnMf/view?usp=sharing"});
		} else {
			this.setState({link: "https://drive.google.com/file/d/1UCjOZbMGsEwj4xEm1M54Dqhk4aUNifDl/view?usp=sharing"});
		}
		console.log(this.state);
	}
	login = async (nim, pass) => {
		const body = {
			nim: nim,
			pass: pass
		};
		try {
			const res = await fetch("https://backend-bem.herokuapp.com/auth", {
				method: "POST",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify(body)
			});
			const data = await res.json();
			console.log(data);
			if (!data.sukses) {
				return false;
			}
			this.setState({isLogged: true});
			this.setState({nim: data.nim});
			this.setState({nama: data.nama});
			this.setState({prodi: data.prodi});
			return true;
		} catch (error) {
			console.log(error);
		}
		// return await fetch('https://backend-bem.herokuapp.com/auth', {
		//     method: 'POST',
		//     headers: {
		//         'content-type': 'application/json'
		//     },
		//     body: JSON.stringify(body),
		// })
		//     .then(response => {
		//         if (response.ok) {
		//             console.log('sukses');
		//             return response.json();

		//         }
		//         return response.json().then(error => {
		//             throw new Error(error.message);
		//         });
		//     }).then(ress => {
		//         console.log(ress);
		//         if (!ress.sukses) {
		//             return false
		//         }

		//         this.setState({ nim: ress.nim });
		//         this.setState({ nama: ress.nama });
		//         this.setState({ prodi: ress.prodi });
		//         this.setState({ isLogged: true });
		//         return true

		//     })
	};

	render() {
		return (
			<AuthContext.Provider
				value={{
					isLogged: this.state.isLogged,
					dataUser: this.state.dataUser,
					setPilih: this.setPilih,
					pilih: this.state.pilih,
					nama: this.state.nama,
					nim: this.state.nim,
					prodi: this.state.prodi,
					login: this.login,
					link: this.state.link,
					logout: this.logout
				}}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

const AuthConsumer = AuthContext.Consumer;
export {AuthProvider, AuthConsumer};
