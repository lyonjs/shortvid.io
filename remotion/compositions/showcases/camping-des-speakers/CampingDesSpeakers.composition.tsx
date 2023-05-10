import React from 'react';
import {Composition, Folder} from 'remotion';
import {CampingDesSpeakers} from './CampingDesSpeakers';

export const CampingDesSpeakersComposition: React.FC = () => {
	return (
		<Folder name="CampingDesSpeakers-2023">
			<Composition
				id="CampingDesSpeakers"
				component={CampingDesSpeakers}
				durationInFrames={200}
				fps={30}
				width={1280}
				height={1280}
			/>
		</Folder>
	);
};
