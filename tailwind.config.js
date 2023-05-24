/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: [
				'apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Fira Sans',
				'Droid Sans',
				'Helvetica Neue',
				'sans-serif',
			],
		},
		extend: {
			animation: {
				popup: 'popup 2s ease-in',
			},
			keyframes: {
				popup: {
					'0%': {top: '-1rem'},
					'50%': {opacity: 1},
					'100%': {top: '-4rem', opacity: 0},
				},
			},
			colors: {
				'purple-50': 'var(--purple-50)',
				'purple-100': 'var(--purple-100)',
				'purple-200': 'var(--purple-200)',
				'purple-300': 'var(--purple-300)',
				'purple-400': 'var(--purple-400)',
				'purple-500': 'var(--purple-500)',
				'purple-600': 'var(--purple-600)',
				'purple-700': 'var(--purple-700)',
				'purple-800': 'var(--purple-800)',
				'purple-900': 'var(--purple-900)',
			},
		},
	},
	plugins: [],
};
