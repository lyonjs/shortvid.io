import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

export const Background = () => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				objectFit: 'cover',
				backgroundPosition: 'center',
				backgroundImage: `url(${staticFile(
					'/images/showcases/codeInTheDark/background.png'
				)})`,
			}}
		>
			<Img
				src={staticFile(
					'/images/showcases/codeInTheDark/codeInTheDarkLogo.png'
				)}
				style={{
					width: 500,
					opacity: 0.6,
				}}
			/>
			<AbsoluteFill style={{backgroundColor: 'rgba(0,0,0,0.7)'}} />
		</div>
	);
};
