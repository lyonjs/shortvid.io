import {AbsoluteFill, Audio, interpolate, Sequence, staticFile} from 'remotion';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import {Combo} from './Combo';

export const CodeInTheDark = () => {
	return (
		<AbsoluteFill>
			<Sequence name="KeyboardAudio">
				<Audio
					src={staticFile('sounds/keyboard.mp3')}
					startFrom={140}
					volume={0.5}
				/>
			</Sequence>
			<Sequence name="Background">
				<BackgroundFiller imageUrl="https://github.com/lyonjs/shortvid.io/assets/72607059/d984ca6d-2097-4964-a7fc-c90640601729" />
			</Sequence>
			<Sequence name="Combo">
				<Combo />
			</Sequence>
		</AbsoluteFill>
	);
};
