const SITE_URL = 'https://shortvid.io';

const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'Shortvid.io',
	url: SITE_URL,
	description:
		'Open-source platform to generate videos, images, and PDFs programmatically for conferences, meetups, and associations.',
};

const softwareApplicationSchema = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	name: 'Shortvid.io',
	url: SITE_URL,
	applicationCategory: 'MultimediaApplication',
	operatingSystem: 'Web',
	offers: {
		'@type': 'Offer',
		price: '0',
		priceCurrency: 'USD',
	},
	description:
		'Generate videos, images, and PDFs for tech events using React and Remotion. Create speaker announcements, schedules, and promotional content.',
	featureList: [
		'Video generation (MP4, GIF)',
		'Image generation (JPEG, PNG)',
		'PDF export',
		'Customizable templates',
		'Speaker announcements',
		'Event schedules',
	],
	screenshot: `${SITE_URL}/screenshot.png`,
	softwareHelp: {
		'@type': 'WebPage',
		url: 'https://github.com/lyonjs/shortvid.io',
	},
	isAccessibleForFree: true,
	license: 'https://opensource.org/licenses/MIT',
};

const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Shortvid.io',
	url: SITE_URL,
	logo: `${SITE_URL}/branding/monogram.svg`,
	sameAs: ['https://github.com/lyonjs/shortvid.io', 'https://twitter.com/shortvid_io'],
	foundingDate: '2023',
	description: 'Open-source project for generating event content, built by the LyonJS community.',
};

export const JsonLd = () => {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(websiteSchema),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(softwareApplicationSchema),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationSchema),
				}}
			/>
		</>
	);
};
