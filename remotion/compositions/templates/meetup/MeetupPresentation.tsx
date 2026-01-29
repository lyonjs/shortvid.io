import {AbsoluteFill} from 'remotion';

import {MeetupLogo} from './MeetupLogo';
import {MeetupTitle} from './MeetupTitle';

export type MeetupPresentationProps = {
	eventLogo?: string;
	title: string;
};

export const MeetupPresentation = ({title, eventLogo}: MeetupPresentationProps) => {
	const endAnimationShift = 50;

	return (
		<AbsoluteFill style={{display: 'flex', alignItems: 'center'}}>
			<MeetupLogo endAnimationShift={endAnimationShift} eventLogo={eventLogo} />
			<MeetupTitle title={title} endAnimationShift={endAnimationShift} />
		</AbsoluteFill>
	);
};
