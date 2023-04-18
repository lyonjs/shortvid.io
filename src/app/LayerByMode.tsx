import React from 'react';
import {LayerMode} from './types/layerMode.types';
import {LayerTwoSpeaker} from '../../remotion/compositions/templates/layers/LayerTwoSpeaker';
import {LayerFullScreen} from '../../remotion/compositions/templates/layers/LayerFullScreen';
import {LayerOneSpeaker} from '../../remotion/compositions/templates/layers/LayerOneSpeaker';

type LayerByModeProps = {
	mode: LayerMode;
	title?: string;
	sponsor?: string;
	primaryColor?: string;
	secondaryColor?: string;
	decoration?: string;
};

const LayerByMode: React.FC<LayerByModeProps> = ({
	mode,
	title,
	sponsor,
	primaryColor,
	secondaryColor,
	decoration,
}) => {
	switch (mode) {
		case 'two':
			return (
				<LayerTwoSpeaker
					title={title}
					sponsorLogoUrl={sponsor}
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					decorationUrl={decoration}
				/>
			);
		case 'full':
			return (
				<LayerFullScreen
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					decorationUrl={decoration}
				/>
			);
		case 'one':
		default:
			return (
				<LayerOneSpeaker
					title={title}
					sponsorLogoUrl={sponsor}
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					decorationUrl={decoration}
				/>
			);
	}
};

export default LayerByMode;
