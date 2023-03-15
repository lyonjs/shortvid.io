import React from 'react';
import {Composition, Folder} from 'remotion';
import {AlpesCraft} from '../../conference/alpescraft/AlpesCraft';
import {defaultTalkValues} from '../../conference/data/defaultValues';

export const AlpesCraftComposition: React.FC = () => {
	return (
		<Folder name="AlpesCraft-2023">
			<Composition
				id="Alpescraft"
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
