import {encodedParams, formConfig, formData} from '../mocks/formConfig.mock';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import {Form} from '../../src/app/forms/Form';
import {useGenerateVideo} from '../../src/app/hooks/useGenerateVideo';

jest.mock('../../src/app/hooks/useGenerateVideo', () => ({
	useGenerateVideo: jest.fn().mockReturnValue({
		isLoading: false,
		videoUrl: undefined,
		error: undefined,
		getVideoLink: jest.fn(),
	}),
}));

describe('<Form />', () => {
	beforeEach(() => {
		render(
			<Form
				compositionId="MyVideo"
				data={formData}
				formConfig={formConfig}
				encodedParams={encodedParams}
			>
				<button>Additional Button</button>
			</Form>,
		);
	});

	it('should render the component', () => {
		const childrenContent = screen.getByRole('button', {
			name: 'Additional Button',
		});
		const renderButton = screen.getByRole('button', {
			name: 'Generate Video',
		});
		const copyUrlButton = screen.getByRole('button', {
			name: 'Copy URL 🔗',
		});

		const colorInput = screen.getByLabelText('Background Color');
		const dateInput = screen.getByLabelText('Date');
		const textInput = screen.getByRole('textbox', {
			name: 'Title',
		});
		const selectInput = screen.getByRole('combobox', {
			name: 'Position',
		});

		expect(childrenContent).toBeVisible();
		expect(renderButton).toBeVisible();
		expect(copyUrlButton).toBeVisible();

		expect(colorInput).toBeVisible();
		expect(dateInput).toBeVisible();
		expect(selectInput).toBeVisible();
		expect(textInput).toBeVisible();
		expect(textInput).toHaveAttribute('placeholder', 'ex: example of title');
	});

	it('should submit', async () => {
		const user = userEvent.setup();

		const renderButton = screen.getByRole('button', {
			name: 'Generate Video',
		});

		await user.click(renderButton);

		expect(
			useGenerateVideo(formData, 'MyVideo').getVideoLink,
		).toHaveBeenCalledTimes(1);
	});
});
