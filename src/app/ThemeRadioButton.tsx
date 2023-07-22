import {Icon} from '@iconify/react';

import {SelectedThemeTypes} from './hooks/useSelectedTheme';

import styles from '../../styles/app/common/themeRadioGroup.module.css';

type ThemeRadioButtonTypes = {
	themeLabel: SelectedThemeTypes;
	themeValue: 'dark' | 'light' | undefined;
	handleSelectTheme: (
		newTheme: string,
		clickedButton: SelectedThemeTypes,
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
	const checkTheme = selectedTheme === themeLabel;

	return (
		<label className={checkTheme ? styles.checked : ''}>
			<Icon icon={iconifyId} width={15} height={15} />
			<input
				checked={checkTheme}
				aria-label={themeLabel}
				name="themeInput"
				type="radio"
				value={themeValue}
				onChange={(e) => handleSelectTheme(e.currentTarget.value, themeLabel)}
			/>
		</label>
	);
};
