import {CompositionThumbnailMock} from '../mocks/sideBarCompositionThumbnail.mock';
import {sideBarNavConfigMock} from '../mocks/sideBarConfig.mock';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import {SidebarNavMobile} from '../../src/app/components/sidebar/navigation/SidebarNavMobile';

jest.mock('next/navigation', () => ({
	usePathname: jest.fn().mockReturnValue('/'),
}));

jest.mock('../../src/data/config/sideBarConfig', () => ({
	sideBarNavConfig: sideBarNavConfigMock,
}));

jest.mock(
	'../../src/app/components/sidebar/navigation/CompositionThumbnail',
	() => ({
		CompositionThumbnail: CompositionThumbnailMock,
	}),
);

describe('<SidebarNavMobile />', () => {
	beforeEach(() => {
		render(<SidebarNavMobile />);
	});

	it('should render the component', () => {
		const sidebar = screen.getByTestId('sidebarMobile');
		const logo = screen.getByRole('img', {
			name: 'Shortvid.io logo',
		});
		const burgerButton = screen.getByRole('button', {
			name: 'Open or close navigation',
		});

		expect(sidebar).toBeVisible();
		expect(logo).toBeVisible();
		expect(burgerButton).toBeVisible();
	});

	it('should open and close the burger menu', async () => {
		const user = userEvent.setup();
		const logo = screen.getByRole('img', {
			name: 'Shortvid.io logo',
		});
		const burgerButton = screen.getByRole('button', {
			name: 'Open or close navigation',
		});

		expect(logo).toBeVisible();
		expect(burgerButton).toBeVisible();

		await user.click(burgerButton);

		const topLevelLink = screen.getByText('topLevel');

		expect(burgerButton).toBeVisible();
		expect(topLevelLink).toBeVisible();

		await user.click(burgerButton);

		expect(topLevelLink).not.toBeVisible();
	});
});
