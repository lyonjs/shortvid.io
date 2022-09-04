import {
	AbsoluteFill,
	Img,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import meetupLogo from '../assets/meetup-logo.png';
import {Title} from '../components/Title';

export const Register: React.FC<{size?: number}> = ({size = 200}) => {
	const frame = useCurrentFrame();
	const {fps, height} = useVideoConfig();

	const drop = spring({
		frame,
		from: height / 2,
		to: 10,
		fps,
		durationInFrames: 30,
	});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	return (
		<AbsoluteFill>
			<div
				style={{
					display: 'flex',
					position: 'absolute',
					top: drop,
					left: 100,
					color: 'white',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					opacity,
				}}
			>
				<Title style={{fontSize: 40}}>⬆️ Inscriptions sur</Title>
				<Img
					src={meetupLogo}
					style={{
						height: size,
						width: 'auto',
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};
