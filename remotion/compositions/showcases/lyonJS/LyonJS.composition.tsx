import React from 'react';
import {Composition, Folder} from 'remotion';

import {LyonJSConf} from './LyonJSConf';
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
					id="LyonJS100"
					fps={60}
					durationInFrames={320}
					component={LyonJSConf}
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
	);
};
