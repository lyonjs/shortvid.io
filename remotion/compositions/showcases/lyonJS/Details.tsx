import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Aldrich';
import {Icon} from '@iconify/react';
import React from 'react';
import {IconWithCaption} from '../../../design/molecules/IconWithCaption';

const {fontFamily} = loadFont();

export const Details: React.FC<{
	date: string;
}> = ({date}) => {
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
			icon: 'mdi:calendar',
		},
	];

	const dropUnderline = spring({
		frame: frame - 80,
		from: -100,
		to: 100,
		fps,
		durationInFrames: 30,
	});

	return (
		<div
			style={{
				fontFamily,
				fontWeight: 700,
				fontSize: '25px',
				color: 'white',
				position: 'absolute',
				bottom: 30,
				display: 'grid',
				gridTemplateColumns: 'repeat(1, 1fr)',
				width: '100%',
			}}
		>
			<Img
				style={{
					position: 'absolute',
					bottom: dropUnderline,
					left: '50%',
					transform: 'translateX(-50%)',
					width: '300px',
					filter: 'drop-shadow(0 0 2px #efdb4f)',
				}}
				src={staticFile('underline-white.svg')}
			/>
			{detailsConfig.map((item, index) => {
				const drop = spring({
					frame: frame - (80 + index * DELAY),
					from: -100,
					to: 0,
					fps,
					durationInFrames: 30,
				});

				return (
					<IconWithCaption
						iconifyId={item.icon}
						caption={item.data}
						style={{
							opacity,
							position: 'relative',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '1rem',
							fontSize: 35,
							bottom: drop,
						}}
						iconStyle={{fontSize: 40}}
					/>
				);
			})}
		</div>
	);
};
