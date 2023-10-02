import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import {DefaultProps} from '../../../types/defaultProps.types';
import {TalkTitle} from '../campingDesSpeakers/components/TalkTitle';

import {Android} from './Android';
import {Dino} from './Dino';
import {Logo} from './Logo';
import {Speakers} from './Speakers';

const {fontFamily} = loadFont();
export const DevfestNantes = ({title, speakers}: DefaultProps) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
			}}
		>
			<Sequence>
				<BackgroundFiller
					imageUrl={staticFile(
						'/images/showcases/devfestNantes/fond-visuel-etoiles.png',
					)}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
					}}
				/>
			</Sequence>
			<Sequence from={30}>
				<Dino />
			</Sequence>
			<Sequence from={110}>
				<Android />
			</Sequence>
			<Sequence>
				<Logo />
			</Sequence>
			<Sequence name="Speakers" from={30}>
				<Speakers speakers={speakers} />
				<TalkTitle title={title} style={{}} />
			</Sequence>
		</AbsoluteFill>
	);
};
