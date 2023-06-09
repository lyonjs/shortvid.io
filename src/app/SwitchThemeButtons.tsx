'use client';

import {useTheme} from 'next-themes';
import {ThemeRadioButton} from './ThemeRadioButton';
import styles from '../../styles/app/common/themeRadioGroup.module.css';
import {useSelectedTheme} from './hooks/useSelectedTheme';

export type SelectedThemeTypes = 'dark' | 'light' | 'system';

export const SwitchThemeButtons = () => {
	const {systemTheme} = useTheme();
	const {selectedTheme, setSelectedTheme} = useSelectedTheme();

	return (
		<div className={styles.switchThemeGroup} role="radiogroup">
			<ThemeRadioButton
				selectedTheme={selectedTheme}
				handleSelectTheme={setSelectedTheme}
				themeLabel="dark"
				themeValue="dark"
				iconifyId="ph:moon"
			/>
			<ThemeRadioButton
				selectedTheme={selectedTheme}
				handleSelectTheme={setSelectedTheme}
				themeLabel="system"
				themeValue={systemTheme}
				iconifyId="gg:screen"
			/>
			<ThemeRadioButton
				selectedTheme={selectedTheme}
				handleSelectTheme={setSelectedTheme}
				themeLabel="light"
				themeValue="light"
				iconifyId="ph:sun"
			/>
		</div>
	);
};
