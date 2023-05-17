import {
	AbsoluteFill,
	Audio,
	interpolate,
	Loop,
	Sequence,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Combo} from './Combo';
import React, {useEffect, useState} from 'react';
import {Spotlight} from './Spotlight';
import {Words} from './Words';
import _ from 'lodash';

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
			<Sequence name="PopingWords">
				<Words />
			</Sequence>
		</AbsoluteFill>
	);
};
