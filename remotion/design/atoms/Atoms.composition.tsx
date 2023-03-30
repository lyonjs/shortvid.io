import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';
import {Avatar} from './Avatar';
import {EventLogo} from './EventLogo';
import {ImageBackground} from './ImageBackground';
import {Title} from './Title';

export const AtomsComposition: React.FC = () => {
	return (
		<Folder name="Atoms">
			<Composition
				component={Avatar}
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
				component={EventLogo}
				width={1200}
				height={1200}
				id="EventLogo"
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
	);
};
