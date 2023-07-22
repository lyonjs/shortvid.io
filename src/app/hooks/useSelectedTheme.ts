import {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';

export type SelectedThemeTypes = 'dark' | 'light' | 'system';

export const useSelectedTheme = () => {
	const {theme, setTheme, systemTheme} = useTheme();
	const [selectedTheme, setSelectedTheme] = useState<string>('system');
	const [themeName, setThemeName] = useState<string | undefined>(undefined);

	useEffect(() => {
		setThemeName(theme === 'system' ? systemTheme : theme);
	}, [theme, systemTheme]);

	useEffect(() => {
		const localTheme = localStorage.getItem('theme');
		localTheme && setSelectedTheme(localTheme);
	}, []);

	const handleSelectTheme = (
		newTheme: string,
		clickedButton: SelectedThemeTypes,
	) => {
		setTheme(newTheme);
		setSelectedTheme(clickedButton);
		if (clickedButton === 'system') {
			localStorage.setItem('theme', 'system');
		}
	};

	return {
		themeName,
		systemTheme,
		selectedTheme,
		setSelectedTheme: handleSelectTheme,
	};
};
