import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Words = () => {
	const frame = useCurrentFrame();
	const wordsLits = ['IMPRESSIVE !', 'OMG !', 'Are you god ?', 'Fire ! 🔥'];

	return (
		<AbsoluteFill
			style={{
				alignItems: 'flex-end',
			}}
		>
			<div
				style={{
					position: 'relative',
					margin: '20px 55px',
					width: 200,
					fontFamily: 'sans-serif',
					fontWeight: 'bold',
					fontSize: '1.5rem',
				}}
			>
				{wordsLits.map((word, index) => {
					const drop = interpolate(frame - index * 50, [20, 50], [220, 500], {
						extrapolateRight: 'clamp',
						extrapolateLeft: 'clamp',
					});

					const opacity = interpolate(
						frame - index * 50,
						[19, 20, 50],
						[0, 1, 0],
						{
							extrapolateRight: 'clamp',
							extrapolateLeft: 'clamp',
						}
					);

					// if (index === 0) {
					// 	return (
					// 		<span
					// 			key={index}
					// 			style={{
					// 				position: 'absolute',
					// 				width: '100%',
					// 				left: '50%',
					// 				transform: 'translateX(-50%)',
					// 				color: '#4EFFA1',
					// 				textAlign: 'center',
					// 				top: drop,
					// 				opacity: 1,
					// 			}}
					// 		>
					// 			{word}
					// 		</span>
					// 	);
					// }
					return (
						<span
							key={index}
							style={{
								position: 'absolute',
								width: '100%',
								left: '50%',
								transform: 'translateX(-50%)',
								color: '#4EFFA1',
								textAlign: 'center',
								top: drop,
								opacity,
							}}
						>
							{word}
						</span>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};
