import React from 'react';

import {AbsoluteFill, Img} from 'remotion';

import {DefaultLayerProps} from './layers.types';
import {LayerTitle} from './LayerTitle';
import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';
import {GreenScreen} from '../../showcases/lyonJS/GreenScreen';

export const LayerTwoSpeaker: React.FC<DefaultLayerProps> = ({
	title,
	sponsorLogoUrl,
	primaryColor,
	secondaryColor,
	decorationUrl,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<BackgroundTriangle
				primaryColor={primaryColor}
				secondaryColor={secondaryColor}
			/>
			{decorationUrl && (
				<Img
					style={{
						zIndex: 1,
						width: 250,
						position: 'absolute',
						bottom: 0,
						right: 0,
					}}
					src={decorationUrl}
				/>
			)}
			<div
				style={{
					zIndex: 2,
					display: 'inline-flex',
					paddingTop: 150,
				}}
			>
				<GreenScreen style={{flex: 1, margin: 20}} />
				<GreenScreen style={{flex: 1, margin: 20}} />
			</div>
			{title && (
				<div
					style={{
						zIndex: 2,
						flex: 1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '70%',
					}}
				>
					<LayerTitle title={title} />
				</div>
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
