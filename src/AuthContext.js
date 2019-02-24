import React from 'react';

const AuthContext = React.createContext();


class AuthProvider extends React.Component {
    state = {
        isLogged: false,
        dataUser: undefined,
        pilih: undefined,
        nama: undefined,
        nim: undefined,
        prodi: undefined
    }
    constructor() {
        super()
        this.setPilih = this.setPilih.bind(this);
        this.login = this.login.bind(this);
    }
    //   setInfo(){
    //       this.setState({nama:nama});
    //       this.setState({nim:nim});
    //       this.setState({prodi:prodi});
    //       console.log(this.state)
    //   }
    setPilih(ad) {
        this.setState({ pilih: ad })
    }
    login = async (nim, pass) => {

        const body = {
            "nim": nim,
            "pass": pass
        }
        await fetch('https://backend-bem.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
        })
            .then(response => {
                if (response.ok) {
                    console.log('sukses');
                    return response.json();

                }
                return response.json().then(error => {
                    throw new Error(error.message);
                });
            }).then(ress => {
                console.log(ress);
                this.setState({ nim: ress.nim });
                this.setState({ nama: ress.nama });
                this.setState({ prodi: ress.prodi });
                this.setState({ isLogged: true });

            })
    }

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
                    login: this.login
                }}
            >
                {this.props.children}
            </AuthContext.Provider>)
    }
}

const AuthConsumer = AuthContext.Consumer
export { AuthProvider, AuthConsumer }
