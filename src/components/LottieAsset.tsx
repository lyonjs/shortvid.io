import {Lottie} from '@remotion/lottie';
import {useLottie} from './hooks/useLottie';
import {AbsoluteFill} from 'remotion';
import {CSSProperties} from 'react';

export const LottieAsset: React.FC<{
	assetLink?: string;
	style?: CSSProperties;
}> = ({assetLink, style}) => {
	const illustration = useLottie(assetLink);

	if (!illustration) {
		return null;
	}

	return (
		<AbsoluteFill style={{display: 'flex', alignItems: 'center'}}>
			<Lottie
				style={{
					filter: 'drop-shadow(0px 0px 2px #000000)',
					color: 'white',
					fill: 'white',
					...style,
				}}
				animationData={illustration}
			/>
		</AbsoluteFill>
	);
};
