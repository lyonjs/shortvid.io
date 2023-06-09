'use client';

import {useTheme} from 'next-themes';
import {useThemeName} from './hooks/useThemeName';
import styles from '../../styles/app/common/button.module.css';

export const SwitchThemeButton = () => {
	const {setTheme} = useTheme();
	const theme = useThemeName();

	const checkTheme = theme === 'dark' ? 'light' : 'dark';

	return (
		<button
			className={styles.switchThemeButton}
			onClick={() => setTheme(checkTheme)}
		>
			Switch to {checkTheme} mode
		</button>
	);
};
