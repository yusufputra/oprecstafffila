import React, { Component } from "react";
import { Image, Button, Header, Divider} from "semantic-ui-react";
import "./style.scss";
import { AuthConsumer } from "../AuthContext";
export default class Landing extends Component {
	render() {
		return (
			<AuthConsumer>
				{() => (
					<div>
						<Divider hidden />
						<Header as="h1" textAlign="center">
							Open Recruitment Staf FILAFEST
						</Header>
						<section id="Steps" class="steps-section">
							{/*start timeline*/}
							<h2 class="steps-header">Timeline Pendaftaran</h2>

							<div class="steps-timeline">
								<div class="steps-one">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">13 - 15 Maret 2019</h3>
									<p class="steps-description">Pendaftaran online</p>
								</div>

								<div class="steps-two">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">15 - 17 Maret 2019</h3>
									<p class="steps-description">Screening staf</p>
								</div>

								<div class="steps-two">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">18 Maret 2019</h3>
									<p class="steps-description">Pengumuman seleksi staf</p>
								</div>

								<div class="steps-three">
									<img class="steps-img" src="./img/time.png" alt="" />
									<h3 class="steps-name">Soon</h3>
									<p class="steps-description">First Gath staf</p>
								</div>
							</div>
						</section>
						{/*end timeline*/}
						<Divider section />
						<div className="ui middle aligned center aligned container"><Button
							animated="vertical"
							size="massive"
							positive
							centered
							onClick={async () => {
								this.props.history.replace("/login");
							}}>
							<Button.Content visible>Daftar Staf FILAFEST</Button.Content>
							<Button.Content hidden>Login</Button.Content>
						</Button>
						</div>
						<Divider section />
						<div className="ui middle aligned center aligned container">
							<Image size="big" centered bordered src="./img/filafest.jpg" />
							<h1>FILAFEST: Diesnatalis FILKOM 2019</h1>
							<p>Diesnatalis Fakultas Ilmu Komputer yang bertujuan sebagai perayaan ulang tahun Fakultas Ilmu Komputer ke 8 Tahun yang dimana pelaksanaannya akan melibatkan panitia mahasiswa yang dibawahi oleh Kementerian Pengembangan Sumber Daya Mahasiswa.</p>
						</div>
						<Divider hidden />
					</div>
				)}
			</AuthConsumer>
		);
	}
}
