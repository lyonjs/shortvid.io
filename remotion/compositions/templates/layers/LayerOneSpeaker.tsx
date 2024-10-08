import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {z} from 'zod';

import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';
import {GreenScreen} from '../../showcases/lyonJS/GreenScreen';

import {DefaultLayerSchema} from './layers.types';
import {LayerTitle} from './LayerTitle';

export const LayerOneSpeaker = ({
	title,
	sponsorLogoUrl,
	primaryColor,
	secondaryColor,
	decorationUrl,
}: z.infer<typeof DefaultLayerSchema>) => {
	return (
		<AbsoluteFill
			style={{backgroundColor: 'white', overflow: 'hidden', gap: '30px'}}
		>
			<BackgroundTriangle
				primaryColor={primaryColor}
				secondaryColor={secondaryColor}
			/>
			{decorationUrl && (
				<Img
					style={{
						zIndex: 1,
						width: 370,
						position: 'absolute',
						bottom: 355,
						right: 0,
					}}
					src={decorationUrl}
				/>
			)}
			<GreenScreen style={{width: '75%'}} />
			<GreenScreen
				style={{
					width: '30%',
					position: 'absolute',
					bottom: 0,
					right: 0,
				}}
			/>
			{title && (
				<LayerTitle
					title={title}
					style={{
						width: 'calc(70% - 30px)',
					}}
				/>
			)}
			{sponsorLogoUrl && (
				<Img
					src={sponsorLogoUrl}
					style={{position: 'absolute', top: 10, right: 20, width: 300}}
				/>
			)}
		</AbsoluteFill>
	);
};
