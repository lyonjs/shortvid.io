import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Hero} from '../../../src/app/components/landingPage/Hero';

describe('<Hero />', () => {
	it('should render the component', () => {
		render(<Hero />);

		const title = screen.getByRole('heading', {
			name: 'Simplify your social media communications',
		});
		const subTitle = screen.getByRole('heading', {
			name: 'Choose among various templates to customise with your assets and contents. Then generate and download your video in one click',
		});

		expect(title).toBeVisible();
		expect(subTitle).toBeVisible();
	});
});
