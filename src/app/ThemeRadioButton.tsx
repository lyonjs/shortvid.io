import {Icon} from '@iconify/react';
import {selectedThemeTypes} from './SwitchThemeButtons';
import styles from '../../styles/app/inputs/themeRadioGroup.module.css';

type themeRadioButtonTypes = {
	themeLabel: selectedThemeTypes;
	themeValue: 'dark' | 'light' | undefined;
	handleSelectTheme: (
		newTheme: string,
		clickedButton: selectedThemeTypes
	) => void;
	selectedTheme: string;
	iconifyId: string;
};

export const ThemeRadioButton: React.FC<themeRadioButtonTypes> = ({
	themeLabel,
	themeValue,
	handleSelectTheme,
	selectedTheme,
	iconifyId,
}) => {
	const checkTheme = (theme: string) => {
		return selectedTheme === theme;
	};

	return (
		<label className={checkTheme(themeLabel) ? styles.checked : ''}>
			<Icon icon={iconifyId} width={15} height={15} />
			<input
				checked={checkTheme(themeLabel)}
				aria-label={themeLabel}
				name="themeInput"
				type="radio"
				value={themeValue}
				onChange={(e) => handleSelectTheme(e.currentTarget.value, themeLabel)}
			/>
		</label>
	);
};
