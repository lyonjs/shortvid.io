import {AbsoluteFill, Sequence} from 'remotion';
import {ImageBackground} from '../components/ImageBackground';
import {LottieAsset} from '../components/LottieAsset';
import {EventTitle} from './EventTitle';
import {Paillettes} from '../components/Paillettes';

export const Event: React.FC<{
	backgroundImg?: string;
	title: string;
	lottieAsset?: string;
	paillettesAsset?: string;
}> = ({
	backgroundImg = 'https://i.pinimg.com/originals/de/0d/19/de0d19d835dd1224c5208701d78bd6e7.jpg',
	title,
	lottieAsset = 'lf20_UDstUT',
	paillettesAsset = 'lf20_tiviyc3p',
}) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			<ImageBackground animated src={backgroundImg} />
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
