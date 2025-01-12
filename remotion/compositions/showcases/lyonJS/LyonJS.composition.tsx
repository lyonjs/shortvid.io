import React from 'react';
import {Composition, Folder} from 'remotion';

import {AnimatedScene} from './LyonJS100/AnimatedScene';
import {LyonJS100Sponsor, Sponsor} from './LyonJS100/Sponsor';
import {LyonJS100Talk, Talk} from './LyonJS100/Talk';
import {ReplayLyonJS} from './Replay';

export const LyonJSComposition: React.FC = () => {
	return (
		<Folder name="LyonJS">
			<Composition
				width={1920}
				height={1080}
				id="LyonJSReplay"
				fps={60}
				durationInFrames={320}
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
			<Folder name="LyonJS100">
				<Composition
					width={1920}
					height={1080}
					id="AnimatedScene"
					fps={60}
					durationInFrames={360}
					component={AnimatedScene}
				/>
				<Composition
					width={1920}
					height={1080}
					id="LyonJS100Sponsor"
					fps={60}
					durationInFrames={320}
					component={Sponsor}
					schema={LyonJS100Sponsor}
					defaultProps={{
						labelSponsor: 'Gold',
						labeSponsorColor: '#efdb50',
						labelFontSize: 60,
						sponsorLogoUrl:
							'https://www.remotion.dev/assets/images/shortvid-logo-648b24f40aea2fb96bf6e2404c3712d7.png',
						sponsorLogoWidth: 900,
					}}
				/>
				<Composition
					width={1920}
					height={1080}
					id="LyonJS100Talk"
					fps={60}
					durationInFrames={320}
					component={Talk}
					schema={LyonJS100Talk}
					defaultProps={{
						speakers: [
							{
								picture: 'https://github.com/JonnyBurger.png',
								name: 'Jonny Burger',
							},
						],
						talkTitle: 'How to build a video editor in React',
						titleSize: 60,
					}}
				/>
			</Folder>
		</Folder>
	);
};
