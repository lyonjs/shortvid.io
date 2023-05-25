import {ReactNode} from 'react';
import '../styles/globals.css';

export const metadata = {
	title: 'Shortvid.io',
	description:
		'This application is developed and maintained by the volunteer organizers of the Lyon JS Meetup. It aims to facilitate the generation of video for the social networks of the association.',
	icons: {
		icon: '/Monogram-white.svg',
	},
	openGraph: {
		type: 'website',
		title: 'Shortvid.io',
		url: 'https://shortvid.io/',
		siteName: 'Shortvid.io',
		description:
			'This application is developed and maintained by the volunteer organizers of the Lyon JS Meetup. It aims to facilitate the generation of video for the social networks of the association.',
		images: ['https://shortvid.io/screenshot.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Shortvid.io',
		creator: '@Lyonjs',
		description:
			'This application is developed and maintained by the volunteer organizers of the Lyon JS Meetup. It aims to facilitate the generation of video for the social networks of the association.',
		images: ['https://shortvid.io/screenshot.png'],
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
