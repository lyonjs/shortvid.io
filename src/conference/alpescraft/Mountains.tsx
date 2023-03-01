import {AbsoluteFill, Img, Sequence} from 'remotion';
import {MountainLeft} from './Mountains/MountainLeft';
import {MountainRight} from './Mountains/MountainRight';

export const Mountains = () => {
	return (
		<AbsoluteFill>
			<Sequence>
				<MountainLeft />
			</Sequence>
			<Sequence from={5}>
				<MountainRight />
			</Sequence>
		</AbsoluteFill>
	);
};
