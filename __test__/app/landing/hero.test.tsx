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
		const ctaButtons = screen.getAllByRole('link');

		expect(title).toBeVisible();
		expect(subTitle).toBeVisible();
		expect(ctaButtons.length).toEqual(2);
		expect(ctaButtons[0]).toHaveClass('btnSecondary');
		expect(ctaButtons[1]).toHaveClass('btnText');
	});
});
