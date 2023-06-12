import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {SwitchThemeButtons} from '../../../src/app/SwitchThemeButtons';

describe('<SwitchThemeButton />', () => {
	const getButtons = () => ({
		systemButton: screen.getByLabelText('system'),
		lightButton: screen.getByLabelText('light'),
		darkButton: screen.getByLabelText('dark'),
	});

	const testThemeSwitch = async (targetButton: HTMLElement) => {
		const user = userEvent.setup();
		const {systemButton, lightButton, darkButton} = getButtons();

		await user.click(targetButton);

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
		render(<SwitchThemeButtons />);
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
		const {lightButton} = getButtons();

		expect(lightButton).not.toBeChecked();
		testThemeSwitch(lightButton);
	});

	it('should switch to the dark theme', () => {
		const {darkButton} = getButtons();

		expect(darkButton).not.toBeChecked();
		testThemeSwitch(darkButton);
	});

	it('should switch to the system theme', () => {
		const {lightButton, systemButton} = getButtons();
		testThemeSwitch(lightButton);
		testThemeSwitch(systemButton);
	});
});
