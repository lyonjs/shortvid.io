'use client';

import {staticFile} from 'remotion';
import Image from 'next/image';
import {useSelectedTheme} from './hooks/useSelectedTheme';

export const PoweredByVercel = () => {
	const {themeName} = useSelectedTheme();

	return (
		<Image
			alt="Vercel"
			width="200"
			height="100"
			src={staticFile(`/images/app/powered-by-vercel-${themeName}.svg`)}
		/>
	);
};
