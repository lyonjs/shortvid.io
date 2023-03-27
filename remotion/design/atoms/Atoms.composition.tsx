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
				component={Title}
				width={1200}
				height={1200}
				id="Title"
				fps={30}
				durationInFrames={120}
				defaultProps={{children: 'Remotion : le 7ème art à porté de composants web et d\'API 🎬 avec bcp de text en plus pour pouvoir voir si les points se rajoute a la fin parceque les titres trop long, c\'est NON ! et vraiment non parce que pour l\'instant des fois ça passe mais moi je veux pas OK ?'}}
			/>
		</Folder>
	);
};
