import {AbsoluteFill} from 'remotion';
import {TalkSpeakerPicture} from '../../templates/talk/TalkSpeakerPicture';
import {Title} from './Title';
import {Speaker} from './Snowcamp';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	return (
		<AbsoluteFill
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				gap: 100,
			}}
		>
			{speakers.map((speaker) => {
				const shadowColor = '#e3b81c';

				return (
					<div
						key={speaker.name}
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<TalkSpeakerPicture
							key={speaker.name}
							style={{
								display: 'block',
								position: 'relative',
								left: 'unset',
								transform: 'translate(0)',
								width: 250,
								height: 250,
								border: 'none',
								boxShadow: `0 0 0 10px white, 0 0 0 20px ${shadowColor}`,
							}}
							speakerPicture={speaker.picture}
						/>
						<Title
							title={speaker.name}
							style={{
								position: 'relative',
								left: 'unset',
								bottom: '-20%',
								transform: 'translate(0)',
								width: 250,
								height: 100,
								fontSize: '30px',
								fontWeight: 700,
								color: 'white',
							}}
							delay={40}
						/>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
