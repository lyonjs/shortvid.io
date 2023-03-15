import React from 'react';
import {Composition, Folder} from 'remotion';
import {VeryTechTrip} from '../../conference/very-tech-trip/VeryTechTrip';
import {defaultTalkValues} from '../../conference/data/defaultValues';

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
