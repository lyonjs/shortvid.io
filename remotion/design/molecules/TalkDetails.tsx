import {IconWithCaption} from './IconWithCaption';

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
	const countColumn = (items.date ? 1 : 0) + (items.time ? 1 : 0) + (items.location ? 1 : 0);

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
					<IconWithCaption
						iconifyId={items.icons?.dateIcon || 'mdi:calendar'}
						caption={items.date}
						style={{
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...style,
						}}
						iconStyle={iconStyle}
						textStyle={textStyle}
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
						iconifyId={items.icons?.timeIcon || 'mdi:clock'}
						caption={items.time}
						style={{
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...style,
						}}
						iconStyle={iconStyle}
						textStyle={textStyle}
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
						iconifyId={items.icons?.locationIcon || 'mdi:map-marker-radius-outline'}
						caption={items.location}
						style={{
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...style,
						}}
						iconStyle={iconStyle}
						textStyle={textStyle}
					/>
				</div>
			)}
		</div>
	);
};
