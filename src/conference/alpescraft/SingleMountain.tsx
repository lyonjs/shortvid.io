import React from 'react';
import {Img, staticFile} from 'remotion';

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
