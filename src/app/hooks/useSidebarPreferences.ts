import {useEffect, useState} from 'react';

export const useSidebarPreferences = () => {
	const [folded, setFolded] = useState<boolean>(false);

	useEffect(() => {
		const foldedPreferencesString = localStorage.getItem('folded');
		const foldedPreferences = foldedPreferencesString === 'true' ? true : false;
		foldedPreferences && setFolded(foldedPreferences);
	}, []);

	const handleFold = (value: boolean) => {
		setFolded(value);
		localStorage.setItem('folded', `${value}`);
	};

	return {folded, setFolded: handleFold};
};
