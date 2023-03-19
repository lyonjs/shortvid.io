import React from 'react';

import {MeetupComposition} from './compositions/Meetup.composition';
import {TalksComposition} from './compositions/Talks.composition';
import {SponsorsComposition} from './compositions/Sponsors.composition';
import {EventsComposition} from './compositions/Events.composition';
import {AtomsComposition} from './compositions/Atoms.composition';
import {ConferencesComposition} from './compositions/conferences/Conferences.composition';
import {Composition} from 'remotion';
import {RemotionExpert} from './announcement/RemotionExpert';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<AtomsComposition />
			<SponsorsComposition />
			<TalksComposition />
			<MeetupComposition />
			<EventsComposition />
			<ConferencesComposition />
			<Composition
				component={RemotionExpert}
				width={1200}
				height={1200}
				id="RemotionExpert"
				fps={60}
				durationInFrames={450}
				defaultProps={{
					expertName: 'Mickael Alves',
					expertPicture:
						'https://pbs.twimg.com/profile_images/1635742650090283013/9qflRryB_400x400.jpg',
				}}
			/>
		</>
	);
};
