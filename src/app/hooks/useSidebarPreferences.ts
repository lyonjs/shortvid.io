import {useEffect, useState} from 'react';

export const useSidebarPreferences = () => {
	const [folded, setFolded] = useState<boolean>(false);

	useEffect(() => {
		const foldedPreferenciesString = localStorage.getItem('folded');
		const foldedPreferencies =
			foldedPreferenciesString === 'true' ? true : false;
		foldedPreferencies && setFolded(foldedPreferencies);
	}, []);

	const handleFold = (value: boolean) => {
		setFolded(value);
		localStorage.setItem('folded', `${value}`);
	};

	return {folded, setFolded: handleFold};
};
