import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';
import {Talk} from '../talk/Talk';

export const TalksComposition: React.FC = () => {
	return (
		<Folder name="Talks">
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
	);
};
