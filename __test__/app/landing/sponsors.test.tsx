import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Sponsors} from '../../../src/app/components/landingPage/Sponsors';

describe('<Sponsors />', () => {
	it('should render the component', () => {
		render(<Sponsors />);

		const sectionTitle = screen.getByRole('heading', {
			name: 'Our Sponsors',
		});

		const sponsors = screen.getAllByRole('link');

		const pictures = screen.getAllByRole('img');

		expect(sectionTitle).toBeVisible();

		expect(sponsors.length).toEqual(2);

		sponsors.map((sponsor, id) => {
			expect(sponsor).toBeVisible();
			expect(pictures[id]).toBeVisible();
		});

		expect(sponsors[0]).toHaveProperty('href', 'https://vercel.com/home');
		expect(sponsors[1]).toHaveProperty('href', 'https://www.clever-cloud.com/');
	});
});
