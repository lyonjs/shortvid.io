import {ReactNode, useState} from 'react';
import {FontContext} from './FontCountext';

interface FontProviderProps {
	children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({children}) => {
	const [selectedFont, setSelectedFont] = useState<string | null>('Noto Sans');

	return (
		<FontContext.Provider value={{selectedFont, setSelectedFont}}>
			{children}
		</FontContext.Provider>
	);
};
