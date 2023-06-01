import {useContext, useEffect} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const useTheme = () => {
	const {theme, setTheme} = useContext(ThemeContext);

	useEffect(() => {
		const storedTheme = sessionStorage.getItem('selectedTheme');
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);

	const switchTheme = (themeName: string) => {
		setTheme(themeName);
		sessionStorage.setItem('selectedTheme', themeName);
	};

	return {theme, setTheme: switchTheme};
};
