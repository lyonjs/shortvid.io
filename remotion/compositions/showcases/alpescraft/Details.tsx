import React from 'react';
import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../../hooks/useLottie';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Details: React.FC<{
	date: string;
	time?: string;
	location: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const illustrationDate = useLottie('lf20_ak90tqhe');
	const illustrationHour = useLottie('lf20_nv5aXa');
	const illustrationLocation = useLottie('lf20_PgZU3O');

	const durationInFrames = 30;
	const drop = spring({frame, from: -20, to: 0, fps, durationInFrames});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames});

	if (!illustrationHour || !illustrationDate || !illustrationLocation) {
		return null;
	}

	return (
		<div
			style={{
				fontWeight: 700,
				fontSize: '25px',
				color: 'white',
				position: 'absolute',
				bottom: '3rem',
				display: 'flex',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
				columnGap: '7rem',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
					gap: '1rem',
					flex: '1 0 20%',
				}}
			>
				<Lottie
					style={{
						width: '110px',
						filter: 'none',
					}}
					playbackRate={1.5}
					animationData={illustrationDate}
				/>
				<span
					style={{
						position: 'relative',
						bottom: drop,
						opacity,
					}}
				>
					{date}
				</span>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '1rem',
					flex: '1 0 20%',
				}}
			>
				<Lottie
					style={{
						width: '70px',
						filter: 'none',
					}}
					animationData={illustrationLocation}
				/>
				<span
					style={{
						position: 'relative',
						bottom: drop,
						opacity,
					}}
				>
					{location}
				</span>
			</div>
			{time && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '2rem',
						flexBasis: '100%',
					}}
				>
					<Lottie
						style={{
							width: '50px',
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
						{time}
					</span>
				</div>
			)}
		</div>
	);
};
