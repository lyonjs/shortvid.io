import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Icon} from '@iconify/react';
import {Text} from '../../../../design/atoms/Text';

export const BrandedLocation: React.FC<{
	location: string;
}> = ({location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideIn = spring({
		frame,
		fps,
		from: -100,
		to: 50,
		durationInFrames: 30,
	});

	return (
		<div
			style={{
				position: 'absolute',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: 'max-content',
				width: '50%',
				right: 0,
				bottom: slideIn,
			}}
		>
			<Icon
				icon="material-symbols:location-on-rounded"
				style={{
					fontSize: '4.5rem',
					color: 'white',
				}}
			/>
			<Text
				style={{
					position: 'relative',
					fontFamily: 'inherit',
					display: 'block',
					textAlign: 'left',
					fontSize: '1.7rem',
					fontWeight: 'bold',
					paddingBottom: '5px',
					width: 'auto',
				}}
			>
				{location}
			</Text>
		</div>
	);
};
