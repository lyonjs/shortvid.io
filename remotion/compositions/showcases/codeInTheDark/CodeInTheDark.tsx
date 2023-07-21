import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';

import {loadLocalFont} from '../../../../src/app/utils/loadFont';

import {Background} from './Background';
import {Combo} from './Combo';
import Details from './Details';
import {Organisateurs} from './Organisateurs';
import {Spotlight} from './Spotlight';
import {Words} from './Words';

loadLocalFont('PressStart2P', 'font/PressStart2P.ttf', 'truetype');

export const CodeInTheDark = () => {
	return (
		<AbsoluteFill>
			<Sequence name="KeyboardAudio" durationInFrames={255}>
				<Audio
					src={staticFile('sounds/keyboard.mp3')}
					startFrom={130}
					volume={0.4}
				/>
			</Sequence>
			<Sequence name="Background" from={40}>
				<Background />
			</Sequence>
			<Sequence name="Details" from={40}>
				<Details date="20 juin" />
			</Sequence>
			<Sequence name="Organisateurs" from={40}>
				<Organisateurs />
			</Sequence>
			<Sequence name="Sportlight" durationInFrames={130}>
				<Spotlight />
			</Sequence>
			<Sequence name="Combo">
				<Combo />
			</Sequence>
			<Sequence name="PopingWords">
				<Words />
			</Sequence>
		</AbsoluteFill>
	);
};
