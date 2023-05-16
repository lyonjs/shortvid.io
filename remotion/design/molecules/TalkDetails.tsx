import React from 'react';
import {IconWithCaption} from './IconWithCaption';

export const TalkDetails: React.FC<{
	items: {date?: string; time?: string; location?: string};
	style?: React.CSSProperties;
	iconStyle?: React.CSSProperties;
}> = ({items, style, iconStyle}) => {
	const itemsCount = Object.keys(items).length;
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${itemsCount}, 1fr)`,
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
					<IconWithCaption
						iconifyId="mdi:calendar"
						caption={items.date}
						style={{
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...style,
						}}
						iconStyle={iconStyle}
					/>
				</div>
			)}
			{items.time && (
				<div
					style={{
						position: 'relative',
						width: 'auto',
					}}
				>
					<IconWithCaption
						iconifyId="mdi:clock"
						caption={items.time}
						style={{
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...style,
						}}
						iconStyle={iconStyle}
					/>
				</div>
			)}
			{items.location && (
				<div
					style={{
						position: 'relative',
						width: 'auto',
					}}
				>
					<IconWithCaption
						iconifyId="mdi:map-marker-radius-outline"
						caption={items.location}
						style={{
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...style,
						}}
						iconStyle={iconStyle}
					/>
				</div>
			)}
		</div>
	);
};
