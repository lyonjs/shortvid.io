import {AbsoluteFill, Img, Sequence} from 'remotion';
import {z} from 'zod';

import {carouselSchema} from './carousel.types';
import {CarouselImage} from './CarouselImage';

export function Carousel({
	imageUrls,
	logoUrl,
	imageDuration,
}: z.infer<typeof carouselSchema>) {
	const delayShift = imageDuration * 0.2;

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
