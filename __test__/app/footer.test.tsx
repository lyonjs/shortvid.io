import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {Footer} from '../../src/app/Footer';

describe('<Footer />', () => {
	it('should render the component', () => {
		render(<Footer />);

		const logo = screen.getByTitle('Shortvid.io Logo').parentNode;

		const vercelImg = screen.getByRole('img', {
			name: 'Vercel',
		});
		const vercelLink = screen.getByRole('link', {
			name: 'Vercel',
		});

		const footer = screen.getByRole('contentinfo');
		const copyright = screen.getByText(
			'© Copyright 2023 LyonJs - Made with 💜 and JS'
		);

		const themeButtonsGroup = screen.getByRole('radiogroup');

		expect(logo).toBeVisible();

		expect(vercelImg).toBeVisible();
		expect(vercelLink).toBeVisible();

		expect(footer).toBeVisible();

		expect(copyright).toBeVisible();

		expect(themeButtonsGroup).toBeVisible();
	});
});
