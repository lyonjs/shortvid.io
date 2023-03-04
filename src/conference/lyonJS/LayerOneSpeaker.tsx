import {AbsoluteFill, Img, staticFile} from 'remotion';
import React from 'react';
import {RightTriangle} from './RightTriangle';
import {LeftTriangle} from './LeftTriangle';
import {GreenScreen} from './GreenScreen';

export const LayerOneSpeaker: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<RightTriangle />
			<LeftTriangle />
			<Img
				style={{
					zIndex: 1,
					width: 1000,
					position: 'absolute',
					top: 180,
					right: -450,
				}}
				src={staticFile('lion-model.webp')}
			/>
			<GreenScreen style={{width: '75%'}} />
			<GreenScreen
				style={{
					width: '30%',
					position: 'absolute',
					bottom: 0,
					right: 0,
				}}
			/>
		</AbsoluteFill>
	);
};
