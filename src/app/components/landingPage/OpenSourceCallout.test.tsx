import {render, screen} from '@testing-library/react';

import {OpenSourceCallout} from './OpenSourceCallout';

describe('<OpenSourceCallout />', () => {
	it('should render the component with links', () => {
		render(<OpenSourceCallout />);

		expect(screen.getByText('Open Source & Built on Remotion')).toBeVisible();

		const githubLink = screen.getByRole('link', {name: /View on GitHub/i});
		const remotionLink = screen.getByRole('link', {name: /Learn Remotion/i});

		expect(githubLink).toBeVisible();
		expect(githubLink).toHaveAttribute('href', 'https://github.com/lyonjs/shortvid.io');

		expect(remotionLink).toBeVisible();
		expect(remotionLink).toHaveAttribute('href', 'https://www.remotion.dev/docs');
	});
});
