import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';
import {Avatar} from './Avatar';
import {EventLogo} from './EventLogo';
import {ImageBackground} from './ImageBackground';
import {Title} from './Title';
import {Text} from './Text';
import {IconWithCaption} from './IconWithCaption';

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
				component={ImageBackground}
				width={1200}
				height={1200}
				id="ImageBackground"
				fps={30}
				durationInFrames={120}
				defaultProps={{animated: true}}
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
				component={IconWithCaption}
				width={1200}
				height={1200}
				id="IconWithCaptionLottie"
				fps={30}
				durationInFrames={120}
				defaultProps={{
					caption: '19 Décembre 2023',
					lottieAsset: 'lf20_ak90tqhe',
					style: {
						background: 'black',
					},
				}}
			/>
			<Composition
				component={IconWithCaption}
				width={1200}
				height={1200}
				id="IconWithCaption"
				fps={30}
				durationInFrames={120}
				defaultProps={{
					caption: '19 Décembre 2023',
					imageIcon: staticFile('/lyonjs-squared.png'),
					style: {
						flexDirection: 'column',
					},
				}}
			/>
		</Folder>
	);
};
