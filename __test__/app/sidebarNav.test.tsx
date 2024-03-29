import {CompositionThumbnailMock} from '../mocks/sideBarCompositionThumbnail.mock';
import {sideBarNavConfigMock} from '../mocks/sideBarConfig.mock';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import {SidebarNav} from '../../src/app/components/sidebar/navigation/SidebarNav';
import {Sidebar} from '../../src/app/components/sidebar/Sidebar';
import {SidebarProvider} from '../../src/context/SidebarContext';

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

describe('<SidebarNav />', () => {
	afterEach(() => {
		window.localStorage.clear();
	});

	it('should render the component', () => {
		render(
			<SidebarProvider>
				<Sidebar>
					<SidebarNav />
				</Sidebar>
			</SidebarProvider>,
		);

		const sidebar = screen.getByRole('region', {
			name: 'sidebar',
		});
		const logo = screen.getByRole('img', {
			name: 'Shortvid.io logo',
		});
		const contributingLink = screen.getByRole('link', {
			name: 'Contributing',
		});
		const themeButtonsGroup = screen.getByRole('radiogroup');
		const sidebarNav = screen.getAllByRole('navigation')[1];

		const topLevelElement = screen.getAllByRole('listitem')[0];
		const video = screen.getByRole('link', {
			name: 'Video',
		});
		const categorisedVideo = screen.getByRole('link', {
			name: 'CategorisedVideo',
		});

		expect(sidebar).toBeVisible();
		expect(logo).toBeVisible();
		expect(contributingLink).toBeVisible();
		expect(themeButtonsGroup).toBeVisible();

		expect(sidebarNav).toBeVisible();

		expect(topLevelElement).toBeVisible();
		expect(video).not.toBeVisible();
		expect(categorisedVideo).not.toBeVisible();
		expect(categorisedVideo).toHaveAttribute(
			'href',
			'/toplevel/category/categorisedVideo',
		);
	});

	it('should display videos list', async () => {
		render(
			<SidebarProvider>
				<Sidebar>
					<SidebarNav />
				</Sidebar>
			</SidebarProvider>,
		);

		const user = userEvent.setup();
		const topLevelSummary = screen.getByText('topLevel').parentNode as Element;
		const firstLevelVideo = screen.getByRole('heading', {
			name: 'Video',
		});
		const categoryButton = screen.getByText('category');

		expect(topLevelSummary).toBeVisible();
		expect(firstLevelVideo).not.toBeVisible();
		expect(categoryButton).not.toBeVisible();

		await user.click(topLevelSummary);

		expect(firstLevelVideo).toBeVisible();
		expect(categoryButton).toBeVisible();
	});

	it('should fold', async () => {
		render(
			<SidebarProvider>
				<Sidebar>
					<SidebarNav />
				</Sidebar>
			</SidebarProvider>,
		);

		const user = userEvent.setup();

		const foldButton = screen.getByRole('button', {
			name: 'foldButton',
		});
		const logoWordmark = screen.getByRole('img', {
			name: 'Shortvid.io logo',
		});
		const topLevelText = screen.getByText('topLevel');
		const contributingText = screen.getByText('Contributing');

		expect(foldButton).toBeVisible();
		expect(logoWordmark).toBeVisible();
		expect(topLevelText).toBeVisible();
		expect(contributingText).toBeVisible();

		await user.click(foldButton);

		const monogram = screen.getByRole('img', {
			name: 'Shortvid.io monogram',
		});

		expect(monogram).toBeVisible();
		expect(topLevelText).not.toBeVisible();
		expect(contributingText).not.toBeVisible();
	});

	it('should alternate display details when folded', async () => {
		render(
			<SidebarProvider>
				<Sidebar>
					<SidebarNav />
				</Sidebar>
			</SidebarProvider>,
		);

		const user = userEvent.setup();
		const foldButton = screen.getByRole('button', {
			name: 'foldButton',
		});
		const details = screen.getAllByRole('group');
		const firstLink = details[0];
		const secondLink = details[2];

		const video = screen.getByRole('link', {
			name: 'Video',
		});
		const secondVideo = screen.getByRole('link', {
			name: 'Video2',
		});

		await user.click(foldButton);

		expect(video).not.toBeVisible();
		expect(secondVideo).not.toBeVisible();

		await user.click(firstLink);

		expect(video).toBeVisible();
		expect(secondVideo).not.toBeVisible();

		await user.click(secondLink);

		expect(video).not.toBeVisible();
		expect(secondVideo).toBeVisible();
	});

	it('should save fold preferences', async () => {
		render(
			<SidebarProvider>
				<Sidebar>
					<SidebarNav />
				</Sidebar>
			</SidebarProvider>,
		);

		const user = userEvent.setup();
		const foldButton = screen.getByRole('button', {
			name: 'foldButton',
		});

		await user.click(foldButton);
		expect(window.localStorage.getItem('expanded')).toEqual('false');

		await user.click(foldButton);
		expect(window.localStorage.getItem('expanded')).toEqual('true');
	});
});
