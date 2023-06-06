import '@testing-library/jest-dom';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {Footer} from '../../../src/app/Footer';

describe('<SwitchThemeButton />', () => {
	const getButtons = () => ({
		systemButton: screen.getByLabelText('System'),
		lightButton: screen.getByLabelText('Light'),
		darkButton: screen.getByLabelText('Dark'),
	});

	const testThemeSwitch = (
		targetButton: HTMLElement,
		expectedCheckedState: 'true' | 'false'
	) => {
		const {systemButton, lightButton, darkButton} = getButtons();

		fireEvent.click(targetButton);

		expect(lightButton.getAttribute('aria-checked')).toEqual(
			targetButton === lightButton ? expectedCheckedState : 'false'
		);
		expect(systemButton.getAttribute('aria-checked')).toEqual(
			targetButton === systemButton ? expectedCheckedState : 'false'
		);
		expect(darkButton.getAttribute('aria-checked')).toEqual(
			targetButton === darkButton ? expectedCheckedState : 'false'
		);
	};

	beforeEach(() => {
		render(<Footer />);
		const {systemButton, lightButton, darkButton} = getButtons();

		expect(systemButton.getAttribute('aria-checked')).toEqual('true');
		expect(lightButton.getAttribute('aria-checked')).toEqual('false');
		expect(darkButton.getAttribute('aria-checked')).toEqual('false');
	});

	it('should render the component', () => {
		const {systemButton, lightButton, darkButton} = getButtons();

		expect(systemButton).toBeVisible();
		expect(lightButton).toBeVisible();
		expect(darkButton).toBeVisible();
	});

	it('should have the system theme as default', () => {
		const {systemButton, lightButton, darkButton} = getButtons();

		expect(systemButton.getAttribute('aria-checked')).toEqual('true');
		expect(lightButton.getAttribute('aria-checked')).toEqual('false');
		expect(darkButton.getAttribute('aria-checked')).toEqual('false');
	});

	it('should switch to the light theme', () => {
		const {lightButton} = getButtons();
		testThemeSwitch(lightButton, 'true');
	});

	it('should switch to the dark theme', () => {
		const {darkButton} = getButtons();
		testThemeSwitch(darkButton, 'true');
	});

	it('should switch to the system theme', () => {
		const {lightButton, systemButton} = getButtons();
		testThemeSwitch(lightButton, 'true');
		testThemeSwitch(systemButton, 'true');
	});
});
