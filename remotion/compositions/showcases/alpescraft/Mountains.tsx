import {Easing, interpolate, Sequence, useCurrentFrame} from 'remotion';

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
					ImgUrl="images/showcases/alpescraft/mountainLeft.svg"
					style={{
						left: appear,
					}}
				/>
			</Sequence>
			<Sequence name="Right-moutain" from={5}>
				<SingleMountain
					ImgUrl="images/showcases/alpescraft/mountainRight.svg"
					style={{
						right: appear,
					}}
				/>
			</Sequence>
		</>
	);
};
