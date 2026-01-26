import {fireEvent, render, screen} from '@testing-library/react';

import {Faq} from './Faq';

describe('<Faq />', () => {
	it('should render the FAQ section with title', () => {
		render(<Faq />);

		expect(screen.getByText('Frequently Asked Questions')).toBeVisible();
	});

	it('should display all FAQ questions', () => {
		render(<Faq />);

		expect(screen.getByText('What is Shortvid.io?')).toBeVisible();
		expect(screen.getByText('How can I contribute?')).toBeVisible();
		expect(screen.getByText('Can I self-host Shortvid.io?')).toBeVisible();
	});

	it('should toggle answer visibility when clicking a question', () => {
		render(<Faq />);

		const firstQuestion = screen.getByText('What is Shortvid.io?');
		const button = firstQuestion.closest('button');

		expect(button).toHaveAttribute('aria-expanded', 'false');

		fireEvent.click(button!);

		expect(button).toHaveAttribute('aria-expanded', 'true');

		fireEvent.click(button!);

		expect(button).toHaveAttribute('aria-expanded', 'false');
	});
});
