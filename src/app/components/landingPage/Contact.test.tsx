import {render, screen} from '@testing-library/react';

import {Contact} from './Contact';

describe('<Contact />', () => {
	it('should render the component', () => {
		render(<Contact />);

		const sectionTitle = screen.getByRole('heading', {
			name: 'Contact us',
		});

		const contacts = screen.getAllByRole('link');

		const pictures = screen.getAllByRole('img');
		const names = screen.getAllByRole('heading');

		expect(sectionTitle).toBeVisible();

		expect(contacts.length).toEqual(2);

		contacts.map((contact, id) => {
			expect(contact).toBeVisible();
			expect(pictures[id]).toBeVisible();
		});

		expect(contacts[0]).toHaveProperty(
			'href',
			'https://twitter.com/Slashgear_',
		);
		expect(contacts[1]).toHaveProperty(
			'href',
			'https://twitter.com/mickaelalvs',
		);

		expect(names[1].textContent).toEqual('Antoine Carron');
		expect(names[2].textContent).toEqual('Mickael Alves');
	});
});
