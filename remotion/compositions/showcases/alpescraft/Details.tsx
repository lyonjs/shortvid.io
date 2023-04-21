import React from 'react';
import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../../hooks/useLottie';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {IconWithCaption} from '../../../design/molecules/IconWithCaption';

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
				rowGap: '1.5rem',
			}}
		>
			<IconWithCaption
				iconifyId="mdi:calendar"
				caption={date}
				style={{
					position: 'relative',
					flex: '1 0 20%',
					justifyContent: 'flex-end',
					bottom: drop,
					opacity,
				}}
				iconStyle={{
					fontSize: 50,
				}}
			/>
			<IconWithCaption
				iconifyId="mdi:map-marker-radius-outline"
				caption={location}
				style={{
					position: 'relative',
					flex: '1 0 20%',
					justifyContent: 'flex-start',
					bottom: drop,
					opacity,
				}}
				iconStyle={{
					fontSize: 50,
				}}
			/>
			{time && (
				<IconWithCaption
					iconifyId="mdi:clock"
					caption={time}
					style={{
						position: 'relative',
						flexBasis: '100%',
						bottom: drop,
						opacity,
					}}
					iconStyle={{
						fontSize: 45,
					}}
				/>
			)}
		</div>
	);
};
