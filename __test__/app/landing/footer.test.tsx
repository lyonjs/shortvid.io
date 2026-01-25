import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Footer} from '../../../src/app/components/landingPage/Footer';

describe('<Footer />', () => {
	it('should render the component', () => {
		render(<Footer />);

		const logo = screen.getByRole('img', {
			name: 'Shortvid.io monogram',
		});

		const githubLink = screen.getByRole('link', {name: 'GitHub'});
		const discussionsLink = screen.getByRole('link', {name: 'Discussions'});
		const contributingLink = screen.getByRole('link', {name: 'Contributing'});
		const remotionLink = screen.getByRole('link', {
			name: 'Powered by Remotion',
		});

		const footer = screen.getByRole('contentinfo');
		const copyright = screen.getByText(
			'© Copyright 2024 Shortvid.io - Made with 💜 and React',
		);

		expect(logo).toBeVisible();
		expect(githubLink).toBeVisible();
		expect(discussionsLink).toBeVisible();
		expect(contributingLink).toBeVisible();
		expect(remotionLink).toBeVisible();
		expect(footer).toBeVisible();
		expect(copyright).toBeVisible();
	});
});
