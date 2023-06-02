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
				primary: 'var(--primary)',
				'btn-text': 'var(--button-text)',
				'btn-background': 'var(--button-background)',
			},
		},
	},
	plugins: [],
};
