import '@testing-library/jest-dom';
import {sideBarNavConfigMock} from '../mocks/sideBarConfig.mock';
import {render, screen} from '@testing-library/react';
import {SidebarMobile} from '../../src/app/components/sidebar/SidebarMobile';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation', () => ({
	usePathname: jest.fn().mockReturnValue('/'),
}));

jest.mock('../../src/data/config/sideBarConfig', () => ({
	sideBarNavConfig: sideBarNavConfigMock,
}));

jest.mock('../../src/app/components/sidebar/CompositionThumbnail', () => ({
	CompositionThumbnail: ({compositionName}: {compositionName: string}) => {
		return (
			<div>
				<h3>{compositionName}</h3>
			</div>
		);
	},
}));

describe('<SidebarMobile />', () => {
	beforeEach(() => {
		render(<SidebarMobile />);
	});

	it('should render the component', () => {
		const sidebar = screen.getByTestId('sidebarMobile');
		const logo = screen.getByTitle('Shortvid.io Logo').parentNode;
		const burgerButton = screen.getByRole('button', {
			name: 'Open or close navigation',
		});

		expect(sidebar).toBeVisible();
		expect(logo).toBeVisible();
		expect(burgerButton).toBeVisible();
	});

	it('should open and close the burger menu', async () => {
		const user = userEvent.setup();
		const logo = screen.getByTitle('Shortvid.io Logo').parentNode;
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
