import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';
import {ShowcaseSchema} from '../showcases.types';

import {Devoxx2023} from './Devoxx2023';
import {Devoxx2024} from './Devoxx2024';

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
				schema={ShowcaseSchema}
				defaultProps={defaultTalkValues}
			/>
			<Composition
				id="Devoxx2024"
				component={Devoxx2024}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
				schema={ShowcaseSchema}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
