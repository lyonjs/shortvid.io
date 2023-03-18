import React from 'react';
import {LayerMode} from '../../src/types/layerMode.types';
import {useSearchParams} from 'next/navigation';
import {Player} from '@remotion/player';
import LayerByMode from '../../src/components/site/LayerByMode';

const LayerDisplayMode = ({mode}: Record<string, LayerMode>) => {
	const searchParams = useSearchParams();
	const title = searchParams.get('title') || '';
	const sponsor = searchParams.get('sponsor') || '';

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
			inputProps={{title, mode, sponsor}}
			component={LayerByMode}
		/>
	);
};

export async function getStaticPaths() {
	return {
		paths: [
			{params: {mode: 'one'}},
			{params: {mode: 'two'}},
			{params: {mode: 'full'}},
		],
		fallback: false,
	};
}

export async function getStaticProps({params}: {params: {mode: string}}) {
	return {
		props: {
			mode: params.mode,
		},
	};
}

LayerDisplayMode.noLayout = true;
export default LayerDisplayMode;
