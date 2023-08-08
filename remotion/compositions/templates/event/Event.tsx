import {AbsoluteFill, Sequence} from 'remotion';

import {loadGoogleFont} from '../../../../src/app/utils/loadFont';
import {LottieAsset} from '../../../design/atoms/LottieAsset';
import {Paillettes} from '../../../design/atoms/Paillettes';

import {EventBackground} from './EventBackground';
import {EventTitle} from './EventTitle';

export type EventProps = {
	backgroundImg?: string;
	title: string;
	lottieAsset?: string;
	paillettesAsset?: string;
	fontFamily?: string;
};

export const Event: React.FC<EventProps> = ({
	backgroundImg = 'https://i.pinimg.com/originals/de/0d/19/de0d19d835dd1224c5208701d78bd6e7.jpg',
	title,
	lottieAsset = 'lf20_UDstUT',
	paillettesAsset = 'lf20_tiviyc3p',
	fontFamily = 'Bangers',
}) => {
	loadGoogleFont(fontFamily);

	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				fontFamily,
			}}
		>
			<Sequence name="Background">
				<EventBackground backgroundImg={backgroundImg} />
			</Sequence>
			<Sequence from={50} durationInFrames={130} name="Paillette">
				<Paillettes assetLink={paillettesAsset} />
			</Sequence>

			<Sequence from={40} durationInFrames={140} name="Lottie Icon">
				<LottieAsset assetLink={lottieAsset} />
			</Sequence>

			<Sequence from={50} durationInFrames={130} name="Event title">
				<EventTitle title={title} />
			</Sequence>
		</AbsoluteFill>
	);
};
