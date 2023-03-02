import React from 'react';
import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const SingleMountain: React.FC<{
	style?: React.CSSProperties;
	ImgUrl: string;
}> = ({style, ImgUrl}) => {
	return (
		<Img
			src={staticFile(ImgUrl)}
			style={{
				position: 'absolute',
				bottom: 0,
				width: '20%',
				...style,
			}}
		/>
	);
};
