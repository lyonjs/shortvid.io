import {Composition, Folder, staticFile} from 'remotion';
import {Sponsor} from './sponsor/Sponsor';
import {LyonJSLogo} from './components/LyonJSLogo';
import {ImageBackground} from './components/ImageBackground';
import {Title} from './components/Title';
import {Talk} from './talk/Talk';
import {Speaker} from './components/Speaker';

import {Meetup} from './meetup/Meetup';
import {Register} from './meetup/Register';
import {Event} from './event/Event';
import {TouraineTech2023} from './conference/touraineTech2023/TouraineTech2023';
import {SponsorTouraineTech2023} from './conference/touraineTech2023/SponsorTouraineTech2023';
import {Snowcamp} from './conference/snowcamp/Snowcamp';
import {VeryTechTrip} from './conference/very-tech-trip/VeryTechTrip';
import {Replay} from './conference/touraineTech2023/Replay';
import {Mixit2023} from './conference/mixit2023/Mixit2023';
import {MixitSponsor} from './conference/mixit2023/MixitSponsor';
import {MixitIntro} from './conference/mixit2023/MixitIntro';
import {MixitIntroTalk} from './conference/mixit2023/MixitIntroTalk';
import {Devoxx2023} from './conference/devoxx2023/Devoxx2023';

import {defaultTalkValues} from './conference/data/defaultValues';
import {ReplayLyonJS} from './conference/lyonJS/Replay';
import {AlpesCraft} from './conference/alpescraft/AlpesCraft';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Folder name="Components">
				<Composition
					component={Speaker}
					width={1200}
					height={1200}
					id="Speaker"
					fps={30}
					durationInFrames={120}
					defaultProps={{
						src: staticFile('/lyonjs-squared.png'),
					}}
				/>
				<Composition
					component={LyonJSLogo}
					width={1200}
					height={1200}
					id="LyonJSLogo"
					fps={30}
					durationInFrames={120}
				/>
				<Composition
					component={ImageBackground}
					width={1200}
					height={1200}
					id="ImageBackground"
					fps={30}
					durationInFrames={120}
					defaultProps={{animated: true}}
				/>
				<Composition
					component={Title}
					width={1200}
					height={1200}
					id="Title"
					fps={30}
					durationInFrames={120}
					defaultProps={{children: 'Hello'}}
				/>
			</Folder>
			<Folder name="Sponsor">
				<Composition
					component={Sponsor}
					width={1200}
					height={1200}
					id="Sponsor"
					fps={30}
					durationInFrames={200}
					defaultProps={{
						sponsorLocalisation: '94 Rue Robert - Lyon',
					}}
				/>
				<Composition
					component={Sponsor}
					width={1200}
					height={1200}
					id="SponsorWithoutLogo"
					fps={30}
					durationInFrames={200}
					defaultProps={{
						companyName: 'EvilCorp',
					}}
				/>
			</Folder>
			<Folder name="Talk">
				<Composition
					component={Talk}
					width={1200}
					height={1200}
					id="TalkWithPicture"
					fps={30}
					durationInFrames={120}
					defaultProps={{
						speakersNames: 'John Doe',
						talkTitle: 'Is JS an awesome programing language ?',
						speakerPicture: staticFile('/lyonjs-squared.png'),
					}}
				/>
				<Composition
					component={Talk}
					width={1200}
					height={1200}
					id="Talk"
					fps={30}
					durationInFrames={120}
					defaultProps={{
						speakersNames: 'Foo bar',
						talkTitle: 'Is JS an awesome programing language?',
					}}
				/>
			</Folder>
			<Folder name="Meetup">
				<Composition
					component={Meetup}
					width={1200}
					height={1200}
					id="Meetup"
					fps={30}
					durationInFrames={270}
					defaultProps={{
						title: '#76 - LyonJS de la rentrée 🦁',
						date: '28 septembre 2022',
					}}
				/>
				<Composition
					component={Register}
					width={1200}
					height={1200}
					id="Register"
					fps={30}
					durationInFrames={120}
					defaultProps={{}}
				/>
			</Folder>
			<Folder name="Event">
				<Composition
					component={Event}
					width={1200}
					height={1200}
					id="Event"
					fps={30}
					durationInFrames={270}
					defaultProps={{
						backgroundImg:
							'https://i.pinimg.com/originals/de/0d/19/de0d19d835dd1224c5208701d78bd6e7.jpg',
						title: 'Apéro JS de Noël 🎄',
						lottieAsset: 'lf20_UDstUT',
					}}
				/>
			</Folder>
			<Folder name="Conference">
				<Folder name="AlpesCraft">
					<Composition
						id="Alpescraft"
						component={AlpesCraft}
						durationInFrames={150}
						fps={30}
						width={1280}
						height={720}
						defaultProps={{
							title: 'Conférence AlpesCraft',
							date: '1 et 2 Juin 2023',
							location: 'Grenoble - Alpexpo',
						}}
					/>
				</Folder>
				<Folder name="Touraine-Tech-2023">
					<Composition
						id="TouraineTech2023"
						component={TouraineTech2023}
						durationInFrames={150}
						fps={30}
						width={1280}
						height={720}
						defaultProps={defaultTalkValues}
					/>
					<Composition
						id="SponsorTouraineTech2023"
						component={SponsorTouraineTech2023}
						durationInFrames={150}
						fps={30}
						width={1280}
						height={720}
						defaultProps={{
							message: 'Merci à notre sponsor',
							sponsorLogo: 'https://touraine.tech/_nuxt/img/1337c46.svg',
						}}
					/>
					<Composition
						width={1920}
						height={1080}
						id="TouraineTechReplay"
						fps={60}
						durationInFrames={300}
						component={Replay}
						defaultProps={{
							title:
								"Remotion : le 7ème art à porté de composants web et d'API 🎬",
							speakers: [
								{
									name: 'Mickaël Alves',
									picture:
										'https://pbs.twimg.com/profile_images/1452247219709566977/5Xzmgun-_400x400.jpg',
								},
								{
									name: 'Antoine Caron',
									picture:
										'https://pbs.twimg.com/profile_images/1619099163018371077/xFDqbqUJ_400x400.jpg',
								},
							],
							type: 'Conférence',
						}}
					/>
				</Folder>
				<Folder name="Snowcamp">
					<Composition
						id="Snowcamp"
						component={Snowcamp}
						durationInFrames={150}
						fps={30}
						width={1280}
						height={720}
						defaultProps={defaultTalkValues}
					/>
				</Folder>
				<Folder name="VeryTechTrip">
					<Composition
						width={720}
						height={720}
						id="VeryTechTrip"
						fps={30}
						durationInFrames={150}
						component={VeryTechTrip}
						defaultProps={defaultTalkValues}
					/>
				</Folder>
				<Folder name="Mixit2023">
					<Composition
						id="Mixit2023"
						component={Mixit2023}
						durationInFrames={150}
						fps={30}
						width={1280}
						height={720}
						defaultProps={defaultTalkValues}
					/>
					<Composition
						id="Mixit-Intro"
						component={MixitIntro}
						durationInFrames={150}
						fps={30}
						width={1280}
						height={720}
					/>
					<Composition
						id="Mixit-Intro-Talk"
						component={MixitIntroTalk}
						durationInFrames={150}
						fps={30}
						width={1280}
						height={720}
						defaultProps={defaultTalkValues}
					/>
					<Composition
						id="Mixit-Sponsor"
						component={MixitSponsor}
						durationInFrames={150}
						fps={30}
						width={720}
						height={720}
						defaultProps={{
							picture: 'https://mixitconf.org/images/sponsors/logo-viseo.svg',
							category: 'tour de cou',
							background:
								'https://live.staticflickr.com/65535/52097860061_1609b2a1c6_b_d.jpg',
							name: 'LyonJS',
						}}
					/>
				</Folder>
				<Folder name="Devoxx2023">
					<Composition
						id="Devoxx2023"
						component={Devoxx2023}
						durationInFrames={300}
						fps={30}
						width={1280}
						height={720}
						defaultProps={defaultTalkValues}
					/>
				</Folder>
				<Folder name="LyonJS">
					<Composition
						width={1920}
						height={1080}
						id="LyonJSReplay"
						fps={60}
						durationInFrames={300}
						component={ReplayLyonJS}
						defaultProps={{
							title: 'Meetup #80 : Projet XState',
							speakers: [
								{
									name: 'Maxime Blanc',
									picture:
										'https://ca.slack-edge.com/T108ZKPMF-U3VL71HHU-179292d5d86f-512',
								},
							],
							date: '8 férvrier 2023',
							sponsor:
								'https://s3.eu-west-3.amazonaws.com/moovijob.prod/1494438/Horizontal_Black_Logo-Zenika.png',
						}}
					/>
				</Folder>
			</Folder>
		</>
	);
};
