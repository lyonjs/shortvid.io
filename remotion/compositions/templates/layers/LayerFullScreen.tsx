import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {z} from 'zod';

import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';
import {GreenScreen} from '../../showcases/lyonJS/GreenScreen';

import {LayerSchema} from './layers.types';

export const LayerFullScreen = ({
	primaryColor,
	secondaryColor,
	decorationUrl,
}: z.infer<typeof LayerSchema>) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<BackgroundTriangle
				primaryColor={primaryColor}
				secondaryColor={secondaryColor}
			/>
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
			{decorationUrl && (
				<Img
					style={{
						zIndex: 2,
						width: 250,
						position: 'absolute',
						bottom: 0,
						right: 0,
					}}
					src={decorationUrl}
				/>
			)}
		</AbsoluteFill>
	);
};
