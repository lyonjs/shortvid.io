import {
	AbsoluteFill,
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {Title} from '../components/Title';

export const Register: React.FC<{size?: number}> = ({size = 200}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({frame, from: 0, to: 100, fps, durationInFrames: 30});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	return (
		<AbsoluteFill>
			<div
				style={{
					width: '100%',
					display: 'flex',
					position: 'absolute',
					bottom: drop,
					color: 'white',
					justifyContent: 'center',
					alignItems: 'center',
					opacity,
					gap: 30,
				}}
			>
				<Title style={{fontSize: 40}}>Inscriptions sur</Title>
				<Img
					src={staticFile('/meetup-logo.png')}
					style={{
						height: size,
						width: 'auto',
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};
