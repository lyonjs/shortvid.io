import {fireEvent, render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {
	DEFAULT_GRABBER_WIDTH,
	DEFAULT_SIDEBAR_WIDTH,
	ResizeWrapper,
} from '../../src/app/components/sidebar/ResizeWrapper';
import {SidebarProvider} from '../../src/context/SidebarContext';

describe('<ResizeWrapper>', () => {
	const customRenderWrapper: (resizableSide?: 'left' | 'right') => {
		resizableWrapper: HTMLElement;
	} = (resizableSide = 'right') => {
		render(
			<SidebarProvider>
				<div
					style={{
						width: 1000,
						display: 'flex',
						justifyContent:
							resizableSide === 'right' ? 'flex-start' : 'flex-end',
					}}
				>
					<ResizeWrapper resizableSide={resizableSide}>
						<h1>Content</h1>
					</ResizeWrapper>
				</div>
			</SidebarProvider>,
		);

		const resizableWrapper = screen.getByTestId('resizableWrapper');

		return {resizableWrapper};
	};

	const resizeSidebar: (deltaX: number, dragStartingPoint?: number) => void = (
		deltaX,
		dragStartingPoint = DEFAULT_SIDEBAR_WIDTH,
	) => {
		const resizeGrabber = screen.getByTestId('resizeGrabber');

		fireEvent.mouseDown(resizeGrabber, {clientX: dragStartingPoint});
		fireEvent.mouseMove(document, {
			clientX: dragStartingPoint + DEFAULT_GRABBER_WIDTH + deltaX,
		});
		fireEvent.mouseUp(document);
	};

	it('should render the component', () => {
		const {resizableWrapper} = customRenderWrapper();
		const resizeGrabber = screen.getByTestId('resizeGrabber');

		expect(resizableWrapper).toHaveStyle('width: 315px');

		const content = screen.getByRole('heading', {
			name: 'Content',
		});

		expect(resizableWrapper).toBeVisible();
		expect(resizeGrabber).toBeVisible();
		expect(content).toBeVisible();
	});

	it('should resize the sidebar', () => {
		const {resizableWrapper} = customRenderWrapper();
		expect(resizableWrapper).toHaveStyle('width: 315px');

		resizeSidebar(50);

		expect(resizableWrapper).toHaveStyle('width: 365px');
	});

	it('should not resize the sidebar below the minimum width', () => {
		const {resizableWrapper} = customRenderWrapper();
		expect(resizableWrapper).toHaveStyle('width: 315px');

		resizeSidebar(-200);

		expect(resizableWrapper).not.toHaveStyle('width: 115px');
		expect(resizableWrapper).toHaveStyle('width: 220px');
	});

	it('should not resize the sidebar over the maximum width', () => {
		const {resizableWrapper} = customRenderWrapper();
		expect(resizableWrapper).toHaveStyle('width: 315px');

		resizeSidebar(400);

		expect(resizableWrapper).not.toHaveStyle('width: 415px');
		expect(resizableWrapper).toHaveStyle('width: 500px');
	});

	it('should resize on the right side', () => {
		const {resizableWrapper} = customRenderWrapper('left');
		expect(resizableWrapper).toHaveStyle('width: 315px');

		expect(resizableWrapper).toHaveStyle('width: 315px');
		expect(resizableWrapper).toHaveAttribute('data-resizableside', 'left');

		resizeSidebar(100, 1000 - DEFAULT_SIDEBAR_WIDTH);

		expect(resizableWrapper).not.toHaveStyle('width: 365px');
		expect(resizableWrapper).toHaveStyle('width: 220px');
	});
});
