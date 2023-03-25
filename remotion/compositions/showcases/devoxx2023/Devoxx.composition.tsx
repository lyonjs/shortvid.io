import React from 'react';
import {Composition, Folder} from 'remotion';
import {Devoxx2023} from './Devoxx2023';
import {defaultTalkValues} from '../../../../src/data/defaultValues';

export const DevoxxComposition: React.FC = () => {
	return (
		<Folder name="Devoxx-2023">
			<Composition
				id="Devoxx2023"
				component={Devoxx2023}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
