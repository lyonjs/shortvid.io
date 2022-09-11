import {AbsoluteFill} from 'remotion';
import {MeetupTitle} from './MeetupTitle';
import {MeetupLogo} from './MeetupLogo';

export const MeetupPresentation: React.FC<{title: string}> = ({title}) => {
	const endAnimationShift = 50;

	return (
		<AbsoluteFill style={{display: 'flex', alignItems: 'center'}}>
			<MeetupLogo endAnimationShift={endAnimationShift} />
			<MeetupTitle title={title} endAnimationShift={endAnimationShift} />
		</AbsoluteFill>
	);
};
