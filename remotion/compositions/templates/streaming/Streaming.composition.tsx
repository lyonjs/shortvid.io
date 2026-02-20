import React from 'react';
import {Folder, Still} from 'remotion';

import {LayerFullScreen} from './LayerFullScreen';
import {LayerOneSpeaker} from './LayerOneSpeaker';
import {DefaultLayerSchema, LayerSchema} from './layers.types';
import {LayerTwoSpeaker} from './LayerTwoSpeaker';

export const StreamingComposition: React.FC = () => {
	const defaultSponsorLogoUrl =
		'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg';
	const defaultDecorationUrl =
		'https://user-images.githubusercontent.com/60877626/232909816-ca4e61c0-acb2-469b-95dc-beed0cb6b482.png';

	return (
		<Folder name="Streaming">
			<Still
				id="LayerFullScreen"
				component={LayerFullScreen}
				schema={LayerSchema}
				width={1920}
				height={1080}
				defaultProps={{
					decorationUrl: defaultDecorationUrl,
					primaryColor: '#323330',
					secondaryColor: '#efdb4f',
				}}
			/>
			<Still
				id="LayerOneSpeaker"
				component={LayerOneSpeaker}
				schema={DefaultLayerSchema}
				width={1920}
				height={1080}
				defaultProps={{
					title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
					sponsorLogoUrl: defaultSponsorLogoUrl,
					decorationUrl: defaultDecorationUrl,
					primaryColor: '#323330',
					secondaryColor: '#efdb4f',
				}}
			/>
			<Still
				id="LayerTwoSpeaker"
				component={LayerTwoSpeaker}
				schema={DefaultLayerSchema}
				defaultProps={{
					title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
					sponsorLogoUrl: defaultSponsorLogoUrl,
					decorationUrl: defaultDecorationUrl,
					primaryColor: '#323330',
					secondaryColor: '#efdb4f',
				}}
				width={1920}
				height={1080}
			/>
		</Folder>
	);
};
