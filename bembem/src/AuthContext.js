import React from "react";
const AuthContext = React.createContext();

class AuthProvider extends React.Component {
	state = {
		isLogged: false,
		dataUser: undefined,
		nama: undefined,
		nim: undefined,
		prodi: undefined,
		status: undefined,
		loading: true,
		link: "http://bit.ly/Filafest2019"
	};
	constructor() {
		super();
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.setStatus = this.setStatus.bind(this);
		this.setLoading = this.setLoading.bind(this);
	}
	//   setInfo(){
	//       this.setState({nama:nama});
	//       this.setState({nim:nim});
	//       this.setState({prodi:prodi});
	//       console.log(this.state)
	//   }

	logout() {
		this.setState({ isLogged: false });
		this.setState({ dataUser: undefined });
		this.setState({ nim: undefined });
		this.setState({ prodi: undefined });
		this.setState({ link: undefined });
		this.setState({loading: true});
	}
	setStatus = (status) => {
		this.setState({status: status});
		console.log(this.state.status)
	}
	setLoading = (loading) => {
		this.setState({loading: loading});
		console.log(this.state.loading)
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
			this.setState({ isLogged: true });
			this.setState({ nim: data.nim });
			this.setState({ nama: data.nama });
			this.setState({ prodi: data.prodi });
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
					nama: this.state.nama,
					nim: this.state.nim,
					prodi: this.state.prodi,
					login: this.login,
					link: this.state.link,
					status: this.state.status,
					loading: this.state.loading,
					logout: this.logout,
					setStatus: this.setStatus,
					setLoading: this.setLoading
				}}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer };
