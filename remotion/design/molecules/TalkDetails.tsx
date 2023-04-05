import React from 'react';
import {IconWithCaption} from '../atoms/IconWithCaption';
import {AbsoluteFill} from 'remotion';

export const TalkDetails: React.FC<{
	date?: string;
	time?: string;
	location?: string;
	style?: React.CSSProperties;
}> = ({date, time, location, style}) => {
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
			{date && <IconWithCaption lottieAsset="lf20_ak90tqhe" caption={date} />}
			{time && (
				<IconWithCaption
					lottieAsset="lf20_nv5aXa"
					caption={time}
					iconStyle={{width: 80}}
					style={{gap: '2rem'}}
				/>
			)}
			{location && (
				<IconWithCaption
					lottieAsset="lf20_PgZU3O"
					caption={location}
					iconStyle={{width: 90}}
				/>
			)}
		</div>
	);
};
