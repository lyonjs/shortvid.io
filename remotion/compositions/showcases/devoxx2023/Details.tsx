import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Aldrich';
import {Icon} from '@iconify/react';
import {IconWithCaption} from '../../../design/molecules/IconWithCaption';

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
			icon: 'mdi:calendar',
		},
		{
			data: time,
			icon: 'mdi:clock',
		},
		{
			data: location,
			icon: 'mdi:map-marker-radius-outline',
		},
	];

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
							bottom: drop,
						}}
						iconStyle={{fontSize: 40}}
					/>
				);
			})}
		</div>
	);
};
