import {render, screen} from '@testing-library/react';

import {UseCases} from './UseCases';

describe('<UseCases />', () => {
	it('should render the component with all use cases', () => {
		render(<UseCases />);

		expect(screen.getByText('Built for event organizers')).toBeVisible();
		expect(screen.getByText('Conferences')).toBeVisible();
		expect(screen.getByText('Meetups')).toBeVisible();
		expect(screen.getByText('Associations')).toBeVisible();
	});

	it('should display example tags', () => {
		render(<UseCases />);

		expect(screen.getByText('Devoxx')).toBeVisible();
		expect(screen.getByText('LyonJS')).toBeVisible();
		expect(screen.getByText('GDG')).toBeVisible();
	});
});
