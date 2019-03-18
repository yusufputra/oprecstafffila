import React from "react";
import { Message } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

const Notif = () => (
	<AuthConsumer>
		{({ status }) => {
            if(status == 1){
                return <Message success>
				<h1>Selamat Anda Diterima</h1>
				hore
			</Message>
            }else{
                return <Message warning>
				<h1>Mohon maaf anda belum di terima</h1>
				semangat
			</Message>
            }
        }}
	</AuthConsumer>
);

export default Notif;
