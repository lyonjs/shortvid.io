import React from 'react';
import {Composition, Folder} from 'remotion';
import {Snowcamp} from './Snowcamp';
import {defaultTalkValues} from '../../../../src/data/defaultValues';

export const SnowcampComposition: React.FC = () => {
	return (
		<Folder name="Snowcamp-2023">
			<Composition
				id="Snowcamp"
				component={Snowcamp}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
