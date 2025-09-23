import {Icon} from '@iconify/react';
import {Img, staticFile} from 'remotion';

import {Text} from '../../../../design/atoms/Text';

export const TalkDetails: React.FC<{
	items: {
		date?: string;
		time?: string;
		location?: string;
		icons?: {
			dateIcon?: string;
			timeIcon?: string;
			locationIcon?: string;
		};
	};
	style?: React.CSSProperties;
	iconStyle?: React.CSSProperties;
	textStyle?: React.CSSProperties;
}> = ({items, style, iconStyle, textStyle}) => {
	const countColumn =
		(items.date ? 1 : 0) + (items.time ? 1 : 0) + (items.location ? 1 : 0);

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${countColumn}, 1fr)`,
				position: 'absolute',
				bottom: '3rem',
				width: '100%',
				fontWeight: 700,
				color: 'white',
				...style,
			}}
		>
			{items['date'] && (
				<div
					style={{
						position: 'relative',
						width: 'auto',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 12,
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...style,
						}}
					>
						<Icon icon={items.icons?.dateIcon || 'mdi:calendar'} style={{fontSize: '4rem', ...iconStyle}} />
						<Img src={staticFile('/images/showcases/devfestNantes/2025/leaf.svg')} style={{height: 25}} />
						<Text style={{fontSize: 'inherit', color: 'inherit', width: 'max-content', padding: 0, ...textStyle}}>
							{items.date}
						</Text>
						<Img src={staticFile('/images/showcases/devfestNantes/2025/leaf.svg')} style={{height: 25, transform: 'scaleX(-1)'}} />
					</div>
				</div>
			)}
			{items.time && (
				<div
					style={{
						position: 'relative',
						width: 'auto',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 12,
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...style,
						}}
					>
						<Icon icon={items.icons?.timeIcon || 'mdi:clock'} style={{fontSize: '4rem', ...iconStyle}} />
						<Img src={staticFile('/images/showcases/devfestNantes/2025/leaf.svg')} style={{height: 25}} />
						<Text style={{fontSize: 'inherit', color: 'inherit', width: 'max-content', padding: 0, ...textStyle}}>
							{items.time}
						</Text>
						<Img src={staticFile('/images/showcases/devfestNantes/2025/leaf.svg')} style={{height: 25, transform: 'scaleX(-1)'}} />
					</div>
				</div>
			)}
			{items.location && (
				<div
					style={{
						position: 'relative',
						width: 'auto',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 12,
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...style,
						}}
					>
						<Icon icon={items.icons?.locationIcon || 'mdi:map-marker-radius-outline'} style={{fontSize: '4rem', ...iconStyle}} />
						<Img src={staticFile('/images/showcases/devfestNantes/2025/leaf.svg')} style={{height: 25}} />
						<Text style={{fontSize: 'inherit', color: 'inherit', width: 'max-content', padding: 0, ...textStyle}}>
							{items.location}
						</Text>
						<Img src={staticFile('/images/showcases/devfestNantes/2025/leaf.svg')} style={{height: 25, transform: 'scaleX(-1)'}} />
					</div>
				</div>
			)}
		</div>
	);
};
