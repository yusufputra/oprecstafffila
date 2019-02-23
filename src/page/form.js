import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import axios from 'axios';
import { AuthConsumer } from '../AuthContext';

const options = [
    { key: 'p', text: 'PK2 Maba', value: 'pk2' },
    { key: 'f', text: 'Filafest', value: 'filafest' },
]

const URL = 'http://localhost/api/postdata.php';
// const URL = 'https://bemfilkom.ub.ac.id/api/opten3ProkerBesar/postdata.php'

export default class FormPendaftaran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nim: '',
            nama: '',
            prodi: '',
            line: '',
            pilihan: '',
            motivasi: ''
        }
    }

    handleChange = (e, { value }) => this.setState({ value })



    daftar() {
        axios({
            method: 'post',
            url: URL,
            data: {
                "nim" : this.state.nim,
                "nama": this.state.nama,
                "prodi": this.state.prodi,
                "idline": this.state.line,
                "pilihan": this.state.pilihan,
                "motivasi": this.state.motivasi
            },
           
          }).then(ress=>{
              console.log('suskes');
          }).catch(err=>{
              console.log(err);
          });
        }
        componentDidMount(){
            
        }

    render() {

        return (
            <AuthConsumer>
            {({nama,nim,prodi})=>(
                <Form>{nama}
                <Form.Input fluid label='Nim' placeholder='First name' value={nim} onChange={val => this.setState({ nim: val.target.value })} />
                <Form.Input fluid label='Nama' placeholder='First name' value={nama} onChange={val => this.setState({ nama: val.target.value })} />
                <Form.Input fluid label='Program Studi' placeholder='Gender' value={prodi} onChange={val => this.setState({ program: val.target.value })} />
                <Form.Input fluid label='Id Line' placeholder='Id Line' onChange={val => this.setState({ line: val.target.value })} />
                <Form.Select fluid label='Pilihan Ketua Pelaksana' placeholder='Pilih..' options={options} 
                onChange={val=>
                    {
                    this.setState({pilihan:val.target.textContent})
                    }
                    }/>
                <Form.TextArea label='Motivasi' placeholder='Tell us more about you...' onChange={val => this.setState({ motivasi: val.target.value })} />
                <Form.Button onClick={this.daftar.bind(this)}>Submit</Form.Button>
            </Form>
            )}
            
            </AuthConsumer>
        )
    }
}
