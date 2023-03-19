import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Rubik';

const {fontFamily} = loadFont();

export const NameBanner: React.FC<{name: string}> = ({name}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scaleUp = spring({
		frame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 60,
	});

	return (
		<span
			style={{
				width: '100%',
				position: 'absolute',
				bottom: 0,
				height: 130,
				filter:
					'drop-shadow(0px 15px 0px #003272) drop-shadow(0px -15px 0px #67AAFF)',
			}}
		>
			<span
				style={{
					display: 'inline-flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					position: 'absolute',
					bottom: 180,
					height: 130,
					backgroundColor: 'white',
					transform: `scale(${scaleUp})`,
					clipPath:
						'polygon(90% 0, 10% 0, 15% 50%, 10% 100%, 90% 100%, 85% 50%)',
				}}
			>
				<span
					style={{
						fontFamily,
						fontSize: 60,
						fontWeight: 800,
						color: '#003272',
						textAlign: 'center',
						textTransform: 'uppercase',
						letterSpacing: 5,
						textShadow: '10px 10px 0px #E3E3E3',
					}}
				>
					{name}
				</span>
			</span>
		</span>
	);
};
