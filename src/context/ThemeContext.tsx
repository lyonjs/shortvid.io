import {createContext, useEffect, useState} from 'react';

type ThemeContextType = {
	theme: string | undefined;
	setTheme: (name: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
	theme: undefined,
	setTheme: () => {},
});

type ThemeProviderProps = {
	children: React.ReactNode;
};
export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
	const defaultTheme = () => {
		const storedTheme = sessionStorage.getItem('selectedTheme');
		const lightOS = window.matchMedia('(prefers-color-scheme: light)').matches;
		const systemTheme = lightOS ? 'light' : 'dark';
		return storedTheme || systemTheme;
	};

	const [themeName, setThemeName] = useState<string>(defaultTheme);

	useEffect(() => {
		themeName === 'dark' ? applyTheme(darkTheme) : applyTheme(lightTheme);
	}, [themeName]);

	const setTheme = (name: string) => {
		setThemeName(name);
		name === 'dark' ? applyTheme(darkTheme) : applyTheme(lightTheme);
	};

	const applyTheme = (theme: string[]) => {
		const root = document.getElementsByTagName('html')[0];
		root.style.cssText = theme.join(';');
	};

	return (
		<ThemeContext.Provider value={{theme: themeName, setTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};

const darkTheme = [
	'--primary: var(--purple-200)',
	'--link: var(--purple-100)',
	'--background: var(--purple-900)',
	'--text: var(--white)',
];

const lightTheme = [
	'--primary: var(--purple-300)',
	'--link: var(--purple-400)',
	'--background: var(--white)',
	'--text: var(--purple-900)',
];
