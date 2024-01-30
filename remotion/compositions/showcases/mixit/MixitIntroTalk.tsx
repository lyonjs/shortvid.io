import {AbsoluteFill} from 'remotion';

import {DefaultProps} from '../../../types/defaultProps.types';

import {Mixit} from './Mixit';
import {MixitIntro} from './MixitIntro';

export const MixitIntroTalk: React.FC<DefaultProps> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill>
			<MixitIntro />
			<Mixit
				title={title}
				speakers={speakers}
				date={date}
				time={time}
				location={location}
			/>
		</AbsoluteFill>
	);
};
