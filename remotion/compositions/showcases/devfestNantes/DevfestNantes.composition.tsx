import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';

import {DevfestNantes} from './DevfestNantes';

export const DevfestNantesComposition = () => {
	return (
		<Folder name="DevfestNantes-2023">
			<Composition
				id="DevfestNantesTalk"
				component={DevfestNantes}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
