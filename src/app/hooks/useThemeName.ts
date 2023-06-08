import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

export const useThemeName = () => {
	const {theme, systemTheme} = useTheme();
	const [actualTheme, setActualTheme] = useState<string>();

	useEffect(() => {
		theme === 'system' ? setActualTheme(systemTheme) : setActualTheme(theme);
	}, [theme, systemTheme]);

	return actualTheme;
};
