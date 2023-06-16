import React from 'react';
import {Folder} from 'remotion';

import {LyonJSComposition} from './lyonJS/LyonJS.composition';
import {AlpesCraftComposition} from './alpescraft/AlpesCraft.composition';
import {TouraineTechComposition} from './touraineTech/TouraineTech.composition';
import {SnowcampComposition} from './snowcamp/Snowcamp.composition';
import {VeryTechTripComposition} from './veryTechTrip/VeryTechTrip.composition';
import {MixitComposition} from './mixit/Mixit.composition';
import {DevoxxComposition} from './devoxx/Devoxx.composition';
import {CampingDesSpeakersComposition} from './campingDesSpeakers/CampingDesSpeakers.composition';
import {CodeInTheDarkComposition} from './codeInTheDark/CodeInTheDark.composition';
import {VolcampComposition} from './volcamp/Volcamp.composition';

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
			<CodeInTheDarkComposition />
			<VolcampComposition />
		</Folder>
	);
};
