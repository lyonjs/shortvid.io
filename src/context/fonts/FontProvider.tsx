'use client';
import {ReactNode, useEffect, useState} from 'react';
import {FontContext} from './FontCountext';
import {loadFont} from '@remotion/google-fonts/NotoSans';
import {top250} from '../../data/fonts';
import {loadGoogleFont} from '../../app/utils/loadFont';

interface FontProviderProps {
	children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({children}) => {
	const [selectedFont, setSelectedFont] = useState<string | undefined>(
		'Noto Sans'
	);
	loadFont();
	const fontList = top250;

	useEffect(() => {
		const storedFont = sessionStorage.getItem('selectedFont');
		if (storedFont) {
			setSelectedFont(storedFont);
			loadGoogleFont(storedFont);
		}
	}, []);

	const handleSetSelectedFont = (font: string | undefined) => {
		setSelectedFont(font);
		font && sessionStorage.setItem('selectedFont', font);
	};

	return (
		<FontContext.Provider
			value={{selectedFont, setSelectedFont: handleSetSelectedFont}}
		>
			{children}
		</FontContext.Provider>
	);
};
