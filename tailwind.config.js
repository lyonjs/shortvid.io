/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
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
		},
	},
	plugins: [],
};
