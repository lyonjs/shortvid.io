import React, {useContext, useEffect} from 'react';
import {loadGoogleFont} from '../utils/loadFont';
import {FontContext} from '../../context/FontContext';
import {useSearchParams} from 'next/navigation';

export const useSelectedFont = () => {
	const {selectedFont, setSelectedFont} = useContext(FontContext);
	const searchParams = useSearchParams();

	useEffect(() => {
		const queryFont = searchParams.get('fontFamily');
		const storedFont = sessionStorage.getItem('selectedFont');

		if (queryFont) {
			setSelectedFont(queryFont);
			loadGoogleFont(queryFont);
		} else if (storedFont) {
			setSelectedFont(storedFont);
			loadGoogleFont(storedFont);
		} else {
			setSelectedFont('Noto Sans');
			loadGoogleFont('Noto Sans');
		}
	}, [selectedFont]);

	const handleSetSelectedFont = (font: string) => {
		setSelectedFont(font);
		if (font) {
			sessionStorage.setItem('selectedFont', font);
		}
	};

	return {selectedFont, handleSetSelectedFont};
};
