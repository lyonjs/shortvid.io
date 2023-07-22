import {useEffect, useState} from 'react';

export const useSidebarPreferences = () => {
	const [expanded, setExpanded] = useState<boolean>(true);

	useEffect(() => {
		const expandedPreferencesString = localStorage.getItem('expanded');
		if (expandedPreferencesString) {
			const expandedPreferences = JSON.parse(expandedPreferencesString);
			setExpanded(expandedPreferences);
		}
	}, []);

	const handleExpand = (value: boolean) => {
		setExpanded(value);
		localStorage.setItem('expanded', `${value}`);
	};

	return {expanded, setExpanded: handleExpand};
};
