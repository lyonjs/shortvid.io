export const FEATURES = [
	{
		title: 'Video Templates',
		description: 'Generate MP4 videos for speaker announcements, talk reveals, and event teasers',
		icon: 'mdi:video',
		examples: ['Speaker announcements', 'Talk teasers', 'Sponsor showcases'],
	},
	{
		title: 'Static Images',
		description: 'Create thumbnails, posters, and social media graphics in JPEG/PNG',
		icon: 'mdi:image',
		examples: ['Event posters', 'Social thumbnails', 'Speaker cards'],
	},
	{
		title: 'OBS Layouts',
		description: 'Design stream overlays and waiting screens for live broadcasts',
		icon: 'mdi:broadcast',
		examples: ['Stream overlays', 'Waiting screens', 'Lower thirds'],
	},
	{
		title: 'PDF Documents',
		description: 'Export printable PDFs for schedules, signage, and LinkedIn carousels',
		icon: 'mdi:file-pdf-box',
		examples: ['Event schedules', 'LinkedIn carousels', 'Printed signage'],
	},
];

export const USE_CASES = [
	{
		title: 'Conferences',
		description: 'Generate speaker announcements, schedules, and sponsor showcases',
		examples: ['Devoxx', 'DevFest Nantes', 'MiXiT', 'Tourraine Tech'],
		emoji: '🎤',
	},
	{
		title: 'Meetups',
		description: 'Create engaging content for local tech communities',
		examples: ['LyonJS', 'Human Talk'],
		emoji: '👥',
	},
	{
		title: 'Associations',
		description: 'Produce materials for tech communities and organizations',
		examples: ['GDG'],
		emoji: '🤝',
	},
];

export const HOW_IT_WORKS = [
	{
		step: 1,
		title: 'Choose a template',
		description: 'Browse our collection of ready-to-use templates designed for events',
	},
	{
		step: 2,
		title: 'Customize your content',
		description: 'Add your logos, colors, speaker photos, and event details',
	},
	{
		step: 3,
		title: 'Generate & download',
		description: 'Export your content as video, image, or PDF in seconds',
	},
];

export const PARTNERS = [
	{
		name: 'Touraine Tech',
		logo: '/images/app/partners/light/touraineTechLogo.svg',
		logoDark: '/images/app/partners/dark/touraineTechLogo.svg',
		url: 'https://touraine.tech/',
	},
	{
		name: 'Mixit',
		logo: '/images/app/partners/light/mixitLogo.svg',
		logoDark: '/images/app/partners/dark/mixitLogo.svg',
		url: 'https://mixitconf.org/',
	},
	{
		name: 'Camping des Speakers',
		logo: '/images/showcases/campingDesSpeakers/campingDesSpeakersLogo.png',
		logoDark: '/images/showcases/campingDesSpeakers/campingDesSpeakersLogo.png',
		url: 'https://camping-speakers.fr/',
	},
	{
		name: 'Devfest Nantes',
		logo: '/images/showcases/devfestNantes/2023/logo-devfest-mgm_transparent.svg',
		logoDark: '/images/showcases/devfestNantes/2023/logo-devfest-mgm_transparent.svg',
		url: 'https://devfest.gdgnantes.com/',
	},
	{
		name: 'Volcamp',
		logo: '/images/showcases/volcamp/volcampText.svg',
		logoDark: '/images/showcases/volcamp/volcampText.svg',
		url: 'https://www.volcamp.io/',
	},
	{
		name: 'DevFest Lille',
		logo: '/images/showcases/devfestLille/logo-devfest-lille.svg',
		logoDark: '/images/showcases/devfestLille/logo-devfest-lille.svg',
		url: 'https://devfest.gdglille.org/',
	},
	{
		name: 'BDX I/O',
		logo: '/images/showcases/bdxio/logo.png',
		logoDark: '/images/showcases/bdxio/logo.png',
		url: 'https://www.bdxio.fr/',
	},
	{
		name: 'DevFest Strasbourg',
		logo: '/images/showcases/devfestStrasbourg/2024/logo.png',
		logoDark: '/images/showcases/devfestStrasbourg/2024/logo.png',
		url: 'https://devfest.gdgstrasbourg.fr/',
	},
	{
		name: 'AlpesCraft',
		logo: '/images/showcases/alpescraft/alpescraftLogo.png',
		logoDark: '/images/showcases/alpescraft/alpescraftLogo.png',
		url: 'https://www.alpescraft.fr/',
	},
	{
		name: 'SunnyTech',
		logo: '/images/showcases/sunnytech/sunnytechLogo.png',
		logoDark: '/images/showcases/sunnytech/sunnytechLogo.png',
		url: 'https://sunny-tech.io/',
	},
];

export const FAQ = [
	{
		question: 'What is Shortvid.io?',
		answer:
			'Shortvid.io is an open-source platform that generates videos, images, and PDFs for tech events like conferences and meetups. It uses React and Remotion to create professional content programmatically.',
	},
	{
		question: 'How can I add my own event templates?',
		answer:
			'You can contribute by forking our GitHub repository and creating new templates in the showcases directory. Check our contribution guide for detailed instructions on adding your event branding.',
	},
	{
		question: 'What technologies does it use?',
		answer:
			'Shortvid.io is built with Next.js for the web app and Remotion for video generation. It uses React components to create videos, which are then rendered using ffmpeg.',
	},
	{
		question: 'Can I self-host Shortvid.io?',
		answer:
			'Absolutely! You can deploy Shortvid.io on your own infrastructure using Docker. The repository includes Docker configurations for easy deployment.',
	},
	{
		question: 'How can I contribute?',
		answer:
			'We welcome contributions! You can add new templates, fix bugs, improve documentation, or suggest features. Visit our GitHub repository to get started.',
	},
];
