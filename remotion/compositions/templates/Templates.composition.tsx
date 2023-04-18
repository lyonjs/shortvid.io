import React from 'react';
import {Folder} from 'remotion';

import {SponsorsComposition} from './sponsor/Sponsors.composition';
import {TalksComposition} from './talk/Talks.composition';
import {MeetupComposition} from './meetup/Meetup.composition';
import {EventsComposition} from './event/Events.composition';
import {SilhouetteComposition} from './silhouette/Silhouette.composition';
import {LayersComposition} from './layers/Layers.composition';

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
