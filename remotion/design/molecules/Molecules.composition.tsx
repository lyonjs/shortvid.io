import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';
import {AvatarWithCaption} from './AvatarWithCaption';

export const MoleculesComposition: React.FC = () => {
	return (
		<Folder name="Molecules">
			<Composition
				id="AvatarWithCaption"
				component={AvatarWithCaption}
				width={1200}
				height={1200}
				fps={30}
				durationInFrames={120}
				defaultProps={{
					avatarPictureUrl: staticFile('/lyonjs-squared.png'),
					caption: 'Association Lyon.Js',
				}}
			/>
		</Folder>
	);
};
