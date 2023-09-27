import {Carousel} from '../../../../remotion/compositions/templates/carousel/Carousel';
import {CompositionProps} from '../compositionsConfig';

export const CarouselConfig: CompositionProps = {
	compositionName: 'Carousel',
	component: Carousel,
	width: 800,
	height: 800,
	durationInFrames: 300,
	frameForThumbnail: 90,
	defaultProps: {
		imageUrls: [
			'https://secure.meetupstatic.com/photos/event/a/9/9/9/highres_511003417.webp',
			'https://secure.meetupstatic.com/photos/event/4/a/c/7/highres_515299143.webp',
			'https://secure.meetupstatic.com/photos/event/a/8/1/1/highres_515983025.webp',
			'https://secure.meetupstatic.com/photos/event/a/8/0/b/highres_515983019.webp',
		],
		imageDuration: 90,
		logoUrl: '/images/showcases/lyonjs/lyonjsSquaredLogo.png',
	},
};
