import {render, screen} from '@testing-library/react';
import {Footer} from '../../src/app/Footer';

it('Loads and display the component "Footer"', () => {
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

	expect(logo).toBeTruthy();

	expect(vercelImg).toBeTruthy();
	expect(vercelLink).toBeTruthy();

	expect(footer).toBeTruthy();
	expect(footer.textContent).toEqual(
		'© Copyright 2023 LyonJs - Made with 💛 and JS'
	);
});
