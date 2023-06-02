import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {Footer} from '../../src/app/Footer';
import {useThemeName} from '../../src/app/hooks/useThemeName';

jest.mock('../../src/app/hooks/useThemeName.ts');

describe('<Footer />', () => {
	it('should render the component', () => {
		(useThemeName as jest.MockedFunction<any>).mockReturnValue('dark');
		render(<Footer />);

		const logo = screen.getByRole('img', {
			name: 'Shortvid.io Logo',
		});

		const vercelImg = screen.getByRole('img', {
			name: 'Vercel',
		});
		const vercelLink = screen.getByRole('link', {
			name: 'Vercel',
		});

		const footer = screen.getByRole('contentinfo');

		expect(logo).toBeVisible();

		expect(vercelImg).toBeVisible();
		expect(vercelLink).toBeVisible();

		expect(footer).toBeVisible();
		expect(footer.textContent).toEqual(
			'© Copyright 2023 LyonJs - Made with 💜 and JS'
		);
	});
});
