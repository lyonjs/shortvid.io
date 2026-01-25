import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Partners} from '../../../src/app/components/landingPage/Partners';
import {PARTNERS} from '../../../src/data/config/landingPageConfig';

describe('<Partners />', () => {
	it('should render the component', () => {
		render(<Partners />);

		const sectionTitle = screen.getByRole('heading', {
			name: 'They trust us',
		});

		const partners = screen.getAllByRole('link');

		const pictures = screen.getAllByRole('img');

		expect(sectionTitle).toBeVisible();

		expect(partners.length).toEqual(5);

		partners.map((partner, id) => {
			expect(partner).toBeVisible();
			expect(partner).toHaveProperty('href', PARTNERS[id].url);
			expect(pictures[id]).toBeVisible();
		});
	});
});
