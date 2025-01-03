import React from 'react';
import Image from 'next/image';
import {AbsoluteFill, Audio, interpolate, Sequence, staticFile} from 'remotion';
import {z} from 'zod';

import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';
import {SpeakerSchema} from '../showcases.types';

import {Cinema} from './LyonJS100/Cinema';
import {BigSpeakers} from './BigSpeakers';
import {Details} from './Details';
import {Logo} from './Logo';
import {LogoSponsor} from './LogoSponsor';
import {TalkTitle} from './TalkTitle';

export const LyonJSReplaySchema = z.object({
	title: z.string(),
	date: z.string(),
	sponsor: z.string(),
	speakers: z.array(SpeakerSchema),
});

export const LyonJSConf: React.FC<z.infer<typeof LyonJSReplaySchema>> = ({
	title,
	speakers,
	date,
	sponsor,
}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#00030a',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				top: 120,
			}}
		>
			<Cinema />
		</AbsoluteFill>
	);
};
