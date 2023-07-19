import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import {SidebarProvider} from '../../src/context/SidebarContext';
import {ResizeWrapper} from '../../src/app/components/sidebar/ResizeWrapper';

describe('<ResizeWrapper>', () => {
	beforeEach(() => {
		render(
			<SidebarProvider>
				<ResizeWrapper>
					<h1>Content</h1>
				</ResizeWrapper>
			</SidebarProvider>
		);
	});

	it('should render the component', () => {
		const resizableWrapper = screen.getByTestId('resizableWrapper');
		const resizeGrabber = screen.getByTestId('resizeGrabber');
		const content = screen.getByRole('heading', {
			name: 'Content',
		});

		expect(resizableWrapper).toBeVisible();
		expect(resizeGrabber).toBeVisible();
		expect(content).toBeVisible();
	});

	it('should resize the sidebar', () => {
		const resizeGrabber = screen.getByTestId('resizeGrabber');
		const grabberOffset = 20;

		const initialClientX = 315;
		const resizableWrapper = screen.getByTestId('resizableWrapper');

		expect(resizableWrapper).toHaveStyle('width: 315px');

		fireEvent.mouseDown(resizeGrabber, {clientX: initialClientX});
		fireEvent.mouseMove(document, {
			clientX: initialClientX + grabberOffset + 50,
		});
		fireEvent.mouseUp(document);

		expect(resizableWrapper).toHaveStyle('width: 365px');
	});

	it('should not resize the sidebar below the minimum width', () => {
		const resizeGrabber = screen.getByTestId('resizeGrabber');
		const grabberOffset = 20;

		const initialClientX = 315;
		const resizableWrapper = screen.getByTestId('resizableWrapper');

		expect(resizableWrapper).toHaveStyle('width: 315px');

		fireEvent.mouseDown(resizeGrabber, {clientX: initialClientX});
		fireEvent.mouseMove(document, {
			clientX: initialClientX + grabberOffset - 200,
		});
		fireEvent.mouseUp(document);

		expect(resizableWrapper).not.toHaveStyle('width: 115px');
		expect(resizableWrapper).toHaveStyle('width: 220px');
	});
});
