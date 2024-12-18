import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../../src/data/defaultValues';
import {ShowcaseSchema} from '../../showcases.types';

import {DevfestStrasbourg} from './DevfestStrasbourg';

export const DevfestStrasbourgComposition: React.FC = () => {
	return (
		<Folder name="DevfestStrasbourg">
			<Composition
				id="DevfestStrasbourgTalk"
				component={DevfestStrasbourg}
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
