import {render} from '@testing-library/react';
import * as _nextNavigation from 'next/navigation';

import '@testing-library/jest-dom';

import {ActiveLink} from '../../../src/app/components/sidebar/ActiveLink';

import activeLinkStyles from '../../../styles/app/components/sidebar/activeLink.module.css';

const mockedSrc = '/mockedSrc?withQueryParam=true';

jest.mock('next/navigation', () => ({
	...jest.requireActual('next/navigation'),
	usePathname: jest.fn(),
}));

describe('<ActiveLink />', () => {
	it('should render the component', () => {
		const {container} = render(
			<ActiveLink src={mockedSrc}>mockedLink</ActiveLink>,
		);

		const htmlLink = container.querySelector('a');

		expect(htmlLink).toBeVisible();

		expect(htmlLink?.classList).toContain(activeLinkStyles.activeLink);
		expect(htmlLink).toHaveAttribute('href', mockedSrc);
	});

	it("should have active class when current pathname is the same as <ActiveLink />'s src", () => {
		jest.spyOn(_nextNavigation, 'usePathname').mockReturnValue(mockedSrc);

		const {container} = render(
			<ActiveLink src={mockedSrc}>mockedLink</ActiveLink>,
		);

		const htmlLink = container.querySelector('a');

		expect(htmlLink?.classList).toContain(activeLinkStyles.activeLink);
	});
});
