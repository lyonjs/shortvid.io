import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react';
import {Sidebar} from '../../src/app/components/sidebar/Sidebar';

jest.mock('next/navigation', () => ({
	usePathname: jest.fn().mockReturnValue('/'),
}));

describe('<Sidebar />', () => {
	beforeEach(() => {
		render(<Sidebar />);
	});

	it('should render the component', () => {
		const logo = screen.getByTitle('Shortvid.io Logo').parentNode;

		const contributingLink = screen.getByText('Contributing');
		const themeButtonsGroup = screen.getByRole('radiogroup');

		const nav = screen.getByRole('navigation');

		const topLevelLink = screen.getByRole('listitem', {
			name: 'home',
		});

		const video = screen.getByRole('heading', {
			name: 'Event',
		});

		const categorisedVideo = screen.getByRole('heading', {
			name: 'Talk',
		});

		waitFor(() => {
			expect(logo).toBeVisible();
			expect(contributingLink).toBeVisible();
			expect(themeButtonsGroup).toBeVisible();
			expect(nav).toBeVisible();

			expect(topLevelLink).toBeVisible();
			expect(video).toBeVisible();
			expect(categorisedVideo).toBeVisible();
		});
	});
});
