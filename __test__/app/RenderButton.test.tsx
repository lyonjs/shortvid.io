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

		const generateButton = screen.getByRole('button', {
			name: 'Generate Video',
		});

		expect(generateButton).toBeVisible();
	};

	it('should render the component', () => {
		customRenderButton(false, undefined, undefined);
	});

	it('should be loading', () => {
		customRenderButton(true, undefined, undefined);

		const loader = screen.getByText('Loading');

		expect(loader).toBeVisible();
	});

	it('should have rendered the video', () => {
		const videoUrl =
			'blob:https://shortvi.io/7cb95fa4-fdff-4dfe-a0eb-a4d289496ebc';

		customRenderButton(false, videoUrl, undefined);

		const downloadButton = screen.getByRole('link', {
			name: 'Download',
		});

		expect(downloadButton).toBeVisible();
		expect(downloadButton).toHaveAttribute('href', videoUrl);
	});

	it('should have error', () => {
		const errorMessage = 'Error while generating the video';
		customRenderButton(false, undefined, errorMessage);

		const error = screen.getByText(errorMessage);

		expect(error).toBeVisible();
	});
});
