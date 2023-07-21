import React from 'react';
import {Folder, Still} from 'remotion';

import {LayerFullScreen} from './LayerFullScreen';
import {LayerOneSpeaker} from './LayerOneSpeaker';
import {LayerTwoSpeaker} from './LayerTwoSpeaker';

export const LayersComposition: React.FC = () => {
	const defaultSponsorLogoUrl =
		'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg';
	const defaultDecorationUrl =
		'https://user-images.githubusercontent.com/60877626/232909816-ca4e61c0-acb2-469b-95dc-beed0cb6b482.png';

	return (
		<Folder name="Layers">
			<Still
				id="LayerFullScreen"
				component={LayerFullScreen}
				width={1920}
				height={1080}
				defaultProps={{
					decorationUrl: defaultDecorationUrl,
				}}
			/>
			<Still
				id="LayerOneSpeaker"
				component={LayerOneSpeaker}
				width={1920}
				height={1080}
				defaultProps={{
					title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
					sponsorLogoUrl: defaultSponsorLogoUrl,
					decorationUrl: defaultDecorationUrl,
				}}
			/>
			<Still
				id="LayerTwoSpeaker"
				component={LayerTwoSpeaker}
				defaultProps={{
					title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
					sponsorLogoUrl: defaultSponsorLogoUrl,
					decorationUrl: defaultDecorationUrl,
				}}
				width={1920}
				height={1080}
			/>
		</Folder>
	);
};
