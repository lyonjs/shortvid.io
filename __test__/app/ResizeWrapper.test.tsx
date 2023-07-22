import {fireEvent, render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {
	DEFAULT_GRABBER_WIDTH,
	DEFAULT_SIDEBAR_WIDTH,
	ResizeWrapper,
} from '../../src/app/components/sidebar/ResizeWrapper';
import {SidebarProvider} from '../../src/context/SidebarContext';

describe('<ResizeWrapper>', () => {
	let resizeGrabber: HTMLElement, resizableWrapper: HTMLElement;

	beforeEach(() => {
		render(
			<SidebarProvider>
				<ResizeWrapper>
					<h1>Content</h1>
				</ResizeWrapper>
			</SidebarProvider>
		);

		resizeGrabber = screen.getByTestId('resizeGrabber');
		resizableWrapper = screen.getByTestId('resizableWrapper');

		expect(resizableWrapper).toHaveStyle('width: 315px');
	});

	const resizeSidebar = (deltaX: number) => {
		fireEvent.mouseDown(resizeGrabber, {clientX: DEFAULT_SIDEBAR_WIDTH});
		fireEvent.mouseMove(document, {
			clientX: DEFAULT_SIDEBAR_WIDTH + DEFAULT_GRABBER_WIDTH + deltaX,
		});
		fireEvent.mouseUp(document);
	};

	it('should render the component', () => {
		const content = screen.getByRole('heading', {
			name: 'Content',
		});

		expect(resizableWrapper).toBeVisible();
		expect(resizeGrabber).toBeVisible();
		expect(content).toBeVisible();
	});

	it('should resize the sidebar', () => {
		resizeSidebar(50);

		expect(resizableWrapper).toHaveStyle('width: 365px');
	});

	it('should not resize the sidebar below the minimum width', () => {
		resizeSidebar(-200);

		expect(resizableWrapper).not.toHaveStyle('width: 115px');
		expect(resizableWrapper).toHaveStyle('width: 220px');
	});

	it('should not resize the sidebar over the maximum width', () => {
		resizeSidebar(400);

		expect(resizableWrapper).not.toHaveStyle('width: 415px');
		expect(resizableWrapper).toHaveStyle('width: 500px');
	});
});
