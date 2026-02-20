import React from 'react';
import {Folder, Still, staticFile} from 'remotion';

import {SHORTVID_ASSET_PATHS, SHORTVID_COLORS} from '../../../theme';

import {LayerFullScreen} from './layers/LayerFullScreen';
import {LayerOneSpeaker} from './layers/LayerOneSpeaker';
import {DefaultLayerSchema, LayerSchema} from './layers/layers.types';
import {LayerTwoSpeaker} from './layers/LayerTwoSpeaker';

export const StreamingComposition: React.FC = () => {
	const defaultSponsorLogoUrl = staticFile(SHORTVID_ASSET_PATHS.logoHorizontal);
	const defaultDecorationUrl = staticFile(SHORTVID_ASSET_PATHS.logo3D);

	return (
		<Folder name="Streamings">
			<Still
				id="LayerFullScreen"
				component={LayerFullScreen}
				schema={LayerSchema}
				width={1920}
				height={1080}
				defaultProps={{
					decorationUrl: defaultDecorationUrl,
					primaryColor: SHORTVID_COLORS.primary,
					secondaryColor: SHORTVID_COLORS.secondary,
				}}
			/>
			<Still
				id="LayerOneSpeaker"
				component={LayerOneSpeaker}
				schema={DefaultLayerSchema}
				width={1920}
				height={1080}
				defaultProps={{
					title: 'Example talk title for this template 🚀',
					sponsorLogoUrl: defaultSponsorLogoUrl,
					decorationUrl: defaultDecorationUrl,
					primaryColor: SHORTVID_COLORS.primary,
					secondaryColor: SHORTVID_COLORS.secondary,
				}}
			/>
			<Still
				id="LayerTwoSpeaker"
				component={LayerTwoSpeaker}
				schema={DefaultLayerSchema}
				defaultProps={{
					title: 'Example talk title for this template 🚀',
					sponsorLogoUrl: defaultSponsorLogoUrl,
					decorationUrl: defaultDecorationUrl,
					primaryColor: SHORTVID_COLORS.primary,
					secondaryColor: SHORTVID_COLORS.secondary,
				}}
				width={1920}
				height={1080}
			/>
		</Folder>
	);
};
