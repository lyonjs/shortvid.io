import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Partners} from '../../../src/app/components/landingPage/Partners';

describe('<Partners />', () => {
	it('should render the component', () => {
		render(<Partners />);

		const sectionTitle = screen.getByRole('heading', {
			name: 'They worked with us',
		});

		const partners = screen.getAllByRole('link');

		const pictures = screen.getAllByRole('img');

		expect(sectionTitle).toBeVisible();

		expect(partners.length).toEqual(4);

		partners.map((partner, id) => {
			expect(partner).toBeVisible();
			expect(pictures[id]).toBeVisible();
		});

		expect(partners[0]).toHaveProperty('href', 'https://touraine.tech/');
		expect(partners[1]).toHaveProperty('href', 'https://mixitconf.org/');
		expect(partners[2]).toHaveProperty('href', 'https://camping-speakers.fr/');
		expect(partners[3]).toHaveProperty('href', 'https://www.volcamp.io/');
	});
});
