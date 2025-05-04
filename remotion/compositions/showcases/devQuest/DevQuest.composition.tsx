import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';
import {ShowcaseSchema} from '../showcases.types';

import {DevQuest} from './DevQuest';

export const DevQuestComposition: React.FC = () => {
	return (
		<Folder name="DevQuest">
			<Composition
				id="DevQuest"
				component={DevQuest}
				durationInFrames={300}
				fps={60}
				width={1920}
				height={1080}
				schema={ShowcaseSchema}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
