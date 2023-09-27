import {Composition, Folder, staticFile} from 'remotion';

import {Carousel} from './Carousel';

export const CarouselComposition: React.FC = () => {
	const imageUrls = [
		'https://secure.meetupstatic.com/photos/event/a/9/9/9/highres_511003417.webp',
		'https://secure.meetupstatic.com/photos/event/4/a/c/7/highres_515299143.webp',
		'https://secure.meetupstatic.com/photos/event/a/8/1/1/highres_515983025.webp',
		'https://secure.meetupstatic.com/photos/event/a/8/0/b/highres_515983019.webp',
	];

	const imageDuration = 90;

	return (
		<Folder name="Carousel">
			<Composition
				component={Carousel}
				width={800}
				height={800}
				id="Carousel"
				fps={30}
				durationInFrames={imageUrls.length * imageDuration}
				defaultProps={{
					imageUrls,
					imageDuration,
					logoUrl: staticFile('/images/showcases/lyonjs/lyonjsSquaredLogo.png'),
				}}
				calculateMetadata={(props) => {
					return {
						durationInFrames:
							props.defaultProps.imageDuration *
							props.defaultProps.imageUrls.length,
					};
				}}
			/>
		</Folder>
	);
};
