import React from 'react';
import {IconWithCaption} from './IconWithCaption';

export const TalkDetails: React.FC<{
	date?: string;
	time?: string;
	location?: string;
	style?: React.CSSProperties;
	iconStyle?: React.CSSProperties;
}> = ({date, time, location, style, iconStyle}) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				position: 'absolute',
				bottom: '3rem',
				width: '100%',
				fontWeight: 700,
				color: 'white',
				...style,
			}}
		>
			{date && (
				<div style={{position: 'relative'}}>
					<IconWithCaption
						iconifyId="mdi:calendar"
						caption={date}
						style={{
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...iconStyle,
						}}
					/>
				</div>
			)}
			{time && (
				<div style={{position: 'relative'}}>
					<IconWithCaption
						iconifyId="mdi:clock"
						caption={time}
						style={{
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...iconStyle,
						}}
					/>
				</div>
			)}
			{location && (
				<div style={{position: 'relative'}}>
					<IconWithCaption
						iconifyId="mdi:map-marker-radius-outline"
						caption={location}
						style={{
							position: 'absolute',
							left: '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...iconStyle,
						}}
					/>
				</div>
			)}
		</div>
	);
};
