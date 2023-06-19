import {AbsoluteFill, Sequence} from 'remotion';
import {Transition} from './components/Transition';
import {Eruption} from './components/Eruption';
import {Talk} from './components/Talk';
import {loadFont} from '@remotion/google-fonts/Poppins';

const {fontFamily} = loadFont();

export const Volcamp = () => {
	return (
		<AbsoluteFill style={{background: '#4F993F', fontFamily}}>
			<Sequence name="Eruption" durationInFrames={165}>
				<Eruption />
			</Sequence>
			<Sequence name="Talk" from={185}>
				<Talk />
			</Sequence>
			<Sequence name="Transition" from={155} durationInFrames={40}>
				<Transition />
			</Sequence>
		</AbsoluteFill>
	);
};
