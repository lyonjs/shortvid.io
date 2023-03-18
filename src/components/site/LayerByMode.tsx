import React from 'react';
import {LayerMode} from '../../types/layerMode.types';
import {LayerTwoSpeaker} from '../../conference/lyonJS/LayerTwoSpeaker';
import {LayerFullScreen} from '../../conference/lyonJS/LayerFullScreen';
import {LayerOneSpeaker} from '../../conference/lyonJS/LayerOneSpeaker';

const LayerByMode: React.FC<{
	mode: LayerMode;
	title: string;
	sponsor: string;
}> = ({mode, title, sponsor}) => {
	switch (mode) {
		case 'two':
			return <LayerTwoSpeaker title={title} sponsorLogoUrl={sponsor} />;
		case 'full':
			return <LayerFullScreen />;
		case 'one':
		default:
			return <LayerOneSpeaker title={title} sponsorLogoUrl={sponsor} />;
	}
};

export default LayerByMode;
