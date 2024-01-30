import {CSSProperties} from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

const MixitLogo: React.FC = () => {
	return (
		<Img
			src={staticFile('/images/showcases/mixit/mixitLogoDark.svg')}
			width={1000}
			height="auto"
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		/>
	);
};

export const MixitIntro: React.FC = () => {
	const frame = useCurrentFrame();

	const slide = interpolate(frame, [20, 70], [0, -1000], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const defaultPathStyle: CSSProperties = {
		zIndex: 1,
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	};

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					...defaultPathStyle,
					left: slide,
					clipPath: 'polygon(0% 0%, 42% 0, 61.7% 48.8%, 42.3% 100%, 0% 100%)',
				}}
			>
				<MixitLogo />
			</div>
			<div
				style={{
					...defaultPathStyle,
					right: slide,
					clipPath:
						'polygon(100% 0, 100% 100%, 42.3% 100%, 61.5% 48.8%, 42% 0%)',
				}}
			>
				<MixitLogo />
			</div>
		</AbsoluteFill>
	);
};
