import {render, screen} from '@testing-library/react';

import {Hero} from './Hero';

describe('<Hero />', () => {
	it('should render the component', () => {
		render(<Hero />);

		const title = screen.getByRole('heading', {
			name: 'Generate event content in seconds, not hours',
		});
		const subTitle = screen.getByRole('heading', {
			name: /Create videos, images, and PDFs/i,
		});

		const editorLink = screen.getByRole('link', {name: 'Try the Editor'});
		const githubLink = screen.getByRole('link', {name: /View on GitHub/i});

		expect(title).toBeVisible();
		expect(subTitle).toBeVisible();
		expect(editorLink).toBeVisible();
		expect(githubLink).toBeVisible();
	});
});
