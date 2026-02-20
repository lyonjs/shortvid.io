import {AbsoluteFill, Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Register: React.FC<{logo: string; size?: number}> = ({logo, size = 200}) => {
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
				<Img
					src={logo}
					style={{
						height: size,
						width: 'auto',
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};
