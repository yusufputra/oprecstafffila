import React, {Component} from "react";
import {Card, Image, Button, Header, Icon} from "semantic-ui-react";
import "./style.scss";
import {Link} from "react-router-dom";
import {AuthConsumer} from "../AuthContext";
export default class Landing extends Component {
	render() {
		return (
			<AuthConsumer>
				{({setPilih}) => (
					<div>
						<Header as="h1" textAlign="center">
							Open Tender Ketua Pelaksana
						</Header>
						<section id="Steps" class="steps-section">
							{/*start timeline*/}
							<h2 class="steps-header">Timeline Pendaftaran</h2>

							<div class="steps-timeline">
								<div class="steps-one">
									<img class="steps-img" src="http://placehold.it/50/3498DB/FFFFFF" alt="" />
									<h3 class="steps-name">24 - 28 Februari 2019</h3>
									<p class="steps-description">Pendaftaran Online</p>
								</div>

								<div class="steps-two">
									<img class="steps-img" src="http://placehold.it/50/3498DB/FFFFFF" alt="" />
									<h3 class="steps-name">26 Februari 2019 - 1 Maret 2019</h3>
									<p class="steps-description">Pengembalian Berkas</p>
								</div>

								<div class="steps-three">
									<img class="steps-img" src="http://placehold.it/50/3498DB/FFFFFF" alt="" />
									<h3 class="steps-name">4 Maret 2019</h3>
									<p class="steps-description">Fit and Proper Test</p>
								</div>
							</div>
						</section>
						{/*end timeline*/}
						<div className="ui middle aligned center aligned grid container">
							<Card.Group>
								<Card>
									<Image src="./img/pk2.jpg" />
									<Card.Content>
										<Card.Header>PK2MABA FILKOM</Card.Header>
										<Card.Meta>2019</Card.Meta>
										<Card.Description>Merupakan rangkaian kegiatan yang bertujuan untuk menyambut dan memperkenalkan kehidupan kampus dengan menanamkan budaya dan nilai-nilai dasar sebagai mahasiswa Filkom aktif kepada mahasiswa baru yang berkolaborasi dengan pihak dekanat Filkom.</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Button
											animated="fade"
											color="blue"
											onClick={() => {
												setPilih("PK2 Maba");
												this.props.history.replace("/login");
											}}
										>
											<Button.Content visible>Daftar Ketua Pelaksana</Button.Content>
											<Button.Content hidden>Login</Button.Content>
										</Button>
									</Card.Content>
								</Card>
								<Card>
									<Image src="./img/filafest.jpg" />
									<Card.Content>
										<Card.Header>Diesnatalis FILKOM</Card.Header>
										<Card.Meta>2019</Card.Meta>
										<Card.Description>Diesnatalis Fakultas Ilmu Komputer yang bertujuan sebagai perayaan ulang tahun Fakultas Ilmu Komputer ke 8 Tahun yang dimana pelaksanaannya akan melibatkan panitia mahasiswa yang dibawahi oleh Kementerian Pengembangan Sumber Daya Mahasiswa</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Button
											animated="fade"
											color="blue"
											onClick={async () => {
												await setPilih("Filafest");
												this.props.history.replace("/login");
											}}
										>
											<Button.Content visible>Daftar Ketua Pelaksana</Button.Content>
											<Button.Content hidden>Login</Button.Content>
										</Button>
									</Card.Content>
								</Card>
							</Card.Group>
						</div>
					</div>
				)}
			</AuthConsumer>
		);
	}
}
