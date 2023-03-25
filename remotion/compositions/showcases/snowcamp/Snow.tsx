import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../../../src/hooks/useLottie';
import {interpolate, useCurrentFrame} from 'remotion';

export const Snow = () => {
	const frame = useCurrentFrame();
	const snow = useLottie('lf20_kZx06J');

	const opacity = interpolate(frame, [0, 20], [0, 1]);

	if (!snow) {
		return null;
	}

	return (
		<Lottie
			style={{
				width: '100%',
				height: '100%',
				opacity,
			}}
			animationData={snow}
		/>
	);
};
