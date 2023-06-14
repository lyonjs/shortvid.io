'use client';

import {ThemeRadioButton} from './ThemeRadioButton';
import styles from '../../styles/app/common/themeRadioGroup.module.css';
import {useSelectedTheme} from './hooks/useSelectedTheme';

export const SwitchThemeButtons = () => {
	const {systemTheme, selectedTheme, setSelectedTheme} = useSelectedTheme();

	return (
		<div className={styles.switchThemeGroup} role="radiogroup">
			<ThemeRadioButton
				themeLabel="dark"
				themeValue="dark"
				iconifyId="ph:moon"
				selectedTheme={selectedTheme}
				handleSelectTheme={setSelectedTheme}
			/>
			<ThemeRadioButton
				themeLabel="system"
				themeValue={systemTheme}
				iconifyId="gg:screen"
				selectedTheme={selectedTheme}
				handleSelectTheme={setSelectedTheme}
			/>
			<ThemeRadioButton
				themeLabel="light"
				themeValue="light"
				iconifyId="ph:sun"
				selectedTheme={selectedTheme}
				handleSelectTheme={setSelectedTheme}
			/>
		</div>
	);
};
