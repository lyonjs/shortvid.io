import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Logo = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [20, 30], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	return (
		<Img
			src={staticFile('images/showcases/volcamp/volcampLogo.svg')}
			alt="Logo Volcamp 2023"
			width={116}
			height={107}
			style={{
				position: 'absolute',
				top: 20,
				left: 50,
				opacity,
			}}
		/>
	);
};
