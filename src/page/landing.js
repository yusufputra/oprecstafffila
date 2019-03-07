import React, {Component} from "react";
import {Card, Image, Button, Header, Divider, Grid, Segment} from "semantic-ui-react";
import "./style.scss";
import {Link} from "react-router-dom";
import {AuthConsumer} from "../AuthContext";
export default class Landing extends Component {
	render() {
		return (
			<AuthConsumer>
				{({setPilih}) => (
					<div>
						<Divider hidden />
						<Header as="h1" textAlign="center">
							Open Recruitment Staf PK2MABA
						</Header>
						<section id="Steps" class="steps-section">
							{/*start timeline*/}
							<h2 class="steps-header">Timeline Pendaftaran</h2>

							<div class="steps-timeline">
								<div class="steps-one">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">11 - 13 Maret 2019</h3>
									<p class="steps-description">Pendaftaran staf PK2MABA</p>
								</div>

								<div class="steps-two">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">13 - 15 Maret 2019</h3>
									<p class="steps-description">Screening</p>
								</div>

								<div class="steps-three">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">17 Maret 2019</h3>
									<p class="steps-description">Pengumuman staf terpilih</p>
								</div>
							</div>
						</section>
						<Divider section />
						<Header as="h1" textAlign="center">
							Open Recruitment Staf FILAFEST
						</Header>
						<section id="Steps" class="steps-section">
							{/*start timeline*/}
							<h2 class="steps-header">Timeline Pendaftaran</h2>

							<div class="steps-timeline">
								<div class="steps-one">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">11 - 13 Maret 2019</h3>
									<p class="steps-description">Pendaftaran staf Filafest</p>
								</div>

								<div class="steps-two">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">13 - 15 Maret 2019</h3>
									<p class="steps-description">Screening</p>
								</div>

								<div class="steps-three">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">17 Maret 2019</h3>
									<p class="steps-description">Pengumuman staf terpilih</p>
								</div>
							</div>
						</section>
						{/*end timeline*/}
						<Divider section />
						<div className="ui middle aligned center aligned grid container">
							<Card.Group>
								<Grid columns={2} relaxed="very">
									<Grid.Column>
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
													}}>
													<Button.Content visible>Daftar Staff PK2MABA</Button.Content>
													<Button.Content hidden>Login</Button.Content>
												</Button>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
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
													}}>
													<Button.Content visible>Daftar Staf FILAFEST</Button.Content>
													<Button.Content hidden>Login</Button.Content>
												</Button>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid>
							</Card.Group>
						</div>
					</div>
				)}
			</AuthConsumer>
		);
	}
}
