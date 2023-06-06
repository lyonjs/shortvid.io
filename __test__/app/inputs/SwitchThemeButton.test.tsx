import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import {Footer} from '../../../src/app/Footer';

describe('<SwitchThemeButton />', () => {
	const getButtons = () => ({
		systemButton: screen.getByLabelText('system'),
		lightButton: screen.getByLabelText('light'),
		darkButton: screen.getByLabelText('dark'),
	});

	const testThemeSwitch = (targetButton: HTMLElement) => {
		const {systemButton, lightButton, darkButton} = getButtons();

		fireEvent.click(targetButton);

		expect(lightButton.getAttribute('aria-checked')).toEqual(
			targetButton === lightButton ? 'true' : 'false'
		);
		expect(systemButton.getAttribute('aria-checked')).toEqual(
			targetButton === systemButton ? 'true' : 'false'
		);
		expect(darkButton.getAttribute('aria-checked')).toEqual(
			targetButton === darkButton ? 'true' : 'false'
		);
	};

	beforeEach(() => {
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
		const {lightButton} = getButtons();
		testThemeSwitch(lightButton);
	});

	it('should switch to the dark theme', () => {
		const {darkButton} = getButtons();
		testThemeSwitch(darkButton);
	});

	it('should switch to the system theme', () => {
		const {lightButton, systemButton} = getButtons();
		testThemeSwitch(lightButton);
		testThemeSwitch(systemButton);
	});
});
