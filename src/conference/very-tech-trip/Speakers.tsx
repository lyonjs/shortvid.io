import {Img, Sequence} from 'remotion';
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
				alignItems: 'start',
				gap: '64px',
				fontSize: '32px',
				width: '700px',
				padding: '0 42px',
				position: 'absolute',
				top: index * 100 - 10,
				left: index * 90,
			}}
		>
			<Img
				src={picture}
				style={{
					display: 'block',
					borderRadius: '30px',
					height: 150,
					width: 150,
          border: '4px solid white',
          boxShadow: '4px 5px 0 #e95900',
        }}
			/>
			<div
				style={{
					flexGrow: 1,
					fontWeight: 600,
          textShadow: '2px 2px 2px #e95900',
				}}
			>
				{name}
				<span
					style={{
						color: '#e95900',
            paddingLeft: 5,
					}}
				>
					.
				</span>
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
