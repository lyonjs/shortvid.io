import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useLottie} from '../../../hooks/useLottie';
import React, {CSSProperties} from 'react';
import {Lottie} from '@remotion/lottie';

export const Details: React.FC<{style?: CSSProperties; time: string}> = ({
	style,
	time,
}) => {
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
				display: 'flex',
				padding: '20px',
				justifyContent: 'center',
				fontSize: '24px',
				...style,
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '2rem',
				}}
			>
				<Lottie
					style={{
						width: '42px',
						filter: 'none',
					}}
					animationData={illustrationHour}
				/>
				<span
					style={{
						position: 'relative',
						bottom: drop,
						fontWeight: 700,
						opacity,
					}}
				>
					{time}
				</span>
			</div>
		</div>
	);
};
