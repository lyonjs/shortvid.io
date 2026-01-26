import {ReactNode} from 'react';

import {JsonLd} from '../src/app/components/JsonLd';

import '../styles/globals.css';

export const metadata = {
	title: 'Shortvid.io - Generate Videos & Images for Events',
	description:
		'Open-source platform to generate videos, images, and PDFs programmatically for conferences, meetups, and associations. Built on Remotion.',
	icons: {
		icon: '/branding/monogram.svg',
	},
	openGraph: {
		type: 'website',
		title: 'Shortvid.io - Generate Videos & Images for Events',
		url: 'https://shortvid.io/',
		siteName: 'Shortvid.io',
		description:
			'Open-source platform to generate videos, images, and PDFs programmatically for conferences, meetups, and associations. Built on Remotion.',
		images: ['https://shortvid.io/screenshot.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Shortvid.io - Generate Videos & Images for Events',
		creator: '@shortvid_io',
		description:
			'Open-source platform to generate videos, images, and PDFs programmatically for conferences, meetups, and associations. Built on Remotion.',
		images: ['https://shortvid.io/screenshot.png'],
	},
	robots: {
		index: true,
	},
};

export default function Layout({children}: {children: ReactNode}) {
	return (
		<html>
			<head>
				<JsonLd />
			</head>
			<body>{children}</body>
		</html>
	);
}
