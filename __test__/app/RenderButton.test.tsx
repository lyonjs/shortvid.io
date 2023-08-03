import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {RenderButton} from '../../src/app/forms/RenderButton';

describe('<RenderButton />', () => {
	const customRenderButton: (
		isLoading: boolean,
		videoUrl: string | undefined,
		error: string | undefined,
	) => void = (isLoading, videoUrl, error) => {
		render(
			<RenderButton
				compositionId="MyVideo"
				videoUrl={videoUrl}
				isLoading={isLoading}
				error={error}
			/>,
		);
	};

	it('should render the component', () => {
		customRenderButton(false, undefined, undefined);

		const generateButton = screen.getByRole('button', {
			name: 'Generate Video',
		});
		expect(generateButton).toBeVisible();
	});

	it('should be loading', () => {
		customRenderButton(true, undefined, undefined);

		const generateButton = screen.getByRole('button', {
			name: 'Generate Video',
		});
		const loader = screen.getByText('Generating the video...');

		expect(generateButton).toBeVisible();
		expect(loader).toBeVisible();
	});

	it('should have rendered the video', () => {
		const videoUrl =
			'blob:https://shortvi.io/7cb95fa4-fdff-4dfe-a0eb-a4d289496ebc';

		customRenderButton(false, videoUrl, undefined);

		const generateButton = screen.getByRole('button', {
			name: 'Generate Video',
		});
		const downloadButton = screen.getByRole('link', {
			name: 'Download',
		});

		expect(generateButton).toBeVisible();
		expect(downloadButton).toBeVisible();
		expect(downloadButton).toHaveAttribute('href', videoUrl);
	});

	it('should have error', () => {
		const errorMessage = 'Error while generating the video';
		customRenderButton(false, undefined, errorMessage);

		const generateButton = screen.getByRole('button', {
			name: 'Generate Video',
		});
		const error = screen.getByText(errorMessage);

		expect(generateButton).toBeVisible();
		expect(error).toBeVisible();
	});
});
