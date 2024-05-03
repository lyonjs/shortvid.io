import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';
import {ShowcaseSchema} from '../showcases.types';

import {Snowcamp} from './Snowcamp';

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
				schema={ShowcaseSchema}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
