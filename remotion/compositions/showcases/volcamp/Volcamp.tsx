import {AbsoluteFill, Sequence} from 'remotion';
import {Transition} from './components/Transition';
import {Eruption} from './components/Eruption';
import {Talk, TalkProps} from './components/Talk';
import {loadFont} from '@remotion/google-fonts/Poppins';

const {fontFamily} = loadFont();

export const Volcamp: React.FC<TalkProps> = ({
	themeName,
	speakers,
	title,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill style={{background: '#4F993F', fontFamily}}>
			<Sequence name="Eruption" durationInFrames={130}>
				<Eruption />
			</Sequence>
			<Sequence name="Talk" from={150}>
				<Talk
					themeName={themeName}
					speakers={speakers}
					title={title}
					date={date}
					time={time}
					location={location}
				/>
			</Sequence>
			<Sequence name="Transition" from={120} durationInFrames={40}>
				<Transition />
			</Sequence>
		</AbsoluteFill>
	);
};
