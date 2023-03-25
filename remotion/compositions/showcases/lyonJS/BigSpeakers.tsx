import {AbsoluteFill, Sequence} from 'remotion';
import {TalkSpeakerPicture} from '../../templates/talk/TalkSpeakerPicture';
import {Title} from './Title';
import {Speaker} from './Replay';

export const BigSpeakers: React.FC<{speakers: Speaker[]; dropTop: number}> = ({
	speakers,
	dropTop,
}) => {
	return (
		<Sequence from={60} name="Picture">
			<AbsoluteFill
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					gap: 150,
				}}
			>
				{speakers.map((speaker, index) => {
					const shadowColor = index % 2 === 0 ? '#efdb4f' : '#323330';

					return (
						<div
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
									width: 350,
									height: 350,
									border: 'none',
									boxShadow: `0 0 0 10px white, 0 0 0 20px ${shadowColor}`,
									borderRadius: '50% 20% / 10% 40%',
								}}
								top={dropTop}
								speakerPicture={speaker.picture}
							/>
							<Title
								title={speaker.name}
								style={{
									bottom: dropTop,
									fontSize: '45px',
									width: 350,
									height: 200,
									fontWeight: 700,
									color: 'white',
									textShadow: `0px 0px 3px black`,
								}}
								delay={50}
							/>
						</div>
					);
				})}
			</AbsoluteFill>
		</Sequence>
	);
};
