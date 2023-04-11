import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';
import {Avatar} from './Avatar';
import {EventLogo} from './EventLogo';
import {Title} from './Title';
import {BackgroundFiller} from './BackgroundFiller';
import {Text} from './Text';

export const AtomsComposition: React.FC = () => {
	return (
		<Folder name="Atoms">
			<Composition
				component={Avatar}
				width={1200}
				height={1200}
				id="Avatar"
				fps={30}
				durationInFrames={120}
			/>
			<Composition
				component={EventLogo}
				width={1200}
				height={1200}
				id="EventLogo"
				fps={30}
				durationInFrames={120}
			/>
			<Composition
				component={BackgroundFiller}
				width={1200}
				height={1200}
				id="ImageBackground"
				fps={30}
				durationInFrames={120}
				defaultProps={{imageUrl: staticFile('/defaultBackgroundImage.jpeg')}}
			/>
			<Composition
				component={Text}
				width={1200}
				height={1200}
				id="Text"
				fps={30}
				durationInFrames={120}
				defaultProps={{children: 'Hello World !'}}
			/>
			<Composition
				component={Title}
				width={1200}
				height={1200}
				id="Title"
				fps={30}
				durationInFrames={120}
				defaultProps={{children: 'Hello World !'}}
			/>
		</Folder>
	);
};
