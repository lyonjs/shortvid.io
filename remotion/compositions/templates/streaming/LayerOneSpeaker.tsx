import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {z} from 'zod';

import {SHORTVID_ASSET_PATHS} from '../../../theme';
import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';
import {GreenScreen} from '../../../design/atoms/GreenScreen';

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
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden', gap: '30px'}}>
			<BackgroundTriangle primaryColor={primaryColor} secondaryColor={secondaryColor} />
			<Img
				style={{
					zIndex: 1,
					width: 370,
					position: 'absolute',
					bottom: 380,
					right: 50,
				}}
				src={decorationUrl || staticFile(SHORTVID_ASSET_PATHS.logo3D)}
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
			{title && (
				<LayerTitle
					title={title}
					style={{
						width: 'calc(70% - 30px)',
					}}
				/>
			)}
			{sponsorLogoUrl && (
				<Img src={sponsorLogoUrl} style={{position: 'absolute', top: 10, right: 20, width: 300}} />
			)}
		</AbsoluteFill>
	);
};
