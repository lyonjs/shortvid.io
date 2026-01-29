import {render, screen} from '@testing-library/react';

import {PARTNERS} from '../../../data/config/landingPageConfig';

import {Partners} from './Partners';

describe('<Partners />', () => {
	it('should render the component', () => {
		render(<Partners />);

		const sectionTitle = screen.getByRole('heading', {
			name: 'They trust us',
		});

		const partners = screen.getAllByRole('link');

		const pictures = screen.getAllByRole('img');

		expect(sectionTitle).toBeVisible();

		expect(partners.length).toEqual(PARTNERS.length);

		partners.map((partner, id) => {
			expect(partner).toBeVisible();
			expect(partner).toHaveProperty('href', PARTNERS[id].url);
			expect(pictures[id]).toBeVisible();
		});
	});
});
