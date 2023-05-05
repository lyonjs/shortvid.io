import {createContext} from 'react';

interface FontContextType {
	selectedFont: string | null;
	setSelectedFont: (font: string | null) => void;
}

export const FontContext = createContext<FontContextType | undefined>(
	undefined
);
