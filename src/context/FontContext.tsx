'use client';
import {createContext, ReactNode, useEffect, useState} from 'react';
import {loadFont} from '@remotion/google-fonts/NotoSans';
import {loadGoogleFont} from '../app/utils/loadFont';

interface FontContextType {
	selectedFont: string;
	setSelectedFont: (font: string) => void;
}

export const FontContext = createContext<FontContextType>({
	selectedFont: '',
	setSelectedFont: () => {},
});

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
