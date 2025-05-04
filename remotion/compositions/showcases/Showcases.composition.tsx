import React from 'react';
import {Folder} from 'remotion';

import {AlpesCraftComposition} from './alpescraft/AlpesCraft.composition';
import {CampingDesSpeakersComposition} from './campingDesSpeakers/CampingDesSpeakers.composition';
import {CodeInTheDarkComposition} from './codeInTheDark/CodeInTheDark.composition';
import {DevfestLilleComposition} from './devfestLille/DevfestLille.composition';
import {DevfestNantesComposition} from './devfestNantes/DevfestNantes.composition';
import {DevfestStrasbourgComposition} from './devfestStrasbourg/2024/DevfestStrasbourg.composition';
import {DevoxxComposition} from './devoxx/Devoxx.composition';
import {DevQuestComposition} from './devQuest/DevQuest.composition';
import {LyonJSComposition} from './lyonJS/LyonJS.composition';
import {MixitComposition} from './mixit/Mixit.composition';
import {SnowcampComposition} from './snowcamp/Snowcamp.composition';
import {TouraineTechComposition} from './touraineTech/TouraineTech.composition';
import {VeryTechTripComposition} from './veryTechTrip/VeryTechTrip.composition';
import {VolcampComposition} from './volcamp/Volcamp.composition';

export const ShowcasesComposition: React.FC = () => {
	return (
		<Folder name="Conferences">
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
			<DevfestNantesComposition />
			<DevfestLilleComposition />
			<DevfestStrasbourgComposition />
			<DevQuestComposition />
		</Folder>
	);
};
