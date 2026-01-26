import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {CaseStudy} from '../../../src/app/components/landingPage/CaseStudy';

describe('<CaseStudy />', () => {
	it('should render the DevFest Nantes case study', () => {
		render(<CaseStudy />);

		expect(screen.getByText('Success Story')).toBeVisible();
		expect(screen.getByText('Trusted by DevFest Nantes')).toBeVisible();
		expect(screen.getByText('GDG Nantes Team')).toBeVisible();
	});

	it('should display highlights', () => {
		render(<CaseStudy />);

		expect(screen.getByText('2000+')).toBeVisible();
		expect(screen.getByText('Attendees')).toBeVisible();
		expect(screen.getByText('100+')).toBeVisible();
		expect(screen.getByText('Sessions')).toBeVisible();
	});

	it('should display features list', () => {
		render(<CaseStudy />);

		expect(screen.getByText('How they use Shortvid.io')).toBeVisible();
		expect(screen.getByText('Speaker announcement videos')).toBeVisible();
		expect(screen.getByText('Session schedules on screens')).toBeVisible();
	});

	it('should have links to external resources', () => {
		render(<CaseStudy />);

		const devfestLink = screen.getByRole('link', {name: /Visit DevFest/});
		const remotionLink = screen.getByRole('link', {
			name: /Read the full story/,
		});

		expect(devfestLink).toHaveAttribute(
			'href',
			'https://devfest.gdgnantes.com/',
		);
		expect(remotionLink).toHaveAttribute(
			'href',
			'https://www.remotion.dev/success-stories/shortvid',
		);
	});
});
