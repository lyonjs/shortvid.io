import React from 'react';
import {Composition, Folder} from 'remotion';
import {AlpesCraft} from './AlpesCraft';
import {defaultTalkValues} from '../../../../src/data/defaultValues';

export const AlpesCraftComposition: React.FC = () => {
	return (
		<Folder name="AlpesCraft-2023">
			<Composition
				id="AlpesCraft"
				component={AlpesCraft}
				durationInFrames={200}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
