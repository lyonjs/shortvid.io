import {AbsoluteFill, Sequence} from 'remotion';
import {TalkSpeakerPicture} from '../../templates/talk/TalkSpeakerPicture';
import {Title} from './Title';
import {Speaker} from '../../../../src/types/conferences.types';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	return (
		<Sequence from={20} name="Picture">
			<AbsoluteFill
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					gap: 100,
				}}
			>
				{speakers.map((speaker, index) => {
					const shadowColor = index % 2 === 0 ? '#ff8d4e' : '#aecbd6';

					return (
						<div
							key={speaker.name}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<TalkSpeakerPicture
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
									height: 100,
									fontSize: '30px',
									fontWeight: 700,
									color: shadowColor,
								}}
								delay={40}
							/>
						</div>
					);
				})}
			</AbsoluteFill>
		</Sequence>
	);
};
