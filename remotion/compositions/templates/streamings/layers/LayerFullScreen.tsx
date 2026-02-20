import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {z} from 'zod';

import {SHORTVID_ASSET_PATHS} from '../../../../theme';
import {BackgroundTriangle} from '../../../../design/atoms/BackgroundTriangle';
import {GreenScreen} from '../../../../design/atoms/GreenScreen';

import {LayerSchema} from './layers.types';

export const LayerFullScreen = ({
	primaryColor,
	secondaryColor,
	decorationUrl,
}: z.infer<typeof LayerSchema>) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<BackgroundTriangle primaryColor={primaryColor} secondaryColor={secondaryColor} />
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
					width: 250,
					position: 'absolute',
					bottom: 20,
					right: 20,
				}}
				src={decorationUrl || staticFile(SHORTVID_ASSET_PATHS.logo3D)}
			/>
		</AbsoluteFill>
	);
};
