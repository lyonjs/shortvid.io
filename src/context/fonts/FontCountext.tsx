import {createContext} from 'react';

interface FontContextType {
	selectedFont: string | undefined;
	setSelectedFont: (font: string | undefined) => void;
}

export const FontContext = createContext<FontContextType>({
	selectedFont: undefined,
	setSelectedFont: () => {},
});
