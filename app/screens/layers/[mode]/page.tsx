'use client';

import {Player} from '@remotion/player';
import {useSearchParams} from 'next/navigation';
import LayerByMode from '../../../../src/app/LayerByMode';
import {LayerMode} from '../../../../src/types/layerMode.types';

export default function LayerScreenMode({params}: {params: {mode: string}}) {
	const mode = params.mode as LayerMode;
	const searchParams =
		useSearchParams() || new URLSearchParams(window.location.search);
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
}
