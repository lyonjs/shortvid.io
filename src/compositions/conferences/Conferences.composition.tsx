import React from 'react';
import {Folder} from 'remotion';

import {LyonJSComposition} from './LyonJS.composition';
import {AlpesCraftComposition} from './AlpesCraft.composition';
import {TouraineTechComposition} from './TouraineTech.composition';
import {SnowcampComposition} from './Snowcamp.composition';
import {VeryTechTripComposition} from './VeryTechTrip.composition';
import {MixitComposition} from './Mixit.composition';
import {DevoxxComposition} from './Devoxx.composition';

export const ConferencesComposition: React.FC = () => {
	return (
		<Folder name="Conferences">
			<LyonJSComposition />
			<AlpesCraftComposition />
			<TouraineTechComposition />
			<SnowcampComposition />
			<VeryTechTripComposition />
			<MixitComposition />
			<DevoxxComposition />
		</Folder>
	);
};
