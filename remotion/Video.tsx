import React from 'react';

import {EventComposition} from './compositions/templates/Event.composition';
import {SponsorsComposition} from './compositions/templates/sponsors/Sponsors.composition';
import {StreamingComposition} from './compositions/templates/streaming/Streaming.composition';
import {TalkComposition} from './compositions/templates/Talk.composition';

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
