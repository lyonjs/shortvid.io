import {AbsoluteFill} from 'remotion';
import {MixitIntro} from './MixitIntro';
import {DefaultProps} from '../../../types/defaultProps.types';
import {Mixit2023} from './Mixit2023';

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
			<Mixit2023
				title={title}
				speakers={speakers}
				date={date}
				time={time}
				location={location}
			/>
		</AbsoluteFill>
	);
};
