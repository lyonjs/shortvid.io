'use client';
import {createContext, ReactNode, useState} from 'react';

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

	return (
		<FontContext.Provider value={{selectedFont, setSelectedFont}}>
			{children}
		</FontContext.Provider>
	);
};
