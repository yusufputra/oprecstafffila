import React from "react";
import { Message } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

const Sukses = () => (
	<AuthConsumer>
		{({ link }) => (
			<Message success>
				<h1>Terimakasih Anda Telah Terdaftar sebagai Calon Staff!</h1>
				Download Berkas Anda di<a href={link}> link berikut</a>
			</Message>
		)}
	</AuthConsumer>
);

export default Sukses;
