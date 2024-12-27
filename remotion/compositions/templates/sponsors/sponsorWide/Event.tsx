import {Img, interpolate, Sequence, useCurrentFrame} from 'remotion';

export const Event = ({src}: {src: string}) => {
	const frame = useCurrentFrame();

	const disappear = interpolate(frame, [20, 30], [1, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<Sequence
			name="Event"
			from={0}
			durationInFrames={30}
			style={{
				display: 'flex',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Img
				src={src}
				style={{width: '800px', height: 'auto', opacity: disappear}}
			/>
		</Sequence>
	);
};
