import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';
import {ShowcaseSchema} from '../showcases.types';

import {DevfestLille} from './DevfestLille';

export const DevfestLilleComposition: React.FC = () => {
	return (
		<Folder name="DevfestLille">
			<Composition
				id="DevfestLilleTalk"
				component={DevfestLille}
				durationInFrames={300}
				fps={60}
				width={1280}
				height={720}
				schema={ShowcaseSchema}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
