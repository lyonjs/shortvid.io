import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Github} from '../../../src/app/components/landingPage/Github';

describe('<Github />', () => {
	it('should render the component', () => {
		render(<Github />);

		const sectionTitle = screen.getByRole('heading', {
			name: 'Open Github discussion',
		});

		const discussionInfos = screen.getByText(
			'If you would like a showcase video for your event or if you have an idea of a new template, we can create them! All you have to do is open a discussion on our Github so that we can exchange with you about it.',
		);
		const forkInfos = screen.getByText(
			'You can also create your own template and showcases yourself by forking the project, like that you will have access to all the templates already in the app in addition of your customs ones.',
		);

		const githubLink = screen.getByRole('link', {
			name: 'Open a discussion',
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
