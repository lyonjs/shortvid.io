import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';

import {VeryTechTrip} from './VeryTechTrip';

export const VeryTechTripComposition: React.FC = () => {
	return (
		<Folder name="VeryTechTrip-2023">
			<Composition
				width={720}
				height={720}
				id="VeryTechTrip"
				fps={30}
				durationInFrames={150}
				component={VeryTechTrip}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
