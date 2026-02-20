import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {z} from 'zod';

import {SHORTVID_ASSET_PATHS} from '../../../../theme';
import {BackgroundTriangle} from '../../../../design/atoms/BackgroundTriangle';
import {GreenScreen} from '../../../../design/atoms/GreenScreen';

import {DefaultLayerSchema} from './layers.types';
import {LayerTitle} from './LayerTitle';

export const LayerTwoSpeaker = ({
	title,
	sponsorLogoUrl,
	primaryColor,
	secondaryColor,
	decorationUrl,
}: z.infer<typeof DefaultLayerSchema>) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<BackgroundTriangle primaryColor={primaryColor} secondaryColor={secondaryColor} />
			<Img
				style={{
					zIndex: 1,
					width: 250,
					position: 'absolute',
					bottom: 20,
					right: 20,
				}}
				src={decorationUrl || staticFile(SHORTVID_ASSET_PATHS.logo3D)}
			/>
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
				<Img src={sponsorLogoUrl} style={{position: 'absolute', top: 10, right: 20, width: 300}} />
			)}
		</AbsoluteFill>
	);
};
