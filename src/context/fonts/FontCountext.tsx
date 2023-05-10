import {createContext} from 'react';

interface FontContextType {
	selectedFont: string;
	setSelectedFont: (font: string) => void;
}

export const FontContext = createContext<FontContextType>({
	selectedFont: '',
	setSelectedFont: () => {},
});
