import {ReactNode} from 'react';
import '../styles/globals.css';

export const metadata = {
	title: 'LyonJS - Social Video Generator',
	description:
		'This application is developed and maintained by the volunteer organizers of the Lyon JS Meetup. It aims to facilitate the generation of video for the social networks of the association.',
	icons: {
		icon: '/lyonjs-squared.png',
	},
	openGraph: {
		type: 'website',
		title: 'LyonJS - Social Video Generator',
		url: 'https://social-video-generator.vercel.app/',
		siteName: 'LyonJS - Social Video Generator',
		description:
			'This application is developed and maintained by the volunteer organizers of the Lyon JS Meetup. It aims to facilitate the generation of video for the social networks of the association.',
		images: ['https://social-video-generator.vercel.app/screenshot.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'LyonJS - Social Video Generator',
		creator: '@Lyonjs',
		description:
			'This application is developed and maintained by the volunteer organizers of the Lyon JS Meetup. It aims to facilitate the generation of video for the social networks of the association.',
		images: ['https://social-video-generator.vercel.app/screenshot.png'],
	},
	robots: {
		index: true,
	},
};

export default function Layout({children}: {children: ReactNode}) {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
