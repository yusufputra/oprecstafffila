import React from 'react';
 
const AuthContext = React.createContext();


 class AuthProvider extends React.Component {
  state ={
      isLogged:false,
      dataUser:undefined,
      pilih:undefined,
  }
  constructor(){
      super()
      this.setPilih=this.setPilih.bind(this);
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
         pilih:this.state.pilih
        }}
    >
    {this.props.children}
    </AuthContext.Provider>)
  }
}

const AuthConsumer = AuthContext.Consumer
export {AuthProvider,AuthConsumer}
