import {render, screen} from '@testing-library/react';
import {Title} from '../../remotion/design/atoms/Title';

it('Loads and display the atom "Title"', () => {
	render(<Title style={{color: 'red'}}>Title test</Title>);

	const title = screen.getByRole('heading');

	expect(title.textContent).toEqual('Title test');
	expect(title.getAttribute('style')).toContain('color: red');
});
