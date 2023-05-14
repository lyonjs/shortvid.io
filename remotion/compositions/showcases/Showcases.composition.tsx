import React from 'react';
import {Folder} from 'remotion';

import {LyonJSComposition} from './lyonJS/LyonJS.composition';
import {AlpesCraftComposition} from './alpescraft/AlpesCraft.composition';
import {TouraineTechComposition} from './touraineTech2023/TouraineTech.composition';
import {SnowcampComposition} from './snowcamp/Snowcamp.composition';
import {VeryTechTripComposition} from './very-tech-trip/VeryTechTrip.composition';
import {MixitComposition} from './mixit2023/Mixit.composition';
import {DevoxxComposition} from './devoxx2023/Devoxx.composition';
import {CampingDesSpeakersComposition} from './camping-des-speakers/CampingDesSpeakers.composition';

export const ShowcasesComposition: React.FC = () => {
	return (
		<Folder name="Showcases">
			<LyonJSComposition />
			<AlpesCraftComposition />
			<TouraineTechComposition />
			<SnowcampComposition />
			<VeryTechTripComposition />
			<MixitComposition />
			<DevoxxComposition />
			<CampingDesSpeakersComposition />
		</Folder>
	);
};
