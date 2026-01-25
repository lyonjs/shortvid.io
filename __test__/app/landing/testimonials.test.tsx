import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {Testimonials} from '../../../src/app/components/landingPage/Testimonials';

describe('<Testimonials />', () => {
	it('should render the component with testimonials', () => {
		render(<Testimonials />);

		expect(screen.getByText('What organizers say')).toBeVisible();
		expect(screen.getByText('DevFest Nantes')).toBeVisible();
		expect(screen.getByText('Volcamp')).toBeVisible();
		expect(screen.getByText('Camping des Speakers')).toBeVisible();
	});
});
