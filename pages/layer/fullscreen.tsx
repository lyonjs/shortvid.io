import {Player} from '@remotion/player';
import {LayerOneSpeaker} from '../../src/conference/lyonJS/LayerOneSpeaker';
import {LayerTwoSpeaker} from '../../src/conference/lyonJS/LayerTwoSpeaker';
import {LayerFullScreen} from '../../src/conference/lyonJS/LayerFullScreen';
import React from 'react';
import {useSearchParams} from 'next/navigation';

type LayerMode = 'one' | 'two' | 'full';

const LayerByMode: React.FC<{mode: LayerMode; title: string}> = ({
	mode,
	title,
}) => {
	switch (mode) {
		case 'two':
			return <LayerTwoSpeaker title={title} />;
		case 'full':
			return <LayerFullScreen />;
		case 'one':
		default:
			return <LayerOneSpeaker title={title} />;
	}
};

const Fullscreen = () => {
	const params = useSearchParams();
	const title = params.get('title') || '';
	const mode = params.get('mode') as LayerMode;

	console.log('render');

	return (
		<Player
			style={{
				width: '100%',
				aspectRatio: '16 / 9',
			}}
			durationInFrames={1}
			compositionWidth={1920}
			compositionHeight={1080}
			fps={30}
			inputProps={{title, mode}}
			component={LayerByMode}
		/>
	);
};

Fullscreen.noLayout = true;

export default Fullscreen;
