import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import { AuthConsumer } from '../AuthContext';

const options = [
    { key: 'p', text: 'PK2 Maba', value: 'pk2' },
    { key: 'f', text: 'Filafest', value: 'filafest' },
]

// const URL = 'http://localhost/api/postdata.php';
const URL = 'https://backend-bem.herokuapp.com/kirim'

export default class FormPendaftaran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nim: '',
            nama: '',
            prodi: '',
            line: '',
            pilih: '',
            motivasi: '',
            loading: false
        }
    }

    handleChange = (e, { value }) => this.setState({ value })



    daftar = async (nama, nim, prodi, pilih) => {
        const body = {
            "nim": nim,
            "nama": nama,
            "prodi": prodi,
            "pilihan": pilih,
            "idline": this.state.line,
            "motivasi": this.state.motivasi
        }
        console.log(body)
        await fetch(URL, {
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
                // console.log(ress)
                this.props.history.replace('/success')              

            })
        }
        componentDidMount(){
            
        }

    render() {

        return (
            <AuthConsumer>
            {({nama,nim,prodi,pilih})=>(
                
                <Form>
                    
                <Form.Input fluid label='Nim' placeholder='First name' value={nim} readOnly  />
                <Form.Input fluid label='Nama' placeholder='First name' value={nama} readOnly />
                <Form.Input fluid label='Program Studi' placeholder='Gender' value={prodi} readOnly  />
                <Form.Input fluid label='Id Line' required placeholder='Id Line'  onChange={val => this.setState({ line: val.target.value })} />
                <Form.Input fluid label='Pilihan' placeholder='Pilihan' value={pilih} readOnly  />
                <Form.TextArea label='Motivasi' required placeholder='Tell us more about you...' onChange={val => this.setState({ motivasi: val.target.value })} />
                {this.state.loading === false && <Button color="blue" fluid onClick={()=>{
                    this.setState({loading:true});
                    this.daftar(nama, nim, prodi, pilih)
                }
                    }>Submit</Button>
                }
                    {this.state.loading === true && <Button color="blue" loading fluid >
                    Login
                 </Button>}
                
            </Form>
            )}
            
            </AuthConsumer>
        )
    }
}
