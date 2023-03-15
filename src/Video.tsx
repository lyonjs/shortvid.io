import React from 'react';

import {MeetupComposition} from './compositions/Meetup.composition';
import {TalksComposition} from './compositions/Talks.composition';
import {SponsorsComposition} from './compositions/Sponsors.composition';
import {EventsComposition} from './compositions/Events.composition';
import {AtomsComposition} from './compositions/Atoms.composition';
import {ConferencesComposition} from './compositions/conferences/Conferences.composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<AtomsComposition />
			<SponsorsComposition />
			<TalksComposition />
			<MeetupComposition />
			<EventsComposition />
			<ConferencesComposition />
		</>
	);
};
