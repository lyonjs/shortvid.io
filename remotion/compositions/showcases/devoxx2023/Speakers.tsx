import {AbsoluteFill} from 'remotion';
import {TalkSpeakerPicture} from '../../templates/talk/TalkSpeakerPicture';
import {SpeakerName} from './SpeakerName';
import {Speaker} from '../../../../src/types/conferences.types';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	return (
		<AbsoluteFill
			style={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: `repeat(${speakers.length}, 1fr)`,
			}}
		>
			{speakers.map((speaker) => {
				return (
					<div
						key={speaker.name}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<SpeakerName
							title={speaker.name}
							style={{
								position: 'relative',
								left: 'unset',
								bottom: '-5%',
							}}
							top={60}
						/>
						<TalkSpeakerPicture
							style={{
								display: 'block',
								position: 'relative',
								left: 'unset',
								transform: 'translate(0)',
								width: 200,
								height: 200,
								border: 'none',
								boxShadow: `0 0 0 10px white, 0 0 0 13px #f88224`,
								borderRadius: '50% 20% / 10% 40%',
							}}
							speakerPicture={speaker.picture}
							top={90}
						/>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
