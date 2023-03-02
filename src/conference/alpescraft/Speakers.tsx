import React from 'react';
import {TalkSpeakerPicture} from '../../talk/TalkSpeakerPicture';
import {Speaker} from '../types';
import {SpeakersName} from './SpeakersName';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	return (
		<div
			style={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: `repeat(${speakers.length}, 1fr)`,
			}}
		>
			{speakers.map((speaker) => {
				return (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<TalkSpeakerPicture
							key={speaker.name}
							style={{
								display: 'block',
								position: 'relative',
								left: 'unset',
								transform: 'translate(0)',
								width: 200,
								height: 200,
								border: 'none',
								boxShadow: `0 0 0 10px white, 0 0 0 13px #007bff`,
								borderRadius: '50% 20% / 10% 40%',
							}}
							speakerPicture={speaker.picture}
							top={30}
						/>
						<SpeakersName name={speaker.name} />
					</div>
				);
			})}
		</div>
	);
};
