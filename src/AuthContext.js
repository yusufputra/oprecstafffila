import React from 'react';
 
const AuthContext = React.createContext();


 class AuthProvider extends React.Component {
  state ={
      isLogged:false,
      dataUser:undefined,
      pilih:undefined,
      nama:undefined,
      nim:undefined,
      prodi:undefined
  }
  constructor(){
      super()
      this.setPilih=this.setPilih.bind(this);
      this.setInfo=this.setInfo.bind(this);
  }
  setInfo(nama,nim,prodi){
      this.setState({nama:nama});
      this.setState({nim:nim});
      this.setState({prodi:prodi});
      console.log(this.state)
  }
  setPilih(ad){
    this.setState({pilih:ad})
    }
    render() {
    return (
     <AuthContext.Provider
     value={{
         isLogged:this.state.isLogged,
         dataUser:this.state.dataUser,
         setPilih:this.setPilih,
         pilih:this.state.pilih,
         nama:this.state.nama,
         nim: this.state.nim,
         prodi: this.state.prodi,
         setInfo: this.setInfo
        }}
    >
    {this.props.children}
    </AuthContext.Provider>)
  }
}

const AuthConsumer = AuthContext.Consumer
export {AuthProvider,AuthConsumer}
