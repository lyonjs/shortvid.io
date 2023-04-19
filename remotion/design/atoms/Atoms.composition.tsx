import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';
import {Avatar} from './Avatar';
import {EventLogo} from './EventLogo';
import {Title} from './Title';
import {BackgroundFiller} from './BackgroundFiller';
import {Text} from './Text';
import {BackgroundTriangle} from './BackgroundTriangle';
import {BackgroundCircleNoise} from './BackgroundCircleNoise';

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
				component={BackgroundTriangle}
				width={1920}
				height={1080}
				id="TriangleBackground"
				fps={30}
				durationInFrames={120}
			/>
			<Composition
				component={BackgroundCircleNoise}
				width={1200}
				height={700}
				id="BackgroundCircleNoise"
				fps={30}
				durationInFrames={150}
				defaultProps={{speed: 0.01, circleRadius: 5, maxOffset: 20}}
			/>
		</Folder>
	);
};
