import {render, screen} from '@testing-library/react';

import {HowItWorks} from './HowItWorks';

describe('<HowItWorks />', () => {
	it('should render the component with all steps', () => {
		render(<HowItWorks />);

		expect(screen.getByText('How it works')).toBeVisible();
		expect(screen.getByText('1')).toBeVisible();
		expect(screen.getByText('2')).toBeVisible();
		expect(screen.getByText('3')).toBeVisible();
		expect(screen.getByText('Choose a template')).toBeVisible();
		expect(screen.getByText('Customize your content')).toBeVisible();
		expect(screen.getByText('Generate & download')).toBeVisible();
	});
});
