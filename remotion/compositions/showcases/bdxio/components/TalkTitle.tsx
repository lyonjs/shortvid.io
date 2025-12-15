import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {Title} from '../../../../design/atoms/Title';

type TitleProps = {
	title: string;
};

export const TalkTitle = ({title}: TitleProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const titleOpacity = spring({
		frame,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 120,
	});
	const titleUnblur = interpolate(frame, [0, 40], [5, 0], {
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill style={{top: 470}}>
			<Title
				style={{
					fontFamily: 'inherit',
					fontSize: '3.25rem',
					width: '100%',
					opacity: titleOpacity,
					filter: `blur(${titleUnblur}px)`,
					textWrap: 'balance',
				}}
			>
				{title}
			</Title>
			<Img
				src={staticFile('/images/showcases/bdxio/line-purple.png')}
				width={300}
				style={{
					opacity: titleOpacity,
					position: 'absolute',
					left: 500,
					bottom: 490,
				}}
			/>
			<Img
				src={staticFile('/images/showcases/bdxio/highlight-orange.png')}
				width={50}
				style={{
					opacity: titleOpacity,
					position: 'absolute',
					right: 150,
					bottom: 1100,
				}}
			/>
			<Img
				src={staticFile('/images/showcases/bdxio/highlight-orange.png')}
				width={50}
				style={{
					opacity: titleOpacity,
					position: 'absolute',
					right: 150,
					bottom: 850,
				}}
			/>
			<Img
				src={staticFile('/images/showcases/bdxio/scribble-yellow.png')}
				width={300}
				style={{
					opacity: titleOpacity,
					position: 'absolute',
					right: -100,
					bottom: 450,
					zIndex: 0,
					transform: 'rotate(70deg)',
				}}
			/>
			<Img
				src={staticFile('/images/showcases/bdxio/arrow-purple.png')}
				width={200}
				style={{
					opacity: titleOpacity,
					position: 'absolute',
					left: -30,
					top: -100,
					transform: 'rotate(70deg)',
				}}
			/>
		</AbsoluteFill>
	);
};
