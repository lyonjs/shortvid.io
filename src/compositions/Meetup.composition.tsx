import React from 'react';
import {Composition, Folder} from 'remotion';
import {Meetup} from '../meetup/Meetup';
import {Register} from '../meetup/Register';

export const MeetupComposition: React.FC = () => {
	return (
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
	);
};
