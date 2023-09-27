import {AbsoluteFill, Img, Sequence} from 'remotion';

import {CarouselImage} from './CarouselImage';

export type CarouselType = {
	imageUrls: string[];
	logoUrl?: string;
	imageDuration: number;
};
export function Carousel({imageUrls, logoUrl, imageDuration}: CarouselType) {
	const delayShift = imageDuration * 0.25;

	return (
		<AbsoluteFill style={{overflow: 'hidden', background: 'black'}}>
			{imageUrls.map((image, index) => {
				return (
					<Sequence
						from={index * (imageDuration - delayShift)}
						key={image}
						durationInFrames={
							index === imageUrls.length - 1 ? undefined : imageDuration
						}
						name={`Image number ${index}`}
					>
						<CarouselImage
							imageUrl={image}
							noAnimation={index === imageUrls.length - 1}
							imageDuration={imageDuration}
						/>
					</Sequence>
				);
			})}
			{logoUrl && (
				<Img
					src={logoUrl}
					style={{
						position: 'absolute',
						right: '20px',
						bottom: '20px',
						height: '100px',
					}}
				/>
			)}
		</AbsoluteFill>
	);
}
