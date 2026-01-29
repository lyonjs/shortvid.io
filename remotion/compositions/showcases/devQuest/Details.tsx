import React from 'react';
import {loadFont} from '@remotion/google-fonts/Teko';
import {Img, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

import {Text} from '../../../design/atoms/Text';

const {fontFamily} = loadFont();

export const Details: React.FC<{
	date: string;
	time: string;
	location: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const DELAY = 10;

	const opacity = spring({
		frame: frame - 80,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 30,
	});

	const detailsConfig = [
		{
			data: date,
			icon: '/images/showcases/devQuest/date.png',
		},
		{
			data: time,
			icon: '/images/showcases/devQuest/time.png',
		},
		{
			data: location,
			icon: '/images/showcases/devQuest/carte.png',
		},
	];

	return (
		<div
			style={{
				fontFamily,
				fontWeight: 900,
				fontSize: '50px',
				color: '#F1DDB6',
				position: 'absolute',
				bottom: 30,
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				width: '100%',
			}}
		>
			{detailsConfig.map((item, index) => {
				const drop = spring({
					frame: frame - (80 + index * DELAY),
					from: -100,
					to: 0,
					fps,
					durationInFrames: 30,
				});

				return (
					<div
						key={index}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '1rem',
							height: 'max-content',
							fontSize: '1.6rem',
							opacity,
							position: 'relative',
							bottom: drop,
						}}
					>
						<Img src={staticFile(item.icon)} alt="Icon" style={{width: '5rem'}} />
						<Text
							style={{
								position: 'relative',
								color: 'inherit',
								width: 'max-content',
								padding: 0,
								fontFamily,
								fontWeight: 900,
								fontSize: '50px',
								paddingTop: '1rem',
							}}
						>
							{item.data}
						</Text>
					</div>
				);
			})}
		</div>
	);
};
