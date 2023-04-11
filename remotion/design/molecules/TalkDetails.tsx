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
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
				columnGap: '7rem',
				position: 'absolute',
				bottom: '3rem',
				width: '100%',
				fontWeight: 700,
				color: 'white',
				...style,
			}}
		>
			{date && (
				<IconWithCaption
					iconifyId="mdi:calendar"
					caption={date}
					style={iconStyle}
				/>
			)}
			{time && (
				<IconWithCaption
					iconifyId="mdi:clock"
					caption={time}
					iconStyle={{width: 80}}
					style={{gap: '2rem', ...iconStyle}}
				/>
			)}
			{location && (
				<IconWithCaption
					iconifyId="mdi:map-marker-radius-outline"
					caption={location}
					iconStyle={{width: 90, ...iconStyle}}
				/>
			)}
		</div>
	);
};
