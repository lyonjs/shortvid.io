import {Icon} from '@iconify/react';
import {SelectedThemeTypes} from './SwitchThemeButtons';
import styles from '../../styles/app/common/themeRadioGroup.module.css';

type ThemeRadioButtonTypes = {
	themeLabel: SelectedThemeTypes;
	themeValue: 'dark' | 'light' | undefined;
	handleSelectTheme: (
		newTheme: string,
		clickedButton: SelectedThemeTypes
	) => void;
	selectedTheme: string;
	iconifyId: string;
};

export const ThemeRadioButton: React.FC<ThemeRadioButtonTypes> = ({
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
