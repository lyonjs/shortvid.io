import React from 'react';
import {loadFont} from '@remotion/google-fonts/OpenSans';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {z} from 'zod';

import {ShowcaseSchema} from '../../showcases.types';

import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';

const {fontFamily} = loadFont();

export const Bdxio = ({title, speakers}: z.infer<typeof ShowcaseSchema>) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#242457',
				fontFamily,
			}}
		>
			<Sequence name="Logo">
				<Logo logoUrl={staticFile('/images/showcases/bdxio/logo.png')} borderColor="#242457" />
			</Sequence>
			<Sequence name="Speakers" from={20}>
				<Speakers speakers={speakers} />
			</Sequence>
			<Sequence name="Title" from={80}>
				<TalkTitle title={title} />
			</Sequence>
		</AbsoluteFill>
	);
};
