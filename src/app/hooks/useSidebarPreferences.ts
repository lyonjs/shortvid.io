import {useEffect, useState} from 'react';

export const useSidebarPreferences = () => {
	const [expanded, setExpanded] = useState<boolean>(true);

	useEffect(() => {
		const expandedPreferencesString = localStorage.getItem('expanded');
		const expandedPreferences =
			expandedPreferencesString === 'false' ? false : true;
		setExpanded(expandedPreferences);
	}, []);

	const handleExpand = (value: boolean) => {
		setExpanded(value);
		localStorage.setItem('expanded', `${value}`);
	};

	return {expanded, setExpanded: handleExpand};
};
