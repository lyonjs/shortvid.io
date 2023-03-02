import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	Sequence,
	useCurrentFrame,
} from 'remotion';
import {SingleMountain} from './SingleMountain';

export const Mountains = () => {
	const frame = useCurrentFrame();

	const appear = interpolate(frame, [0, 10], [-300, -20], {
		easing: Easing.elastic(1),
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Sequence name="Left-moutain">
				<SingleMountain
					ImgUrl="images/conferences/alpescraft/Mountain-left.svg"
					style={{
						left: appear,
					}}
				/>
			</Sequence>
			<Sequence name="Right-moutain" from={5}>
				<SingleMountain
					ImgUrl="images/conferences/alpescraft/Mountain-right.svg"
					style={{
						right: appear,
					}}
				/>
			</Sequence>
		</>
	);
};
