import '@testing-library/jest-dom';
import {sideBarNavConfigMock} from '../mocks/sideBarConfig.mock';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Sidebar} from '../../src/app/components/sidebar/navigation/Sidebar';

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

describe('<Sidebar />', () => {
	beforeEach(() => {
		render(<Sidebar />);
	});

	it('should render the component', () => {
		const sidebar = screen.getByRole('region', {
			name: 'sidebar',
		});
		const logo = screen.getByTitle('Shortvid.io Logo').parentNode;
		const contributingLink = screen.getByRole('link', {
			name: 'Contributing',
		});
		const themeButtonsGroup = screen.getByRole('radiogroup');
		const nav = screen.getByRole('navigation');

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

		expect(nav).toBeVisible();

		expect(topLevelElement).toBeVisible();
		expect(video).not.toBeVisible();
		expect(categorisedVideo).not.toBeVisible();
		expect(categorisedVideo).toHaveAttribute(
			'href',
			'/toplevel/category/categorisedVideo'
		);
	});

	it('should display videos list', async () => {
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
		const user = userEvent.setup();

		const foldButton = screen.getByRole('button', {
			name: 'foldButton',
		});
		const logoWordmark = screen.getByRole('heading', {
			name: 'Shortvid.io',
		});
		const topLevelText = screen.getByText('topLevel');
		const contributingText = screen.getByText('Contributing');

		expect(foldButton).toBeVisible();
		expect(logoWordmark).toBeVisible();
		expect(topLevelText).toBeVisible();
		expect(contributingText).toBeVisible();

		await user.click(foldButton);

		expect(logoWordmark).not.toBeVisible();
		expect(topLevelText).not.toBeVisible();
		expect(contributingText).not.toBeVisible();
	});

	it('should alternate display ditails when folded', async () => {
		const user = userEvent.setup();
		const foldButton = screen.getByRole('button', {
			name: 'foldButton',
		});
		const details = screen.getAllByRole('group');
		const fisrtLink = details[0];
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

		await user.click(fisrtLink);

		expect(video).toBeVisible();
		expect(secondVideo).not.toBeVisible();

		await user.click(secondLink);

		expect(video).not.toBeVisible();
		expect(secondVideo).toBeVisible();
	});
});
