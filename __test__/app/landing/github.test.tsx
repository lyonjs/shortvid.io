import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Github} from '../../../src/app/components/landingPage/Github';

describe('<Github />', () => {
	it('should render the component', () => {
		render(<Github />);

		const sectionTitle = screen.getByRole('heading', {
			name: 'Need a custom template?',
		});

		const discussionInfos = screen.getByText(
			/Want a showcase video for your event/i,
		);
		const forkInfos = screen.getByText(/You can also fork the project/i);

		const githubLink = screen.getByRole('link', {
			name: /Start a discussion/i,
		});

		expect(sectionTitle).toBeVisible();
		expect(discussionInfos).toBeVisible();
		expect(forkInfos).toBeVisible();
		expect(githubLink).toBeVisible();
		expect(githubLink).toHaveProperty(
			'href',
			'https://github.com/lyonjs/shortvid.io/discussions',
		);
	});
});
