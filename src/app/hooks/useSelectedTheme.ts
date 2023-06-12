import {useEffect, useState} from 'react';
import {SelectedThemeTypes} from '../SwitchThemeButtons';
import {useTheme} from 'next-themes';

export const useSelectedTheme = () => {
	const {theme, setTheme, systemTheme} = useTheme();
	const [selectedTheme, setSelectedTheme] = useState<string>('system');
	const [themeName, setThemeName] = useState<string>('default');

	useEffect(() => {
		if (theme === 'system') {
			systemTheme && setThemeName(systemTheme);
		} else {
			theme && setThemeName(theme);
		}
	}, [theme, systemTheme]);

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

	return {themeName, selectedTheme, setSelectedTheme: handleSelectTheme};
};
