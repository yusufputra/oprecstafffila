import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import { AuthConsumer } from '../AuthContext';

const options = [
    { key: 'p', text: 'PK2 Maba', value: 'pk2' },
    { key: 'f', text: 'Filafest', value: 'filafest' },
]

// const URL = 'http://localhost/api/postdata.php';
const URL = 'https://bemfilkom.ub.ac.id/api/opten3ProkerBesar/postdata.php'

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



    daftar = async (nama, nim, prodi, pilih) => {
        const body = {
            "nim": nim,
            "nama": nama,
            "prodi": prodi,
            "pilihan": pilih,
            "idline": this.state.idline,
            "motivasi": this.state.motivasi
        }
        const badan = JSON.stringify(body);
        console.log(badan);
        await fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: badan,
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
                    
                <Form.Input fluid label='NIM' placeholder='First name' value={nim} onChange={val => this.setState({ nim: val.target.value })} />
                <Form.Input fluid label='Nama' placeholder='First name' value={nama} onChange={val => this.setState({ nama: val.target.value })} />
                <Form.Input fluid label='Program Studi' placeholder='Gender' value={prodi} onChange={val => this.setState({ program: val.target.value })} />
                <Form.Input fluid label='Id Line' placeholder='Id Line' onChange={val => this.setState({ line: val.target.value })} />
                <Form.Input fluid label='Pilihan' placeholder='Pilihan' value={pilih} onChange={val => this.setState({ pilihan: val.target.value })} />
                <Form.TextArea label='Motivasi' placeholder='Tell us more about you...' onChange={val => this.setState({ motivasi: val.target.value })} />
                <Button onClick={this.daftar.bind(nama, nim, prodi, pilih)}>Submit</Button>
            </Form>
            )}
            
            </AuthConsumer>
        )
    }
}
