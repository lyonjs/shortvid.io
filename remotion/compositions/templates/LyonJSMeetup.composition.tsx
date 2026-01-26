import React from 'react';
import {Composition, Folder} from 'remotion';

import {LyonJSReplaySchema, ReplayLyonJS} from '../showcases/lyonJS/Replay';

import {LayersComposition} from './layers/Layers.composition';
import {Meetup, MeetupSchema} from './meetup/Meetup';
import {Silhouette, SilhouetteSchema} from './silhouette/Silhouette';
import {SponsorsComposition} from './sponsors/Sponsors.composition';
import {TalkBranded} from './talk/branded/TalkBranded';
import {Talk} from './talk/Talk';
import {TalkBrandedSchema, TalkSchema} from './talk/talks.types';

const startingDate = new Date(2023, 3, 18, 13);

export const LyonJSMeetup: React.FC = () => {
	return (
		<Folder name="LyonJS">
			<Composition
				component={Talk}
				width={1200}
				height={1200}
				id="LyonJS-Talk"
				fps={30}
				durationInFrames={120}
				schema={TalkSchema}
				defaultProps={{
					speakersNames: 'John Doe',
					titleColor: '#efdb50',
					talkTitle: 'Is JS an awesome programing language ?',
					titleSize: 80,
					backgroundImg:
						'https://github.com/lyonjs/shortvid.io/blob/48ffea960b300eb9230786ed0ab043ec3387e877/public/images/showcases/lyonjs/defaultBackgroundImage.jpeg?raw=true',
					speakerPicture:
						'https://raw.githubusercontent.com/lyonjs/shortvid.io/main/public/images/common/defaultAvatar.svg',
					eventLogo:
						'https://github.com/lyonjs/shortvid.io/blob/main/public/images/showcases/lyonjs/lyonjsSquaredLogo.png?raw=true',
				}}
			/>
			<Composition
				component={TalkBranded}
				width={1280}
				height={720}
				id="LyonJS-Talk-Alternate"
				fps={30}
				durationInFrames={140}
				schema={TalkBrandedSchema}
				defaultProps={{
					backgroundColor: '#efdb50',
					title: 'Certification “Google Cloud Architect”',
					startingDate,
					location: '5 Place Jules Ferry, 69006.',
					logoUrl:
						'https://github.com/lyonjs/shortvid.io/blob/main/public/images/showcases/lyonjs/lyonjsSquaredLogo.png?raw=true',
					speakers: [
						{
							pictureUrl:
								'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/20200911_094649_MbC4W4N.jpg',
							name: 'Julien Landuré',
							company: 'Zenika Nantes',
							job: 'CTO / GDE',
						},
					],
				}}
			/>
			<Composition
				component={Silhouette}
				width={1280}
				height={720}
				id="LyonJS-Talk-Silhouette"
				fps={30}
				durationInFrames={120}
				schema={SilhouetteSchema}
				defaultProps={{
					backgroundImg:
						'https://github.com/lyonjs/shortvid.io/blob/48ffea960b300eb9230786ed0ab043ec3387e877/public/images/showcases/lyonjs/defaultBackgroundImage.jpeg?raw=true',
					title: 'Example of title for the template 🚀',
					silhouetteUrl:
						'https://user-images.githubusercontent.com/6263857/230662773-4d7a534a-e01c-4ba8-9c3b-fa95586adf52.png',
					side: 'right',
					logoUrl:
						'https://github.com/lyonjs/shortvid.io/blob/main/public/images/showcases/lyonjs/lyonjsSquaredLogo.png?raw=true',
				}}
			/>
			<Composition
				component={Meetup}
				width={1200}
				height={1200}
				id="LyonJS-Meetup-Announce"
				fps={30}
				durationInFrames={270}
				schema={MeetupSchema}
				defaultProps={{
					title: '#76 - LyonJS de la rentrée 🦁',
					date: '28 septembre 2022',
					backgroundImg:
						'https://github.com/lyonjs/shortvid.io/blob/48ffea960b300eb9230786ed0ab043ec3387e877/public/images/showcases/lyonjs/defaultBackgroundImage.jpeg?raw=true',
					eventLogo:
						'https://github.com/lyonjs/shortvid.io/blob/main/public/images/showcases/lyonjs/lyonjsSquaredLogo.png?raw=true',
				}}
			/>
			<Composition
				width={1920}
				height={1080}
				id="LyonJS-Replay"
				fps={60}
				durationInFrames={320}
				component={ReplayLyonJS}
				schema={LyonJSReplaySchema}
				defaultProps={{
					title: 'Meetup #80 : Projet XState',
					speakers: [
						{
							name: 'Maxime Blanc',
							picture: 'https://ca.slack-edge.com/T108ZKPMF-U3VL71HHU-179292d5d86f-512',
						},
					],
					date: '8 férvrier 2023',
					sponsor:
						'https://s3.eu-west-3.amazonaws.com/moovijob.prod/1494438/Horizontal_Black_Logo-Zenika.png',
				}}
			/>
			<LayersComposition />
			<SponsorsComposition />
		</Folder>
	);
};
