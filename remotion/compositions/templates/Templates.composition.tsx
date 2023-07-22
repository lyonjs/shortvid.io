import React from 'react';
import {Folder} from 'remotion';

import {EventsComposition} from './event/Events.composition';
import {LayersComposition} from './layers/Layers.composition';
import {MeetupComposition} from './meetup/Meetup.composition';
import {SilhouetteComposition} from './silhouette/Silhouette.composition';
import {SponsorsComposition} from './sponsor/Sponsors.composition';
import {TalksComposition} from './talk/Talks.composition';

export const TemplatesComposition: React.FC = () => {
	return (
		<Folder name="Templates">
			<SponsorsComposition />
			<TalksComposition />
			<MeetupComposition />
			<EventsComposition />
			<SilhouetteComposition />
			<LayersComposition />
		</Folder>
	);
};
