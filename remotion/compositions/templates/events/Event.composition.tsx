import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';

import {SHORTVID_ASSET_PATHS} from '../../../theme';

import {Meetup, MeetupSchema} from './meetup/Meetup';

const todayFormatted = new Date().toLocaleDateString('fr-FR', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
});

export const EventComposition: React.FC = () => {
	return (
		<Folder name="Events">
			<Composition
				component={Meetup}
				width={1200}
				height={1200}
				id="Meetup-Announce"
				fps={30}
				durationInFrames={270}
				schema={MeetupSchema}
				defaultProps={{
					title: 'Example event title for this template 📅',
					date: todayFormatted,
					eventLogo: staticFile(SHORTVID_ASSET_PATHS.monogram),
					registerLogo: staticFile(SHORTVID_ASSET_PATHS.meetupLogo),
					backgroundImg: staticFile(SHORTVID_ASSET_PATHS.backgroundImg),
				}}
			/>
		</Folder>
	);
};
