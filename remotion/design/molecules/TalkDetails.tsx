import React from 'react';
import {IconWithCaption} from './IconWithCaption';

export const TalkDetails: React.FC<{
	date?: string;
	time?: string;
	location?: string;
	style?: React.CSSProperties;
	iconStyle?: React.CSSProperties;
	flex?: boolean;
}> = ({date, time, location, style, iconStyle, flex = false}) => {
	return (
		<div
			style={{
				display: flex ? 'flex' : 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',
				bottom: '3rem',
				width: '100%',
				fontWeight: 700,
				color: 'white',
				height: flex ? '100px' : 'auto',
				...style,
			}}
		>
			{date && (
				<div
					style={{
						position: 'relative',
						width: flex ? '40%' : 'auto',
						flex: '1 0 20%',
					}}
				>
					<IconWithCaption
						iconifyId="mdi:calendar"
						caption={date}
						style={{
							position: 'absolute',
							left: flex ? '80%' : '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...iconStyle,
						}}
					/>
				</div>
			)}
			{time && (
				<div
					style={{
						position: 'relative',
						width: flex ? '40%' : 'auto',
						flex: '1 0 20%',
					}}
				>
					<IconWithCaption
						iconifyId="mdi:clock"
						caption={time}
						style={{
							position: 'absolute',
							left: flex ? '20%' : '50%',
							bottom: 0,
							transform: 'translateX(-50%)',
							...iconStyle,
						}}
					/>
				</div>
			)}
			{location && (
				<div
					style={{
						position: 'relative',
						width: flex ? '40%' : 'auto',
						flexBasis: '100%',
					}}
				>
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
