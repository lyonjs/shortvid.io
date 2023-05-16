import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {Combo} from './Combo';
import React from 'react';
import {Spotlight} from './Spotlight';

export const CodeInTheDark = () => {
	return (
		<AbsoluteFill style={{background: '#0c0c0d'}}>
			<Sequence name="KeyboardAudio">
				<Audio
					src={staticFile('sounds/keyboard.mp3')}
					startFrom={140}
					volume={0.5}
				/>
			</Sequence>
			<Sequence name="Sportlight" from={60}>
				<Spotlight />
			</Sequence>
			<Sequence name="Combo">
				<Combo />
			</Sequence>
		</AbsoluteFill>
	);
};
