import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Footer} from '../../../src/app/components/landingPage/Footer';

describe('<Footer />', () => {
	it('should render the component', () => {
		render(<Footer />);

		const logo = screen.getByRole('img', {
			name: 'Shortvid.io monogram',
		});

		const vercelImg = screen.getByRole('img', {
			name: 'Vercel',
		});
		const vercelLink = screen.getByRole('link', {
			name: 'Vercel',
		});

		const themeSwitchButtons = screen.getByRole('radiogroup');

		const footer = screen.getByRole('contentinfo');
		const copyright = screen.getByText(
			'© Copyright 2023 LyonJs - Made with 💜 and JS',
		);

		expect(logo).toBeVisible();

		expect(vercelImg).toBeVisible();
		expect(vercelLink).toBeVisible();

		expect(footer).toBeVisible();
		expect(themeSwitchButtons).toBeVisible();
		expect(copyright).toBeVisible();
	});
});
