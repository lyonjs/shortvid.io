'use client';
import {ReactNode, useEffect, useState} from 'react';
import {FontContext} from './FontCountext';
import {loadFont} from '@remotion/google-fonts/NotoSans';
import {loadGoogleFont} from '../../app/utils/loadFont';

interface FontProviderProps {
	children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({children}) => {
	const [selectedFont, setSelectedFont] = useState<string>('');

	useEffect(() => {
		const storedFont = sessionStorage.getItem('selectedFont');
		if (storedFont) {
			setSelectedFont(storedFont);
			loadGoogleFont(storedFont);
		} else {
			setSelectedFont('Noto Sans');
			loadFont();
		}
	}, [selectedFont]);

	const handleSetSelectedFont = (font: string) => {
		setSelectedFont(font);
		if (font) {
			sessionStorage.setItem('selectedFont', font);
		}
	};

	return (
		<FontContext.Provider
			value={{selectedFont, setSelectedFont: handleSetSelectedFont}}
		>
			{children}
		</FontContext.Provider>
	);
};
