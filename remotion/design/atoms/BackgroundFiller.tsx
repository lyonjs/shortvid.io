import React from 'react';
import {Img, staticFile} from 'remotion';
import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../hooks/useLottie';

const LottieBackground: React.FC<{
	lottieAsset: string;
	style?: React.CSSProperties;
}> = ({lottieAsset, style}) => {
	const illustration = useLottie(lottieAsset);

	if (!illustration) {
		return null;
	}
	return (
		<Lottie
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				objectFit: 'cover',
				transform: 'scale(1.1)',
				...style,
			}}
			animationData={illustration}
		/>
	);
};

export const BackgroundFiller: React.FC<{
	imageUrl?: string;
	lottieAssetLink?: string;
	style?: React.CSSProperties;
}> = ({imageUrl, lottieAssetLink, style}) => {
	return (
		<>
			{imageUrl && (
				<>
					<Img
						src={imageUrl}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							transform: 'scale(1.1)',
							...style,
						}}
					/>
					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							backgroundImage:
								'linear-gradient(to top, rgba(12,12,12,1), rgba(255,0,0,0))',
						}}
					/>
				</>
			)}
			{lottieAssetLink && (
				<LottieBackground lottieAsset={lottieAssetLink} style={style} />
			)}
		</>
	);
};
