'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {ThemeRadioButton} from './ThemeRadioButton';
import styles from '../../styles/app/common/themeRadioGroup.module.css';

export type SelectedThemeTypes = 'dark' | 'light' | 'system';

export const SwitchThemeButtons = () => {
	const {setTheme, systemTheme} = useTheme();
	const [selectedTheme, setSelectedTheme] = useState<string>('system');

	useEffect(() => {
		const localTheme = localStorage.getItem('theme');
		localTheme && setSelectedTheme(localTheme);
	}, []);

	const handleSelectTheme = (
		newTheme: string,
		clickedButton: SelectedThemeTypes
	) => {
		setTheme(newTheme);
		setSelectedTheme(clickedButton);
		if (clickedButton === 'system') {
			localStorage.setItem('theme', 'system');
		}
	};

	return (
		<div className={styles.switchThemeGroup} role="radiogroup">
			<ThemeRadioButton
				selectedTheme={selectedTheme}
				handleSelectTheme={handleSelectTheme}
				themeLabel="dark"
				themeValue="dark"
				iconifyId="ph:moon"
			/>
			<ThemeRadioButton
				selectedTheme={selectedTheme}
				handleSelectTheme={handleSelectTheme}
				themeLabel="system"
				themeValue={systemTheme}
				iconifyId="gg:screen"
			/>
			<ThemeRadioButton
				selectedTheme={selectedTheme}
				handleSelectTheme={handleSelectTheme}
				themeLabel="light"
				themeValue="light"
				iconifyId="ph:sun"
			/>
		</div>
	);
};
