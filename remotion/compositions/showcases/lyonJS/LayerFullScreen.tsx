import {AbsoluteFill, Img, staticFile} from 'remotion';
import React from 'react';
import {GreenScreen} from './GreenScreen';
import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';

export const LayerFullScreen: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<BackgroundTriangle />
			<div
				style={{
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<GreenScreen style={{width: '90%', margin: 0}} />
			</div>
			<Img
				style={{
					zIndex: 2,
					width: 800,
					position: 'absolute',
					bottom: -20,
					right: -300,
				}}
				src={staticFile('lion-model.webp')}
			/>
		</AbsoluteFill>
	);
};
