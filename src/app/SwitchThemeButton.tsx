'use client';

import {useTheme} from 'next-themes';
import {Icon} from '@iconify/react';
import {useEffect, useState} from 'react';
import styles from '../../styles/app/inputs/button.module.css';

type selectedThemeTypes = 'dark' | 'light' | 'system';

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

const ThemeRadioButton: React.FC<themeRadioButtonTypes> = ({
	themeLabel,
	themeValue,
	handleSelectTheme,
	selectedTheme,
	iconifyId,
}) => {
	return (
		<button
			aria-checked={selectedTheme === themeLabel}
			aria-label={themeLabel}
			role="radio"
			type="button"
			value={themeValue}
			onClick={(e) => handleSelectTheme(e.currentTarget.value, themeLabel)}
		>
			<Icon icon={iconifyId} width={15} height={15} />
		</button>
	);
};

export const SwitchThemeButton = () => {
	const {setTheme, systemTheme} = useTheme();
	const [selectedTheme, setSelectedTheme] = useState<string>('system');

	useEffect(() => {
		const localTheme = localStorage.getItem('theme');
		localTheme && setSelectedTheme(localTheme);
	}, []);

	const handleSelectTheme = (
		newTheme: string,
		clickedButton: selectedThemeTypes
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
