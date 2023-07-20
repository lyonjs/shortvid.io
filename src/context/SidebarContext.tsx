'use client';

import {createContext, ReactNode} from 'react';

import {useSidebarPreferences} from '../app/hooks/useSidebarPreferences';

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
	const {expanded, setExpanded} = useSidebarPreferences();

	return (
		<SidebarContext.Provider value={{expanded, setExpanded}}>
			{children}
		</SidebarContext.Provider>
	);
};
