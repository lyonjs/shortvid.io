import {render, screen} from '@testing-library/react';

import {Features} from './Features';

describe('<Features />', () => {
	it('should render the component with all features', () => {
		render(<Features />);

		expect(screen.getByText('What can you create?')).toBeVisible();
		expect(screen.getByText('Videos')).toBeVisible();
		expect(screen.getByText('Images')).toBeVisible();
		expect(screen.getByText('PDF Documents')).toBeVisible();
		expect(screen.getByText('Customizable Templates')).toBeVisible();
	});
});
