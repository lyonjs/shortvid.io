'use client';

import {ReactNode} from 'react';

import {ThemeProvider} from 'next-themes';

export const CustomThemeProvider = ({children}: {children: ReactNode}) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};
