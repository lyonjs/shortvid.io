import {AbsoluteFill, Sequence} from 'remotion';
import {TalkSpeakerPicture} from '../../templates/talk/TalkSpeakerPicture';
import {Speaker} from './TouraineTech2023';
import {Title} from './Title';

export const BigSpeakers: React.FC<{speakers: Speaker[]; dropTop: number}> = ({
	speakers,
	dropTop,
}) => {
	return (
		<Sequence from={20} name="Picture">
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
					const shadowColor = index % 2 === 0 ? '#6abfad' : '#222333';

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
								}}
								top={dropTop}
								speakerPicture={speaker.picture}
							/>
							<Title
								title={speaker.name}
								style={{
									bottom: dropTop,
									fontSize: '38px',
									width: 350,
									height: 200,
									fontWeight: 700,
									color: '#222333',
									textShadow: `1px 1px 1px white`,
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
