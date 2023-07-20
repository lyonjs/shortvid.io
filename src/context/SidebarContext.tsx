'use client';

import {createContext, ReactNode, useState} from 'react';

type SidebarContextProps = {
	expanded: boolean;
	setExpanded: (value: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextProps>({
	expanded: true,
	setExpanded: () => {},
});

interface SidebarProviderProps {
	children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({children}) => {
	const [expanded, setExpanded] = useState<boolean>(true);

	return (
		<SidebarContext.Provider value={{expanded, setExpanded}}>
			{children}
		</SidebarContext.Provider>
	);
};