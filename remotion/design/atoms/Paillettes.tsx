import {LottieAsset} from './LottieAsset';

export const Paillettes: React.FC<{assetLink: string}> = ({assetLink}) => {
	return (
		<LottieAsset
			assetLink={assetLink}
			style={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				width: '100%',
			}}
		/>
	);
};
