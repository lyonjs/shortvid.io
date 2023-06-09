import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {fireEvent, render, screen} from '@testing-library/react';
import {Footer} from '../../../src/app/Footer';
import {useSelectedTheme} from '../../../src/app/hooks/useSelectedTheme';

jest.mock('../../../src/app/hooks/useSelectedTheme.ts');

describe('<SwitchThemeButton />', () => {
	const getButtons = () => ({
		systemButton: screen.getByLabelText('system'),
		lightButton: screen.getByLabelText('light'),
		darkButton: screen.getByLabelText('dark'),
	});

	const testThemeSwitch = (targetButton: HTMLElement) => {
		const {systemButton, lightButton, darkButton} = getButtons();

		fireEvent.click(targetButton);

		expect(lightButton.getAttribute('checked')).toEqual(
			targetButton === lightButton ? 'true' : 'false'
		);
		expect(systemButton.getAttribute('checked')).toEqual(
			targetButton === systemButton ? 'true' : 'false'
		);
		expect(darkButton.getAttribute('checked')).toEqual(
			targetButton === darkButton ? 'true' : 'false'
		);
	};

	beforeEach(() => {
		(useSelectedTheme as jest.MockedFunction<any>).mockReturnValue({
			themeName: 'dark',
			selectedTheme: 'system',
			setSelectedTheme: jest.fn(),
		});
		render(<Footer />);
		const {systemButton, lightButton, darkButton} = getButtons();

		expect(systemButton).toBeChecked();
		expect(lightButton).not.toBeChecked();
		expect(darkButton).not.toBeChecked();
	});

	it('should render the component', () => {
		const {systemButton, lightButton, darkButton} = getButtons();

		expect(systemButton).toBeVisible();
		expect(lightButton).toBeVisible();
		expect(darkButton).toBeVisible();
	});

	it('should have the system theme as default', () => {
		const {systemButton, lightButton, darkButton} = getButtons();

		expect(systemButton).toBeChecked();
		expect(lightButton).not.toBeChecked();
		expect(darkButton).not.toBeChecked();
	});

	it('should switch to the light theme', () => {
		const user = userEvent.setup();
		const {lightButton} = getButtons();

		expect(lightButton).not.toBeChecked();

		user.click(lightButton);
		expect(lightButton).toBeChecked();
		// testThemeSwitch(lightButton);
	});
	//
	// it('should switch to the dark theme', () => {
	// 	const {darkButton} = getButtons();
	// 	testThemeSwitch(darkButton);
	// });
	//
	// it('should switch to the system theme', () => {
	// 	const {lightButton, systemButton} = getButtons();
	// 	testThemeSwitch(lightButton);
	// 	testThemeSwitch(systemButton);
	// });
});
