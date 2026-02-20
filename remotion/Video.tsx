import React from 'react';

import {EventComposition} from './compositions/templates/events/Event.composition';
import {SponsorsComposition} from './compositions/templates/sponsors/Sponsors.composition';
import {StreamingComposition} from './compositions/templates/streamings/Streaming.composition';
import {TalkComposition} from './compositions/templates/talks/Talk.composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<TalkComposition />
			<EventComposition />
			<StreamingComposition />
			<SponsorsComposition />
		</>
	);
};
