import React from 'react';
import {Composition, Folder} from 'remotion';

import {Meetup, MeetupSchema} from './Meetup';
import {Register} from './Register';

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
