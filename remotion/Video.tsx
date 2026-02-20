import React from 'react';

import {LyonJSMeetup} from './compositions/templates/LyonJSMeetup.composition';
import {MeetupToolKit} from './compositions/templates/MeetupToolKit.composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<LyonJSMeetup />
			<MeetupToolKit />
		</>
	);
};
