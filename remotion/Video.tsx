import React from 'react';
import {Folder} from 'remotion';

import {ShowcasesComposition} from './compositions/showcases/Showcases.composition';
import {LyonJSMeetup} from './compositions/templates/LyonJSMeetup.composition';
import {MeetupToolKit} from './compositions/templates/MeetupToolKit.composition';
import {AtomsComposition} from './design/atoms/Atoms.composition';
import {MoleculesComposition} from './design/molecules/Molecules.composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<LyonJSMeetup />
			<MeetupToolKit />
			<ShowcasesComposition />
			<Folder name="Design">
				<AtomsComposition />
				<MoleculesComposition />
			</Folder>
		</>
	);
};
