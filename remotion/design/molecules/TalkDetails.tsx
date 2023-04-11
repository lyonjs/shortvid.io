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
				<div>
					<IconWithCaption
						iconifyId="mdi:calendar"
						caption={date}
						style={{
							...iconStyle,
						}}
					/>
				</div>
			)}
			{time && (
				<div>
					<IconWithCaption
						iconifyId="mdi:clock"
						caption={time}
						style={{...iconStyle}}
					/>
				</div>
			)}
			{location && (
				<div>
					<IconWithCaption
						iconifyId="mdi:map-marker-radius-outline"
						caption={location}
						style={{...iconStyle}}
					/>
				</div>
			)}
		</div>
	);
};
