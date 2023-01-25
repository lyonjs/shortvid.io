import {AbsoluteFill, Sequence} from 'remotion';
import React from 'react';
import {Background} from './Background';
import {Speakers} from './Speakers';
import {Title} from './Title';
import {Details} from './Details';
import {Logo} from './Logo';
import {Talk} from '../types';

export const VeryTechTrip: React.FC<Talk> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#00014a',
				overflow: 'hidden',
				color: 'white',
				fontFamily: 'Helvetica,Arial,sans-serif',
			}}
		>
			<Background />
			<Sequence from={30}>
				<Logo />
			</Sequence>
			<Sequence from={50}>
				<Speakers speakers={speakers} />
			</Sequence>
			<Sequence from={50}>
				<Title
					title={title}
					style={{
						bottom: '120px',
						width: '100%',
						padding: '0 42px',
						textAlign: 'center',
					}}
				/>
			</Sequence>
			<Sequence from={80}>
				<Details
					time={time}
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
					}}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
