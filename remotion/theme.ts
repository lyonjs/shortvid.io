export const SHORTVID_COLORS = {
	primary: '#240046', // deep purple — backgrounds, main elements
	secondary: '#c77dff', // bright lavender — accents, highlights
	brand: '#56277d', // logo brand purple
	light: '#f1dcff', // pale purple — decorative elements
	dark: '#0e001c', // very dark purple — deep backgrounds
	white: '#ffffff',
} as const;

export const SHORTVID_GRADIENTS = {
	primary: `linear-gradient(135deg, ${SHORTVID_COLORS.dark} 0%, ${SHORTVID_COLORS.primary} 60%, ${SHORTVID_COLORS.brand} 100%)`,
} as const;

// Plain paths — call staticFile() at render time in components/compositions
export const SHORTVID_ASSET_PATHS = {
	logo: '/branding/full-logo.svg',
	logoHorizontal: '/branding/full-logo-with-mono.svg',
	logoVertical: '/branding/full-logo-with-mono-vertical.svg',
	monogram: '/branding/monogram.svg',
	logo3D: '/branding/3D-logo.png',
	defaultAvatar: '/images/common/defaultAvatar.svg',
	meetupLogo: '/images/placeholders/meetupLogo.png',
	backgroundImg: '/images/placeholders/background.jpg',
} as const;
