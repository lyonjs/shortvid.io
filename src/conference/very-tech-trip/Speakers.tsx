import {Sequence} from 'remotion';
import {Img} from 'remotion';
import {Speaker as SpeakerType} from '../types';
import React from 'react';
import {FadeIn} from './FadeIn';

const Speaker: React.FC<{speaker: SpeakerType; index: number}> = ({
	speaker: {name, picture},
	index,
}) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '32px',
				fontSize: '32px',
				width: '500px',
				padding: '0 42px',
				position: 'absolute',
				top: index * 90,
				left: index * 70,
			}}
		>
			<Img
				src={picture}
				style={{
					display: 'block',
					borderRadius: '50%',
					height: 150,
					width: 150,
				}}
			/>
			<div
				style={{
					flexGrow: 1,
				}}
			>
				{name}
			</div>
		</div>
	);
};

export const Speakers: React.FC<{speakers: SpeakerType[]}> = ({speakers}) => {
	return (
		<div style={{position: 'relative', top: 280 - 40 * speakers.length}}>
			{speakers.map((speaker, index) => (
				<Sequence from={index * 20} name={speaker.name}>
					<FadeIn>
						<Speaker key={speaker.name} speaker={speaker} index={index} />
					</FadeIn>
				</Sequence>
			))}
		</div>
	);
};
