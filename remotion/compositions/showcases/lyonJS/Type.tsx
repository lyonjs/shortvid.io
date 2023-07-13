import {Lottie} from '@remotion/lottie';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {useLottie} from '../../../hooks/useLottie';

export const Type: React.FC<{type: string}> = ({type}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const illustrationHour = useLottie('lf20_nv5aXa');

	const drop = spring({frame, from: -20, to: 0, fps, durationInFrames: 30});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	if (!illustrationHour) {
		return null;
	}

	return (
		<div
			style={{
				position: 'absolute',
				bottom: 30,
				left: 0,
				right: 0,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '2rem',
				fontFamily: 'Noto Sans,sans-serif',
				fontWeight: 700,
				fontSize: '32px',
				color: 'white',
			}}
		>
			<Lottie
				style={{
					width: '70px',
					filter: 'none',
				}}
				animationData={illustrationHour}
			/>
			<span
				style={{
					position: 'relative',
					bottom: drop,
					opacity,
				}}
			>
				{type}
			</span>
		</div>
	);
};
