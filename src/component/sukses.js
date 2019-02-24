import React from 'react'
import { Message } from 'semantic-ui-react'

const Sukses = () => (
  <Message
    success
    header='Terimakasih Anda Telah Terdaftar'
    content='Download Berkas Anda di <a href="#"> link berikut </a>'
  />
)

export default Sukses