import {Sequence} from 'remotion';
import {Speaker as SpeakerType} from '../../../types/defaultProps.types';
import React from 'react';
import {FadeIn} from './FadeIn';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {Text} from '../../../design/atoms/Text';

const Speaker: React.FC<{speaker: SpeakerType; index: number}> = ({
	speaker: {name, picture},
	index,
}) => {
	return (
		<>
			<AvatarWithCaption
				avatarPictureUrl={picture}
				avatarStyle={{
					borderRadius: '30px',
					height: 150,
					width: 150,
					border: '4px solid white',
					boxShadow: '4px 5px 0 #e95900',
				}}
				style={{
					gap: 64,
					flexDirection: 'row',
					alignItems: 'flex-start',
					padding: '0 42px',
					position: 'absolute',
					top: index * 100 - 10,
					left: index * 90,
					width: 700,
				}}
			>
				<Text
					style={{
						fontWeight: 600,
						textShadow: '2px 2px 2px #e95900',
						fontSize: '2rem',
						marginTop: 0,
						textAlign: 'left',
						paddingLeft: 0,
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
				</Text>
			</AvatarWithCaption>
		</>
	);
};

export const Speakers: React.FC<{speakers: SpeakerType[]}> = ({speakers}) => {
	return (
		<div style={{position: 'relative', top: 280 - 40 * speakers.length}}>
			{speakers.map((speaker, index) => (
				<Sequence from={index * 20} name={speaker.name} key={speaker.name}>
					<FadeIn>
						<Speaker key={speaker.name} speaker={speaker} index={index} />
					</FadeIn>
				</Sequence>
			))}
		</div>
	);
};
