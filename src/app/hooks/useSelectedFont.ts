import React, {useContext, useEffect} from 'react';
import {loadGoogleFont} from '../utils/loadFont';
import {FontContext} from '../../context/FontContext';
import {useSearchParams} from 'next/navigation';

export const useSelectedFont = () => {
	const {selectedFont, setSelectedFont} = useContext(FontContext);
	const searchParams = useSearchParams();

	useEffect(() => {
		const queryFont = searchParams?.get('fontFamily');
		const storedFont = sessionStorage.getItem('selectedFont');
		const defaultFont = 'Noto Sans';
		let fontToLoad: string;

		if (queryFont) {
			fontToLoad = queryFont;
		} else if (storedFont) {
			fontToLoad = storedFont;
		} else {
			fontToLoad = defaultFont;
		}

		setSelectedFont(fontToLoad);
		loadGoogleFont(fontToLoad);
	}, [selectedFont]);

	const handleSetSelectedFont = (font: string) => {
		setSelectedFont(font);
		if (font) {
			sessionStorage.setItem('selectedFont', font);
		}
	};

	return {selectedFont, handleSetSelectedFont};
};
