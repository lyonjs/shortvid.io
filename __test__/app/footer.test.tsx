import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {Footer} from '../../src/app/Footer';

describe('Loads and display the component "Footer"', () => {
	it('render the component', () => {
		render(<Footer />);

		const logo = screen.getByRole('img', {
			name: 'Shortvid.io logo',
		});

		const vercelImg = screen.getByRole('img', {
			name: 'Vercel',
		});
		const vercelLink = screen.getByRole('link', {
			name: 'Vercel',
		});

		const footer = screen.getByRole('contentinfo');

		expect(logo).toBeVisible();

		expect(vercelImg).toBeVisible();
		expect(vercelLink).toBeVisible();

		expect(footer).toBeVisible();
		expect(footer.textContent).toEqual(
			'© Copyright 2023 LyonJs - Made with 💛 and JS'
		);
	});
});
