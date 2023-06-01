import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {Header} from '../../src/app/Header';

describe('Loads and display the component "Header"', () => {
	it('render the component', () => {
		render(<Header />);

		const logo = screen.getByRole('img', {
			name: 'Shortvid.io Logo',
		});
		const title = screen.getByRole('heading');
		const githubLink = screen.getByRole('link');

		expect(logo).toBeVisible();
		expect(title.textContent).toEqual('Shortvid.io');
		expect(githubLink.textContent).toContain('Repository');
	});
});
