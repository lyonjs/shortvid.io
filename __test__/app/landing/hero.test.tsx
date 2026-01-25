import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Hero} from '../../../src/app/components/landingPage/Hero';

describe('<Hero />', () => {
	it('should render the component', () => {
		render(<Hero />);

		const title = screen.getByRole('heading', {
			name: 'Generate event content in seconds, not hours',
		});
		const subTitle = screen.getByRole('heading', {
			name: 'Create videos, images, and PDFs for your conferences and meetups. Open-source, powered by React and Remotion.',
		});

		const editorLink = screen.getByRole('link', {name: 'Try the Editor'});
		const githubLink = screen.getByRole('link', {name: /View on GitHub/i});

		expect(title).toBeVisible();
		expect(subTitle).toBeVisible();
		expect(editorLink).toBeVisible();
		expect(githubLink).toBeVisible();
	});
});
