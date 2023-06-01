import React from 'react';
import {useTheme} from './hooks/useTheme';

export const SwitchThemeButton = () => {
	const {theme, setTheme} = useTheme();

	return (
		<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			Switch to {theme === 'dark' ? 'light' : 'dark'} mode
		</button>
	);
};
